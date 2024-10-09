package expo.modules.weshnetexpo

import android.util.Log
import network.weshnet.core.Core
import network.weshnet.core.NativeNetDriver
import network.weshnet.core.NetAddrs
import network.weshnet.core.NetInterface
import network.weshnet.core.NetInterfaces
import java.net.NetworkInterface
import java.util.Collections

class NetDriver : NativeNetDriver {
    @Throws(Exception::class)
    override fun interfaceAddrs(): NetAddrs {
        val netaddrs = NetAddrs()
        for (nif in Collections.list<NetworkInterface>(NetworkInterface.getNetworkInterfaces())) {
            try {
                for (ia in nif.interfaceAddresses) {
                    val parts = ia.toString().split("/".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()
                    if (parts.size > 1) {
                        netaddrs.appendAddr(parts[1])
                    }
                }
            } catch (ignored: Exception) {
            }
        }

        return netaddrs
    }

    @Throws(Exception::class)
    override fun interfaces(): NetInterfaces {
        val ifaces = NetInterfaces()
        for (nif in Collections.list<NetworkInterface>(NetworkInterface.getNetworkInterfaces())) {
            val iface = NetInterface()
            try {
                iface.copyHardwareAddr(nif.hardwareAddress)
            } catch (ignored: Exception) {
            }
            iface.index = nif.index.toLong()
            iface.mtu = nif.mtu.toLong()
            iface.name = nif.name
            if (nif.isLoopback) {
                iface.addFlag(Core.NetFlagLoopback)
            }
            if (nif.isPointToPoint) {
                iface.addFlag(Core.NetFlagPointToPoint)
            }
            if (nif.isUp) {
                iface.addFlag(Core.NetFlagUp)
            }
            if (nif.isVirtual) {
                // iface.addFlag(Net);
            }
            if (nif.supportsMulticast()) {
                iface.addFlag(Core.NetFlagMulticast)
            }
            ifaces.append(iface)
        }

        return ifaces
    }
}
