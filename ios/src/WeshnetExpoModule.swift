import ExpoModulesCore
import WeshnetCore

// Redefine WeshnetError with more context.
open class WeshnetError: Exception {
    public enum ErrorCase {
        case notStarted
        case coreError(NSError)
    }

    private var errorDescription: String

    public init(_ error: ErrorCase, file: String = #fileID, line: UInt = #line, function: String = #function) {
        switch error {
        case .notStarted:
            self.errorDescription = "Service hasn't started yet"
        case .coreError(let error):
            self.errorDescription = error.localizedDescription
        }
        super.init(file: file, line: line, function: function)
    }

    open override var reason: String {
        return self.errorDescription
    }
}

public class WeshnetExpoModule: Module {
    var service: WeshnetCoreService?

    public func definition() -> ModuleDefinition {
        Name("WeshnetExpo")

        AsyncFunction("init") { (promise: Promise) in
            do {
                if self.service == nil {
                    self.service = try self.initializeCoreService()
                }

                promise.resolve()
            } catch let err {
                promise.reject(err)
            }
        }

        AsyncFunction("invokeMethod") { (method: String, b64message: String, promise: Promise) in
            do {
                guard let service = self.service else {
                    throw WeshnetError(.notStarted)
                }

                let block = PromiseBlock(promise: promise)
                service.invokeBridgeMethod(with: block, method: method, b64message: b64message)
            } catch let err {
                promise.reject(err)
            }
        }
    }

    private func initializeCoreService() throws -> WeshnetCoreService {
        var err: NSError?

        guard let service = WeshnetCoreNewService(&err) else {
            throw WeshnetError(.coreError(err!))
        }

        return service
    }
}
