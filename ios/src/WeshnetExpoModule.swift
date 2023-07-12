import ExpoModulesCore
import WeshnetCore

// Define specific errors for core initialization.
enum WeshnetCoreInitializationError: Error {
    case initializationFailed
}

// Redefine WeshnetError with more context.
enum WeshnetError: Error {
    case alreadyStarted
    case notStarted
    case coreError(NSError)
    
    var description: String {
        switch self {
        case .alreadyStarted:
            return "Service has already started"
        case .notStarted:
            return "Service hasn't started yet"
        case .coreError(let error):
            return error.localizedDescription
        }
    }
}

public class WeshnetExpoModule: Module {
    var service: WeshnetCoreService?
    
    public func definition() -> ModuleDefinition {
        Name("WeshnetExpo")

        AsyncFunction("init") { (promise: Promise) in
            do {
                if self.service != nil {
                    throw WeshnetError.alreadyStarted
                }
                
                try self.initializeCoreService(promise: promise)
            } catch let err {
                promise.reject(err)
            }
        }
        
        AsyncFunction("invokeMethod") { (method: String, b64message: String, promise: Promise) in
            do {
                guard let service = self.service else {
                    throw WeshnetError.notStarted
                }
                
                let block = PromiseBlock(promise: promise)
                service.invokeBridgeMethod(with: block, method: method, b64message: b64message)
            } catch let err {
                promise.reject(err)
            }
        }
    }
    
    private func initializeCoreService(promise: Promise) throws {
        var err: NSError?
        
        guard case self.service = WeshnetCoreNewService(&err) else {
            throw WeshnetError.coreError(err!)
        }
        
        promise.resolve()
    }
}

