package expo.modules.weshnetexpo

import android.Manifest
import android.bluetooth.BluetoothAdapter
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import android.os.Build
import android.telephony.TelephonyManager
import android.util.Log
import androidx.core.app.ActivityCompat
import network.weshnet.core.ConnectivityInfo
import network.weshnet.core.Core
import network.weshnet.core.IConnectivityDriver
import network.weshnet.core.IConnectivityHandler

class ConnectivityDriver(context: Context) : BroadcastReceiver(), IConnectivityDriver {
    private val mHandlers: ArrayList<IConnectivityHandler?>
    private var mCurrentState: ConnectivityInfo? = null

    init {
        Log.d(TAG, "Init")
        mHandlers = ArrayList<IConnectivityHandler?>()
        updateState(context)
    }

    private fun getState(context: Context): ConnectivityInfo {
        val state = ConnectivityInfo()
        val manager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val network = manager.activeNetwork
        state.bluetooth = bluetoothState
        if (network == null) {
            state.state = Core.ConnectivityStateOff
            return state
        }
        val capabilities = manager.getNetworkCapabilities(network)
        state.state = Core.ConnectivityStateOn
        state.metering = if (capabilities!!.hasCapability(NetworkCapabilities.NET_CAPABILITY_NOT_METERED)) Core.ConnectivityStateOff else Core.ConnectivityStateOn
        if (capabilities.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET)) {
            state.netType = Core.ConnectivityNetEthernet
        } else if (capabilities.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)) {
            state.netType = Core.ConnectivityNetWifi
        } else if (capabilities.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR)) {
            state.netType = Core.ConnectivityNetCellular
            state.cellularType = getCellularType(context)
        }
        return state
    }

    private fun updateState(context: Context) {
        mCurrentState = getState(context)
        for (handler in mHandlers) {
            handler!!.handleConnectivityUpdate(mCurrentState)
        }
    }

    override fun onReceive(context: Context, intent: Intent) {
        Log.d(TAG, "Network state changed")
        updateState(context)
    }

    override fun getCurrentState(): ConnectivityInfo {
        return mCurrentState!!
    }

    override fun registerHandler(handler: IConnectivityHandler) {
        mHandlers.add(handler)
    }

    companion object {
        private const val TAG = "ConnectivityDriver"
        private fun getCellularType(context: Context): Long {
            val tm = context.getSystemService(Context.TELEPHONY_SERVICE) as TelephonyManager
            if (ActivityCompat.checkSelfPermission(context, Manifest.permission.READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED) {
                Log.e(TAG, "Getting cellular type: permission denied")
                return Core.ConnectivityCellularUnknown
            }
            val netType: Int = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                tm.dataNetworkType
            } else {
                tm.networkType
            }
            return when (netType) {
                TelephonyManager.NETWORK_TYPE_GPRS, TelephonyManager.NETWORK_TYPE_EDGE, TelephonyManager.NETWORK_TYPE_CDMA, TelephonyManager.NETWORK_TYPE_1xRTT, TelephonyManager.NETWORK_TYPE_IDEN, TelephonyManager.NETWORK_TYPE_GSM -> Core.ConnectivityCellular2G
                TelephonyManager.NETWORK_TYPE_UMTS, TelephonyManager.NETWORK_TYPE_EVDO_0, TelephonyManager.NETWORK_TYPE_EVDO_A, TelephonyManager.NETWORK_TYPE_HSDPA, TelephonyManager.NETWORK_TYPE_HSUPA, TelephonyManager.NETWORK_TYPE_HSPA, TelephonyManager.NETWORK_TYPE_EVDO_B, TelephonyManager.NETWORK_TYPE_EHRPD, TelephonyManager.NETWORK_TYPE_HSPAP, TelephonyManager.NETWORK_TYPE_TD_SCDMA -> Core.ConnectivityCellular3G
                TelephonyManager.NETWORK_TYPE_LTE, TelephonyManager.NETWORK_TYPE_IWLAN, 19 -> Core.ConnectivityCellular4G
                TelephonyManager.NETWORK_TYPE_NR -> Core.ConnectivityCellular5G
                else -> Core.ConnectivityCellularUnknown
            }
        }

        private val bluetoothState: Long
            private get() {
                val bluetooth = BluetoothAdapter.getDefaultAdapter()
                return if (bluetooth == null || !bluetooth.isEnabled) {
                    Core.ConnectivityStateOff
                } else when (bluetooth.state) {
                    BluetoothAdapter.STATE_ON -> Core.ConnectivityStateOn
                    BluetoothAdapter.STATE_OFF -> Core.ConnectivityStateOff
                    else -> Core.ConnectivityStateUnknown
                }
            }
    }
}
