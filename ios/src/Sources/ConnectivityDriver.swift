//
//  ConnectivityDriver.swift
//  Berty
//
//  Created by u on 01/02/2023.
//

import SystemConfiguration
import CoreBluetooth
import CoreTelephony
import Foundation
import WeshnetCore
import Network

class ConnectivityDriver: NSObject, WeshnetCoreIConnectivityDriverProtocol, CBCentralManagerDelegate {
    let queue = DispatchQueue.global(qos: .background)
    let pathMonitor = NWPathMonitor()
    var centralManager: CBCentralManager!

    var state: WeshnetCoreConnectivityInfo
    var handlers: [WeshnetCoreIConnectivityHandlerProtocol] = []

    override init() {
        self.state = WeshnetCoreConnectivityInfo()!

        super.init()
      
        self.centralManager = CBCentralManager(delegate: self, queue: nil)

        self.pathMonitor.pathUpdateHandler = { [weak self] path in
            self!.updateNetworkState(path)

            for handler in self!.handlers {
                handler.handleConnectivityUpdate(self!.state)
            }
        }
        self.pathMonitor.start(queue: self.queue)
    }

    func updateNetworkState(_ info: NWPath) {
        self.state.setState(info.status == .satisfied ? WeshnetCoreConnectivityStateOn : WeshnetCoreConnectivityStateOff)
        self.state.setMetering(WeshnetCoreConnectivityStateUnknown)
        self.state.setNetType(WeshnetCoreConnectivityNetUnknown)
        self.state.setCellularType(WeshnetCoreConnectivityCellularUnknown)

        if info.status != .satisfied {
            return
        }

        if #available(iOS 13.0, *) {
            self.state.setMetering(info.isConstrained ? WeshnetCoreConnectivityStateOn : WeshnetCoreConnectivityStateOff)
        }

        if let interface = self.pathMonitor.currentPath.availableInterfaces.first {
            switch interface.type {
                case .wifi:
                    self.state.setNetType(WeshnetCoreConnectivityNetWifi)
                case .cellular:
                    self.state.setNetType(WeshnetCoreConnectivityNetCellular)
                    self.state.setCellularType(ConnectivityDriver.getCellularType())
                case .wiredEthernet:
                    self.state.setNetType(WeshnetCoreConnectivityNetEthernet)
                default:
                    self.state.setNetType(WeshnetCoreConnectivityNetUnknown)
            }
        }
    }
  
    static func getCellularType() -> Int {
        let networkInfo = CTTelephonyNetworkInfo()

        guard let carrierType = networkInfo.serviceCurrentRadioAccessTechnology?.first?.value else {
            return WeshnetCoreConnectivityCellularNone
        }

        switch carrierType {
            case CTRadioAccessTechnologyGPRS,
                 CTRadioAccessTechnologyEdge,
                 CTRadioAccessTechnologyCDMA1x:
                return WeshnetCoreConnectivityCellular2G
            case CTRadioAccessTechnologyWCDMA,
                 CTRadioAccessTechnologyHSDPA,
                 CTRadioAccessTechnologyHSUPA,
                 CTRadioAccessTechnologyCDMAEVDORev0,
                 CTRadioAccessTechnologyCDMAEVDORevA,
                 CTRadioAccessTechnologyCDMAEVDORevB,
                 CTRadioAccessTechnologyeHRPD:
                return WeshnetCoreConnectivityCellular3G
            case CTRadioAccessTechnologyLTE:
                return WeshnetCoreConnectivityCellular4G
            default:
                if #available(iOS 14.1, *) {
                    if carrierType == CTRadioAccessTechnologyNRNSA
                    || carrierType == CTRadioAccessTechnologyNR {
                        return WeshnetCoreConnectivityCellular5G
                    }
                }

                return WeshnetCoreConnectivityCellularUnknown
        }
    }

    func centralManagerDidUpdateState(_ central: CBCentralManager) {
        switch central.state {
            case .poweredOn:
                self.state.setBluetooth(WeshnetCoreConnectivityStateOn)
            case .poweredOff,
                 .unsupported,
                 .unauthorized,
                 .resetting:
                self.state.setBluetooth(WeshnetCoreConnectivityStateOff)
            case .unknown:
                self.state.setBluetooth(WeshnetCoreConnectivityStateUnknown)
            @unknown default:
                self.state.setBluetooth(WeshnetCoreConnectivityStateUnknown)
        }

        for handler in self.handlers {
            handler.handleConnectivityUpdate(self.state)
        }
    }

    public func getCurrentState() -> WeshnetCoreConnectivityInfo? {
        return self.state
    }

    public func register(_ handler: WeshnetCoreIConnectivityHandlerProtocol?) {
        if (handler != nil) {
            self.handlers.append(handler!)
        }
    }
}
