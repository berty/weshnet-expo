/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light.js";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  weshnet: {
    nested: {
      protocol: {
        nested: {
          v1: {
            options: {
              go_package: "berty.tech/weshnet/pkg/protocoltypes",
              "(gogoproto.goproto_enum_prefix_all)": false,
              "(gogoproto.marshaler_all)": true,
              "(gogoproto.unmarshaler_all)": true,
              "(gogoproto.sizer_all)": true
            },
            nested: {
              ProtocolService: {
                methods: {
                  ServiceExportData: {
                    requestType: "ServiceExportData.Request",
                    responseType: "ServiceExportData.Reply",
                    responseStream: true
                  },
                  ServiceGetConfiguration: {
                    requestType: "ServiceGetConfiguration.Request",
                    responseType: "ServiceGetConfiguration.Reply"
                  },
                  ContactRequestReference: {
                    requestType: "ContactRequestReference.Request",
                    responseType: "ContactRequestReference.Reply"
                  },
                  ContactRequestDisable: {
                    requestType: "ContactRequestDisable.Request",
                    responseType: "ContactRequestDisable.Reply"
                  },
                  ContactRequestEnable: {
                    requestType: "ContactRequestEnable.Request",
                    responseType: "ContactRequestEnable.Reply"
                  },
                  ContactRequestResetReference: {
                    requestType: "ContactRequestResetReference.Request",
                    responseType: "ContactRequestResetReference.Reply"
                  },
                  ContactRequestSend: {
                    requestType: "ContactRequestSend.Request",
                    responseType: "ContactRequestSend.Reply"
                  },
                  ContactRequestAccept: {
                    requestType: "ContactRequestAccept.Request",
                    responseType: "ContactRequestAccept.Reply"
                  },
                  ContactRequestDiscard: {
                    requestType: "ContactRequestDiscard.Request",
                    responseType: "ContactRequestDiscard.Reply"
                  },
                  ShareContact: {
                    requestType: "ShareContact.Request",
                    responseType: "ShareContact.Reply"
                  },
                  DecodeContact: {
                    requestType: "DecodeContact.Request",
                    responseType: "DecodeContact.Reply"
                  },
                  ContactBlock: {
                    requestType: "ContactBlock.Request",
                    responseType: "ContactBlock.Reply"
                  },
                  ContactUnblock: {
                    requestType: "ContactUnblock.Request",
                    responseType: "ContactUnblock.Reply"
                  },
                  ContactAliasKeySend: {
                    requestType: "ContactAliasKeySend.Request",
                    responseType: "ContactAliasKeySend.Reply"
                  },
                  MultiMemberGroupCreate: {
                    requestType: "MultiMemberGroupCreate.Request",
                    responseType: "MultiMemberGroupCreate.Reply"
                  },
                  MultiMemberGroupJoin: {
                    requestType: "MultiMemberGroupJoin.Request",
                    responseType: "MultiMemberGroupJoin.Reply"
                  },
                  MultiMemberGroupLeave: {
                    requestType: "MultiMemberGroupLeave.Request",
                    responseType: "MultiMemberGroupLeave.Reply"
                  },
                  MultiMemberGroupAliasResolverDisclose: {
                    requestType: "MultiMemberGroupAliasResolverDisclose.Request",
                    responseType: "MultiMemberGroupAliasResolverDisclose.Reply"
                  },
                  MultiMemberGroupAdminRoleGrant: {
                    requestType: "MultiMemberGroupAdminRoleGrant.Request",
                    responseType: "MultiMemberGroupAdminRoleGrant.Reply"
                  },
                  MultiMemberGroupInvitationCreate: {
                    requestType: "MultiMemberGroupInvitationCreate.Request",
                    responseType: "MultiMemberGroupInvitationCreate.Reply"
                  },
                  AppMetadataSend: {
                    requestType: "AppMetadataSend.Request",
                    responseType: "AppMetadataSend.Reply"
                  },
                  AppMessageSend: {
                    requestType: "AppMessageSend.Request",
                    responseType: "AppMessageSend.Reply"
                  },
                  GroupMetadataList: {
                    requestType: "GroupMetadataList.Request",
                    responseType: "GroupMetadataEvent",
                    responseStream: true
                  },
                  GroupMessageList: {
                    requestType: "GroupMessageList.Request",
                    responseType: "GroupMessageEvent",
                    responseStream: true
                  },
                  GroupInfo: {
                    requestType: "GroupInfo.Request",
                    responseType: "GroupInfo.Reply"
                  },
                  ActivateGroup: {
                    requestType: "ActivateGroup.Request",
                    responseType: "ActivateGroup.Reply"
                  },
                  DeactivateGroup: {
                    requestType: "DeactivateGroup.Request",
                    responseType: "DeactivateGroup.Reply"
                  },
                  GroupDeviceStatus: {
                    requestType: "GroupDeviceStatus.Request",
                    responseType: "GroupDeviceStatus.Reply",
                    responseStream: true
                  },
                  DebugListGroups: {
                    requestType: "DebugListGroups.Request",
                    responseType: "DebugListGroups.Reply",
                    responseStream: true
                  },
                  DebugInspectGroupStore: {
                    requestType: "DebugInspectGroupStore.Request",
                    responseType: "DebugInspectGroupStore.Reply",
                    responseStream: true
                  },
                  DebugGroup: {
                    requestType: "DebugGroup.Request",
                    responseType: "DebugGroup.Reply"
                  },
                  DebugAuthServiceSetToken: {
                    requestType: "DebugAuthServiceSetToken.Request",
                    responseType: "DebugAuthServiceSetToken.Reply"
                  },
                  SystemInfo: {
                    requestType: "SystemInfo.Request",
                    responseType: "SystemInfo.Reply"
                  },
                  AuthServiceInitFlow: {
                    requestType: "AuthServiceInitFlow.Request",
                    responseType: "AuthServiceInitFlow.Reply"
                  },
                  AuthServiceCompleteFlow: {
                    requestType: "AuthServiceCompleteFlow.Request",
                    responseType: "AuthServiceCompleteFlow.Reply"
                  },
                  CredentialVerificationServiceInitFlow: {
                    requestType: "CredentialVerificationServiceInitFlow.Request",
                    responseType: "CredentialVerificationServiceInitFlow.Reply"
                  },
                  CredentialVerificationServiceCompleteFlow: {
                    requestType: "CredentialVerificationServiceCompleteFlow.Request",
                    responseType: "CredentialVerificationServiceCompleteFlow.Reply"
                  },
                  VerifiedCredentialsList: {
                    requestType: "VerifiedCredentialsList.Request",
                    responseType: "VerifiedCredentialsList.Reply",
                    responseStream: true
                  },
                  ServicesTokenList: {
                    requestType: "ServicesTokenList.Request",
                    responseType: "ServicesTokenList.Reply",
                    responseStream: true
                  },
                  ReplicationServiceRegisterGroup: {
                    requestType: "ReplicationServiceRegisterGroup.Request",
                    responseType: "ReplicationServiceRegisterGroup.Reply"
                  },
                  PeerList: {
                    requestType: "PeerList.Request",
                    responseType: "PeerList.Reply"
                  },
                  OutOfStoreReceive: {
                    requestType: "OutOfStoreReceive.Request",
                    responseType: "OutOfStoreReceive.Reply"
                  },
                  OutOfStoreSeal: {
                    requestType: "OutOfStoreSeal.Request",
                    responseType: "OutOfStoreSeal.Reply"
                  },
                  RefreshContactRequest: {
                    requestType: "RefreshContactRequest.Request",
                    responseType: "RefreshContactRequest.Reply"
                  }
                }
              },
              GroupType: {
                values: {
                  GroupTypeUndefined: 0,
                  GroupTypeAccount: 1,
                  GroupTypeContact: 2,
                  GroupTypeMultiMember: 3
                }
              },
              EventType: {
                values: {
                  EventTypeUndefined: 0,
                  EventTypeGroupMemberDeviceAdded: 1,
                  EventTypeGroupDeviceChainKeyAdded: 2,
                  EventTypeAccountGroupJoined: 101,
                  EventTypeAccountGroupLeft: 102,
                  EventTypeAccountContactRequestDisabled: 103,
                  EventTypeAccountContactRequestEnabled: 104,
                  EventTypeAccountContactRequestReferenceReset: 105,
                  EventTypeAccountContactRequestOutgoingEnqueued: 106,
                  EventTypeAccountContactRequestOutgoingSent: 107,
                  EventTypeAccountContactRequestIncomingReceived: 108,
                  EventTypeAccountContactRequestIncomingDiscarded: 109,
                  EventTypeAccountContactRequestIncomingAccepted: 110,
                  EventTypeAccountContactBlocked: 111,
                  EventTypeAccountContactUnblocked: 112,
                  EventTypeContactAliasKeyAdded: 201,
                  EventTypeMultiMemberGroupAliasResolverAdded: 301,
                  EventTypeMultiMemberGroupInitialMemberAnnounced: 302,
                  EventTypeMultiMemberGroupAdminRoleGranted: 303,
                  EventTypeAccountServiceTokenAdded: 401,
                  EventTypeAccountServiceTokenRemoved: 402,
                  EventTypeGroupReplicating: 403,
                  EventTypePushMemberTokenUpdate: 404,
                  EventTypePushDeviceTokenRegistered: 405,
                  EventTypePushDeviceServerRegistered: 406,
                  EventTypeAccountVerifiedCredentialRegistered: 500,
                  EventTypeGroupMetadataPayloadSent: 1001
                }
              },
              Account: {
                fields: {
                  group: {
                    type: "Group",
                    id: 1
                  },
                  accountPrivateKey: {
                    type: "bytes",
                    id: 2
                  },
                  aliasPrivateKey: {
                    type: "bytes",
                    id: 3
                  },
                  publicRendezvousSeed: {
                    type: "bytes",
                    id: 4
                  }
                }
              },
              Group: {
                fields: {
                  publicKey: {
                    type: "bytes",
                    id: 1
                  },
                  secret: {
                    type: "bytes",
                    id: 2
                  },
                  secretSig: {
                    type: "bytes",
                    id: 3
                  },
                  groupType: {
                    type: "GroupType",
                    id: 4
                  },
                  signPub: {
                    type: "bytes",
                    id: 5
                  },
                  linkKey: {
                    type: "bytes",
                    id: 6
                  },
                  linkKeySig: {
                    type: "bytes",
                    id: 7
                  }
                }
              },
              GroupHeadsExport: {
                fields: {
                  publicKey: {
                    type: "bytes",
                    id: 1
                  },
                  signPub: {
                    type: "bytes",
                    id: 2
                  },
                  metadataHeadsCids: {
                    rule: "repeated",
                    type: "bytes",
                    id: 3,
                    options: {
                      "(gogoproto.customname)": "MetadataHeadsCIDs"
                    }
                  },
                  messagesHeadsCids: {
                    rule: "repeated",
                    type: "bytes",
                    id: 4,
                    options: {
                      "(gogoproto.customname)": "MessagesHeadsCIDs"
                    }
                  },
                  linkKey: {
                    type: "bytes",
                    id: 5
                  }
                }
              },
              GroupMetadata: {
                fields: {
                  eventType: {
                    type: "EventType",
                    id: 1
                  },
                  payload: {
                    type: "bytes",
                    id: 2
                  },
                  sig: {
                    type: "bytes",
                    id: 3
                  },
                  protocolMetadata: {
                    type: "ProtocolMetadata",
                    id: 4
                  }
                }
              },
              GroupEnvelope: {
                fields: {
                  nonce: {
                    type: "bytes",
                    id: 1
                  },
                  event: {
                    type: "bytes",
                    id: 2
                  }
                },
                reserved: [
                  [
                    3,
                    3
                  ]
                ]
              },
              MessageHeaders: {
                fields: {
                  counter: {
                    type: "uint64",
                    id: 1
                  },
                  devicePk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  sig: {
                    type: "bytes",
                    id: 3
                  },
                  metadata: {
                    keyType: "string",
                    type: "string",
                    id: 4
                  }
                }
              },
              ProtocolMetadata: {
                fields: {},
                reserved: [
                  [
                    1,
                    1
                  ]
                ]
              },
              EncryptedMessage: {
                fields: {
                  plaintext: {
                    type: "bytes",
                    id: 1
                  },
                  protocolMetadata: {
                    type: "ProtocolMetadata",
                    id: 2
                  }
                }
              },
              MessageEnvelope: {
                fields: {
                  messageHeaders: {
                    type: "bytes",
                    id: 1
                  },
                  message: {
                    type: "bytes",
                    id: 2
                  },
                  nonce: {
                    type: "bytes",
                    id: 3
                  }
                },
                reserved: [
                  [
                    4,
                    4
                  ]
                ]
              },
              EventContext: {
                fields: {
                  id: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "ID"
                    }
                  },
                  parentIds: {
                    rule: "repeated",
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "ParentIDs"
                    }
                  },
                  groupPk: {
                    type: "bytes",
                    id: 3,
                    options: {
                      "(gogoproto.customname)": "GroupPK"
                    }
                  }
                },
                reserved: [
                  [
                    4,
                    4
                  ]
                ]
              },
              GroupMetadataPayloadSent: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  message: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              ContactAliasKeyAdded: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  aliasPk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "AliasPK"
                    }
                  }
                }
              },
              GroupMemberDeviceAdded: {
                fields: {
                  memberPk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "MemberPK"
                    }
                  },
                  devicePk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  memberSig: {
                    type: "bytes",
                    id: 3
                  }
                }
              },
              DeviceChainKey: {
                fields: {
                  chainKey: {
                    type: "bytes",
                    id: 1
                  },
                  counter: {
                    type: "uint64",
                    id: 2
                  }
                }
              },
              GroupDeviceChainKeyAdded: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  destMemberPk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "DestMemberPK"
                    }
                  },
                  payload: {
                    type: "bytes",
                    id: 3
                  }
                }
              },
              MultiMemberGroupAliasResolverAdded: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  aliasResolver: {
                    type: "bytes",
                    id: 2
                  },
                  aliasProof: {
                    type: "bytes",
                    id: 3
                  }
                }
              },
              MultiMemberGroupAdminRoleGranted: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  granteeMemberPk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "GranteeMemberPK"
                    }
                  }
                }
              },
              MultiMemberGroupInitialMemberAnnounced: {
                fields: {
                  memberPk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "MemberPK"
                    }
                  }
                }
              },
              GroupAddAdditionalRendezvousSeed: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  seed: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              GroupRemoveAdditionalRendezvousSeed: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  seed: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              AccountGroupJoined: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  group: {
                    type: "Group",
                    id: 2
                  }
                }
              },
              AccountGroupLeft: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  groupPk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "GroupPK"
                    }
                  }
                }
              },
              AccountContactRequestDisabled: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  }
                }
              },
              AccountContactRequestEnabled: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  }
                }
              },
              AccountContactRequestReferenceReset: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  publicRendezvousSeed: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              AccountContactRequestOutgoingEnqueued: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  groupPk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "GroupPK"
                    }
                  },
                  contact: {
                    type: "ShareableContact",
                    id: 3
                  },
                  ownMetadata: {
                    type: "bytes",
                    id: 4
                  }
                }
              },
              AccountContactRequestOutgoingSent: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "ContactPK"
                    }
                  }
                }
              },
              AccountContactRequestIncomingReceived: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "ContactPK"
                    }
                  },
                  contactRendezvousSeed: {
                    type: "bytes",
                    id: 3
                  },
                  contactMetadata: {
                    type: "bytes",
                    id: 4
                  }
                }
              },
              AccountContactRequestIncomingDiscarded: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "ContactPK"
                    }
                  }
                }
              },
              AccountContactRequestIncomingAccepted: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "ContactPK"
                    }
                  },
                  groupPk: {
                    type: "bytes",
                    id: 3,
                    options: {
                      "(gogoproto.customname)": "GroupPK"
                    }
                  }
                }
              },
              AccountContactBlocked: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "ContactPK"
                    }
                  }
                }
              },
              AccountContactUnblocked: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "ContactPK"
                    }
                  }
                }
              },
              AccountServiceTokenAdded: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  serviceToken: {
                    type: "ServiceToken",
                    id: 2
                  }
                }
              },
              AccountServiceTokenRemoved: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  tokenId: {
                    type: "string",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "TokenID"
                    }
                  }
                }
              },
              GroupReplicating: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  authenticationUrl: {
                    type: "string",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "AuthenticationURL"
                    }
                  },
                  replicationServer: {
                    type: "string",
                    id: 3
                  }
                }
              },
              ServiceExportData: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      exportedData: {
                        type: "bytes",
                        id: 1
                      }
                    }
                  }
                }
              },
              ServiceGetConfiguration: {
                fields: {},
                nested: {
                  SettingState: {
                    values: {
                      Unknown: 0,
                      Enabled: 1,
                      Disabled: 2,
                      Unavailable: 3
                    }
                  },
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      accountPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "AccountPK"
                        }
                      },
                      devicePk: {
                        type: "bytes",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "DevicePK"
                        }
                      },
                      accountGroupPk: {
                        type: "bytes",
                        id: 3,
                        options: {
                          "(gogoproto.customname)": "AccountGroupPK"
                        }
                      },
                      peerId: {
                        type: "string",
                        id: 4,
                        options: {
                          "(gogoproto.customname)": "PeerID"
                        }
                      },
                      listeners: {
                        rule: "repeated",
                        type: "string",
                        id: 5
                      },
                      bleEnabled: {
                        type: "SettingState",
                        id: 6
                      },
                      wifiP2pEnabled: {
                        type: "SettingState",
                        id: 7
                      },
                      mdnsEnabled: {
                        type: "SettingState",
                        id: 8
                      },
                      relayEnabled: {
                        type: "SettingState",
                        id: 9
                      },
                      devicePushToken: {
                        type: "PushServiceReceiver",
                        id: 10
                      },
                      devicePushServer: {
                        type: "PushServer",
                        id: 11
                      }
                    }
                  }
                }
              },
              ContactRequestReference: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      publicRendezvousSeed: {
                        type: "bytes",
                        id: 1
                      },
                      enabled: {
                        type: "bool",
                        id: 2
                      }
                    }
                  }
                }
              },
              ContactRequestDisable: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              ContactRequestEnable: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      publicRendezvousSeed: {
                        type: "bytes",
                        id: 1
                      }
                    }
                  }
                }
              },
              ContactRequestResetReference: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      publicRendezvousSeed: {
                        type: "bytes",
                        id: 1
                      }
                    }
                  }
                }
              },
              ContactRequestSend: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      contact: {
                        type: "ShareableContact",
                        id: 1
                      },
                      ownMetadata: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              ContactRequestAccept: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      contactPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "ContactPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              ContactRequestDiscard: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      contactPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "ContactPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              ShareContact: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      encodedContact: {
                        type: "bytes",
                        id: 1
                      }
                    }
                  }
                }
              },
              DecodeContact: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      encodedContact: {
                        type: "bytes",
                        id: 1
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      contact: {
                        type: "ShareableContact",
                        id: 1
                      }
                    }
                  }
                }
              },
              ContactBlock: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      contactPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "ContactPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              ContactUnblock: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      contactPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "ContactPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              ContactAliasKeySend: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              MultiMemberGroupCreate: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      }
                    }
                  }
                }
              },
              MultiMemberGroupJoin: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      group: {
                        type: "Group",
                        id: 1
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              MultiMemberGroupLeave: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              MultiMemberGroupAliasResolverDisclose: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              MultiMemberGroupAdminRoleGrant: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      },
                      memberPk: {
                        type: "bytes",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "MemberPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              MultiMemberGroupInvitationCreate: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      group: {
                        type: "Group",
                        id: 1
                      }
                    }
                  }
                }
              },
              AppMetadataSend: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      },
                      payload: {
                        type: "bytes",
                        id: 2
                      }
                    },
                    reserved: [
                      [
                        3,
                        3
                      ]
                    ]
                  },
                  Reply: {
                    fields: {
                      cid: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "CID"
                        }
                      }
                    }
                  }
                }
              },
              AppMessageSend: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      },
                      payload: {
                        type: "bytes",
                        id: 2
                      }
                    },
                    reserved: [
                      [
                        3,
                        3
                      ]
                    ]
                  },
                  Reply: {
                    fields: {
                      cid: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "CID"
                        }
                      }
                    }
                  }
                }
              },
              GroupMetadataEvent: {
                fields: {
                  eventContext: {
                    type: "EventContext",
                    id: 1
                  },
                  metadata: {
                    type: "GroupMetadata",
                    id: 2
                  },
                  event: {
                    type: "bytes",
                    id: 3
                  }
                }
              },
              GroupMessageEvent: {
                fields: {
                  eventContext: {
                    type: "EventContext",
                    id: 1
                  },
                  headers: {
                    type: "MessageHeaders",
                    id: 2
                  },
                  message: {
                    type: "bytes",
                    id: 3
                  }
                }
              },
              GroupMetadataList: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      },
                      sinceId: {
                        type: "bytes",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "SinceID"
                        }
                      },
                      sinceNow: {
                        type: "bool",
                        id: 3
                      },
                      untilId: {
                        type: "bytes",
                        id: 4,
                        options: {
                          "(gogoproto.customname)": "UntilID"
                        }
                      },
                      untilNow: {
                        type: "bool",
                        id: 5
                      },
                      reverseOrder: {
                        type: "bool",
                        id: 6
                      }
                    }
                  }
                }
              },
              GroupMessageList: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      },
                      sinceId: {
                        type: "bytes",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "SinceID"
                        }
                      },
                      sinceNow: {
                        type: "bool",
                        id: 3
                      },
                      untilId: {
                        type: "bytes",
                        id: 4,
                        options: {
                          "(gogoproto.customname)": "UntilID"
                        }
                      },
                      untilNow: {
                        type: "bool",
                        id: 5
                      },
                      reverseOrder: {
                        type: "bool",
                        id: 6
                      }
                    }
                  }
                }
              },
              GroupInfo: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      },
                      contactPk: {
                        type: "bytes",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "ContactPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      group: {
                        type: "Group",
                        id: 1
                      },
                      memberPk: {
                        type: "bytes",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "MemberPK"
                        }
                      },
                      devicePk: {
                        type: "bytes",
                        id: 3,
                        options: {
                          "(gogoproto.customname)": "DevicePK"
                        }
                      }
                    }
                  }
                }
              },
              ActivateGroup: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      },
                      localOnly: {
                        type: "bool",
                        id: 2
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              DeactivateGroup: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              GroupDeviceStatus: {
                fields: {},
                nested: {
                  Type: {
                    values: {
                      TypeUnknown: 0,
                      TypePeerDisconnected: 1,
                      TypePeerConnected: 2,
                      TypePeerReconnecting: 3
                    }
                  },
                  Transport: {
                    values: {
                      TptUnknown: 0,
                      TptLAN: 1,
                      TptWAN: 2,
                      TptProximity: 3
                    }
                  },
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      type: {
                        type: "Type",
                        id: 1
                      },
                      event: {
                        type: "bytes",
                        id: 2
                      }
                    },
                    nested: {
                      PeerConnected: {
                        fields: {
                          peerId: {
                            type: "string",
                            id: 1,
                            options: {
                              "(gogoproto.customname)": "PeerID"
                            }
                          },
                          devicePk: {
                            type: "bytes",
                            id: 2,
                            options: {
                              "(gogoproto.customname)": "DevicePK"
                            }
                          },
                          transports: {
                            rule: "repeated",
                            type: "Transport",
                            id: 3
                          },
                          maddrs: {
                            rule: "repeated",
                            type: "string",
                            id: 4
                          }
                        }
                      },
                      PeerReconnecting: {
                        fields: {
                          peerId: {
                            type: "string",
                            id: 1,
                            options: {
                              "(gogoproto.customname)": "PeerID"
                            }
                          }
                        }
                      },
                      PeerDisconnected: {
                        fields: {
                          peerId: {
                            type: "string",
                            id: 1,
                            options: {
                              "(gogoproto.customname)": "PeerID"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              DebugListGroups: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      },
                      groupType: {
                        type: "GroupType",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "GroupType"
                        }
                      },
                      contactPk: {
                        type: "bytes",
                        id: 3,
                        options: {
                          "(gogoproto.customname)": "ContactPK"
                        }
                      }
                    }
                  }
                }
              },
              DebugInspectGroupStore: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      },
                      logType: {
                        type: "DebugInspectGroupLogType",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "LogType"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      cid: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "CID"
                        }
                      },
                      parentCids: {
                        rule: "repeated",
                        type: "bytes",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "ParentCIDs"
                        }
                      },
                      metadataEventType: {
                        type: "EventType",
                        id: 3
                      },
                      devicePk: {
                        type: "bytes",
                        id: 4,
                        options: {
                          "(gogoproto.customname)": "DevicePK"
                        }
                      },
                      payload: {
                        type: "bytes",
                        id: 6
                      }
                    }
                  }
                }
              },
              DebugGroup: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      peerIds: {
                        rule: "repeated",
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "PeerIDs"
                        }
                      }
                    }
                  }
                }
              },
              AuthExchangeResponse: {
                fields: {
                  accessToken: {
                    type: "string",
                    id: 1
                  },
                  scope: {
                    type: "string",
                    id: 2
                  },
                  error: {
                    type: "string",
                    id: 3
                  },
                  errorDescription: {
                    type: "string",
                    id: 4
                  },
                  services: {
                    keyType: "string",
                    type: "string",
                    id: 5
                  }
                }
              },
              DebugAuthServiceSetToken: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      token: {
                        type: "AuthExchangeResponse",
                        id: 1
                      },
                      authenticationUrl: {
                        type: "string",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "AuthenticationURL"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              DebugInspectGroupLogType: {
                values: {
                  DebugInspectGroupLogTypeUndefined: 0,
                  DebugInspectGroupLogTypeMessage: 1,
                  DebugInspectGroupLogTypeMetadata: 2
                }
              },
              ContactState: {
                values: {
                  ContactStateUndefined: 0,
                  ContactStateToRequest: 1,
                  ContactStateReceived: 2,
                  ContactStateAdded: 3,
                  ContactStateRemoved: 4,
                  ContactStateDiscarded: 5,
                  ContactStateBlocked: 6
                }
              },
              ShareableContact: {
                fields: {
                  pk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "PK"
                    }
                  },
                  publicRendezvousSeed: {
                    type: "bytes",
                    id: 2
                  },
                  metadata: {
                    type: "bytes",
                    id: 3
                  }
                }
              },
              ServiceTokenSupportedService: {
                fields: {
                  serviceType: {
                    type: "string",
                    id: 1
                  },
                  serviceEndpoint: {
                    type: "string",
                    id: 2
                  }
                }
              },
              ServiceToken: {
                fields: {
                  token: {
                    type: "string",
                    id: 1
                  },
                  authenticationUrl: {
                    type: "string",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "AuthenticationURL"
                    }
                  },
                  supportedServices: {
                    rule: "repeated",
                    type: "ServiceTokenSupportedService",
                    id: 3
                  },
                  expiration: {
                    type: "int64",
                    id: 4
                  }
                }
              },
              AuthServiceCompleteFlow: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      callbackUrl: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "CallbackURL"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      tokenId: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "TokenID"
                        }
                      }
                    }
                  }
                }
              },
              AuthServiceInitFlow: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      authUrl: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "AuthURL"
                        }
                      },
                      services: {
                        rule: "repeated",
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      url: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "URL"
                        }
                      },
                      secureUrl: {
                        type: "bool",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "SecureURL"
                        }
                      }
                    }
                  }
                }
              },
              CredentialVerificationServiceInitFlow: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      serviceUrl: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "ServiceURL"
                        }
                      },
                      publicKey: {
                        type: "bytes",
                        id: 2
                      },
                      link: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      url: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "URL"
                        }
                      },
                      secureUrl: {
                        type: "bool",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "SecureURL"
                        }
                      }
                    }
                  }
                }
              },
              CredentialVerificationServiceCompleteFlow: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      callbackUri: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "CallbackURI"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      identifier: {
                        type: "string",
                        id: 1
                      }
                    }
                  }
                }
              },
              VerifiedCredentialsList: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      filterIdentifier: {
                        type: "string",
                        id: 1
                      },
                      filterIssuer: {
                        type: "string",
                        id: 2
                      },
                      excludeExpired: {
                        type: "bool",
                        id: 3
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      credential: {
                        type: "AccountVerifiedCredentialRegistered",
                        id: 1
                      }
                    }
                  }
                }
              },
              ServicesTokenList: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      tokenId: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "TokenID"
                        }
                      },
                      service: {
                        type: "ServiceToken",
                        id: 2
                      }
                    }
                  }
                }
              },
              ServicesTokenCode: {
                fields: {
                  services: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                  },
                  codeChallenge: {
                    type: "string",
                    id: 2
                  },
                  tokenId: {
                    type: "string",
                    id: 3,
                    options: {
                      "(gogoproto.customname)": "TokenID"
                    }
                  }
                }
              },
              ReplicationServiceRegisterGroup: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      tokenId: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "TokenID"
                        }
                      },
                      groupPk: {
                        type: "bytes",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "GroupPK"
                        }
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              ReplicationServiceReplicateGroup: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      group: {
                        type: "Group",
                        id: 1
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      ok: {
                        type: "bool",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "OK"
                        }
                      }
                    }
                  }
                }
              },
              SystemInfo: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      process: {
                        type: "Process",
                        id: 1
                      },
                      p2p: {
                        type: "P2P",
                        id: 2,
                        options: {
                          "(gogoproto.customname)": "P2P"
                        }
                      },
                      orbitdb: {
                        type: "OrbitDB",
                        id: 3,
                        options: {
                          "(gogoproto.customname)": "OrbitDB"
                        }
                      },
                      warns: {
                        rule: "repeated",
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  OrbitDB: {
                    fields: {
                      accountMetadata: {
                        type: "ReplicationStatus",
                        id: 1
                      }
                    },
                    nested: {
                      ReplicationStatus: {
                        fields: {
                          progress: {
                            type: "int64",
                            id: 1
                          },
                          maximum: {
                            type: "int64",
                            id: 2
                          },
                          buffered: {
                            type: "int64",
                            id: 3
                          },
                          queued: {
                            type: "int64",
                            id: 4
                          }
                        }
                      }
                    }
                  },
                  P2P: {
                    fields: {
                      connectedPeers: {
                        type: "int64",
                        id: 1
                      }
                    }
                  },
                  Process: {
                    fields: {
                      version: {
                        type: "string",
                        id: 1
                      },
                      vcsRef: {
                        type: "string",
                        id: 2
                      },
                      uptimeMs: {
                        type: "int64",
                        id: 3,
                        options: {
                          "(gogoproto.customname)": "UptimeMS"
                        }
                      },
                      userCpuTimeMs: {
                        type: "int64",
                        id: 10,
                        options: {
                          "(gogoproto.customname)": "UserCPUTimeMS"
                        }
                      },
                      systemCpuTimeMs: {
                        type: "int64",
                        id: 11,
                        options: {
                          "(gogoproto.customname)": "SystemCPUTimeMS"
                        }
                      },
                      startedAt: {
                        type: "int64",
                        id: 12
                      },
                      rlimitCur: {
                        type: "uint64",
                        id: 13
                      },
                      numGoroutine: {
                        type: "int64",
                        id: 14
                      },
                      nofile: {
                        type: "int64",
                        id: 15
                      },
                      tooManyOpenFiles: {
                        type: "bool",
                        id: 16
                      },
                      numCpu: {
                        type: "int64",
                        id: 17,
                        options: {
                          "(gogoproto.customname)": "NumCPU"
                        }
                      },
                      goVersion: {
                        type: "string",
                        id: 18
                      },
                      operatingSystem: {
                        type: "string",
                        id: 19
                      },
                      hostName: {
                        type: "string",
                        id: 20
                      },
                      arch: {
                        type: "string",
                        id: 21
                      },
                      rlimitMax: {
                        type: "uint64",
                        id: 22
                      },
                      pid: {
                        type: "int64",
                        id: 23,
                        options: {
                          "(gogoproto.customname)": "PID"
                        }
                      },
                      ppid: {
                        type: "int64",
                        id: 24,
                        options: {
                          "(gogoproto.customname)": "PPID"
                        }
                      },
                      priority: {
                        type: "int64",
                        id: 25
                      },
                      uid: {
                        type: "int64",
                        id: 26,
                        options: {
                          "(gogoproto.customname)": "UID"
                        }
                      },
                      workingDir: {
                        type: "string",
                        id: 27
                      },
                      systemUsername: {
                        type: "string",
                        id: 28
                      }
                    }
                  }
                }
              },
              PeerList: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      peers: {
                        rule: "repeated",
                        type: "Peer",
                        id: 1
                      }
                    }
                  },
                  Peer: {
                    fields: {
                      id: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "ID"
                        }
                      },
                      routes: {
                        rule: "repeated",
                        type: "Route",
                        id: 2
                      },
                      errors: {
                        rule: "repeated",
                        type: "string",
                        id: 3
                      },
                      features: {
                        rule: "repeated",
                        type: "Feature",
                        id: 4
                      },
                      minLatency: {
                        type: "int64",
                        id: 5
                      },
                      isActive: {
                        type: "bool",
                        id: 6
                      },
                      direction: {
                        type: "Direction",
                        id: 7
                      }
                    }
                  },
                  Route: {
                    fields: {
                      isActive: {
                        type: "bool",
                        id: 1
                      },
                      address: {
                        type: "string",
                        id: 2
                      },
                      direction: {
                        type: "Direction",
                        id: 3
                      },
                      latency: {
                        type: "int64",
                        id: 4
                      },
                      streams: {
                        rule: "repeated",
                        type: "Stream",
                        id: 5
                      }
                    }
                  },
                  Stream: {
                    fields: {
                      id: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "ID"
                        }
                      }
                    }
                  },
                  Feature: {
                    values: {
                      UnknownFeature: 0,
                      WeshFeature: 1,
                      BLEFeature: 2,
                      LocalFeature: 3,
                      TorFeature: 4,
                      QuicFeature: 5
                    }
                  }
                }
              },
              Direction: {
                values: {
                  UnknownDir: 0,
                  InboundDir: 1,
                  OutboundDir: 2,
                  BiDir: 3
                }
              },
              Progress: {
                fields: {
                  state: {
                    type: "string",
                    id: 1
                  },
                  doing: {
                    type: "string",
                    id: 2
                  },
                  progress: {
                    type: "float",
                    id: 3
                  },
                  completed: {
                    type: "uint64",
                    id: 4
                  },
                  total: {
                    type: "uint64",
                    id: 5
                  },
                  delay: {
                    type: "uint64",
                    id: 6
                  }
                }
              },
              MemberWithDevices: {
                fields: {
                  memberPk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "MemberPK"
                    }
                  },
                  devicesPks: {
                    rule: "repeated",
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "DevicePKs"
                    }
                  }
                }
              },
              OutOfStoreMessage: {
                fields: {
                  cid: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "CID"
                    }
                  },
                  devicePk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  counter: {
                    type: "fixed64",
                    id: 3
                  },
                  sig: {
                    type: "bytes",
                    id: 4
                  },
                  flags: {
                    type: "fixed32",
                    id: 5
                  },
                  encryptedPayload: {
                    type: "bytes",
                    id: 6
                  },
                  nonce: {
                    type: "bytes",
                    id: 7
                  }
                }
              },
              PushServiceReceiver: {
                fields: {
                  tokenType: {
                    type: "push.v1.PushServiceTokenType",
                    id: 1
                  },
                  bundleId: {
                    type: "string",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "BundleID"
                    }
                  },
                  token: {
                    type: "bytes",
                    id: 3
                  },
                  recipientPublicKey: {
                    type: "bytes",
                    id: 4
                  }
                }
              },
              PushServer: {
                fields: {
                  serverKey: {
                    type: "bytes",
                    id: 1
                  },
                  serviceAddr: {
                    type: "string",
                    id: 2
                  }
                }
              },
              PushDeviceTokenRegistered: {
                fields: {
                  token: {
                    type: "PushServiceReceiver",
                    id: 1
                  },
                  devicePk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  }
                }
              },
              PushDeviceServerRegistered: {
                fields: {
                  server: {
                    type: "PushServer",
                    id: 1
                  },
                  devicePk: {
                    type: "bytes",
                    id: 2,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  }
                }
              },
              AccountVerifiedCredentialRegistered: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  },
                  signedIdentityPublicKey: {
                    type: "bytes",
                    id: 2
                  },
                  verifiedCredential: {
                    type: "string",
                    id: 3
                  },
                  registrationDate: {
                    type: "int64",
                    id: 4
                  },
                  expirationDate: {
                    type: "int64",
                    id: 5
                  },
                  identifier: {
                    type: "string",
                    id: 6
                  },
                  issuer: {
                    type: "string",
                    id: 7
                  }
                }
              },
              PushMemberTokenUpdate: {
                fields: {
                  server: {
                    type: "PushServer",
                    id: 1
                  },
                  token: {
                    type: "bytes",
                    id: 2
                  },
                  devicePk: {
                    type: "bytes",
                    id: 3,
                    options: {
                      "(gogoproto.customname)": "DevicePK"
                    }
                  }
                }
              },
              OutOfStoreReceive: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      payload: {
                        type: "bytes",
                        id: 1
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      message: {
                        type: "OutOfStoreMessage",
                        id: 1
                      },
                      cleartext: {
                        type: "bytes",
                        id: 2
                      },
                      groupPublicKey: {
                        type: "bytes",
                        id: 3
                      },
                      alreadyReceived: {
                        type: "bool",
                        id: 4
                      }
                    }
                  }
                }
              },
              OutOfStoreSeal: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      cid: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "CID"
                        }
                      },
                      groupPublicKey: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      encrypted: {
                        type: "bytes",
                        id: 1
                      }
                    }
                  }
                }
              },
              FirstLastCounters: {
                fields: {
                  first: {
                    type: "uint64",
                    id: 1
                  },
                  last: {
                    type: "uint64",
                    id: 2
                  }
                }
              },
              OrbitDBMessageHeads: {
                fields: {
                  sealedBox: {
                    type: "bytes",
                    id: 2
                  },
                  rawRotation: {
                    type: "bytes",
                    id: 3
                  }
                },
                nested: {
                  Box: {
                    fields: {
                      address: {
                        type: "string",
                        id: 1
                      },
                      heads: {
                        type: "bytes",
                        id: 2
                      },
                      devicePk: {
                        type: "bytes",
                        id: 3,
                        options: {
                          "(gogoproto.customname)": "DevicePK"
                        }
                      },
                      peerId: {
                        type: "bytes",
                        id: 4,
                        options: {
                          "(gogoproto.customname)": "PeerID"
                        }
                      }
                    }
                  }
                }
              },
              RefreshContactRequest: {
                fields: {},
                nested: {
                  Peer: {
                    fields: {
                      id: {
                        type: "string",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "ID"
                        }
                      },
                      addrs: {
                        rule: "repeated",
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  Request: {
                    fields: {
                      contactPk: {
                        type: "bytes",
                        id: 1,
                        options: {
                          "(gogoproto.customname)": "ContactPK"
                        }
                      },
                      timeout: {
                        type: "int64",
                        id: 2
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      peersFound: {
                        rule: "repeated",
                        type: "Peer",
                        id: 1
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      push: {
        nested: {
          v1: {
            options: {
              go_package: "berty.tech/weshnet/pkg/pushtypes",
              "(gogoproto.marshaler_all)": true,
              "(gogoproto.unmarshaler_all)": true,
              "(gogoproto.sizer_all)": true
            },
            nested: {
              PushService: {
                methods: {
                  ServerInfo: {
                    requestType: "PushServiceServerInfo.Request",
                    responseType: "PushServiceServerInfo.Reply"
                  },
                  Send: {
                    requestType: "PushServiceSend.Request",
                    responseType: "PushServiceSend.Reply"
                  }
                }
              },
              PushServiceServerInfo: {
                fields: {},
                nested: {
                  Request: {
                    fields: {}
                  },
                  Reply: {
                    fields: {
                      publicKey: {
                        type: "bytes",
                        id: 1
                      },
                      supportedTokenTypes: {
                        rule: "repeated",
                        type: "PushServiceSupportedTokenType",
                        id: 2
                      }
                    }
                  }
                }
              },
              PushServiceSupportedTokenType: {
                fields: {
                  appBundleId: {
                    type: "string",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "AppBundleID"
                    }
                  },
                  tokenType: {
                    type: "PushServiceTokenType",
                    id: 2
                  }
                }
              },
              PushServiceTokenType: {
                values: {
                  PushTokenUndefined: 0,
                  PushTokenMQTT: 1,
                  PushTokenApplePushNotificationService: 2,
                  PushTokenFirebaseCloudMessaging: 3,
                  PushTokenWindowsPushNotificationService: 4,
                  PushTokenHuaweiPushKit: 5,
                  PushTokenAmazonDeviceMessaging: 6
                }
              },
              PushServiceSend: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      envelope: {
                        type: "OutOfStoreMessageEnvelope",
                        id: 1
                      },
                      priority: {
                        type: "PushServicePriority",
                        id: 2
                      },
                      receivers: {
                        rule: "repeated",
                        type: "PushServiceOpaqueReceiver",
                        id: 3
                      }
                    }
                  },
                  Reply: {
                    fields: {}
                  }
                }
              },
              OutOfStoreMessageEnvelope: {
                fields: {
                  nonce: {
                    type: "bytes",
                    id: 1
                  },
                  box: {
                    type: "bytes",
                    id: 2
                  },
                  groupReference: {
                    type: "bytes",
                    id: 4,
                    options: {
                      "(gogoproto.customname)": "GroupReference"
                    }
                  }
                }
              },
              OutOfStoreExposedData: {
                fields: {
                  nonce: {
                    type: "bytes",
                    id: 1
                  },
                  box: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              PushServicePriority: {
                values: {
                  PushPriorityUndefined: 0,
                  PushPriorityLow: 1,
                  PushPriorityNormal: 2
                }
              },
              PushServiceOpaqueReceiver: {
                fields: {
                  opaqueToken: {
                    type: "bytes",
                    id: 1
                  },
                  serviceAddr: {
                    type: "string",
                    id: 2
                  }
                }
              },
              DecryptedPush: {
                fields: {
                  accountId: {
                    type: "string",
                    id: 1,
                    options: {
                      "(gogoproto.customname)": "AccountID"
                    }
                  },
                  accountName: {
                    type: "string",
                    id: 2
                  },
                  conversationPublicKey: {
                    type: "string",
                    id: 3
                  },
                  conversationDisplayName: {
                    type: "string",
                    id: 4
                  },
                  memberPublicKey: {
                    type: "string",
                    id: 5
                  },
                  memberDisplayName: {
                    type: "string",
                    id: 6
                  },
                  pushType: {
                    type: "PushType",
                    id: 7
                  },
                  payloadAttrsJson: {
                    type: "string",
                    id: 8,
                    options: {
                      "(gogoproto.customname)": "PayloadAttrsJSON"
                    }
                  },
                  deepLink: {
                    type: "string",
                    id: 9
                  },
                  alreadyReceived: {
                    type: "bool",
                    id: 10
                  },
                  accountMuted: {
                    type: "bool",
                    id: 11
                  },
                  conversationMuted: {
                    type: "bool",
                    id: 12
                  },
                  hidePreview: {
                    type: "bool",
                    id: 13
                  }
                },
                nested: {
                  PushType: {
                    values: {
                      Unknown: 0,
                      Message: 1,
                      GroupInvitation: 7,
                      ConversationNameChanged: 8,
                      MemberNameChanged: 9,
                      MemberDetailsChanged: 11
                    },
                    reserved: [
                      [
                        2,
                        2
                      ],
                      [
                        3,
                        3
                      ],
                      [
                        4,
                        4
                      ],
                      [
                        5,
                        5
                      ],
                      [
                        6,
                        6
                      ],
                      [
                        10,
                        10
                      ]
                    ]
                  }
                }
              },
              FormatedPush: {
                fields: {
                  pushType: {
                    type: "DecryptedPush.PushType",
                    id: 1
                  },
                  title: {
                    type: "string",
                    id: 2
                  },
                  subtitle: {
                    type: "string",
                    id: 3
                  },
                  body: {
                    type: "string",
                    id: 4
                  },
                  deepLink: {
                    type: "string",
                    id: 5
                  },
                  muted: {
                    type: "bool",
                    id: 6
                  },
                  hidePreview: {
                    type: "bool",
                    id: 7
                  },
                  conversationIdentifier: {
                    type: "string",
                    id: 8
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  gogoproto: {
    options: {
      java_package: "com.google.protobuf",
      java_outer_classname: "GoGoProtos",
      go_package: "github.com/gogo/protobuf/gogoproto"
    },
    nested: {
      goprotoEnumPrefix: {
        type: "bool",
        id: 62001,
        extend: "google.protobuf.EnumOptions"
      },
      goprotoEnumStringer: {
        type: "bool",
        id: 62021,
        extend: "google.protobuf.EnumOptions"
      },
      enumStringer: {
        type: "bool",
        id: 62022,
        extend: "google.protobuf.EnumOptions"
      },
      enumCustomname: {
        type: "string",
        id: 62023,
        extend: "google.protobuf.EnumOptions"
      },
      enumdecl: {
        type: "bool",
        id: 62024,
        extend: "google.protobuf.EnumOptions"
      },
      enumvalueCustomname: {
        type: "string",
        id: 66001,
        extend: "google.protobuf.EnumValueOptions"
      },
      goprotoGettersAll: {
        type: "bool",
        id: 63001,
        extend: "google.protobuf.FileOptions"
      },
      goprotoEnumPrefixAll: {
        type: "bool",
        id: 63002,
        extend: "google.protobuf.FileOptions"
      },
      goprotoStringerAll: {
        type: "bool",
        id: 63003,
        extend: "google.protobuf.FileOptions"
      },
      verboseEqualAll: {
        type: "bool",
        id: 63004,
        extend: "google.protobuf.FileOptions"
      },
      faceAll: {
        type: "bool",
        id: 63005,
        extend: "google.protobuf.FileOptions"
      },
      gostringAll: {
        type: "bool",
        id: 63006,
        extend: "google.protobuf.FileOptions"
      },
      populateAll: {
        type: "bool",
        id: 63007,
        extend: "google.protobuf.FileOptions"
      },
      stringerAll: {
        type: "bool",
        id: 63008,
        extend: "google.protobuf.FileOptions"
      },
      onlyoneAll: {
        type: "bool",
        id: 63009,
        extend: "google.protobuf.FileOptions"
      },
      equalAll: {
        type: "bool",
        id: 63013,
        extend: "google.protobuf.FileOptions"
      },
      descriptionAll: {
        type: "bool",
        id: 63014,
        extend: "google.protobuf.FileOptions"
      },
      testgenAll: {
        type: "bool",
        id: 63015,
        extend: "google.protobuf.FileOptions"
      },
      benchgenAll: {
        type: "bool",
        id: 63016,
        extend: "google.protobuf.FileOptions"
      },
      marshalerAll: {
        type: "bool",
        id: 63017,
        extend: "google.protobuf.FileOptions"
      },
      unmarshalerAll: {
        type: "bool",
        id: 63018,
        extend: "google.protobuf.FileOptions"
      },
      stableMarshalerAll: {
        type: "bool",
        id: 63019,
        extend: "google.protobuf.FileOptions"
      },
      sizerAll: {
        type: "bool",
        id: 63020,
        extend: "google.protobuf.FileOptions"
      },
      goprotoEnumStringerAll: {
        type: "bool",
        id: 63021,
        extend: "google.protobuf.FileOptions"
      },
      enumStringerAll: {
        type: "bool",
        id: 63022,
        extend: "google.protobuf.FileOptions"
      },
      unsafeMarshalerAll: {
        type: "bool",
        id: 63023,
        extend: "google.protobuf.FileOptions"
      },
      unsafeUnmarshalerAll: {
        type: "bool",
        id: 63024,
        extend: "google.protobuf.FileOptions"
      },
      goprotoExtensionsMapAll: {
        type: "bool",
        id: 63025,
        extend: "google.protobuf.FileOptions"
      },
      goprotoUnrecognizedAll: {
        type: "bool",
        id: 63026,
        extend: "google.protobuf.FileOptions"
      },
      gogoprotoImport: {
        type: "bool",
        id: 63027,
        extend: "google.protobuf.FileOptions"
      },
      protosizerAll: {
        type: "bool",
        id: 63028,
        extend: "google.protobuf.FileOptions"
      },
      compareAll: {
        type: "bool",
        id: 63029,
        extend: "google.protobuf.FileOptions"
      },
      typedeclAll: {
        type: "bool",
        id: 63030,
        extend: "google.protobuf.FileOptions"
      },
      enumdeclAll: {
        type: "bool",
        id: 63031,
        extend: "google.protobuf.FileOptions"
      },
      goprotoRegistration: {
        type: "bool",
        id: 63032,
        extend: "google.protobuf.FileOptions"
      },
      messagenameAll: {
        type: "bool",
        id: 63033,
        extend: "google.protobuf.FileOptions"
      },
      goprotoSizecacheAll: {
        type: "bool",
        id: 63034,
        extend: "google.protobuf.FileOptions"
      },
      goprotoUnkeyedAll: {
        type: "bool",
        id: 63035,
        extend: "google.protobuf.FileOptions"
      },
      goprotoGetters: {
        type: "bool",
        id: 64001,
        extend: "google.protobuf.MessageOptions"
      },
      goprotoStringer: {
        type: "bool",
        id: 64003,
        extend: "google.protobuf.MessageOptions"
      },
      verboseEqual: {
        type: "bool",
        id: 64004,
        extend: "google.protobuf.MessageOptions"
      },
      face: {
        type: "bool",
        id: 64005,
        extend: "google.protobuf.MessageOptions"
      },
      gostring: {
        type: "bool",
        id: 64006,
        extend: "google.protobuf.MessageOptions"
      },
      populate: {
        type: "bool",
        id: 64007,
        extend: "google.protobuf.MessageOptions"
      },
      stringer: {
        type: "bool",
        id: 67008,
        extend: "google.protobuf.MessageOptions"
      },
      onlyone: {
        type: "bool",
        id: 64009,
        extend: "google.protobuf.MessageOptions"
      },
      equal: {
        type: "bool",
        id: 64013,
        extend: "google.protobuf.MessageOptions"
      },
      description: {
        type: "bool",
        id: 64014,
        extend: "google.protobuf.MessageOptions"
      },
      testgen: {
        type: "bool",
        id: 64015,
        extend: "google.protobuf.MessageOptions"
      },
      benchgen: {
        type: "bool",
        id: 64016,
        extend: "google.protobuf.MessageOptions"
      },
      marshaler: {
        type: "bool",
        id: 64017,
        extend: "google.protobuf.MessageOptions"
      },
      unmarshaler: {
        type: "bool",
        id: 64018,
        extend: "google.protobuf.MessageOptions"
      },
      stableMarshaler: {
        type: "bool",
        id: 64019,
        extend: "google.protobuf.MessageOptions"
      },
      sizer: {
        type: "bool",
        id: 64020,
        extend: "google.protobuf.MessageOptions"
      },
      unsafeMarshaler: {
        type: "bool",
        id: 64023,
        extend: "google.protobuf.MessageOptions"
      },
      unsafeUnmarshaler: {
        type: "bool",
        id: 64024,
        extend: "google.protobuf.MessageOptions"
      },
      goprotoExtensionsMap: {
        type: "bool",
        id: 64025,
        extend: "google.protobuf.MessageOptions"
      },
      goprotoUnrecognized: {
        type: "bool",
        id: 64026,
        extend: "google.protobuf.MessageOptions"
      },
      protosizer: {
        type: "bool",
        id: 64028,
        extend: "google.protobuf.MessageOptions"
      },
      compare: {
        type: "bool",
        id: 64029,
        extend: "google.protobuf.MessageOptions"
      },
      typedecl: {
        type: "bool",
        id: 64030,
        extend: "google.protobuf.MessageOptions"
      },
      messagename: {
        type: "bool",
        id: 64033,
        extend: "google.protobuf.MessageOptions"
      },
      goprotoSizecache: {
        type: "bool",
        id: 64034,
        extend: "google.protobuf.MessageOptions"
      },
      goprotoUnkeyed: {
        type: "bool",
        id: 64035,
        extend: "google.protobuf.MessageOptions"
      },
      nullable: {
        type: "bool",
        id: 65001,
        extend: "google.protobuf.FieldOptions"
      },
      embed: {
        type: "bool",
        id: 65002,
        extend: "google.protobuf.FieldOptions"
      },
      customtype: {
        type: "string",
        id: 65003,
        extend: "google.protobuf.FieldOptions"
      },
      customname: {
        type: "string",
        id: 65004,
        extend: "google.protobuf.FieldOptions"
      },
      jsontag: {
        type: "string",
        id: 65005,
        extend: "google.protobuf.FieldOptions"
      },
      moretags: {
        type: "string",
        id: 65006,
        extend: "google.protobuf.FieldOptions"
      },
      casttype: {
        type: "string",
        id: 65007,
        extend: "google.protobuf.FieldOptions"
      },
      castkey: {
        type: "string",
        id: 65008,
        extend: "google.protobuf.FieldOptions"
      },
      castvalue: {
        type: "string",
        id: 65009,
        extend: "google.protobuf.FieldOptions"
      },
      stdtime: {
        type: "bool",
        id: 65010,
        extend: "google.protobuf.FieldOptions"
      },
      stdduration: {
        type: "bool",
        id: 65011,
        extend: "google.protobuf.FieldOptions"
      },
      wktpointer: {
        type: "bool",
        id: 65012,
        extend: "google.protobuf.FieldOptions"
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          FileDescriptorSet: {
            fields: {
              file: {
                rule: "repeated",
                type: "FileDescriptorProto",
                id: 1
              }
            }
          },
          FileDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              "package": {
                type: "string",
                id: 2
              },
              dependency: {
                rule: "repeated",
                type: "string",
                id: 3
              },
              publicDependency: {
                rule: "repeated",
                type: "int32",
                id: 10,
                options: {
                  packed: false
                }
              },
              weakDependency: {
                rule: "repeated",
                type: "int32",
                id: 11,
                options: {
                  packed: false
                }
              },
              messageType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 4
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 5
              },
              service: {
                rule: "repeated",
                type: "ServiceDescriptorProto",
                id: 6
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 7
              },
              options: {
                type: "FileOptions",
                id: 8
              },
              sourceCodeInfo: {
                type: "SourceCodeInfo",
                id: 9
              },
              syntax: {
                type: "string",
                id: 12
              }
            }
          },
          DescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              field: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 2
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 6
              },
              nestedType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 3
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 4
              },
              extensionRange: {
                rule: "repeated",
                type: "ExtensionRange",
                id: 5
              },
              oneofDecl: {
                rule: "repeated",
                type: "OneofDescriptorProto",
                id: 8
              },
              options: {
                type: "MessageOptions",
                id: 7
              },
              reservedRange: {
                rule: "repeated",
                type: "ReservedRange",
                id: 9
              },
              reservedName: {
                rule: "repeated",
                type: "string",
                id: 10
              }
            },
            nested: {
              ExtensionRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              ReservedRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  }
                }
              }
            }
          },
          FieldDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 3
              },
              label: {
                type: "Label",
                id: 4
              },
              type: {
                type: "Type",
                id: 5
              },
              typeName: {
                type: "string",
                id: 6
              },
              extendee: {
                type: "string",
                id: 2
              },
              defaultValue: {
                type: "string",
                id: 7
              },
              oneofIndex: {
                type: "int32",
                id: 9
              },
              jsonName: {
                type: "string",
                id: 10
              },
              options: {
                type: "FieldOptions",
                id: 8
              }
            },
            nested: {
              Type: {
                values: {
                  TYPE_DOUBLE: 1,
                  TYPE_FLOAT: 2,
                  TYPE_INT64: 3,
                  TYPE_UINT64: 4,
                  TYPE_INT32: 5,
                  TYPE_FIXED64: 6,
                  TYPE_FIXED32: 7,
                  TYPE_BOOL: 8,
                  TYPE_STRING: 9,
                  TYPE_GROUP: 10,
                  TYPE_MESSAGE: 11,
                  TYPE_BYTES: 12,
                  TYPE_UINT32: 13,
                  TYPE_ENUM: 14,
                  TYPE_SFIXED32: 15,
                  TYPE_SFIXED64: 16,
                  TYPE_SINT32: 17,
                  TYPE_SINT64: 18
                }
              },
              Label: {
                values: {
                  LABEL_OPTIONAL: 1,
                  LABEL_REQUIRED: 2,
                  LABEL_REPEATED: 3
                }
              }
            }
          },
          OneofDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              options: {
                type: "OneofOptions",
                id: 2
              }
            }
          },
          EnumDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              value: {
                rule: "repeated",
                type: "EnumValueDescriptorProto",
                id: 2
              },
              options: {
                type: "EnumOptions",
                id: 3
              }
            }
          },
          EnumValueDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 2
              },
              options: {
                type: "EnumValueOptions",
                id: 3
              }
            }
          },
          ServiceDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              method: {
                rule: "repeated",
                type: "MethodDescriptorProto",
                id: 2
              },
              options: {
                type: "ServiceOptions",
                id: 3
              }
            }
          },
          MethodDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              inputType: {
                type: "string",
                id: 2
              },
              outputType: {
                type: "string",
                id: 3
              },
              options: {
                type: "MethodOptions",
                id: 4
              },
              clientStreaming: {
                type: "bool",
                id: 5
              },
              serverStreaming: {
                type: "bool",
                id: 6
              }
            }
          },
          FileOptions: {
            fields: {
              javaPackage: {
                type: "string",
                id: 1
              },
              javaOuterClassname: {
                type: "string",
                id: 8
              },
              javaMultipleFiles: {
                type: "bool",
                id: 10
              },
              javaGenerateEqualsAndHash: {
                type: "bool",
                id: 20,
                options: {
                  deprecated: true
                }
              },
              javaStringCheckUtf8: {
                type: "bool",
                id: 27
              },
              optimizeFor: {
                type: "OptimizeMode",
                id: 9,
                options: {
                  "default": "SPEED"
                }
              },
              goPackage: {
                type: "string",
                id: 11
              },
              ccGenericServices: {
                type: "bool",
                id: 16
              },
              javaGenericServices: {
                type: "bool",
                id: 17
              },
              pyGenericServices: {
                type: "bool",
                id: 18
              },
              deprecated: {
                type: "bool",
                id: 23
              },
              ccEnableArenas: {
                type: "bool",
                id: 31
              },
              objcClassPrefix: {
                type: "string",
                id: 36
              },
              csharpNamespace: {
                type: "string",
                id: 37
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                38,
                38
              ]
            ],
            nested: {
              OptimizeMode: {
                values: {
                  SPEED: 1,
                  CODE_SIZE: 2,
                  LITE_RUNTIME: 3
                }
              }
            }
          },
          MessageOptions: {
            fields: {
              messageSetWireFormat: {
                type: "bool",
                id: 1
              },
              noStandardDescriptorAccessor: {
                type: "bool",
                id: 2
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              mapEntry: {
                type: "bool",
                id: 7
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                8,
                8
              ]
            ]
          },
          FieldOptions: {
            fields: {
              ctype: {
                type: "CType",
                id: 1,
                options: {
                  "default": "STRING"
                }
              },
              packed: {
                type: "bool",
                id: 2
              },
              jstype: {
                type: "JSType",
                id: 6,
                options: {
                  "default": "JS_NORMAL"
                }
              },
              lazy: {
                type: "bool",
                id: 5
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              weak: {
                type: "bool",
                id: 10
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                4,
                4
              ]
            ],
            nested: {
              CType: {
                values: {
                  STRING: 0,
                  CORD: 1,
                  STRING_PIECE: 2
                }
              },
              JSType: {
                values: {
                  JS_NORMAL: 0,
                  JS_STRING: 1,
                  JS_NUMBER: 2
                }
              }
            }
          },
          OneofOptions: {
            fields: {
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          EnumOptions: {
            fields: {
              allowAlias: {
                type: "bool",
                id: 2
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          EnumValueOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 1
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          ServiceOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 33
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          MethodOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 33
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          UninterpretedOption: {
            fields: {
              name: {
                rule: "repeated",
                type: "NamePart",
                id: 2
              },
              identifierValue: {
                type: "string",
                id: 3
              },
              positiveIntValue: {
                type: "uint64",
                id: 4
              },
              negativeIntValue: {
                type: "int64",
                id: 5
              },
              doubleValue: {
                type: "double",
                id: 6
              },
              stringValue: {
                type: "bytes",
                id: 7
              },
              aggregateValue: {
                type: "string",
                id: 8
              }
            },
            nested: {
              NamePart: {
                fields: {
                  namePart: {
                    rule: "required",
                    type: "string",
                    id: 1
                  },
                  isExtension: {
                    rule: "required",
                    type: "bool",
                    id: 2
                  }
                }
              }
            }
          },
          SourceCodeInfo: {
            fields: {
              location: {
                rule: "repeated",
                type: "Location",
                id: 1
              }
            },
            nested: {
              Location: {
                fields: {
                  path: {
                    rule: "repeated",
                    type: "int32",
                    id: 1
                  },
                  span: {
                    rule: "repeated",
                    type: "int32",
                    id: 2
                  },
                  leadingComments: {
                    type: "string",
                    id: 3
                  },
                  trailingComments: {
                    type: "string",
                    id: 4
                  },
                  leadingDetachedComments: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                  }
                }
              }
            }
          },
          GeneratedCodeInfo: {
            fields: {
              annotation: {
                rule: "repeated",
                type: "Annotation",
                id: 1
              }
            },
            nested: {
              Annotation: {
                fields: {
                  path: {
                    rule: "repeated",
                    type: "int32",
                    id: 1
                  },
                  sourceFile: {
                    type: "string",
                    id: 2
                  },
                  begin: {
                    type: "int32",
                    id: 3
                  },
                  end: {
                    type: "int32",
                    id: 4
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

export { $root as default };
