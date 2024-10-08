package expo.modules.weshnetexpo

import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.CodedException
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import network.weshnet.core.Service
import network.weshnet.core.Core

class WeshnetExpoModule : Module() {
    private var service: Service? = null

    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    override fun definition() = ModuleDefinition {
        Name("WeshnetExpo")

        AsyncFunction("init") { promise: Promise ->
            try {
                if (service == null) {
                    service = initializeCoreService()
                }
                promise.resolve("")
            } catch (err: CodedException) {
                promise.reject(err)
            }
        }

        // Defines a JavaScript function that always returns a Promise and whose native code
        // is by default dispatched on a different thread than the JavaScript runtime runs on.
        AsyncFunction("invokeMethod") { method: String, b64message: String, promise: Promise ->
            try {
                service?.let {
                    val block = PromiseBlock(promise)
                    it.invokeBridgeMethodWithPromiseBlock(block, method, b64message)
                } ?: run {
                    throw WeshnetNotStartedError()
                }
            } catch (err: CodedException) {
                promise.reject(err)
            }
        }
    }

    @Throws(CodedException::class)
    private fun initializeCoreService(): Service {
        // Add logic to create and return your service instance
        // If an error occurs, throw WeshnetError2.kt
        try {
            return Core.newService()
        } catch (err: Exception) {
            throw err
        }
    }
}
