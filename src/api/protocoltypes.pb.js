/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  weshnet: {
    nested: {
      protocol: {
        nested: {
          v1: {
            options: {
              go_package: "berty.tech/weshnet/pkg/protocoltypes"
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
                  SystemInfo: {
                    requestType: "SystemInfo.Request",
                    responseType: "SystemInfo.Reply"
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
                  EventTypeGroupReplicating: 403,
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
                    id: 3
                  },
                  messagesHeadsCids: {
                    rule: "repeated",
                    type: "bytes",
                    id: 4
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
                    id: 2
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
                    id: 1
                  },
                  parentIds: {
                    rule: "repeated",
                    type: "bytes",
                    id: 2
                  },
                  groupPk: {
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
              GroupMetadataPayloadSent: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1
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
                    id: 1
                  },
                  aliasPk: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              GroupMemberDeviceAdded: {
                fields: {
                  memberPk: {
                    type: "bytes",
                    id: 1
                  },
                  devicePk: {
                    type: "bytes",
                    id: 2
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
                    id: 1
                  },
                  destMemberPk: {
                    type: "bytes",
                    id: 2
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
                    id: 1
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
                    id: 1
                  },
                  granteeMemberPk: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              MultiMemberGroupInitialMemberAnnounced: {
                fields: {
                  memberPk: {
                    type: "bytes",
                    id: 1
                  }
                }
              },
              GroupAddAdditionalRendezvousSeed: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1
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
                    id: 1
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
                    id: 1
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
                    id: 1
                  },
                  groupPk: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              AccountContactRequestDisabled: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1
                  }
                }
              },
              AccountContactRequestEnabled: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1
                  }
                }
              },
              AccountContactRequestReferenceReset: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1
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
                    id: 1
                  },
                  groupPk: {
                    type: "bytes",
                    id: 2
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
                    id: 1
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              AccountContactRequestIncomingReceived: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2
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
                    id: 1
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              AccountContactRequestIncomingAccepted: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2
                  },
                  groupPk: {
                    type: "bytes",
                    id: 3
                  }
                }
              },
              AccountContactBlocked: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              AccountContactUnblocked: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1
                  },
                  contactPk: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              GroupReplicating: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1
                  },
                  authenticationUrl: {
                    type: "string",
                    id: 2
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
                        id: 1
                      },
                      devicePk: {
                        type: "bytes",
                        id: 2
                      },
                      accountGroupPk: {
                        type: "bytes",
                        id: 3
                      },
                      peerId: {
                        type: "string",
                        id: 4
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
                        id: 1
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
                        id: 1
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
                        id: 1
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
                        id: 1
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
                        id: 1
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
                        id: 1
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
                        id: 1
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
                        id: 1
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
                        id: 1
                      },
                      memberPk: {
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
              MultiMemberGroupInvitationCreate: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1
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
                        id: 1
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
                        id: 1
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
                        id: 1
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
                        id: 1
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
                        id: 1
                      },
                      sinceId: {
                        type: "bytes",
                        id: 2
                      },
                      sinceNow: {
                        type: "bool",
                        id: 3
                      },
                      untilId: {
                        type: "bytes",
                        id: 4
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
                        id: 1
                      },
                      sinceId: {
                        type: "bytes",
                        id: 2
                      },
                      sinceNow: {
                        type: "bool",
                        id: 3
                      },
                      untilId: {
                        type: "bytes",
                        id: 4
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
                        id: 1
                      },
                      contactPk: {
                        type: "bytes",
                        id: 2
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
                        id: 2
                      },
                      devicePk: {
                        type: "bytes",
                        id: 3
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
                        id: 1
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
                        id: 1
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
                        id: 1
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
                            id: 1
                          },
                          devicePk: {
                            type: "bytes",
                            id: 2
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
                            id: 1
                          }
                        }
                      },
                      PeerDisconnected: {
                        fields: {
                          peerId: {
                            type: "string",
                            id: 1
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
                        id: 1
                      },
                      groupType: {
                        type: "GroupType",
                        id: 2
                      },
                      contactPk: {
                        type: "bytes",
                        id: 3
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
                        id: 1
                      },
                      logType: {
                        type: "DebugInspectGroupLogType",
                        id: 2
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      cid: {
                        type: "bytes",
                        id: 1
                      },
                      parentCids: {
                        rule: "repeated",
                        type: "bytes",
                        id: 2
                      },
                      metadataEventType: {
                        type: "EventType",
                        id: 3
                      },
                      devicePk: {
                        type: "bytes",
                        id: 4
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
                        id: 1
                      }
                    }
                  },
                  Reply: {
                    fields: {
                      peerIds: {
                        rule: "repeated",
                        type: "string",
                        id: 1
                      }
                    }
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
                    id: 1
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
                    id: 2
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
              CredentialVerificationServiceInitFlow: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      serviceUrl: {
                        type: "string",
                        id: 1
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
                        id: 1
                      },
                      secureUrl: {
                        type: "bool",
                        id: 2
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
                        id: 1
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
              ReplicationServiceRegisterGroup: {
                fields: {},
                nested: {
                  Request: {
                    fields: {
                      groupPk: {
                        type: "bytes",
                        id: 1
                      },
                      token: {
                        type: "string",
                        id: 2
                      },
                      authenticationUrl: {
                        type: "string",
                        id: 3
                      },
                      replicationServer: {
                        type: "string",
                        id: 4
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
                        id: 1
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
                        id: 2
                      },
                      orbitdb: {
                        type: "OrbitDB",
                        id: 3
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
                        id: 3
                      },
                      userCpuTimeMs: {
                        type: "int64",
                        id: 10
                      },
                      systemCpuTimeMs: {
                        type: "int64",
                        id: 11
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
                        id: 17
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
                        id: 23
                      },
                      ppid: {
                        type: "int64",
                        id: 24
                      },
                      priority: {
                        type: "int64",
                        id: 25
                      },
                      uid: {
                        type: "int64",
                        id: 26
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
                        id: 1
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
                        id: 1
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
              OutOfStoreMessage: {
                fields: {
                  cid: {
                    type: "bytes",
                    id: 1
                  },
                  devicePk: {
                    type: "bytes",
                    id: 2
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
                    id: 3
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
                        id: 1
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
              AccountVerifiedCredentialRegistered: {
                fields: {
                  devicePk: {
                    type: "bytes",
                    id: 1
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
                        id: 3
                      },
                      peerId: {
                        type: "bytes",
                        id: 4
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
                        id: 1
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
                        id: 1
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
      }
    }
  }
});

export { $root as default };
