package expo.modules.weshnetexpo

import android.content.Context
import android.net.wifi.WifiManager
import android.net.wifi.WifiManager.MulticastLock
import network.weshnet.core.NativeMDNSLockerDriver

class MDNSLockerDriver(private val context: Context) : NativeMDNSLockerDriver {
    private lateinit var multicastLock: MulticastLock
    override fun lock() {
        val wifi = context.applicationContext?.getSystemService(Context.WIFI_SERVICE) as WifiManager
        multicastLock = wifi.createMulticastLock("WeshnetMDNSLock")
        multicastLock.setReferenceCounted(true)
        multicastLock.acquire()
    }

    override fun unlock() {
        if (multicastLock != null) {
            multicastLock!!.release()
            multicastLock
        }
    }
}
