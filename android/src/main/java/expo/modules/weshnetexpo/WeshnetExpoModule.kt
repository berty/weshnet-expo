package expo.modules.weshnetexpo

import android.bluetooth.BluetoothAdapter
import android.content.Context
import android.content.IntentFilter
import android.net.ConnectivityManager
import android.os.Build
import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.CodedException
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import network.weshnet.core.BridgeConfig
import network.weshnet.core.Core
import network.weshnet.core.Service
import java.io.File


class WeshnetExpoModule : Module() {
    private var context: Context? = null
    private var service: Service? = null
    private var rootDir: File? = null

    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    override fun definition() = ModuleDefinition {
        Name("WeshnetExpo")

        OnCreate {
            context = appContext.reactContext
            rootDir = context!!.filesDir
        }

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
            val config: BridgeConfig = Core.newBridgeConfig() ?: throw Exception("")

            config.rootDir = rootDir!!.absolutePath

            // set net driver
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                val inet = NetDriver()
                config.netDriver = inet
            }

            // set mdns locker driver
            config.mdnsLockerDriver = MDNSLockerDriver(context!!)

            // set connectivity driver
            val connectivityDriver = ConnectivityDriver(context!!)
            context!!.registerReceiver(connectivityDriver, IntentFilter(ConnectivityManager.CONNECTIVITY_ACTION))
            config.connectivityDriver = connectivityDriver

            return Core.newService(config)
        } catch (err: Exception) {
            throw err
        }
    }
}
