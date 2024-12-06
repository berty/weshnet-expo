import ExpoModulesCore
import WeshnetCore

public class WeshnetExpoModule: Module {
    var service: WeshnetCoreService?
    var appRootDir: String?
    var connectivityDriver: ConnectivityDriver?


    public func definition() -> ModuleDefinition {
        Name("WeshnetExpo")
        
        OnCreate {
          do {
            self.appRootDir = try FileManager.default.url(for: .documentDirectory, in: .userDomainMask, appropriateFor: nil, create: true).path
            self.connectivityDriver = ConnectivityDriver()
          } catch let error as NSError {
              NSLog("Error creating app root directory: \(error.localizedDescription)")
          }
        }

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

        guard let config = WeshnetCoreBridgeConfig() else {
          throw WeshnetError(.createConfig)
        }
        config.rootDir = self.appRootDir!
        
        config.connectivityDriver = self.connectivityDriver

        guard let service = WeshnetCoreNewService(config, &err) else {
            throw WeshnetError(.coreError(err!))
        }

        return service
    }
}
