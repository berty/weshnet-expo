import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace weshnet. */
export namespace weshnet {

    /** Namespace protocol. */
    namespace protocol {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a ProtocolService */
            class ProtocolService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new ProtocolService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new ProtocolService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ProtocolService;

                /**
                 * Calls ServiceExportData.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public serviceExportData(request: weshnet.protocol.v1.ServiceExportData.IRequest, callback: weshnet.protocol.v1.ProtocolService.ServiceExportDataCallback): void;

                /**
                 * Calls ServiceExportData.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public serviceExportData(request: weshnet.protocol.v1.ServiceExportData.IRequest): Promise<weshnet.protocol.v1.ServiceExportData.Reply>;

                /**
                 * Calls ServiceGetConfiguration.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public serviceGetConfiguration(request: weshnet.protocol.v1.ServiceGetConfiguration.IRequest, callback: weshnet.protocol.v1.ProtocolService.ServiceGetConfigurationCallback): void;

                /**
                 * Calls ServiceGetConfiguration.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public serviceGetConfiguration(request: weshnet.protocol.v1.ServiceGetConfiguration.IRequest): Promise<weshnet.protocol.v1.ServiceGetConfiguration.Reply>;

                /**
                 * Calls ContactRequestReference.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public contactRequestReference(request: weshnet.protocol.v1.ContactRequestReference.IRequest, callback: weshnet.protocol.v1.ProtocolService.ContactRequestReferenceCallback): void;

                /**
                 * Calls ContactRequestReference.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public contactRequestReference(request: weshnet.protocol.v1.ContactRequestReference.IRequest): Promise<weshnet.protocol.v1.ContactRequestReference.Reply>;

                /**
                 * Calls ContactRequestDisable.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public contactRequestDisable(request: weshnet.protocol.v1.ContactRequestDisable.IRequest, callback: weshnet.protocol.v1.ProtocolService.ContactRequestDisableCallback): void;

                /**
                 * Calls ContactRequestDisable.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public contactRequestDisable(request: weshnet.protocol.v1.ContactRequestDisable.IRequest): Promise<weshnet.protocol.v1.ContactRequestDisable.Reply>;

                /**
                 * Calls ContactRequestEnable.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public contactRequestEnable(request: weshnet.protocol.v1.ContactRequestEnable.IRequest, callback: weshnet.protocol.v1.ProtocolService.ContactRequestEnableCallback): void;

                /**
                 * Calls ContactRequestEnable.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public contactRequestEnable(request: weshnet.protocol.v1.ContactRequestEnable.IRequest): Promise<weshnet.protocol.v1.ContactRequestEnable.Reply>;

                /**
                 * Calls ContactRequestResetReference.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public contactRequestResetReference(request: weshnet.protocol.v1.ContactRequestResetReference.IRequest, callback: weshnet.protocol.v1.ProtocolService.ContactRequestResetReferenceCallback): void;

                /**
                 * Calls ContactRequestResetReference.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public contactRequestResetReference(request: weshnet.protocol.v1.ContactRequestResetReference.IRequest): Promise<weshnet.protocol.v1.ContactRequestResetReference.Reply>;

                /**
                 * Calls ContactRequestSend.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public contactRequestSend(request: weshnet.protocol.v1.ContactRequestSend.IRequest, callback: weshnet.protocol.v1.ProtocolService.ContactRequestSendCallback): void;

                /**
                 * Calls ContactRequestSend.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public contactRequestSend(request: weshnet.protocol.v1.ContactRequestSend.IRequest): Promise<weshnet.protocol.v1.ContactRequestSend.Reply>;

                /**
                 * Calls ContactRequestAccept.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public contactRequestAccept(request: weshnet.protocol.v1.ContactRequestAccept.IRequest, callback: weshnet.protocol.v1.ProtocolService.ContactRequestAcceptCallback): void;

                /**
                 * Calls ContactRequestAccept.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public contactRequestAccept(request: weshnet.protocol.v1.ContactRequestAccept.IRequest): Promise<weshnet.protocol.v1.ContactRequestAccept.Reply>;

                /**
                 * Calls ContactRequestDiscard.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public contactRequestDiscard(request: weshnet.protocol.v1.ContactRequestDiscard.IRequest, callback: weshnet.protocol.v1.ProtocolService.ContactRequestDiscardCallback): void;

                /**
                 * Calls ContactRequestDiscard.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public contactRequestDiscard(request: weshnet.protocol.v1.ContactRequestDiscard.IRequest): Promise<weshnet.protocol.v1.ContactRequestDiscard.Reply>;

                /**
                 * Calls ShareContact.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public shareContact(request: weshnet.protocol.v1.ShareContact.IRequest, callback: weshnet.protocol.v1.ProtocolService.ShareContactCallback): void;

                /**
                 * Calls ShareContact.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public shareContact(request: weshnet.protocol.v1.ShareContact.IRequest): Promise<weshnet.protocol.v1.ShareContact.Reply>;

                /**
                 * Calls DecodeContact.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public decodeContact(request: weshnet.protocol.v1.DecodeContact.IRequest, callback: weshnet.protocol.v1.ProtocolService.DecodeContactCallback): void;

                /**
                 * Calls DecodeContact.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public decodeContact(request: weshnet.protocol.v1.DecodeContact.IRequest): Promise<weshnet.protocol.v1.DecodeContact.Reply>;

                /**
                 * Calls ContactBlock.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public contactBlock(request: weshnet.protocol.v1.ContactBlock.IRequest, callback: weshnet.protocol.v1.ProtocolService.ContactBlockCallback): void;

                /**
                 * Calls ContactBlock.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public contactBlock(request: weshnet.protocol.v1.ContactBlock.IRequest): Promise<weshnet.protocol.v1.ContactBlock.Reply>;

                /**
                 * Calls ContactUnblock.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public contactUnblock(request: weshnet.protocol.v1.ContactUnblock.IRequest, callback: weshnet.protocol.v1.ProtocolService.ContactUnblockCallback): void;

                /**
                 * Calls ContactUnblock.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public contactUnblock(request: weshnet.protocol.v1.ContactUnblock.IRequest): Promise<weshnet.protocol.v1.ContactUnblock.Reply>;

                /**
                 * Calls ContactAliasKeySend.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public contactAliasKeySend(request: weshnet.protocol.v1.ContactAliasKeySend.IRequest, callback: weshnet.protocol.v1.ProtocolService.ContactAliasKeySendCallback): void;

                /**
                 * Calls ContactAliasKeySend.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public contactAliasKeySend(request: weshnet.protocol.v1.ContactAliasKeySend.IRequest): Promise<weshnet.protocol.v1.ContactAliasKeySend.Reply>;

                /**
                 * Calls MultiMemberGroupCreate.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public multiMemberGroupCreate(request: weshnet.protocol.v1.MultiMemberGroupCreate.IRequest, callback: weshnet.protocol.v1.ProtocolService.MultiMemberGroupCreateCallback): void;

                /**
                 * Calls MultiMemberGroupCreate.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public multiMemberGroupCreate(request: weshnet.protocol.v1.MultiMemberGroupCreate.IRequest): Promise<weshnet.protocol.v1.MultiMemberGroupCreate.Reply>;

                /**
                 * Calls MultiMemberGroupJoin.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public multiMemberGroupJoin(request: weshnet.protocol.v1.MultiMemberGroupJoin.IRequest, callback: weshnet.protocol.v1.ProtocolService.MultiMemberGroupJoinCallback): void;

                /**
                 * Calls MultiMemberGroupJoin.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public multiMemberGroupJoin(request: weshnet.protocol.v1.MultiMemberGroupJoin.IRequest): Promise<weshnet.protocol.v1.MultiMemberGroupJoin.Reply>;

                /**
                 * Calls MultiMemberGroupLeave.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public multiMemberGroupLeave(request: weshnet.protocol.v1.MultiMemberGroupLeave.IRequest, callback: weshnet.protocol.v1.ProtocolService.MultiMemberGroupLeaveCallback): void;

                /**
                 * Calls MultiMemberGroupLeave.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public multiMemberGroupLeave(request: weshnet.protocol.v1.MultiMemberGroupLeave.IRequest): Promise<weshnet.protocol.v1.MultiMemberGroupLeave.Reply>;

                /**
                 * Calls MultiMemberGroupAliasResolverDisclose.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public multiMemberGroupAliasResolverDisclose(request: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.IRequest, callback: weshnet.protocol.v1.ProtocolService.MultiMemberGroupAliasResolverDiscloseCallback): void;

                /**
                 * Calls MultiMemberGroupAliasResolverDisclose.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public multiMemberGroupAliasResolverDisclose(request: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.IRequest): Promise<weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Reply>;

                /**
                 * Calls MultiMemberGroupAdminRoleGrant.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public multiMemberGroupAdminRoleGrant(request: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.IRequest, callback: weshnet.protocol.v1.ProtocolService.MultiMemberGroupAdminRoleGrantCallback): void;

                /**
                 * Calls MultiMemberGroupAdminRoleGrant.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public multiMemberGroupAdminRoleGrant(request: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.IRequest): Promise<weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Reply>;

                /**
                 * Calls MultiMemberGroupInvitationCreate.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public multiMemberGroupInvitationCreate(request: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.IRequest, callback: weshnet.protocol.v1.ProtocolService.MultiMemberGroupInvitationCreateCallback): void;

                /**
                 * Calls MultiMemberGroupInvitationCreate.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public multiMemberGroupInvitationCreate(request: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.IRequest): Promise<weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Reply>;

                /**
                 * Calls AppMetadataSend.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public appMetadataSend(request: weshnet.protocol.v1.AppMetadataSend.IRequest, callback: weshnet.protocol.v1.ProtocolService.AppMetadataSendCallback): void;

                /**
                 * Calls AppMetadataSend.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public appMetadataSend(request: weshnet.protocol.v1.AppMetadataSend.IRequest): Promise<weshnet.protocol.v1.AppMetadataSend.Reply>;

                /**
                 * Calls AppMessageSend.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public appMessageSend(request: weshnet.protocol.v1.AppMessageSend.IRequest, callback: weshnet.protocol.v1.ProtocolService.AppMessageSendCallback): void;

                /**
                 * Calls AppMessageSend.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public appMessageSend(request: weshnet.protocol.v1.AppMessageSend.IRequest): Promise<weshnet.protocol.v1.AppMessageSend.Reply>;

                /**
                 * Calls GroupMetadataList.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and GroupMetadataEvent
                 */
                public groupMetadataList(request: weshnet.protocol.v1.GroupMetadataList.IRequest, callback: weshnet.protocol.v1.ProtocolService.GroupMetadataListCallback): void;

                /**
                 * Calls GroupMetadataList.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public groupMetadataList(request: weshnet.protocol.v1.GroupMetadataList.IRequest): Promise<weshnet.protocol.v1.GroupMetadataEvent>;

                /**
                 * Calls GroupMessageList.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and GroupMessageEvent
                 */
                public groupMessageList(request: weshnet.protocol.v1.GroupMessageList.IRequest, callback: weshnet.protocol.v1.ProtocolService.GroupMessageListCallback): void;

                /**
                 * Calls GroupMessageList.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public groupMessageList(request: weshnet.protocol.v1.GroupMessageList.IRequest): Promise<weshnet.protocol.v1.GroupMessageEvent>;

                /**
                 * Calls GroupInfo.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public groupInfo(request: weshnet.protocol.v1.GroupInfo.IRequest, callback: weshnet.protocol.v1.ProtocolService.GroupInfoCallback): void;

                /**
                 * Calls GroupInfo.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public groupInfo(request: weshnet.protocol.v1.GroupInfo.IRequest): Promise<weshnet.protocol.v1.GroupInfo.Reply>;

                /**
                 * Calls ActivateGroup.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public activateGroup(request: weshnet.protocol.v1.ActivateGroup.IRequest, callback: weshnet.protocol.v1.ProtocolService.ActivateGroupCallback): void;

                /**
                 * Calls ActivateGroup.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public activateGroup(request: weshnet.protocol.v1.ActivateGroup.IRequest): Promise<weshnet.protocol.v1.ActivateGroup.Reply>;

                /**
                 * Calls DeactivateGroup.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public deactivateGroup(request: weshnet.protocol.v1.DeactivateGroup.IRequest, callback: weshnet.protocol.v1.ProtocolService.DeactivateGroupCallback): void;

                /**
                 * Calls DeactivateGroup.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public deactivateGroup(request: weshnet.protocol.v1.DeactivateGroup.IRequest): Promise<weshnet.protocol.v1.DeactivateGroup.Reply>;

                /**
                 * Calls GroupDeviceStatus.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public groupDeviceStatus(request: weshnet.protocol.v1.GroupDeviceStatus.IRequest, callback: weshnet.protocol.v1.ProtocolService.GroupDeviceStatusCallback): void;

                /**
                 * Calls GroupDeviceStatus.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public groupDeviceStatus(request: weshnet.protocol.v1.GroupDeviceStatus.IRequest): Promise<weshnet.protocol.v1.GroupDeviceStatus.Reply>;

                /**
                 * Calls DebugListGroups.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public debugListGroups(request: weshnet.protocol.v1.DebugListGroups.IRequest, callback: weshnet.protocol.v1.ProtocolService.DebugListGroupsCallback): void;

                /**
                 * Calls DebugListGroups.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public debugListGroups(request: weshnet.protocol.v1.DebugListGroups.IRequest): Promise<weshnet.protocol.v1.DebugListGroups.Reply>;

                /**
                 * Calls DebugInspectGroupStore.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public debugInspectGroupStore(request: weshnet.protocol.v1.DebugInspectGroupStore.IRequest, callback: weshnet.protocol.v1.ProtocolService.DebugInspectGroupStoreCallback): void;

                /**
                 * Calls DebugInspectGroupStore.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public debugInspectGroupStore(request: weshnet.protocol.v1.DebugInspectGroupStore.IRequest): Promise<weshnet.protocol.v1.DebugInspectGroupStore.Reply>;

                /**
                 * Calls DebugGroup.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public debugGroup(request: weshnet.protocol.v1.DebugGroup.IRequest, callback: weshnet.protocol.v1.ProtocolService.DebugGroupCallback): void;

                /**
                 * Calls DebugGroup.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public debugGroup(request: weshnet.protocol.v1.DebugGroup.IRequest): Promise<weshnet.protocol.v1.DebugGroup.Reply>;

                /**
                 * Calls SystemInfo.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public systemInfo(request: weshnet.protocol.v1.SystemInfo.IRequest, callback: weshnet.protocol.v1.ProtocolService.SystemInfoCallback): void;

                /**
                 * Calls SystemInfo.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public systemInfo(request: weshnet.protocol.v1.SystemInfo.IRequest): Promise<weshnet.protocol.v1.SystemInfo.Reply>;

                /**
                 * Calls CredentialVerificationServiceInitFlow.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public credentialVerificationServiceInitFlow(request: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.IRequest, callback: weshnet.protocol.v1.ProtocolService.CredentialVerificationServiceInitFlowCallback): void;

                /**
                 * Calls CredentialVerificationServiceInitFlow.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public credentialVerificationServiceInitFlow(request: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.IRequest): Promise<weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Reply>;

                /**
                 * Calls CredentialVerificationServiceCompleteFlow.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public credentialVerificationServiceCompleteFlow(request: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.IRequest, callback: weshnet.protocol.v1.ProtocolService.CredentialVerificationServiceCompleteFlowCallback): void;

                /**
                 * Calls CredentialVerificationServiceCompleteFlow.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public credentialVerificationServiceCompleteFlow(request: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.IRequest): Promise<weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Reply>;

                /**
                 * Calls VerifiedCredentialsList.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public verifiedCredentialsList(request: weshnet.protocol.v1.VerifiedCredentialsList.IRequest, callback: weshnet.protocol.v1.ProtocolService.VerifiedCredentialsListCallback): void;

                /**
                 * Calls VerifiedCredentialsList.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public verifiedCredentialsList(request: weshnet.protocol.v1.VerifiedCredentialsList.IRequest): Promise<weshnet.protocol.v1.VerifiedCredentialsList.Reply>;

                /**
                 * Calls ReplicationServiceRegisterGroup.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public replicationServiceRegisterGroup(request: weshnet.protocol.v1.ReplicationServiceRegisterGroup.IRequest, callback: weshnet.protocol.v1.ProtocolService.ReplicationServiceRegisterGroupCallback): void;

                /**
                 * Calls ReplicationServiceRegisterGroup.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public replicationServiceRegisterGroup(request: weshnet.protocol.v1.ReplicationServiceRegisterGroup.IRequest): Promise<weshnet.protocol.v1.ReplicationServiceRegisterGroup.Reply>;

                /**
                 * Calls PeerList.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public peerList(request: weshnet.protocol.v1.PeerList.IRequest, callback: weshnet.protocol.v1.ProtocolService.PeerListCallback): void;

                /**
                 * Calls PeerList.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public peerList(request: weshnet.protocol.v1.PeerList.IRequest): Promise<weshnet.protocol.v1.PeerList.Reply>;

                /**
                 * Calls OutOfStoreReceive.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public outOfStoreReceive(request: weshnet.protocol.v1.OutOfStoreReceive.IRequest, callback: weshnet.protocol.v1.ProtocolService.OutOfStoreReceiveCallback): void;

                /**
                 * Calls OutOfStoreReceive.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public outOfStoreReceive(request: weshnet.protocol.v1.OutOfStoreReceive.IRequest): Promise<weshnet.protocol.v1.OutOfStoreReceive.Reply>;

                /**
                 * Calls OutOfStoreSeal.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public outOfStoreSeal(request: weshnet.protocol.v1.OutOfStoreSeal.IRequest, callback: weshnet.protocol.v1.ProtocolService.OutOfStoreSealCallback): void;

                /**
                 * Calls OutOfStoreSeal.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public outOfStoreSeal(request: weshnet.protocol.v1.OutOfStoreSeal.IRequest): Promise<weshnet.protocol.v1.OutOfStoreSeal.Reply>;

                /**
                 * Calls RefreshContactRequest.
                 * @param request Request message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reply
                 */
                public refreshContactRequest(request: weshnet.protocol.v1.RefreshContactRequest.IRequest, callback: weshnet.protocol.v1.ProtocolService.RefreshContactRequestCallback): void;

                /**
                 * Calls RefreshContactRequest.
                 * @param request Request message or plain object
                 * @returns Promise
                 */
                public refreshContactRequest(request: weshnet.protocol.v1.RefreshContactRequest.IRequest): Promise<weshnet.protocol.v1.RefreshContactRequest.Reply>;
            }

            namespace ProtocolService {

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#serviceExportData}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ServiceExportDataCallback = (error: (Error|null), response?: weshnet.protocol.v1.ServiceExportData.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#serviceGetConfiguration}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ServiceGetConfigurationCallback = (error: (Error|null), response?: weshnet.protocol.v1.ServiceGetConfiguration.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#contactRequestReference}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ContactRequestReferenceCallback = (error: (Error|null), response?: weshnet.protocol.v1.ContactRequestReference.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#contactRequestDisable}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ContactRequestDisableCallback = (error: (Error|null), response?: weshnet.protocol.v1.ContactRequestDisable.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#contactRequestEnable}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ContactRequestEnableCallback = (error: (Error|null), response?: weshnet.protocol.v1.ContactRequestEnable.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#contactRequestResetReference}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ContactRequestResetReferenceCallback = (error: (Error|null), response?: weshnet.protocol.v1.ContactRequestResetReference.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#contactRequestSend}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ContactRequestSendCallback = (error: (Error|null), response?: weshnet.protocol.v1.ContactRequestSend.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#contactRequestAccept}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ContactRequestAcceptCallback = (error: (Error|null), response?: weshnet.protocol.v1.ContactRequestAccept.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#contactRequestDiscard}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ContactRequestDiscardCallback = (error: (Error|null), response?: weshnet.protocol.v1.ContactRequestDiscard.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#shareContact}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ShareContactCallback = (error: (Error|null), response?: weshnet.protocol.v1.ShareContact.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#decodeContact}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type DecodeContactCallback = (error: (Error|null), response?: weshnet.protocol.v1.DecodeContact.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#contactBlock}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ContactBlockCallback = (error: (Error|null), response?: weshnet.protocol.v1.ContactBlock.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#contactUnblock}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ContactUnblockCallback = (error: (Error|null), response?: weshnet.protocol.v1.ContactUnblock.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#contactAliasKeySend}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ContactAliasKeySendCallback = (error: (Error|null), response?: weshnet.protocol.v1.ContactAliasKeySend.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#multiMemberGroupCreate}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type MultiMemberGroupCreateCallback = (error: (Error|null), response?: weshnet.protocol.v1.MultiMemberGroupCreate.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#multiMemberGroupJoin}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type MultiMemberGroupJoinCallback = (error: (Error|null), response?: weshnet.protocol.v1.MultiMemberGroupJoin.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#multiMemberGroupLeave}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type MultiMemberGroupLeaveCallback = (error: (Error|null), response?: weshnet.protocol.v1.MultiMemberGroupLeave.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#multiMemberGroupAliasResolverDisclose}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type MultiMemberGroupAliasResolverDiscloseCallback = (error: (Error|null), response?: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#multiMemberGroupAdminRoleGrant}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type MultiMemberGroupAdminRoleGrantCallback = (error: (Error|null), response?: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#multiMemberGroupInvitationCreate}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type MultiMemberGroupInvitationCreateCallback = (error: (Error|null), response?: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#appMetadataSend}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type AppMetadataSendCallback = (error: (Error|null), response?: weshnet.protocol.v1.AppMetadataSend.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#appMessageSend}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type AppMessageSendCallback = (error: (Error|null), response?: weshnet.protocol.v1.AppMessageSend.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#groupMetadataList}.
                 * @param error Error, if any
                 * @param [response] GroupMetadataEvent
                 */
                type GroupMetadataListCallback = (error: (Error|null), response?: weshnet.protocol.v1.GroupMetadataEvent) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#groupMessageList}.
                 * @param error Error, if any
                 * @param [response] GroupMessageEvent
                 */
                type GroupMessageListCallback = (error: (Error|null), response?: weshnet.protocol.v1.GroupMessageEvent) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#groupInfo}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type GroupInfoCallback = (error: (Error|null), response?: weshnet.protocol.v1.GroupInfo.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#activateGroup}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ActivateGroupCallback = (error: (Error|null), response?: weshnet.protocol.v1.ActivateGroup.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#deactivateGroup}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type DeactivateGroupCallback = (error: (Error|null), response?: weshnet.protocol.v1.DeactivateGroup.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#groupDeviceStatus}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type GroupDeviceStatusCallback = (error: (Error|null), response?: weshnet.protocol.v1.GroupDeviceStatus.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#debugListGroups}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type DebugListGroupsCallback = (error: (Error|null), response?: weshnet.protocol.v1.DebugListGroups.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#debugInspectGroupStore}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type DebugInspectGroupStoreCallback = (error: (Error|null), response?: weshnet.protocol.v1.DebugInspectGroupStore.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#debugGroup}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type DebugGroupCallback = (error: (Error|null), response?: weshnet.protocol.v1.DebugGroup.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#systemInfo}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type SystemInfoCallback = (error: (Error|null), response?: weshnet.protocol.v1.SystemInfo.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#credentialVerificationServiceInitFlow}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type CredentialVerificationServiceInitFlowCallback = (error: (Error|null), response?: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#credentialVerificationServiceCompleteFlow}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type CredentialVerificationServiceCompleteFlowCallback = (error: (Error|null), response?: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#verifiedCredentialsList}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type VerifiedCredentialsListCallback = (error: (Error|null), response?: weshnet.protocol.v1.VerifiedCredentialsList.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#replicationServiceRegisterGroup}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type ReplicationServiceRegisterGroupCallback = (error: (Error|null), response?: weshnet.protocol.v1.ReplicationServiceRegisterGroup.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#peerList}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type PeerListCallback = (error: (Error|null), response?: weshnet.protocol.v1.PeerList.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#outOfStoreReceive}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type OutOfStoreReceiveCallback = (error: (Error|null), response?: weshnet.protocol.v1.OutOfStoreReceive.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#outOfStoreSeal}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type OutOfStoreSealCallback = (error: (Error|null), response?: weshnet.protocol.v1.OutOfStoreSeal.Reply) => void;

                /**
                 * Callback as used by {@link weshnet.protocol.v1.ProtocolService#refreshContactRequest}.
                 * @param error Error, if any
                 * @param [response] Reply
                 */
                type RefreshContactRequestCallback = (error: (Error|null), response?: weshnet.protocol.v1.RefreshContactRequest.Reply) => void;
            }

            /** GroupType enum. */
            enum GroupType {
                GroupTypeUndefined = 0,
                GroupTypeAccount = 1,
                GroupTypeContact = 2,
                GroupTypeMultiMember = 3
            }

            /** EventType enum. */
            enum EventType {
                EventTypeUndefined = 0,
                EventTypeGroupMemberDeviceAdded = 1,
                EventTypeGroupDeviceChainKeyAdded = 2,
                EventTypeAccountGroupJoined = 101,
                EventTypeAccountGroupLeft = 102,
                EventTypeAccountContactRequestDisabled = 103,
                EventTypeAccountContactRequestEnabled = 104,
                EventTypeAccountContactRequestReferenceReset = 105,
                EventTypeAccountContactRequestOutgoingEnqueued = 106,
                EventTypeAccountContactRequestOutgoingSent = 107,
                EventTypeAccountContactRequestIncomingReceived = 108,
                EventTypeAccountContactRequestIncomingDiscarded = 109,
                EventTypeAccountContactRequestIncomingAccepted = 110,
                EventTypeAccountContactBlocked = 111,
                EventTypeAccountContactUnblocked = 112,
                EventTypeContactAliasKeyAdded = 201,
                EventTypeMultiMemberGroupAliasResolverAdded = 301,
                EventTypeMultiMemberGroupInitialMemberAnnounced = 302,
                EventTypeMultiMemberGroupAdminRoleGranted = 303,
                EventTypeGroupReplicating = 403,
                EventTypeAccountVerifiedCredentialRegistered = 500,
                EventTypeGroupMetadataPayloadSent = 1001
            }

            /** Properties of an Account. */
            interface IAccount {

                /** Account group */
                group?: (weshnet.protocol.v1.IGroup|null);

                /** Account accountPrivateKey */
                accountPrivateKey?: (Uint8Array|null);

                /** Account aliasPrivateKey */
                aliasPrivateKey?: (Uint8Array|null);

                /** Account publicRendezvousSeed */
                publicRendezvousSeed?: (Uint8Array|null);
            }

            /** Represents an Account. */
            class Account implements IAccount {

                /**
                 * Constructs a new Account.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccount);

                /** Account group. */
                public group?: (weshnet.protocol.v1.IGroup|null);

                /** Account accountPrivateKey. */
                public accountPrivateKey: Uint8Array;

                /** Account aliasPrivateKey. */
                public aliasPrivateKey: Uint8Array;

                /** Account publicRendezvousSeed. */
                public publicRendezvousSeed: Uint8Array;

                /**
                 * Creates a new Account instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Account instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccount): weshnet.protocol.v1.Account;

                /**
                 * Encodes the specified Account message. Does not implicitly {@link weshnet.protocol.v1.Account.verify|verify} messages.
                 * @param message Account message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Account message, length delimited. Does not implicitly {@link weshnet.protocol.v1.Account.verify|verify} messages.
                 * @param message Account message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Account message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Account
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.Account;

                /**
                 * Decodes an Account message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Account
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.Account;

                /**
                 * Verifies an Account message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Account message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Account
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.Account;

                /**
                 * Creates a plain object from an Account message. Also converts values to other types if specified.
                 * @param message Account
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Account to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Account
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Group. */
            interface IGroup {

                /** Group publicKey */
                publicKey?: (Uint8Array|null);

                /** Group secret */
                secret?: (Uint8Array|null);

                /** Group secretSig */
                secretSig?: (Uint8Array|null);

                /** Group groupType */
                groupType?: (weshnet.protocol.v1.GroupType|null);

                /** Group signPub */
                signPub?: (Uint8Array|null);

                /** Group linkKey */
                linkKey?: (Uint8Array|null);

                /** Group linkKeySig */
                linkKeySig?: (Uint8Array|null);
            }

            /** Represents a Group. */
            class Group implements IGroup {

                /**
                 * Constructs a new Group.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroup);

                /** Group publicKey. */
                public publicKey: Uint8Array;

                /** Group secret. */
                public secret: Uint8Array;

                /** Group secretSig. */
                public secretSig: Uint8Array;

                /** Group groupType. */
                public groupType: weshnet.protocol.v1.GroupType;

                /** Group signPub. */
                public signPub: Uint8Array;

                /** Group linkKey. */
                public linkKey: Uint8Array;

                /** Group linkKeySig. */
                public linkKeySig: Uint8Array;

                /**
                 * Creates a new Group instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Group instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroup): weshnet.protocol.v1.Group;

                /**
                 * Encodes the specified Group message. Does not implicitly {@link weshnet.protocol.v1.Group.verify|verify} messages.
                 * @param message Group message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Group message, length delimited. Does not implicitly {@link weshnet.protocol.v1.Group.verify|verify} messages.
                 * @param message Group message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Group message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.Group;

                /**
                 * Decodes a Group message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.Group;

                /**
                 * Verifies a Group message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Group message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Group
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.Group;

                /**
                 * Creates a plain object from a Group message. Also converts values to other types if specified.
                 * @param message Group
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Group to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Group
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GroupHeadsExport. */
            interface IGroupHeadsExport {

                /** GroupHeadsExport publicKey */
                publicKey?: (Uint8Array|null);

                /** GroupHeadsExport signPub */
                signPub?: (Uint8Array|null);

                /** GroupHeadsExport metadataHeadsCids */
                metadataHeadsCids?: (Uint8Array[]|null);

                /** GroupHeadsExport messagesHeadsCids */
                messagesHeadsCids?: (Uint8Array[]|null);

                /** GroupHeadsExport linkKey */
                linkKey?: (Uint8Array|null);
            }

            /** Represents a GroupHeadsExport. */
            class GroupHeadsExport implements IGroupHeadsExport {

                /**
                 * Constructs a new GroupHeadsExport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupHeadsExport);

                /** GroupHeadsExport publicKey. */
                public publicKey: Uint8Array;

                /** GroupHeadsExport signPub. */
                public signPub: Uint8Array;

                /** GroupHeadsExport metadataHeadsCids. */
                public metadataHeadsCids: Uint8Array[];

                /** GroupHeadsExport messagesHeadsCids. */
                public messagesHeadsCids: Uint8Array[];

                /** GroupHeadsExport linkKey. */
                public linkKey: Uint8Array;

                /**
                 * Creates a new GroupHeadsExport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupHeadsExport instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupHeadsExport): weshnet.protocol.v1.GroupHeadsExport;

                /**
                 * Encodes the specified GroupHeadsExport message. Does not implicitly {@link weshnet.protocol.v1.GroupHeadsExport.verify|verify} messages.
                 * @param message GroupHeadsExport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupHeadsExport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupHeadsExport message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupHeadsExport.verify|verify} messages.
                 * @param message GroupHeadsExport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupHeadsExport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupHeadsExport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupHeadsExport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupHeadsExport;

                /**
                 * Decodes a GroupHeadsExport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupHeadsExport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupHeadsExport;

                /**
                 * Verifies a GroupHeadsExport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupHeadsExport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupHeadsExport
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupHeadsExport;

                /**
                 * Creates a plain object from a GroupHeadsExport message. Also converts values to other types if specified.
                 * @param message GroupHeadsExport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupHeadsExport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupHeadsExport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupHeadsExport
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GroupMetadata. */
            interface IGroupMetadata {

                /** GroupMetadata eventType */
                eventType?: (weshnet.protocol.v1.EventType|null);

                /** GroupMetadata payload */
                payload?: (Uint8Array|null);

                /** GroupMetadata sig */
                sig?: (Uint8Array|null);

                /** GroupMetadata protocolMetadata */
                protocolMetadata?: (weshnet.protocol.v1.IProtocolMetadata|null);
            }

            /** Represents a GroupMetadata. */
            class GroupMetadata implements IGroupMetadata {

                /**
                 * Constructs a new GroupMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupMetadata);

                /** GroupMetadata eventType. */
                public eventType: weshnet.protocol.v1.EventType;

                /** GroupMetadata payload. */
                public payload: Uint8Array;

                /** GroupMetadata sig. */
                public sig: Uint8Array;

                /** GroupMetadata protocolMetadata. */
                public protocolMetadata?: (weshnet.protocol.v1.IProtocolMetadata|null);

                /**
                 * Creates a new GroupMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupMetadata instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupMetadata): weshnet.protocol.v1.GroupMetadata;

                /**
                 * Encodes the specified GroupMetadata message. Does not implicitly {@link weshnet.protocol.v1.GroupMetadata.verify|verify} messages.
                 * @param message GroupMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupMetadata message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupMetadata.verify|verify} messages.
                 * @param message GroupMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupMetadata;

                /**
                 * Decodes a GroupMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupMetadata;

                /**
                 * Verifies a GroupMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupMetadata
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupMetadata;

                /**
                 * Creates a plain object from a GroupMetadata message. Also converts values to other types if specified.
                 * @param message GroupMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GroupEnvelope. */
            interface IGroupEnvelope {

                /** GroupEnvelope nonce */
                nonce?: (Uint8Array|null);

                /** GroupEnvelope event */
                event?: (Uint8Array|null);
            }

            /** Represents a GroupEnvelope. */
            class GroupEnvelope implements IGroupEnvelope {

                /**
                 * Constructs a new GroupEnvelope.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupEnvelope);

                /** GroupEnvelope nonce. */
                public nonce: Uint8Array;

                /** GroupEnvelope event. */
                public event: Uint8Array;

                /**
                 * Creates a new GroupEnvelope instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupEnvelope instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupEnvelope): weshnet.protocol.v1.GroupEnvelope;

                /**
                 * Encodes the specified GroupEnvelope message. Does not implicitly {@link weshnet.protocol.v1.GroupEnvelope.verify|verify} messages.
                 * @param message GroupEnvelope message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupEnvelope message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupEnvelope.verify|verify} messages.
                 * @param message GroupEnvelope message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupEnvelope message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupEnvelope
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupEnvelope;

                /**
                 * Decodes a GroupEnvelope message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupEnvelope
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupEnvelope;

                /**
                 * Verifies a GroupEnvelope message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupEnvelope message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupEnvelope
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupEnvelope;

                /**
                 * Creates a plain object from a GroupEnvelope message. Also converts values to other types if specified.
                 * @param message GroupEnvelope
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupEnvelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupEnvelope to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupEnvelope
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageHeaders. */
            interface IMessageHeaders {

                /** MessageHeaders counter */
                counter?: (number|Long|null);

                /** MessageHeaders devicePk */
                devicePk?: (Uint8Array|null);

                /** MessageHeaders sig */
                sig?: (Uint8Array|null);

                /** MessageHeaders metadata */
                metadata?: ({ [k: string]: string }|null);
            }

            /** Represents a MessageHeaders. */
            class MessageHeaders implements IMessageHeaders {

                /**
                 * Constructs a new MessageHeaders.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IMessageHeaders);

                /** MessageHeaders counter. */
                public counter: (number|Long);

                /** MessageHeaders devicePk. */
                public devicePk: Uint8Array;

                /** MessageHeaders sig. */
                public sig: Uint8Array;

                /** MessageHeaders metadata. */
                public metadata: { [k: string]: string };

                /**
                 * Creates a new MessageHeaders instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageHeaders instance
                 */
                public static create(properties?: weshnet.protocol.v1.IMessageHeaders): weshnet.protocol.v1.MessageHeaders;

                /**
                 * Encodes the specified MessageHeaders message. Does not implicitly {@link weshnet.protocol.v1.MessageHeaders.verify|verify} messages.
                 * @param message MessageHeaders message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IMessageHeaders, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageHeaders message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MessageHeaders.verify|verify} messages.
                 * @param message MessageHeaders message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IMessageHeaders, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageHeaders message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageHeaders
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MessageHeaders;

                /**
                 * Decodes a MessageHeaders message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageHeaders
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MessageHeaders;

                /**
                 * Verifies a MessageHeaders message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageHeaders message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageHeaders
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MessageHeaders;

                /**
                 * Creates a plain object from a MessageHeaders message. Also converts values to other types if specified.
                 * @param message MessageHeaders
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.MessageHeaders, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageHeaders to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageHeaders
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ProtocolMetadata. */
            interface IProtocolMetadata {
            }

            /** Represents a ProtocolMetadata. */
            class ProtocolMetadata implements IProtocolMetadata {

                /**
                 * Constructs a new ProtocolMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IProtocolMetadata);

                /**
                 * Creates a new ProtocolMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProtocolMetadata instance
                 */
                public static create(properties?: weshnet.protocol.v1.IProtocolMetadata): weshnet.protocol.v1.ProtocolMetadata;

                /**
                 * Encodes the specified ProtocolMetadata message. Does not implicitly {@link weshnet.protocol.v1.ProtocolMetadata.verify|verify} messages.
                 * @param message ProtocolMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IProtocolMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProtocolMetadata message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ProtocolMetadata.verify|verify} messages.
                 * @param message ProtocolMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IProtocolMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProtocolMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProtocolMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ProtocolMetadata;

                /**
                 * Decodes a ProtocolMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProtocolMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ProtocolMetadata;

                /**
                 * Verifies a ProtocolMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProtocolMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProtocolMetadata
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ProtocolMetadata;

                /**
                 * Creates a plain object from a ProtocolMetadata message. Also converts values to other types if specified.
                 * @param message ProtocolMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ProtocolMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProtocolMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ProtocolMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an EncryptedMessage. */
            interface IEncryptedMessage {

                /** EncryptedMessage plaintext */
                plaintext?: (Uint8Array|null);

                /** EncryptedMessage protocolMetadata */
                protocolMetadata?: (weshnet.protocol.v1.IProtocolMetadata|null);
            }

            /** Represents an EncryptedMessage. */
            class EncryptedMessage implements IEncryptedMessage {

                /**
                 * Constructs a new EncryptedMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IEncryptedMessage);

                /** EncryptedMessage plaintext. */
                public plaintext: Uint8Array;

                /** EncryptedMessage protocolMetadata. */
                public protocolMetadata?: (weshnet.protocol.v1.IProtocolMetadata|null);

                /**
                 * Creates a new EncryptedMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EncryptedMessage instance
                 */
                public static create(properties?: weshnet.protocol.v1.IEncryptedMessage): weshnet.protocol.v1.EncryptedMessage;

                /**
                 * Encodes the specified EncryptedMessage message. Does not implicitly {@link weshnet.protocol.v1.EncryptedMessage.verify|verify} messages.
                 * @param message EncryptedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IEncryptedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EncryptedMessage message, length delimited. Does not implicitly {@link weshnet.protocol.v1.EncryptedMessage.verify|verify} messages.
                 * @param message EncryptedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IEncryptedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EncryptedMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EncryptedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.EncryptedMessage;

                /**
                 * Decodes an EncryptedMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EncryptedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.EncryptedMessage;

                /**
                 * Verifies an EncryptedMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EncryptedMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EncryptedMessage
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.EncryptedMessage;

                /**
                 * Creates a plain object from an EncryptedMessage message. Also converts values to other types if specified.
                 * @param message EncryptedMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.EncryptedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EncryptedMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EncryptedMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageEnvelope. */
            interface IMessageEnvelope {

                /** MessageEnvelope messageHeaders */
                messageHeaders?: (Uint8Array|null);

                /** MessageEnvelope message */
                message?: (Uint8Array|null);

                /** MessageEnvelope nonce */
                nonce?: (Uint8Array|null);
            }

            /** Represents a MessageEnvelope. */
            class MessageEnvelope implements IMessageEnvelope {

                /**
                 * Constructs a new MessageEnvelope.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IMessageEnvelope);

                /** MessageEnvelope messageHeaders. */
                public messageHeaders: Uint8Array;

                /** MessageEnvelope message. */
                public message: Uint8Array;

                /** MessageEnvelope nonce. */
                public nonce: Uint8Array;

                /**
                 * Creates a new MessageEnvelope instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageEnvelope instance
                 */
                public static create(properties?: weshnet.protocol.v1.IMessageEnvelope): weshnet.protocol.v1.MessageEnvelope;

                /**
                 * Encodes the specified MessageEnvelope message. Does not implicitly {@link weshnet.protocol.v1.MessageEnvelope.verify|verify} messages.
                 * @param message MessageEnvelope message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IMessageEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageEnvelope message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MessageEnvelope.verify|verify} messages.
                 * @param message MessageEnvelope message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IMessageEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageEnvelope message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageEnvelope
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MessageEnvelope;

                /**
                 * Decodes a MessageEnvelope message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageEnvelope
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MessageEnvelope;

                /**
                 * Verifies a MessageEnvelope message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageEnvelope message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageEnvelope
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MessageEnvelope;

                /**
                 * Creates a plain object from a MessageEnvelope message. Also converts values to other types if specified.
                 * @param message MessageEnvelope
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.MessageEnvelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageEnvelope to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageEnvelope
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an EventContext. */
            interface IEventContext {

                /** EventContext id */
                id?: (Uint8Array|null);

                /** EventContext parentIds */
                parentIds?: (Uint8Array[]|null);

                /** EventContext groupPk */
                groupPk?: (Uint8Array|null);
            }

            /** Represents an EventContext. */
            class EventContext implements IEventContext {

                /**
                 * Constructs a new EventContext.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IEventContext);

                /** EventContext id. */
                public id: Uint8Array;

                /** EventContext parentIds. */
                public parentIds: Uint8Array[];

                /** EventContext groupPk. */
                public groupPk: Uint8Array;

                /**
                 * Creates a new EventContext instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EventContext instance
                 */
                public static create(properties?: weshnet.protocol.v1.IEventContext): weshnet.protocol.v1.EventContext;

                /**
                 * Encodes the specified EventContext message. Does not implicitly {@link weshnet.protocol.v1.EventContext.verify|verify} messages.
                 * @param message EventContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IEventContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EventContext message, length delimited. Does not implicitly {@link weshnet.protocol.v1.EventContext.verify|verify} messages.
                 * @param message EventContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IEventContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EventContext message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EventContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.EventContext;

                /**
                 * Decodes an EventContext message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EventContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.EventContext;

                /**
                 * Verifies an EventContext message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EventContext message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EventContext
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.EventContext;

                /**
                 * Creates a plain object from an EventContext message. Also converts values to other types if specified.
                 * @param message EventContext
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.EventContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EventContext to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EventContext
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GroupMetadataPayloadSent. */
            interface IGroupMetadataPayloadSent {

                /** GroupMetadataPayloadSent devicePk */
                devicePk?: (Uint8Array|null);

                /** GroupMetadataPayloadSent message */
                message?: (Uint8Array|null);
            }

            /** Represents a GroupMetadataPayloadSent. */
            class GroupMetadataPayloadSent implements IGroupMetadataPayloadSent {

                /**
                 * Constructs a new GroupMetadataPayloadSent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupMetadataPayloadSent);

                /** GroupMetadataPayloadSent devicePk. */
                public devicePk: Uint8Array;

                /** GroupMetadataPayloadSent message. */
                public message: Uint8Array;

                /**
                 * Creates a new GroupMetadataPayloadSent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupMetadataPayloadSent instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupMetadataPayloadSent): weshnet.protocol.v1.GroupMetadataPayloadSent;

                /**
                 * Encodes the specified GroupMetadataPayloadSent message. Does not implicitly {@link weshnet.protocol.v1.GroupMetadataPayloadSent.verify|verify} messages.
                 * @param message GroupMetadataPayloadSent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupMetadataPayloadSent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupMetadataPayloadSent message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupMetadataPayloadSent.verify|verify} messages.
                 * @param message GroupMetadataPayloadSent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupMetadataPayloadSent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupMetadataPayloadSent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupMetadataPayloadSent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupMetadataPayloadSent;

                /**
                 * Decodes a GroupMetadataPayloadSent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupMetadataPayloadSent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupMetadataPayloadSent;

                /**
                 * Verifies a GroupMetadataPayloadSent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupMetadataPayloadSent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupMetadataPayloadSent
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupMetadataPayloadSent;

                /**
                 * Creates a plain object from a GroupMetadataPayloadSent message. Also converts values to other types if specified.
                 * @param message GroupMetadataPayloadSent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupMetadataPayloadSent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupMetadataPayloadSent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupMetadataPayloadSent
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ContactAliasKeyAdded. */
            interface IContactAliasKeyAdded {

                /** ContactAliasKeyAdded devicePk */
                devicePk?: (Uint8Array|null);

                /** ContactAliasKeyAdded aliasPk */
                aliasPk?: (Uint8Array|null);
            }

            /** Represents a ContactAliasKeyAdded. */
            class ContactAliasKeyAdded implements IContactAliasKeyAdded {

                /**
                 * Constructs a new ContactAliasKeyAdded.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IContactAliasKeyAdded);

                /** ContactAliasKeyAdded devicePk. */
                public devicePk: Uint8Array;

                /** ContactAliasKeyAdded aliasPk. */
                public aliasPk: Uint8Array;

                /**
                 * Creates a new ContactAliasKeyAdded instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactAliasKeyAdded instance
                 */
                public static create(properties?: weshnet.protocol.v1.IContactAliasKeyAdded): weshnet.protocol.v1.ContactAliasKeyAdded;

                /**
                 * Encodes the specified ContactAliasKeyAdded message. Does not implicitly {@link weshnet.protocol.v1.ContactAliasKeyAdded.verify|verify} messages.
                 * @param message ContactAliasKeyAdded message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IContactAliasKeyAdded, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactAliasKeyAdded message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactAliasKeyAdded.verify|verify} messages.
                 * @param message ContactAliasKeyAdded message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IContactAliasKeyAdded, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactAliasKeyAdded message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactAliasKeyAdded
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactAliasKeyAdded;

                /**
                 * Decodes a ContactAliasKeyAdded message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactAliasKeyAdded
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactAliasKeyAdded;

                /**
                 * Verifies a ContactAliasKeyAdded message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactAliasKeyAdded message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactAliasKeyAdded
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactAliasKeyAdded;

                /**
                 * Creates a plain object from a ContactAliasKeyAdded message. Also converts values to other types if specified.
                 * @param message ContactAliasKeyAdded
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ContactAliasKeyAdded, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactAliasKeyAdded to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContactAliasKeyAdded
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GroupMemberDeviceAdded. */
            interface IGroupMemberDeviceAdded {

                /** GroupMemberDeviceAdded memberPk */
                memberPk?: (Uint8Array|null);

                /** GroupMemberDeviceAdded devicePk */
                devicePk?: (Uint8Array|null);

                /** GroupMemberDeviceAdded memberSig */
                memberSig?: (Uint8Array|null);
            }

            /** Represents a GroupMemberDeviceAdded. */
            class GroupMemberDeviceAdded implements IGroupMemberDeviceAdded {

                /**
                 * Constructs a new GroupMemberDeviceAdded.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupMemberDeviceAdded);

                /** GroupMemberDeviceAdded memberPk. */
                public memberPk: Uint8Array;

                /** GroupMemberDeviceAdded devicePk. */
                public devicePk: Uint8Array;

                /** GroupMemberDeviceAdded memberSig. */
                public memberSig: Uint8Array;

                /**
                 * Creates a new GroupMemberDeviceAdded instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupMemberDeviceAdded instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupMemberDeviceAdded): weshnet.protocol.v1.GroupMemberDeviceAdded;

                /**
                 * Encodes the specified GroupMemberDeviceAdded message. Does not implicitly {@link weshnet.protocol.v1.GroupMemberDeviceAdded.verify|verify} messages.
                 * @param message GroupMemberDeviceAdded message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupMemberDeviceAdded, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupMemberDeviceAdded message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupMemberDeviceAdded.verify|verify} messages.
                 * @param message GroupMemberDeviceAdded message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupMemberDeviceAdded, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupMemberDeviceAdded message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupMemberDeviceAdded
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupMemberDeviceAdded;

                /**
                 * Decodes a GroupMemberDeviceAdded message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupMemberDeviceAdded
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupMemberDeviceAdded;

                /**
                 * Verifies a GroupMemberDeviceAdded message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupMemberDeviceAdded message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupMemberDeviceAdded
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupMemberDeviceAdded;

                /**
                 * Creates a plain object from a GroupMemberDeviceAdded message. Also converts values to other types if specified.
                 * @param message GroupMemberDeviceAdded
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupMemberDeviceAdded, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupMemberDeviceAdded to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupMemberDeviceAdded
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeviceChainKey. */
            interface IDeviceChainKey {

                /** DeviceChainKey chainKey */
                chainKey?: (Uint8Array|null);

                /** DeviceChainKey counter */
                counter?: (number|Long|null);
            }

            /** Represents a DeviceChainKey. */
            class DeviceChainKey implements IDeviceChainKey {

                /**
                 * Constructs a new DeviceChainKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IDeviceChainKey);

                /** DeviceChainKey chainKey. */
                public chainKey: Uint8Array;

                /** DeviceChainKey counter. */
                public counter: (number|Long);

                /**
                 * Creates a new DeviceChainKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeviceChainKey instance
                 */
                public static create(properties?: weshnet.protocol.v1.IDeviceChainKey): weshnet.protocol.v1.DeviceChainKey;

                /**
                 * Encodes the specified DeviceChainKey message. Does not implicitly {@link weshnet.protocol.v1.DeviceChainKey.verify|verify} messages.
                 * @param message DeviceChainKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IDeviceChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeviceChainKey message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DeviceChainKey.verify|verify} messages.
                 * @param message DeviceChainKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IDeviceChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeviceChainKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeviceChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DeviceChainKey;

                /**
                 * Decodes a DeviceChainKey message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeviceChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DeviceChainKey;

                /**
                 * Verifies a DeviceChainKey message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeviceChainKey message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeviceChainKey
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DeviceChainKey;

                /**
                 * Creates a plain object from a DeviceChainKey message. Also converts values to other types if specified.
                 * @param message DeviceChainKey
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.DeviceChainKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeviceChainKey to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeviceChainKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GroupDeviceChainKeyAdded. */
            interface IGroupDeviceChainKeyAdded {

                /** GroupDeviceChainKeyAdded devicePk */
                devicePk?: (Uint8Array|null);

                /** GroupDeviceChainKeyAdded destMemberPk */
                destMemberPk?: (Uint8Array|null);

                /** GroupDeviceChainKeyAdded payload */
                payload?: (Uint8Array|null);
            }

            /** Represents a GroupDeviceChainKeyAdded. */
            class GroupDeviceChainKeyAdded implements IGroupDeviceChainKeyAdded {

                /**
                 * Constructs a new GroupDeviceChainKeyAdded.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupDeviceChainKeyAdded);

                /** GroupDeviceChainKeyAdded devicePk. */
                public devicePk: Uint8Array;

                /** GroupDeviceChainKeyAdded destMemberPk. */
                public destMemberPk: Uint8Array;

                /** GroupDeviceChainKeyAdded payload. */
                public payload: Uint8Array;

                /**
                 * Creates a new GroupDeviceChainKeyAdded instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupDeviceChainKeyAdded instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupDeviceChainKeyAdded): weshnet.protocol.v1.GroupDeviceChainKeyAdded;

                /**
                 * Encodes the specified GroupDeviceChainKeyAdded message. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceChainKeyAdded.verify|verify} messages.
                 * @param message GroupDeviceChainKeyAdded message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupDeviceChainKeyAdded, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupDeviceChainKeyAdded message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceChainKeyAdded.verify|verify} messages.
                 * @param message GroupDeviceChainKeyAdded message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupDeviceChainKeyAdded, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupDeviceChainKeyAdded message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupDeviceChainKeyAdded
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupDeviceChainKeyAdded;

                /**
                 * Decodes a GroupDeviceChainKeyAdded message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupDeviceChainKeyAdded
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupDeviceChainKeyAdded;

                /**
                 * Verifies a GroupDeviceChainKeyAdded message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupDeviceChainKeyAdded message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupDeviceChainKeyAdded
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupDeviceChainKeyAdded;

                /**
                 * Creates a plain object from a GroupDeviceChainKeyAdded message. Also converts values to other types if specified.
                 * @param message GroupDeviceChainKeyAdded
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupDeviceChainKeyAdded, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupDeviceChainKeyAdded to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupDeviceChainKeyAdded
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MultiMemberGroupAliasResolverAdded. */
            interface IMultiMemberGroupAliasResolverAdded {

                /** MultiMemberGroupAliasResolverAdded devicePk */
                devicePk?: (Uint8Array|null);

                /** MultiMemberGroupAliasResolverAdded aliasResolver */
                aliasResolver?: (Uint8Array|null);

                /** MultiMemberGroupAliasResolverAdded aliasProof */
                aliasProof?: (Uint8Array|null);
            }

            /** Represents a MultiMemberGroupAliasResolverAdded. */
            class MultiMemberGroupAliasResolverAdded implements IMultiMemberGroupAliasResolverAdded {

                /**
                 * Constructs a new MultiMemberGroupAliasResolverAdded.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IMultiMemberGroupAliasResolverAdded);

                /** MultiMemberGroupAliasResolverAdded devicePk. */
                public devicePk: Uint8Array;

                /** MultiMemberGroupAliasResolverAdded aliasResolver. */
                public aliasResolver: Uint8Array;

                /** MultiMemberGroupAliasResolverAdded aliasProof. */
                public aliasProof: Uint8Array;

                /**
                 * Creates a new MultiMemberGroupAliasResolverAdded instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiMemberGroupAliasResolverAdded instance
                 */
                public static create(properties?: weshnet.protocol.v1.IMultiMemberGroupAliasResolverAdded): weshnet.protocol.v1.MultiMemberGroupAliasResolverAdded;

                /**
                 * Encodes the specified MultiMemberGroupAliasResolverAdded message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAliasResolverAdded.verify|verify} messages.
                 * @param message MultiMemberGroupAliasResolverAdded message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IMultiMemberGroupAliasResolverAdded, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiMemberGroupAliasResolverAdded message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAliasResolverAdded.verify|verify} messages.
                 * @param message MultiMemberGroupAliasResolverAdded message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IMultiMemberGroupAliasResolverAdded, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiMemberGroupAliasResolverAdded message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultiMemberGroupAliasResolverAdded
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupAliasResolverAdded;

                /**
                 * Decodes a MultiMemberGroupAliasResolverAdded message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultiMemberGroupAliasResolverAdded
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupAliasResolverAdded;

                /**
                 * Verifies a MultiMemberGroupAliasResolverAdded message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiMemberGroupAliasResolverAdded message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiMemberGroupAliasResolverAdded
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupAliasResolverAdded;

                /**
                 * Creates a plain object from a MultiMemberGroupAliasResolverAdded message. Also converts values to other types if specified.
                 * @param message MultiMemberGroupAliasResolverAdded
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.MultiMemberGroupAliasResolverAdded, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiMemberGroupAliasResolverAdded to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultiMemberGroupAliasResolverAdded
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MultiMemberGroupAdminRoleGranted. */
            interface IMultiMemberGroupAdminRoleGranted {

                /** MultiMemberGroupAdminRoleGranted devicePk */
                devicePk?: (Uint8Array|null);

                /** MultiMemberGroupAdminRoleGranted granteeMemberPk */
                granteeMemberPk?: (Uint8Array|null);
            }

            /** Represents a MultiMemberGroupAdminRoleGranted. */
            class MultiMemberGroupAdminRoleGranted implements IMultiMemberGroupAdminRoleGranted {

                /**
                 * Constructs a new MultiMemberGroupAdminRoleGranted.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IMultiMemberGroupAdminRoleGranted);

                /** MultiMemberGroupAdminRoleGranted devicePk. */
                public devicePk: Uint8Array;

                /** MultiMemberGroupAdminRoleGranted granteeMemberPk. */
                public granteeMemberPk: Uint8Array;

                /**
                 * Creates a new MultiMemberGroupAdminRoleGranted instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiMemberGroupAdminRoleGranted instance
                 */
                public static create(properties?: weshnet.protocol.v1.IMultiMemberGroupAdminRoleGranted): weshnet.protocol.v1.MultiMemberGroupAdminRoleGranted;

                /**
                 * Encodes the specified MultiMemberGroupAdminRoleGranted message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAdminRoleGranted.verify|verify} messages.
                 * @param message MultiMemberGroupAdminRoleGranted message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IMultiMemberGroupAdminRoleGranted, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiMemberGroupAdminRoleGranted message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAdminRoleGranted.verify|verify} messages.
                 * @param message MultiMemberGroupAdminRoleGranted message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IMultiMemberGroupAdminRoleGranted, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiMemberGroupAdminRoleGranted message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultiMemberGroupAdminRoleGranted
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupAdminRoleGranted;

                /**
                 * Decodes a MultiMemberGroupAdminRoleGranted message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultiMemberGroupAdminRoleGranted
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupAdminRoleGranted;

                /**
                 * Verifies a MultiMemberGroupAdminRoleGranted message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiMemberGroupAdminRoleGranted message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiMemberGroupAdminRoleGranted
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupAdminRoleGranted;

                /**
                 * Creates a plain object from a MultiMemberGroupAdminRoleGranted message. Also converts values to other types if specified.
                 * @param message MultiMemberGroupAdminRoleGranted
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.MultiMemberGroupAdminRoleGranted, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiMemberGroupAdminRoleGranted to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultiMemberGroupAdminRoleGranted
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MultiMemberGroupInitialMemberAnnounced. */
            interface IMultiMemberGroupInitialMemberAnnounced {

                /** MultiMemberGroupInitialMemberAnnounced memberPk */
                memberPk?: (Uint8Array|null);
            }

            /** Represents a MultiMemberGroupInitialMemberAnnounced. */
            class MultiMemberGroupInitialMemberAnnounced implements IMultiMemberGroupInitialMemberAnnounced {

                /**
                 * Constructs a new MultiMemberGroupInitialMemberAnnounced.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IMultiMemberGroupInitialMemberAnnounced);

                /** MultiMemberGroupInitialMemberAnnounced memberPk. */
                public memberPk: Uint8Array;

                /**
                 * Creates a new MultiMemberGroupInitialMemberAnnounced instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiMemberGroupInitialMemberAnnounced instance
                 */
                public static create(properties?: weshnet.protocol.v1.IMultiMemberGroupInitialMemberAnnounced): weshnet.protocol.v1.MultiMemberGroupInitialMemberAnnounced;

                /**
                 * Encodes the specified MultiMemberGroupInitialMemberAnnounced message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupInitialMemberAnnounced.verify|verify} messages.
                 * @param message MultiMemberGroupInitialMemberAnnounced message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IMultiMemberGroupInitialMemberAnnounced, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiMemberGroupInitialMemberAnnounced message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupInitialMemberAnnounced.verify|verify} messages.
                 * @param message MultiMemberGroupInitialMemberAnnounced message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IMultiMemberGroupInitialMemberAnnounced, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiMemberGroupInitialMemberAnnounced message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultiMemberGroupInitialMemberAnnounced
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupInitialMemberAnnounced;

                /**
                 * Decodes a MultiMemberGroupInitialMemberAnnounced message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultiMemberGroupInitialMemberAnnounced
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupInitialMemberAnnounced;

                /**
                 * Verifies a MultiMemberGroupInitialMemberAnnounced message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiMemberGroupInitialMemberAnnounced message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiMemberGroupInitialMemberAnnounced
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupInitialMemberAnnounced;

                /**
                 * Creates a plain object from a MultiMemberGroupInitialMemberAnnounced message. Also converts values to other types if specified.
                 * @param message MultiMemberGroupInitialMemberAnnounced
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.MultiMemberGroupInitialMemberAnnounced, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiMemberGroupInitialMemberAnnounced to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultiMemberGroupInitialMemberAnnounced
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GroupAddAdditionalRendezvousSeed. */
            interface IGroupAddAdditionalRendezvousSeed {

                /** GroupAddAdditionalRendezvousSeed devicePk */
                devicePk?: (Uint8Array|null);

                /** GroupAddAdditionalRendezvousSeed seed */
                seed?: (Uint8Array|null);
            }

            /** Represents a GroupAddAdditionalRendezvousSeed. */
            class GroupAddAdditionalRendezvousSeed implements IGroupAddAdditionalRendezvousSeed {

                /**
                 * Constructs a new GroupAddAdditionalRendezvousSeed.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupAddAdditionalRendezvousSeed);

                /** GroupAddAdditionalRendezvousSeed devicePk. */
                public devicePk: Uint8Array;

                /** GroupAddAdditionalRendezvousSeed seed. */
                public seed: Uint8Array;

                /**
                 * Creates a new GroupAddAdditionalRendezvousSeed instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupAddAdditionalRendezvousSeed instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupAddAdditionalRendezvousSeed): weshnet.protocol.v1.GroupAddAdditionalRendezvousSeed;

                /**
                 * Encodes the specified GroupAddAdditionalRendezvousSeed message. Does not implicitly {@link weshnet.protocol.v1.GroupAddAdditionalRendezvousSeed.verify|verify} messages.
                 * @param message GroupAddAdditionalRendezvousSeed message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupAddAdditionalRendezvousSeed, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupAddAdditionalRendezvousSeed message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupAddAdditionalRendezvousSeed.verify|verify} messages.
                 * @param message GroupAddAdditionalRendezvousSeed message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupAddAdditionalRendezvousSeed, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupAddAdditionalRendezvousSeed message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupAddAdditionalRendezvousSeed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupAddAdditionalRendezvousSeed;

                /**
                 * Decodes a GroupAddAdditionalRendezvousSeed message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupAddAdditionalRendezvousSeed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupAddAdditionalRendezvousSeed;

                /**
                 * Verifies a GroupAddAdditionalRendezvousSeed message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupAddAdditionalRendezvousSeed message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupAddAdditionalRendezvousSeed
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupAddAdditionalRendezvousSeed;

                /**
                 * Creates a plain object from a GroupAddAdditionalRendezvousSeed message. Also converts values to other types if specified.
                 * @param message GroupAddAdditionalRendezvousSeed
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupAddAdditionalRendezvousSeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupAddAdditionalRendezvousSeed to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupAddAdditionalRendezvousSeed
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GroupRemoveAdditionalRendezvousSeed. */
            interface IGroupRemoveAdditionalRendezvousSeed {

                /** GroupRemoveAdditionalRendezvousSeed devicePk */
                devicePk?: (Uint8Array|null);

                /** GroupRemoveAdditionalRendezvousSeed seed */
                seed?: (Uint8Array|null);
            }

            /** Represents a GroupRemoveAdditionalRendezvousSeed. */
            class GroupRemoveAdditionalRendezvousSeed implements IGroupRemoveAdditionalRendezvousSeed {

                /**
                 * Constructs a new GroupRemoveAdditionalRendezvousSeed.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupRemoveAdditionalRendezvousSeed);

                /** GroupRemoveAdditionalRendezvousSeed devicePk. */
                public devicePk: Uint8Array;

                /** GroupRemoveAdditionalRendezvousSeed seed. */
                public seed: Uint8Array;

                /**
                 * Creates a new GroupRemoveAdditionalRendezvousSeed instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupRemoveAdditionalRendezvousSeed instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupRemoveAdditionalRendezvousSeed): weshnet.protocol.v1.GroupRemoveAdditionalRendezvousSeed;

                /**
                 * Encodes the specified GroupRemoveAdditionalRendezvousSeed message. Does not implicitly {@link weshnet.protocol.v1.GroupRemoveAdditionalRendezvousSeed.verify|verify} messages.
                 * @param message GroupRemoveAdditionalRendezvousSeed message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupRemoveAdditionalRendezvousSeed, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupRemoveAdditionalRendezvousSeed message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupRemoveAdditionalRendezvousSeed.verify|verify} messages.
                 * @param message GroupRemoveAdditionalRendezvousSeed message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupRemoveAdditionalRendezvousSeed, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupRemoveAdditionalRendezvousSeed message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupRemoveAdditionalRendezvousSeed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupRemoveAdditionalRendezvousSeed;

                /**
                 * Decodes a GroupRemoveAdditionalRendezvousSeed message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupRemoveAdditionalRendezvousSeed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupRemoveAdditionalRendezvousSeed;

                /**
                 * Verifies a GroupRemoveAdditionalRendezvousSeed message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupRemoveAdditionalRendezvousSeed message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupRemoveAdditionalRendezvousSeed
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupRemoveAdditionalRendezvousSeed;

                /**
                 * Creates a plain object from a GroupRemoveAdditionalRendezvousSeed message. Also converts values to other types if specified.
                 * @param message GroupRemoveAdditionalRendezvousSeed
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupRemoveAdditionalRendezvousSeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupRemoveAdditionalRendezvousSeed to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupRemoveAdditionalRendezvousSeed
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountGroupJoined. */
            interface IAccountGroupJoined {

                /** AccountGroupJoined devicePk */
                devicePk?: (Uint8Array|null);

                /** AccountGroupJoined group */
                group?: (weshnet.protocol.v1.IGroup|null);
            }

            /** Represents an AccountGroupJoined. */
            class AccountGroupJoined implements IAccountGroupJoined {

                /**
                 * Constructs a new AccountGroupJoined.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountGroupJoined);

                /** AccountGroupJoined devicePk. */
                public devicePk: Uint8Array;

                /** AccountGroupJoined group. */
                public group?: (weshnet.protocol.v1.IGroup|null);

                /**
                 * Creates a new AccountGroupJoined instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountGroupJoined instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountGroupJoined): weshnet.protocol.v1.AccountGroupJoined;

                /**
                 * Encodes the specified AccountGroupJoined message. Does not implicitly {@link weshnet.protocol.v1.AccountGroupJoined.verify|verify} messages.
                 * @param message AccountGroupJoined message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountGroupJoined, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountGroupJoined message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountGroupJoined.verify|verify} messages.
                 * @param message AccountGroupJoined message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountGroupJoined, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountGroupJoined message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountGroupJoined
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountGroupJoined;

                /**
                 * Decodes an AccountGroupJoined message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountGroupJoined
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountGroupJoined;

                /**
                 * Verifies an AccountGroupJoined message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountGroupJoined message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountGroupJoined
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountGroupJoined;

                /**
                 * Creates a plain object from an AccountGroupJoined message. Also converts values to other types if specified.
                 * @param message AccountGroupJoined
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountGroupJoined, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountGroupJoined to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountGroupJoined
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountGroupLeft. */
            interface IAccountGroupLeft {

                /** AccountGroupLeft devicePk */
                devicePk?: (Uint8Array|null);

                /** AccountGroupLeft groupPk */
                groupPk?: (Uint8Array|null);
            }

            /** Represents an AccountGroupLeft. */
            class AccountGroupLeft implements IAccountGroupLeft {

                /**
                 * Constructs a new AccountGroupLeft.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountGroupLeft);

                /** AccountGroupLeft devicePk. */
                public devicePk: Uint8Array;

                /** AccountGroupLeft groupPk. */
                public groupPk: Uint8Array;

                /**
                 * Creates a new AccountGroupLeft instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountGroupLeft instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountGroupLeft): weshnet.protocol.v1.AccountGroupLeft;

                /**
                 * Encodes the specified AccountGroupLeft message. Does not implicitly {@link weshnet.protocol.v1.AccountGroupLeft.verify|verify} messages.
                 * @param message AccountGroupLeft message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountGroupLeft, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountGroupLeft message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountGroupLeft.verify|verify} messages.
                 * @param message AccountGroupLeft message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountGroupLeft, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountGroupLeft message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountGroupLeft
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountGroupLeft;

                /**
                 * Decodes an AccountGroupLeft message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountGroupLeft
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountGroupLeft;

                /**
                 * Verifies an AccountGroupLeft message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountGroupLeft message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountGroupLeft
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountGroupLeft;

                /**
                 * Creates a plain object from an AccountGroupLeft message. Also converts values to other types if specified.
                 * @param message AccountGroupLeft
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountGroupLeft, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountGroupLeft to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountGroupLeft
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountContactRequestDisabled. */
            interface IAccountContactRequestDisabled {

                /** AccountContactRequestDisabled devicePk */
                devicePk?: (Uint8Array|null);
            }

            /** Represents an AccountContactRequestDisabled. */
            class AccountContactRequestDisabled implements IAccountContactRequestDisabled {

                /**
                 * Constructs a new AccountContactRequestDisabled.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountContactRequestDisabled);

                /** AccountContactRequestDisabled devicePk. */
                public devicePk: Uint8Array;

                /**
                 * Creates a new AccountContactRequestDisabled instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountContactRequestDisabled instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountContactRequestDisabled): weshnet.protocol.v1.AccountContactRequestDisabled;

                /**
                 * Encodes the specified AccountContactRequestDisabled message. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestDisabled.verify|verify} messages.
                 * @param message AccountContactRequestDisabled message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountContactRequestDisabled, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountContactRequestDisabled message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestDisabled.verify|verify} messages.
                 * @param message AccountContactRequestDisabled message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountContactRequestDisabled, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountContactRequestDisabled message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountContactRequestDisabled
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountContactRequestDisabled;

                /**
                 * Decodes an AccountContactRequestDisabled message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountContactRequestDisabled
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountContactRequestDisabled;

                /**
                 * Verifies an AccountContactRequestDisabled message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountContactRequestDisabled message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountContactRequestDisabled
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountContactRequestDisabled;

                /**
                 * Creates a plain object from an AccountContactRequestDisabled message. Also converts values to other types if specified.
                 * @param message AccountContactRequestDisabled
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountContactRequestDisabled, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountContactRequestDisabled to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountContactRequestDisabled
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountContactRequestEnabled. */
            interface IAccountContactRequestEnabled {

                /** AccountContactRequestEnabled devicePk */
                devicePk?: (Uint8Array|null);
            }

            /** Represents an AccountContactRequestEnabled. */
            class AccountContactRequestEnabled implements IAccountContactRequestEnabled {

                /**
                 * Constructs a new AccountContactRequestEnabled.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountContactRequestEnabled);

                /** AccountContactRequestEnabled devicePk. */
                public devicePk: Uint8Array;

                /**
                 * Creates a new AccountContactRequestEnabled instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountContactRequestEnabled instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountContactRequestEnabled): weshnet.protocol.v1.AccountContactRequestEnabled;

                /**
                 * Encodes the specified AccountContactRequestEnabled message. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestEnabled.verify|verify} messages.
                 * @param message AccountContactRequestEnabled message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountContactRequestEnabled, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountContactRequestEnabled message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestEnabled.verify|verify} messages.
                 * @param message AccountContactRequestEnabled message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountContactRequestEnabled, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountContactRequestEnabled message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountContactRequestEnabled
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountContactRequestEnabled;

                /**
                 * Decodes an AccountContactRequestEnabled message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountContactRequestEnabled
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountContactRequestEnabled;

                /**
                 * Verifies an AccountContactRequestEnabled message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountContactRequestEnabled message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountContactRequestEnabled
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountContactRequestEnabled;

                /**
                 * Creates a plain object from an AccountContactRequestEnabled message. Also converts values to other types if specified.
                 * @param message AccountContactRequestEnabled
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountContactRequestEnabled, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountContactRequestEnabled to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountContactRequestEnabled
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountContactRequestReferenceReset. */
            interface IAccountContactRequestReferenceReset {

                /** AccountContactRequestReferenceReset devicePk */
                devicePk?: (Uint8Array|null);

                /** AccountContactRequestReferenceReset publicRendezvousSeed */
                publicRendezvousSeed?: (Uint8Array|null);
            }

            /** Represents an AccountContactRequestReferenceReset. */
            class AccountContactRequestReferenceReset implements IAccountContactRequestReferenceReset {

                /**
                 * Constructs a new AccountContactRequestReferenceReset.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountContactRequestReferenceReset);

                /** AccountContactRequestReferenceReset devicePk. */
                public devicePk: Uint8Array;

                /** AccountContactRequestReferenceReset publicRendezvousSeed. */
                public publicRendezvousSeed: Uint8Array;

                /**
                 * Creates a new AccountContactRequestReferenceReset instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountContactRequestReferenceReset instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountContactRequestReferenceReset): weshnet.protocol.v1.AccountContactRequestReferenceReset;

                /**
                 * Encodes the specified AccountContactRequestReferenceReset message. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestReferenceReset.verify|verify} messages.
                 * @param message AccountContactRequestReferenceReset message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountContactRequestReferenceReset, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountContactRequestReferenceReset message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestReferenceReset.verify|verify} messages.
                 * @param message AccountContactRequestReferenceReset message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountContactRequestReferenceReset, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountContactRequestReferenceReset message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountContactRequestReferenceReset
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountContactRequestReferenceReset;

                /**
                 * Decodes an AccountContactRequestReferenceReset message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountContactRequestReferenceReset
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountContactRequestReferenceReset;

                /**
                 * Verifies an AccountContactRequestReferenceReset message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountContactRequestReferenceReset message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountContactRequestReferenceReset
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountContactRequestReferenceReset;

                /**
                 * Creates a plain object from an AccountContactRequestReferenceReset message. Also converts values to other types if specified.
                 * @param message AccountContactRequestReferenceReset
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountContactRequestReferenceReset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountContactRequestReferenceReset to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountContactRequestReferenceReset
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountContactRequestOutgoingEnqueued. */
            interface IAccountContactRequestOutgoingEnqueued {

                /** AccountContactRequestOutgoingEnqueued devicePk */
                devicePk?: (Uint8Array|null);

                /** AccountContactRequestOutgoingEnqueued groupPk */
                groupPk?: (Uint8Array|null);

                /** AccountContactRequestOutgoingEnqueued contact */
                contact?: (weshnet.protocol.v1.IShareableContact|null);

                /** AccountContactRequestOutgoingEnqueued ownMetadata */
                ownMetadata?: (Uint8Array|null);
            }

            /** Represents an AccountContactRequestOutgoingEnqueued. */
            class AccountContactRequestOutgoingEnqueued implements IAccountContactRequestOutgoingEnqueued {

                /**
                 * Constructs a new AccountContactRequestOutgoingEnqueued.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountContactRequestOutgoingEnqueued);

                /** AccountContactRequestOutgoingEnqueued devicePk. */
                public devicePk: Uint8Array;

                /** AccountContactRequestOutgoingEnqueued groupPk. */
                public groupPk: Uint8Array;

                /** AccountContactRequestOutgoingEnqueued contact. */
                public contact?: (weshnet.protocol.v1.IShareableContact|null);

                /** AccountContactRequestOutgoingEnqueued ownMetadata. */
                public ownMetadata: Uint8Array;

                /**
                 * Creates a new AccountContactRequestOutgoingEnqueued instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountContactRequestOutgoingEnqueued instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountContactRequestOutgoingEnqueued): weshnet.protocol.v1.AccountContactRequestOutgoingEnqueued;

                /**
                 * Encodes the specified AccountContactRequestOutgoingEnqueued message. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestOutgoingEnqueued.verify|verify} messages.
                 * @param message AccountContactRequestOutgoingEnqueued message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountContactRequestOutgoingEnqueued, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountContactRequestOutgoingEnqueued message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestOutgoingEnqueued.verify|verify} messages.
                 * @param message AccountContactRequestOutgoingEnqueued message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountContactRequestOutgoingEnqueued, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountContactRequestOutgoingEnqueued message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountContactRequestOutgoingEnqueued
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountContactRequestOutgoingEnqueued;

                /**
                 * Decodes an AccountContactRequestOutgoingEnqueued message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountContactRequestOutgoingEnqueued
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountContactRequestOutgoingEnqueued;

                /**
                 * Verifies an AccountContactRequestOutgoingEnqueued message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountContactRequestOutgoingEnqueued message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountContactRequestOutgoingEnqueued
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountContactRequestOutgoingEnqueued;

                /**
                 * Creates a plain object from an AccountContactRequestOutgoingEnqueued message. Also converts values to other types if specified.
                 * @param message AccountContactRequestOutgoingEnqueued
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountContactRequestOutgoingEnqueued, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountContactRequestOutgoingEnqueued to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountContactRequestOutgoingEnqueued
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountContactRequestOutgoingSent. */
            interface IAccountContactRequestOutgoingSent {

                /** AccountContactRequestOutgoingSent devicePk */
                devicePk?: (Uint8Array|null);

                /** AccountContactRequestOutgoingSent contactPk */
                contactPk?: (Uint8Array|null);
            }

            /** Represents an AccountContactRequestOutgoingSent. */
            class AccountContactRequestOutgoingSent implements IAccountContactRequestOutgoingSent {

                /**
                 * Constructs a new AccountContactRequestOutgoingSent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountContactRequestOutgoingSent);

                /** AccountContactRequestOutgoingSent devicePk. */
                public devicePk: Uint8Array;

                /** AccountContactRequestOutgoingSent contactPk. */
                public contactPk: Uint8Array;

                /**
                 * Creates a new AccountContactRequestOutgoingSent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountContactRequestOutgoingSent instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountContactRequestOutgoingSent): weshnet.protocol.v1.AccountContactRequestOutgoingSent;

                /**
                 * Encodes the specified AccountContactRequestOutgoingSent message. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestOutgoingSent.verify|verify} messages.
                 * @param message AccountContactRequestOutgoingSent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountContactRequestOutgoingSent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountContactRequestOutgoingSent message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestOutgoingSent.verify|verify} messages.
                 * @param message AccountContactRequestOutgoingSent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountContactRequestOutgoingSent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountContactRequestOutgoingSent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountContactRequestOutgoingSent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountContactRequestOutgoingSent;

                /**
                 * Decodes an AccountContactRequestOutgoingSent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountContactRequestOutgoingSent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountContactRequestOutgoingSent;

                /**
                 * Verifies an AccountContactRequestOutgoingSent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountContactRequestOutgoingSent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountContactRequestOutgoingSent
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountContactRequestOutgoingSent;

                /**
                 * Creates a plain object from an AccountContactRequestOutgoingSent message. Also converts values to other types if specified.
                 * @param message AccountContactRequestOutgoingSent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountContactRequestOutgoingSent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountContactRequestOutgoingSent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountContactRequestOutgoingSent
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountContactRequestIncomingReceived. */
            interface IAccountContactRequestIncomingReceived {

                /** AccountContactRequestIncomingReceived devicePk */
                devicePk?: (Uint8Array|null);

                /** AccountContactRequestIncomingReceived contactPk */
                contactPk?: (Uint8Array|null);

                /** AccountContactRequestIncomingReceived contactRendezvousSeed */
                contactRendezvousSeed?: (Uint8Array|null);

                /** AccountContactRequestIncomingReceived contactMetadata */
                contactMetadata?: (Uint8Array|null);
            }

            /** Represents an AccountContactRequestIncomingReceived. */
            class AccountContactRequestIncomingReceived implements IAccountContactRequestIncomingReceived {

                /**
                 * Constructs a new AccountContactRequestIncomingReceived.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountContactRequestIncomingReceived);

                /** AccountContactRequestIncomingReceived devicePk. */
                public devicePk: Uint8Array;

                /** AccountContactRequestIncomingReceived contactPk. */
                public contactPk: Uint8Array;

                /** AccountContactRequestIncomingReceived contactRendezvousSeed. */
                public contactRendezvousSeed: Uint8Array;

                /** AccountContactRequestIncomingReceived contactMetadata. */
                public contactMetadata: Uint8Array;

                /**
                 * Creates a new AccountContactRequestIncomingReceived instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountContactRequestIncomingReceived instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountContactRequestIncomingReceived): weshnet.protocol.v1.AccountContactRequestIncomingReceived;

                /**
                 * Encodes the specified AccountContactRequestIncomingReceived message. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestIncomingReceived.verify|verify} messages.
                 * @param message AccountContactRequestIncomingReceived message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountContactRequestIncomingReceived, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountContactRequestIncomingReceived message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestIncomingReceived.verify|verify} messages.
                 * @param message AccountContactRequestIncomingReceived message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountContactRequestIncomingReceived, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountContactRequestIncomingReceived message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountContactRequestIncomingReceived
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountContactRequestIncomingReceived;

                /**
                 * Decodes an AccountContactRequestIncomingReceived message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountContactRequestIncomingReceived
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountContactRequestIncomingReceived;

                /**
                 * Verifies an AccountContactRequestIncomingReceived message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountContactRequestIncomingReceived message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountContactRequestIncomingReceived
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountContactRequestIncomingReceived;

                /**
                 * Creates a plain object from an AccountContactRequestIncomingReceived message. Also converts values to other types if specified.
                 * @param message AccountContactRequestIncomingReceived
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountContactRequestIncomingReceived, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountContactRequestIncomingReceived to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountContactRequestIncomingReceived
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountContactRequestIncomingDiscarded. */
            interface IAccountContactRequestIncomingDiscarded {

                /** AccountContactRequestIncomingDiscarded devicePk */
                devicePk?: (Uint8Array|null);

                /** AccountContactRequestIncomingDiscarded contactPk */
                contactPk?: (Uint8Array|null);
            }

            /** Represents an AccountContactRequestIncomingDiscarded. */
            class AccountContactRequestIncomingDiscarded implements IAccountContactRequestIncomingDiscarded {

                /**
                 * Constructs a new AccountContactRequestIncomingDiscarded.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountContactRequestIncomingDiscarded);

                /** AccountContactRequestIncomingDiscarded devicePk. */
                public devicePk: Uint8Array;

                /** AccountContactRequestIncomingDiscarded contactPk. */
                public contactPk: Uint8Array;

                /**
                 * Creates a new AccountContactRequestIncomingDiscarded instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountContactRequestIncomingDiscarded instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountContactRequestIncomingDiscarded): weshnet.protocol.v1.AccountContactRequestIncomingDiscarded;

                /**
                 * Encodes the specified AccountContactRequestIncomingDiscarded message. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestIncomingDiscarded.verify|verify} messages.
                 * @param message AccountContactRequestIncomingDiscarded message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountContactRequestIncomingDiscarded, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountContactRequestIncomingDiscarded message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestIncomingDiscarded.verify|verify} messages.
                 * @param message AccountContactRequestIncomingDiscarded message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountContactRequestIncomingDiscarded, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountContactRequestIncomingDiscarded message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountContactRequestIncomingDiscarded
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountContactRequestIncomingDiscarded;

                /**
                 * Decodes an AccountContactRequestIncomingDiscarded message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountContactRequestIncomingDiscarded
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountContactRequestIncomingDiscarded;

                /**
                 * Verifies an AccountContactRequestIncomingDiscarded message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountContactRequestIncomingDiscarded message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountContactRequestIncomingDiscarded
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountContactRequestIncomingDiscarded;

                /**
                 * Creates a plain object from an AccountContactRequestIncomingDiscarded message. Also converts values to other types if specified.
                 * @param message AccountContactRequestIncomingDiscarded
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountContactRequestIncomingDiscarded, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountContactRequestIncomingDiscarded to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountContactRequestIncomingDiscarded
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountContactRequestIncomingAccepted. */
            interface IAccountContactRequestIncomingAccepted {

                /** AccountContactRequestIncomingAccepted devicePk */
                devicePk?: (Uint8Array|null);

                /** AccountContactRequestIncomingAccepted contactPk */
                contactPk?: (Uint8Array|null);

                /** AccountContactRequestIncomingAccepted groupPk */
                groupPk?: (Uint8Array|null);
            }

            /** Represents an AccountContactRequestIncomingAccepted. */
            class AccountContactRequestIncomingAccepted implements IAccountContactRequestIncomingAccepted {

                /**
                 * Constructs a new AccountContactRequestIncomingAccepted.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountContactRequestIncomingAccepted);

                /** AccountContactRequestIncomingAccepted devicePk. */
                public devicePk: Uint8Array;

                /** AccountContactRequestIncomingAccepted contactPk. */
                public contactPk: Uint8Array;

                /** AccountContactRequestIncomingAccepted groupPk. */
                public groupPk: Uint8Array;

                /**
                 * Creates a new AccountContactRequestIncomingAccepted instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountContactRequestIncomingAccepted instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountContactRequestIncomingAccepted): weshnet.protocol.v1.AccountContactRequestIncomingAccepted;

                /**
                 * Encodes the specified AccountContactRequestIncomingAccepted message. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestIncomingAccepted.verify|verify} messages.
                 * @param message AccountContactRequestIncomingAccepted message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountContactRequestIncomingAccepted, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountContactRequestIncomingAccepted message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountContactRequestIncomingAccepted.verify|verify} messages.
                 * @param message AccountContactRequestIncomingAccepted message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountContactRequestIncomingAccepted, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountContactRequestIncomingAccepted message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountContactRequestIncomingAccepted
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountContactRequestIncomingAccepted;

                /**
                 * Decodes an AccountContactRequestIncomingAccepted message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountContactRequestIncomingAccepted
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountContactRequestIncomingAccepted;

                /**
                 * Verifies an AccountContactRequestIncomingAccepted message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountContactRequestIncomingAccepted message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountContactRequestIncomingAccepted
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountContactRequestIncomingAccepted;

                /**
                 * Creates a plain object from an AccountContactRequestIncomingAccepted message. Also converts values to other types if specified.
                 * @param message AccountContactRequestIncomingAccepted
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountContactRequestIncomingAccepted, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountContactRequestIncomingAccepted to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountContactRequestIncomingAccepted
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountContactBlocked. */
            interface IAccountContactBlocked {

                /** AccountContactBlocked devicePk */
                devicePk?: (Uint8Array|null);

                /** AccountContactBlocked contactPk */
                contactPk?: (Uint8Array|null);
            }

            /** Represents an AccountContactBlocked. */
            class AccountContactBlocked implements IAccountContactBlocked {

                /**
                 * Constructs a new AccountContactBlocked.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountContactBlocked);

                /** AccountContactBlocked devicePk. */
                public devicePk: Uint8Array;

                /** AccountContactBlocked contactPk. */
                public contactPk: Uint8Array;

                /**
                 * Creates a new AccountContactBlocked instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountContactBlocked instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountContactBlocked): weshnet.protocol.v1.AccountContactBlocked;

                /**
                 * Encodes the specified AccountContactBlocked message. Does not implicitly {@link weshnet.protocol.v1.AccountContactBlocked.verify|verify} messages.
                 * @param message AccountContactBlocked message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountContactBlocked, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountContactBlocked message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountContactBlocked.verify|verify} messages.
                 * @param message AccountContactBlocked message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountContactBlocked, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountContactBlocked message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountContactBlocked
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountContactBlocked;

                /**
                 * Decodes an AccountContactBlocked message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountContactBlocked
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountContactBlocked;

                /**
                 * Verifies an AccountContactBlocked message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountContactBlocked message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountContactBlocked
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountContactBlocked;

                /**
                 * Creates a plain object from an AccountContactBlocked message. Also converts values to other types if specified.
                 * @param message AccountContactBlocked
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountContactBlocked, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountContactBlocked to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountContactBlocked
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccountContactUnblocked. */
            interface IAccountContactUnblocked {

                /** AccountContactUnblocked devicePk */
                devicePk?: (Uint8Array|null);

                /** AccountContactUnblocked contactPk */
                contactPk?: (Uint8Array|null);
            }

            /** Represents an AccountContactUnblocked. */
            class AccountContactUnblocked implements IAccountContactUnblocked {

                /**
                 * Constructs a new AccountContactUnblocked.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountContactUnblocked);

                /** AccountContactUnblocked devicePk. */
                public devicePk: Uint8Array;

                /** AccountContactUnblocked contactPk. */
                public contactPk: Uint8Array;

                /**
                 * Creates a new AccountContactUnblocked instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountContactUnblocked instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountContactUnblocked): weshnet.protocol.v1.AccountContactUnblocked;

                /**
                 * Encodes the specified AccountContactUnblocked message. Does not implicitly {@link weshnet.protocol.v1.AccountContactUnblocked.verify|verify} messages.
                 * @param message AccountContactUnblocked message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountContactUnblocked, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountContactUnblocked message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountContactUnblocked.verify|verify} messages.
                 * @param message AccountContactUnblocked message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountContactUnblocked, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountContactUnblocked message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountContactUnblocked
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountContactUnblocked;

                /**
                 * Decodes an AccountContactUnblocked message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountContactUnblocked
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountContactUnblocked;

                /**
                 * Verifies an AccountContactUnblocked message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountContactUnblocked message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountContactUnblocked
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountContactUnblocked;

                /**
                 * Creates a plain object from an AccountContactUnblocked message. Also converts values to other types if specified.
                 * @param message AccountContactUnblocked
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountContactUnblocked, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountContactUnblocked to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountContactUnblocked
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GroupReplicating. */
            interface IGroupReplicating {

                /** GroupReplicating devicePk */
                devicePk?: (Uint8Array|null);

                /** GroupReplicating authenticationUrl */
                authenticationUrl?: (string|null);

                /** GroupReplicating replicationServer */
                replicationServer?: (string|null);
            }

            /** Represents a GroupReplicating. */
            class GroupReplicating implements IGroupReplicating {

                /**
                 * Constructs a new GroupReplicating.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupReplicating);

                /** GroupReplicating devicePk. */
                public devicePk: Uint8Array;

                /** GroupReplicating authenticationUrl. */
                public authenticationUrl: string;

                /** GroupReplicating replicationServer. */
                public replicationServer: string;

                /**
                 * Creates a new GroupReplicating instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupReplicating instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupReplicating): weshnet.protocol.v1.GroupReplicating;

                /**
                 * Encodes the specified GroupReplicating message. Does not implicitly {@link weshnet.protocol.v1.GroupReplicating.verify|verify} messages.
                 * @param message GroupReplicating message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupReplicating, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupReplicating message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupReplicating.verify|verify} messages.
                 * @param message GroupReplicating message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupReplicating, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupReplicating message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupReplicating
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupReplicating;

                /**
                 * Decodes a GroupReplicating message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupReplicating
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupReplicating;

                /**
                 * Verifies a GroupReplicating message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupReplicating message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupReplicating
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupReplicating;

                /**
                 * Creates a plain object from a GroupReplicating message. Also converts values to other types if specified.
                 * @param message GroupReplicating
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupReplicating, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupReplicating to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupReplicating
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ServiceExportData. */
            interface IServiceExportData {
            }

            /** Represents a ServiceExportData. */
            class ServiceExportData implements IServiceExportData {

                /**
                 * Constructs a new ServiceExportData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IServiceExportData);

                /**
                 * Creates a new ServiceExportData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServiceExportData instance
                 */
                public static create(properties?: weshnet.protocol.v1.IServiceExportData): weshnet.protocol.v1.ServiceExportData;

                /**
                 * Encodes the specified ServiceExportData message. Does not implicitly {@link weshnet.protocol.v1.ServiceExportData.verify|verify} messages.
                 * @param message ServiceExportData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IServiceExportData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServiceExportData message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ServiceExportData.verify|verify} messages.
                 * @param message ServiceExportData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IServiceExportData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServiceExportData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServiceExportData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ServiceExportData;

                /**
                 * Decodes a ServiceExportData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServiceExportData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ServiceExportData;

                /**
                 * Verifies a ServiceExportData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ServiceExportData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ServiceExportData
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ServiceExportData;

                /**
                 * Creates a plain object from a ServiceExportData message. Also converts values to other types if specified.
                 * @param message ServiceExportData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ServiceExportData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ServiceExportData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ServiceExportData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ServiceExportData {

                /** Properties of a Request. */
                interface IRequest {
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ServiceExportData.IRequest);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ServiceExportData.IRequest): weshnet.protocol.v1.ServiceExportData.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ServiceExportData.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ServiceExportData.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ServiceExportData.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ServiceExportData.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ServiceExportData.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ServiceExportData.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ServiceExportData.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ServiceExportData.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply exportedData */
                    exportedData?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ServiceExportData.IReply);

                    /** Reply exportedData. */
                    public exportedData: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ServiceExportData.IReply): weshnet.protocol.v1.ServiceExportData.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ServiceExportData.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ServiceExportData.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ServiceExportData.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ServiceExportData.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ServiceExportData.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ServiceExportData.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ServiceExportData.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ServiceExportData.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ServiceGetConfiguration. */
            interface IServiceGetConfiguration {
            }

            /** Represents a ServiceGetConfiguration. */
            class ServiceGetConfiguration implements IServiceGetConfiguration {

                /**
                 * Constructs a new ServiceGetConfiguration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IServiceGetConfiguration);

                /**
                 * Creates a new ServiceGetConfiguration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServiceGetConfiguration instance
                 */
                public static create(properties?: weshnet.protocol.v1.IServiceGetConfiguration): weshnet.protocol.v1.ServiceGetConfiguration;

                /**
                 * Encodes the specified ServiceGetConfiguration message. Does not implicitly {@link weshnet.protocol.v1.ServiceGetConfiguration.verify|verify} messages.
                 * @param message ServiceGetConfiguration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IServiceGetConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServiceGetConfiguration message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ServiceGetConfiguration.verify|verify} messages.
                 * @param message ServiceGetConfiguration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IServiceGetConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServiceGetConfiguration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServiceGetConfiguration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ServiceGetConfiguration;

                /**
                 * Decodes a ServiceGetConfiguration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServiceGetConfiguration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ServiceGetConfiguration;

                /**
                 * Verifies a ServiceGetConfiguration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ServiceGetConfiguration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ServiceGetConfiguration
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ServiceGetConfiguration;

                /**
                 * Creates a plain object from a ServiceGetConfiguration message. Also converts values to other types if specified.
                 * @param message ServiceGetConfiguration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ServiceGetConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ServiceGetConfiguration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ServiceGetConfiguration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ServiceGetConfiguration {

                /** SettingState enum. */
                enum SettingState {
                    Unknown = 0,
                    Enabled = 1,
                    Disabled = 2,
                    Unavailable = 3
                }

                /** Properties of a Request. */
                interface IRequest {
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ServiceGetConfiguration.IRequest);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ServiceGetConfiguration.IRequest): weshnet.protocol.v1.ServiceGetConfiguration.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ServiceGetConfiguration.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ServiceGetConfiguration.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ServiceGetConfiguration.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ServiceGetConfiguration.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ServiceGetConfiguration.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ServiceGetConfiguration.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ServiceGetConfiguration.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ServiceGetConfiguration.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply accountPk */
                    accountPk?: (Uint8Array|null);

                    /** Reply devicePk */
                    devicePk?: (Uint8Array|null);

                    /** Reply accountGroupPk */
                    accountGroupPk?: (Uint8Array|null);

                    /** Reply peerId */
                    peerId?: (string|null);

                    /** Reply listeners */
                    listeners?: (string[]|null);

                    /** Reply bleEnabled */
                    bleEnabled?: (weshnet.protocol.v1.ServiceGetConfiguration.SettingState|null);

                    /** Reply wifiP2pEnabled */
                    wifiP2pEnabled?: (weshnet.protocol.v1.ServiceGetConfiguration.SettingState|null);

                    /** Reply mdnsEnabled */
                    mdnsEnabled?: (weshnet.protocol.v1.ServiceGetConfiguration.SettingState|null);

                    /** Reply relayEnabled */
                    relayEnabled?: (weshnet.protocol.v1.ServiceGetConfiguration.SettingState|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ServiceGetConfiguration.IReply);

                    /** Reply accountPk. */
                    public accountPk: Uint8Array;

                    /** Reply devicePk. */
                    public devicePk: Uint8Array;

                    /** Reply accountGroupPk. */
                    public accountGroupPk: Uint8Array;

                    /** Reply peerId. */
                    public peerId: string;

                    /** Reply listeners. */
                    public listeners: string[];

                    /** Reply bleEnabled. */
                    public bleEnabled: weshnet.protocol.v1.ServiceGetConfiguration.SettingState;

                    /** Reply wifiP2pEnabled. */
                    public wifiP2pEnabled: weshnet.protocol.v1.ServiceGetConfiguration.SettingState;

                    /** Reply mdnsEnabled. */
                    public mdnsEnabled: weshnet.protocol.v1.ServiceGetConfiguration.SettingState;

                    /** Reply relayEnabled. */
                    public relayEnabled: weshnet.protocol.v1.ServiceGetConfiguration.SettingState;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ServiceGetConfiguration.IReply): weshnet.protocol.v1.ServiceGetConfiguration.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ServiceGetConfiguration.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ServiceGetConfiguration.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ServiceGetConfiguration.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ServiceGetConfiguration.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ServiceGetConfiguration.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ServiceGetConfiguration.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ServiceGetConfiguration.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ServiceGetConfiguration.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ContactRequestReference. */
            interface IContactRequestReference {
            }

            /** Represents a ContactRequestReference. */
            class ContactRequestReference implements IContactRequestReference {

                /**
                 * Constructs a new ContactRequestReference.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IContactRequestReference);

                /**
                 * Creates a new ContactRequestReference instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactRequestReference instance
                 */
                public static create(properties?: weshnet.protocol.v1.IContactRequestReference): weshnet.protocol.v1.ContactRequestReference;

                /**
                 * Encodes the specified ContactRequestReference message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestReference.verify|verify} messages.
                 * @param message ContactRequestReference message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IContactRequestReference, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactRequestReference message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestReference.verify|verify} messages.
                 * @param message ContactRequestReference message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IContactRequestReference, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactRequestReference message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactRequestReference
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestReference;

                /**
                 * Decodes a ContactRequestReference message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactRequestReference
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestReference;

                /**
                 * Verifies a ContactRequestReference message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactRequestReference message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactRequestReference
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestReference;

                /**
                 * Creates a plain object from a ContactRequestReference message. Also converts values to other types if specified.
                 * @param message ContactRequestReference
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ContactRequestReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactRequestReference to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContactRequestReference
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ContactRequestReference {

                /** Properties of a Request. */
                interface IRequest {
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestReference.IRequest);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestReference.IRequest): weshnet.protocol.v1.ContactRequestReference.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestReference.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestReference.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestReference.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestReference.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestReference.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestReference.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestReference.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestReference.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply publicRendezvousSeed */
                    publicRendezvousSeed?: (Uint8Array|null);

                    /** Reply enabled */
                    enabled?: (boolean|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestReference.IReply);

                    /** Reply publicRendezvousSeed. */
                    public publicRendezvousSeed: Uint8Array;

                    /** Reply enabled. */
                    public enabled: boolean;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestReference.IReply): weshnet.protocol.v1.ContactRequestReference.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestReference.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestReference.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestReference.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestReference.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestReference.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestReference.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestReference.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestReference.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ContactRequestDisable. */
            interface IContactRequestDisable {
            }

            /** Represents a ContactRequestDisable. */
            class ContactRequestDisable implements IContactRequestDisable {

                /**
                 * Constructs a new ContactRequestDisable.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IContactRequestDisable);

                /**
                 * Creates a new ContactRequestDisable instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactRequestDisable instance
                 */
                public static create(properties?: weshnet.protocol.v1.IContactRequestDisable): weshnet.protocol.v1.ContactRequestDisable;

                /**
                 * Encodes the specified ContactRequestDisable message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDisable.verify|verify} messages.
                 * @param message ContactRequestDisable message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IContactRequestDisable, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactRequestDisable message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDisable.verify|verify} messages.
                 * @param message ContactRequestDisable message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IContactRequestDisable, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactRequestDisable message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactRequestDisable
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestDisable;

                /**
                 * Decodes a ContactRequestDisable message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactRequestDisable
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestDisable;

                /**
                 * Verifies a ContactRequestDisable message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactRequestDisable message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactRequestDisable
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestDisable;

                /**
                 * Creates a plain object from a ContactRequestDisable message. Also converts values to other types if specified.
                 * @param message ContactRequestDisable
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ContactRequestDisable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactRequestDisable to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContactRequestDisable
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ContactRequestDisable {

                /** Properties of a Request. */
                interface IRequest {
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestDisable.IRequest);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestDisable.IRequest): weshnet.protocol.v1.ContactRequestDisable.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDisable.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestDisable.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDisable.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestDisable.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestDisable.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestDisable.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestDisable.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestDisable.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestDisable.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestDisable.IReply): weshnet.protocol.v1.ContactRequestDisable.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDisable.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestDisable.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDisable.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestDisable.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestDisable.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestDisable.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestDisable.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestDisable.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ContactRequestEnable. */
            interface IContactRequestEnable {
            }

            /** Represents a ContactRequestEnable. */
            class ContactRequestEnable implements IContactRequestEnable {

                /**
                 * Constructs a new ContactRequestEnable.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IContactRequestEnable);

                /**
                 * Creates a new ContactRequestEnable instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactRequestEnable instance
                 */
                public static create(properties?: weshnet.protocol.v1.IContactRequestEnable): weshnet.protocol.v1.ContactRequestEnable;

                /**
                 * Encodes the specified ContactRequestEnable message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestEnable.verify|verify} messages.
                 * @param message ContactRequestEnable message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IContactRequestEnable, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactRequestEnable message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestEnable.verify|verify} messages.
                 * @param message ContactRequestEnable message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IContactRequestEnable, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactRequestEnable message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactRequestEnable
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestEnable;

                /**
                 * Decodes a ContactRequestEnable message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactRequestEnable
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestEnable;

                /**
                 * Verifies a ContactRequestEnable message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactRequestEnable message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactRequestEnable
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestEnable;

                /**
                 * Creates a plain object from a ContactRequestEnable message. Also converts values to other types if specified.
                 * @param message ContactRequestEnable
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ContactRequestEnable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactRequestEnable to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContactRequestEnable
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ContactRequestEnable {

                /** Properties of a Request. */
                interface IRequest {
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestEnable.IRequest);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestEnable.IRequest): weshnet.protocol.v1.ContactRequestEnable.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestEnable.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestEnable.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestEnable.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestEnable.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestEnable.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestEnable.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestEnable.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestEnable.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply publicRendezvousSeed */
                    publicRendezvousSeed?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestEnable.IReply);

                    /** Reply publicRendezvousSeed. */
                    public publicRendezvousSeed: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestEnable.IReply): weshnet.protocol.v1.ContactRequestEnable.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestEnable.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestEnable.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestEnable.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestEnable.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestEnable.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestEnable.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestEnable.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestEnable.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ContactRequestResetReference. */
            interface IContactRequestResetReference {
            }

            /** Represents a ContactRequestResetReference. */
            class ContactRequestResetReference implements IContactRequestResetReference {

                /**
                 * Constructs a new ContactRequestResetReference.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IContactRequestResetReference);

                /**
                 * Creates a new ContactRequestResetReference instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactRequestResetReference instance
                 */
                public static create(properties?: weshnet.protocol.v1.IContactRequestResetReference): weshnet.protocol.v1.ContactRequestResetReference;

                /**
                 * Encodes the specified ContactRequestResetReference message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestResetReference.verify|verify} messages.
                 * @param message ContactRequestResetReference message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IContactRequestResetReference, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactRequestResetReference message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestResetReference.verify|verify} messages.
                 * @param message ContactRequestResetReference message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IContactRequestResetReference, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactRequestResetReference message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactRequestResetReference
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestResetReference;

                /**
                 * Decodes a ContactRequestResetReference message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactRequestResetReference
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestResetReference;

                /**
                 * Verifies a ContactRequestResetReference message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactRequestResetReference message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactRequestResetReference
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestResetReference;

                /**
                 * Creates a plain object from a ContactRequestResetReference message. Also converts values to other types if specified.
                 * @param message ContactRequestResetReference
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ContactRequestResetReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactRequestResetReference to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContactRequestResetReference
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ContactRequestResetReference {

                /** Properties of a Request. */
                interface IRequest {
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestResetReference.IRequest);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestResetReference.IRequest): weshnet.protocol.v1.ContactRequestResetReference.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestResetReference.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestResetReference.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestResetReference.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestResetReference.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestResetReference.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestResetReference.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestResetReference.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestResetReference.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply publicRendezvousSeed */
                    publicRendezvousSeed?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestResetReference.IReply);

                    /** Reply publicRendezvousSeed. */
                    public publicRendezvousSeed: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestResetReference.IReply): weshnet.protocol.v1.ContactRequestResetReference.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestResetReference.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestResetReference.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestResetReference.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestResetReference.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestResetReference.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestResetReference.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestResetReference.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestResetReference.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ContactRequestSend. */
            interface IContactRequestSend {
            }

            /** Represents a ContactRequestSend. */
            class ContactRequestSend implements IContactRequestSend {

                /**
                 * Constructs a new ContactRequestSend.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IContactRequestSend);

                /**
                 * Creates a new ContactRequestSend instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactRequestSend instance
                 */
                public static create(properties?: weshnet.protocol.v1.IContactRequestSend): weshnet.protocol.v1.ContactRequestSend;

                /**
                 * Encodes the specified ContactRequestSend message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestSend.verify|verify} messages.
                 * @param message ContactRequestSend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IContactRequestSend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactRequestSend message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestSend.verify|verify} messages.
                 * @param message ContactRequestSend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IContactRequestSend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactRequestSend message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactRequestSend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestSend;

                /**
                 * Decodes a ContactRequestSend message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactRequestSend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestSend;

                /**
                 * Verifies a ContactRequestSend message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactRequestSend message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactRequestSend
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestSend;

                /**
                 * Creates a plain object from a ContactRequestSend message. Also converts values to other types if specified.
                 * @param message ContactRequestSend
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ContactRequestSend, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactRequestSend to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContactRequestSend
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ContactRequestSend {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request contact */
                    contact?: (weshnet.protocol.v1.IShareableContact|null);

                    /** Request ownMetadata */
                    ownMetadata?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestSend.IRequest);

                    /** Request contact. */
                    public contact?: (weshnet.protocol.v1.IShareableContact|null);

                    /** Request ownMetadata. */
                    public ownMetadata: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestSend.IRequest): weshnet.protocol.v1.ContactRequestSend.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestSend.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestSend.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestSend.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestSend.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestSend.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestSend.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestSend.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestSend.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestSend.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestSend.IReply): weshnet.protocol.v1.ContactRequestSend.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestSend.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestSend.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestSend.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestSend.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestSend.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestSend.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestSend.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestSend.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ContactRequestAccept. */
            interface IContactRequestAccept {
            }

            /** Represents a ContactRequestAccept. */
            class ContactRequestAccept implements IContactRequestAccept {

                /**
                 * Constructs a new ContactRequestAccept.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IContactRequestAccept);

                /**
                 * Creates a new ContactRequestAccept instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactRequestAccept instance
                 */
                public static create(properties?: weshnet.protocol.v1.IContactRequestAccept): weshnet.protocol.v1.ContactRequestAccept;

                /**
                 * Encodes the specified ContactRequestAccept message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestAccept.verify|verify} messages.
                 * @param message ContactRequestAccept message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IContactRequestAccept, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactRequestAccept message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestAccept.verify|verify} messages.
                 * @param message ContactRequestAccept message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IContactRequestAccept, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactRequestAccept message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactRequestAccept
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestAccept;

                /**
                 * Decodes a ContactRequestAccept message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactRequestAccept
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestAccept;

                /**
                 * Verifies a ContactRequestAccept message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactRequestAccept message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactRequestAccept
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestAccept;

                /**
                 * Creates a plain object from a ContactRequestAccept message. Also converts values to other types if specified.
                 * @param message ContactRequestAccept
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ContactRequestAccept, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactRequestAccept to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContactRequestAccept
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ContactRequestAccept {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request contactPk */
                    contactPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestAccept.IRequest);

                    /** Request contactPk. */
                    public contactPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestAccept.IRequest): weshnet.protocol.v1.ContactRequestAccept.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestAccept.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestAccept.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestAccept.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestAccept.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestAccept.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestAccept.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestAccept.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestAccept.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestAccept.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestAccept.IReply): weshnet.protocol.v1.ContactRequestAccept.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestAccept.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestAccept.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestAccept.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestAccept.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestAccept.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestAccept.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestAccept.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestAccept.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ContactRequestDiscard. */
            interface IContactRequestDiscard {
            }

            /** Represents a ContactRequestDiscard. */
            class ContactRequestDiscard implements IContactRequestDiscard {

                /**
                 * Constructs a new ContactRequestDiscard.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IContactRequestDiscard);

                /**
                 * Creates a new ContactRequestDiscard instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactRequestDiscard instance
                 */
                public static create(properties?: weshnet.protocol.v1.IContactRequestDiscard): weshnet.protocol.v1.ContactRequestDiscard;

                /**
                 * Encodes the specified ContactRequestDiscard message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDiscard.verify|verify} messages.
                 * @param message ContactRequestDiscard message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IContactRequestDiscard, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactRequestDiscard message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDiscard.verify|verify} messages.
                 * @param message ContactRequestDiscard message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IContactRequestDiscard, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactRequestDiscard message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactRequestDiscard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestDiscard;

                /**
                 * Decodes a ContactRequestDiscard message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactRequestDiscard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestDiscard;

                /**
                 * Verifies a ContactRequestDiscard message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactRequestDiscard message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactRequestDiscard
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestDiscard;

                /**
                 * Creates a plain object from a ContactRequestDiscard message. Also converts values to other types if specified.
                 * @param message ContactRequestDiscard
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ContactRequestDiscard, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactRequestDiscard to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContactRequestDiscard
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ContactRequestDiscard {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request contactPk */
                    contactPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestDiscard.IRequest);

                    /** Request contactPk. */
                    public contactPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestDiscard.IRequest): weshnet.protocol.v1.ContactRequestDiscard.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDiscard.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestDiscard.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDiscard.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestDiscard.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestDiscard.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestDiscard.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestDiscard.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestDiscard.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactRequestDiscard.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactRequestDiscard.IReply): weshnet.protocol.v1.ContactRequestDiscard.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDiscard.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactRequestDiscard.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactRequestDiscard.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactRequestDiscard.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactRequestDiscard.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactRequestDiscard.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactRequestDiscard.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactRequestDiscard.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ShareContact. */
            interface IShareContact {
            }

            /** Represents a ShareContact. */
            class ShareContact implements IShareContact {

                /**
                 * Constructs a new ShareContact.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IShareContact);

                /**
                 * Creates a new ShareContact instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ShareContact instance
                 */
                public static create(properties?: weshnet.protocol.v1.IShareContact): weshnet.protocol.v1.ShareContact;

                /**
                 * Encodes the specified ShareContact message. Does not implicitly {@link weshnet.protocol.v1.ShareContact.verify|verify} messages.
                 * @param message ShareContact message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IShareContact, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ShareContact message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ShareContact.verify|verify} messages.
                 * @param message ShareContact message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IShareContact, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ShareContact message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ShareContact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ShareContact;

                /**
                 * Decodes a ShareContact message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ShareContact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ShareContact;

                /**
                 * Verifies a ShareContact message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ShareContact message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ShareContact
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ShareContact;

                /**
                 * Creates a plain object from a ShareContact message. Also converts values to other types if specified.
                 * @param message ShareContact
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ShareContact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ShareContact to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ShareContact
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ShareContact {

                /** Properties of a Request. */
                interface IRequest {
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ShareContact.IRequest);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ShareContact.IRequest): weshnet.protocol.v1.ShareContact.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ShareContact.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ShareContact.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ShareContact.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ShareContact.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ShareContact.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ShareContact.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ShareContact.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ShareContact.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply encodedContact */
                    encodedContact?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ShareContact.IReply);

                    /** Reply encodedContact. */
                    public encodedContact: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ShareContact.IReply): weshnet.protocol.v1.ShareContact.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ShareContact.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ShareContact.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ShareContact.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ShareContact.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ShareContact.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ShareContact.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ShareContact.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ShareContact.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a DecodeContact. */
            interface IDecodeContact {
            }

            /** Represents a DecodeContact. */
            class DecodeContact implements IDecodeContact {

                /**
                 * Constructs a new DecodeContact.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IDecodeContact);

                /**
                 * Creates a new DecodeContact instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DecodeContact instance
                 */
                public static create(properties?: weshnet.protocol.v1.IDecodeContact): weshnet.protocol.v1.DecodeContact;

                /**
                 * Encodes the specified DecodeContact message. Does not implicitly {@link weshnet.protocol.v1.DecodeContact.verify|verify} messages.
                 * @param message DecodeContact message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IDecodeContact, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecodeContact message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DecodeContact.verify|verify} messages.
                 * @param message DecodeContact message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IDecodeContact, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecodeContact message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecodeContact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DecodeContact;

                /**
                 * Decodes a DecodeContact message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecodeContact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DecodeContact;

                /**
                 * Verifies a DecodeContact message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecodeContact message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecodeContact
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DecodeContact;

                /**
                 * Creates a plain object from a DecodeContact message. Also converts values to other types if specified.
                 * @param message DecodeContact
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.DecodeContact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecodeContact to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DecodeContact
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace DecodeContact {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request encodedContact */
                    encodedContact?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.DecodeContact.IRequest);

                    /** Request encodedContact. */
                    public encodedContact: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.DecodeContact.IRequest): weshnet.protocol.v1.DecodeContact.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.DecodeContact.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.DecodeContact.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DecodeContact.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.DecodeContact.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DecodeContact.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DecodeContact.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DecodeContact.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.DecodeContact.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply contact */
                    contact?: (weshnet.protocol.v1.IShareableContact|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.DecodeContact.IReply);

                    /** Reply contact. */
                    public contact?: (weshnet.protocol.v1.IShareableContact|null);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.DecodeContact.IReply): weshnet.protocol.v1.DecodeContact.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.DecodeContact.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.DecodeContact.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DecodeContact.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.DecodeContact.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DecodeContact.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DecodeContact.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DecodeContact.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.DecodeContact.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ContactBlock. */
            interface IContactBlock {
            }

            /** Represents a ContactBlock. */
            class ContactBlock implements IContactBlock {

                /**
                 * Constructs a new ContactBlock.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IContactBlock);

                /**
                 * Creates a new ContactBlock instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactBlock instance
                 */
                public static create(properties?: weshnet.protocol.v1.IContactBlock): weshnet.protocol.v1.ContactBlock;

                /**
                 * Encodes the specified ContactBlock message. Does not implicitly {@link weshnet.protocol.v1.ContactBlock.verify|verify} messages.
                 * @param message ContactBlock message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IContactBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactBlock message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactBlock.verify|verify} messages.
                 * @param message ContactBlock message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IContactBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactBlock message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactBlock
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactBlock;

                /**
                 * Decodes a ContactBlock message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactBlock
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactBlock;

                /**
                 * Verifies a ContactBlock message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactBlock message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactBlock
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactBlock;

                /**
                 * Creates a plain object from a ContactBlock message. Also converts values to other types if specified.
                 * @param message ContactBlock
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ContactBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactBlock to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContactBlock
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ContactBlock {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request contactPk */
                    contactPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactBlock.IRequest);

                    /** Request contactPk. */
                    public contactPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactBlock.IRequest): weshnet.protocol.v1.ContactBlock.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ContactBlock.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactBlock.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactBlock.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactBlock.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactBlock.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactBlock.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactBlock.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactBlock.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactBlock.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactBlock.IReply): weshnet.protocol.v1.ContactBlock.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ContactBlock.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactBlock.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactBlock.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactBlock.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactBlock.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactBlock.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactBlock.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactBlock.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ContactUnblock. */
            interface IContactUnblock {
            }

            /** Represents a ContactUnblock. */
            class ContactUnblock implements IContactUnblock {

                /**
                 * Constructs a new ContactUnblock.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IContactUnblock);

                /**
                 * Creates a new ContactUnblock instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactUnblock instance
                 */
                public static create(properties?: weshnet.protocol.v1.IContactUnblock): weshnet.protocol.v1.ContactUnblock;

                /**
                 * Encodes the specified ContactUnblock message. Does not implicitly {@link weshnet.protocol.v1.ContactUnblock.verify|verify} messages.
                 * @param message ContactUnblock message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IContactUnblock, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactUnblock message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactUnblock.verify|verify} messages.
                 * @param message ContactUnblock message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IContactUnblock, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactUnblock message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactUnblock
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactUnblock;

                /**
                 * Decodes a ContactUnblock message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactUnblock
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactUnblock;

                /**
                 * Verifies a ContactUnblock message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactUnblock message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactUnblock
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactUnblock;

                /**
                 * Creates a plain object from a ContactUnblock message. Also converts values to other types if specified.
                 * @param message ContactUnblock
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ContactUnblock, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactUnblock to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContactUnblock
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ContactUnblock {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request contactPk */
                    contactPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactUnblock.IRequest);

                    /** Request contactPk. */
                    public contactPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactUnblock.IRequest): weshnet.protocol.v1.ContactUnblock.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ContactUnblock.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactUnblock.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactUnblock.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactUnblock.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactUnblock.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactUnblock.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactUnblock.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactUnblock.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactUnblock.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactUnblock.IReply): weshnet.protocol.v1.ContactUnblock.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ContactUnblock.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactUnblock.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactUnblock.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactUnblock.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactUnblock.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactUnblock.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactUnblock.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactUnblock.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ContactAliasKeySend. */
            interface IContactAliasKeySend {
            }

            /** Represents a ContactAliasKeySend. */
            class ContactAliasKeySend implements IContactAliasKeySend {

                /**
                 * Constructs a new ContactAliasKeySend.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IContactAliasKeySend);

                /**
                 * Creates a new ContactAliasKeySend instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactAliasKeySend instance
                 */
                public static create(properties?: weshnet.protocol.v1.IContactAliasKeySend): weshnet.protocol.v1.ContactAliasKeySend;

                /**
                 * Encodes the specified ContactAliasKeySend message. Does not implicitly {@link weshnet.protocol.v1.ContactAliasKeySend.verify|verify} messages.
                 * @param message ContactAliasKeySend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IContactAliasKeySend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactAliasKeySend message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactAliasKeySend.verify|verify} messages.
                 * @param message ContactAliasKeySend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IContactAliasKeySend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactAliasKeySend message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactAliasKeySend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactAliasKeySend;

                /**
                 * Decodes a ContactAliasKeySend message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactAliasKeySend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactAliasKeySend;

                /**
                 * Verifies a ContactAliasKeySend message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactAliasKeySend message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactAliasKeySend
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactAliasKeySend;

                /**
                 * Creates a plain object from a ContactAliasKeySend message. Also converts values to other types if specified.
                 * @param message ContactAliasKeySend
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ContactAliasKeySend, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactAliasKeySend to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContactAliasKeySend
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ContactAliasKeySend {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactAliasKeySend.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactAliasKeySend.IRequest): weshnet.protocol.v1.ContactAliasKeySend.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ContactAliasKeySend.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactAliasKeySend.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactAliasKeySend.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactAliasKeySend.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactAliasKeySend.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactAliasKeySend.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactAliasKeySend.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactAliasKeySend.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ContactAliasKeySend.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ContactAliasKeySend.IReply): weshnet.protocol.v1.ContactAliasKeySend.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ContactAliasKeySend.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ContactAliasKeySend.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ContactAliasKeySend.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ContactAliasKeySend.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ContactAliasKeySend.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ContactAliasKeySend.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ContactAliasKeySend.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ContactAliasKeySend.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a MultiMemberGroupCreate. */
            interface IMultiMemberGroupCreate {
            }

            /** Represents a MultiMemberGroupCreate. */
            class MultiMemberGroupCreate implements IMultiMemberGroupCreate {

                /**
                 * Constructs a new MultiMemberGroupCreate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IMultiMemberGroupCreate);

                /**
                 * Creates a new MultiMemberGroupCreate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiMemberGroupCreate instance
                 */
                public static create(properties?: weshnet.protocol.v1.IMultiMemberGroupCreate): weshnet.protocol.v1.MultiMemberGroupCreate;

                /**
                 * Encodes the specified MultiMemberGroupCreate message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupCreate.verify|verify} messages.
                 * @param message MultiMemberGroupCreate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IMultiMemberGroupCreate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiMemberGroupCreate message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupCreate.verify|verify} messages.
                 * @param message MultiMemberGroupCreate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IMultiMemberGroupCreate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiMemberGroupCreate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultiMemberGroupCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupCreate;

                /**
                 * Decodes a MultiMemberGroupCreate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultiMemberGroupCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupCreate;

                /**
                 * Verifies a MultiMemberGroupCreate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiMemberGroupCreate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiMemberGroupCreate
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupCreate;

                /**
                 * Creates a plain object from a MultiMemberGroupCreate message. Also converts values to other types if specified.
                 * @param message MultiMemberGroupCreate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.MultiMemberGroupCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiMemberGroupCreate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultiMemberGroupCreate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace MultiMemberGroupCreate {

                /** Properties of a Request. */
                interface IRequest {
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupCreate.IRequest);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupCreate.IRequest): weshnet.protocol.v1.MultiMemberGroupCreate.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupCreate.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupCreate.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupCreate.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupCreate.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupCreate.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupCreate.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupCreate.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupCreate.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply groupPk */
                    groupPk?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupCreate.IReply);

                    /** Reply groupPk. */
                    public groupPk: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupCreate.IReply): weshnet.protocol.v1.MultiMemberGroupCreate.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupCreate.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupCreate.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupCreate.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupCreate.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupCreate.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupCreate.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupCreate.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupCreate.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a MultiMemberGroupJoin. */
            interface IMultiMemberGroupJoin {
            }

            /** Represents a MultiMemberGroupJoin. */
            class MultiMemberGroupJoin implements IMultiMemberGroupJoin {

                /**
                 * Constructs a new MultiMemberGroupJoin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IMultiMemberGroupJoin);

                /**
                 * Creates a new MultiMemberGroupJoin instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiMemberGroupJoin instance
                 */
                public static create(properties?: weshnet.protocol.v1.IMultiMemberGroupJoin): weshnet.protocol.v1.MultiMemberGroupJoin;

                /**
                 * Encodes the specified MultiMemberGroupJoin message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupJoin.verify|verify} messages.
                 * @param message MultiMemberGroupJoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IMultiMemberGroupJoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiMemberGroupJoin message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupJoin.verify|verify} messages.
                 * @param message MultiMemberGroupJoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IMultiMemberGroupJoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiMemberGroupJoin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultiMemberGroupJoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupJoin;

                /**
                 * Decodes a MultiMemberGroupJoin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultiMemberGroupJoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupJoin;

                /**
                 * Verifies a MultiMemberGroupJoin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiMemberGroupJoin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiMemberGroupJoin
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupJoin;

                /**
                 * Creates a plain object from a MultiMemberGroupJoin message. Also converts values to other types if specified.
                 * @param message MultiMemberGroupJoin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.MultiMemberGroupJoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiMemberGroupJoin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultiMemberGroupJoin
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace MultiMemberGroupJoin {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request group */
                    group?: (weshnet.protocol.v1.IGroup|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupJoin.IRequest);

                    /** Request group. */
                    public group?: (weshnet.protocol.v1.IGroup|null);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupJoin.IRequest): weshnet.protocol.v1.MultiMemberGroupJoin.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupJoin.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupJoin.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupJoin.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupJoin.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupJoin.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupJoin.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupJoin.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupJoin.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupJoin.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupJoin.IReply): weshnet.protocol.v1.MultiMemberGroupJoin.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupJoin.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupJoin.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupJoin.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupJoin.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupJoin.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupJoin.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupJoin.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupJoin.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a MultiMemberGroupLeave. */
            interface IMultiMemberGroupLeave {
            }

            /** Represents a MultiMemberGroupLeave. */
            class MultiMemberGroupLeave implements IMultiMemberGroupLeave {

                /**
                 * Constructs a new MultiMemberGroupLeave.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IMultiMemberGroupLeave);

                /**
                 * Creates a new MultiMemberGroupLeave instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiMemberGroupLeave instance
                 */
                public static create(properties?: weshnet.protocol.v1.IMultiMemberGroupLeave): weshnet.protocol.v1.MultiMemberGroupLeave;

                /**
                 * Encodes the specified MultiMemberGroupLeave message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupLeave.verify|verify} messages.
                 * @param message MultiMemberGroupLeave message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IMultiMemberGroupLeave, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiMemberGroupLeave message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupLeave.verify|verify} messages.
                 * @param message MultiMemberGroupLeave message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IMultiMemberGroupLeave, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiMemberGroupLeave message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultiMemberGroupLeave
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupLeave;

                /**
                 * Decodes a MultiMemberGroupLeave message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultiMemberGroupLeave
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupLeave;

                /**
                 * Verifies a MultiMemberGroupLeave message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiMemberGroupLeave message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiMemberGroupLeave
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupLeave;

                /**
                 * Creates a plain object from a MultiMemberGroupLeave message. Also converts values to other types if specified.
                 * @param message MultiMemberGroupLeave
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.MultiMemberGroupLeave, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiMemberGroupLeave to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultiMemberGroupLeave
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace MultiMemberGroupLeave {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupLeave.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupLeave.IRequest): weshnet.protocol.v1.MultiMemberGroupLeave.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupLeave.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupLeave.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupLeave.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupLeave.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupLeave.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupLeave.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupLeave.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupLeave.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupLeave.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupLeave.IReply): weshnet.protocol.v1.MultiMemberGroupLeave.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupLeave.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupLeave.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupLeave.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupLeave.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupLeave.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupLeave.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupLeave.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupLeave.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a MultiMemberGroupAliasResolverDisclose. */
            interface IMultiMemberGroupAliasResolverDisclose {
            }

            /** Represents a MultiMemberGroupAliasResolverDisclose. */
            class MultiMemberGroupAliasResolverDisclose implements IMultiMemberGroupAliasResolverDisclose {

                /**
                 * Constructs a new MultiMemberGroupAliasResolverDisclose.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IMultiMemberGroupAliasResolverDisclose);

                /**
                 * Creates a new MultiMemberGroupAliasResolverDisclose instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiMemberGroupAliasResolverDisclose instance
                 */
                public static create(properties?: weshnet.protocol.v1.IMultiMemberGroupAliasResolverDisclose): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose;

                /**
                 * Encodes the specified MultiMemberGroupAliasResolverDisclose message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.verify|verify} messages.
                 * @param message MultiMemberGroupAliasResolverDisclose message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IMultiMemberGroupAliasResolverDisclose, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiMemberGroupAliasResolverDisclose message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.verify|verify} messages.
                 * @param message MultiMemberGroupAliasResolverDisclose message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IMultiMemberGroupAliasResolverDisclose, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiMemberGroupAliasResolverDisclose message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultiMemberGroupAliasResolverDisclose
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose;

                /**
                 * Decodes a MultiMemberGroupAliasResolverDisclose message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultiMemberGroupAliasResolverDisclose
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose;

                /**
                 * Verifies a MultiMemberGroupAliasResolverDisclose message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiMemberGroupAliasResolverDisclose message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiMemberGroupAliasResolverDisclose
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose;

                /**
                 * Creates a plain object from a MultiMemberGroupAliasResolverDisclose message. Also converts values to other types if specified.
                 * @param message MultiMemberGroupAliasResolverDisclose
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiMemberGroupAliasResolverDisclose to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultiMemberGroupAliasResolverDisclose
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace MultiMemberGroupAliasResolverDisclose {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.IRequest): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.IReply): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupAliasResolverDisclose.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a MultiMemberGroupAdminRoleGrant. */
            interface IMultiMemberGroupAdminRoleGrant {
            }

            /** Represents a MultiMemberGroupAdminRoleGrant. */
            class MultiMemberGroupAdminRoleGrant implements IMultiMemberGroupAdminRoleGrant {

                /**
                 * Constructs a new MultiMemberGroupAdminRoleGrant.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IMultiMemberGroupAdminRoleGrant);

                /**
                 * Creates a new MultiMemberGroupAdminRoleGrant instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiMemberGroupAdminRoleGrant instance
                 */
                public static create(properties?: weshnet.protocol.v1.IMultiMemberGroupAdminRoleGrant): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant;

                /**
                 * Encodes the specified MultiMemberGroupAdminRoleGrant message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.verify|verify} messages.
                 * @param message MultiMemberGroupAdminRoleGrant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IMultiMemberGroupAdminRoleGrant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiMemberGroupAdminRoleGrant message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.verify|verify} messages.
                 * @param message MultiMemberGroupAdminRoleGrant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IMultiMemberGroupAdminRoleGrant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiMemberGroupAdminRoleGrant message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultiMemberGroupAdminRoleGrant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant;

                /**
                 * Decodes a MultiMemberGroupAdminRoleGrant message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultiMemberGroupAdminRoleGrant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant;

                /**
                 * Verifies a MultiMemberGroupAdminRoleGrant message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiMemberGroupAdminRoleGrant message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiMemberGroupAdminRoleGrant
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant;

                /**
                 * Creates a plain object from a MultiMemberGroupAdminRoleGrant message. Also converts values to other types if specified.
                 * @param message MultiMemberGroupAdminRoleGrant
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiMemberGroupAdminRoleGrant to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultiMemberGroupAdminRoleGrant
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace MultiMemberGroupAdminRoleGrant {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);

                    /** Request memberPk */
                    memberPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /** Request memberPk. */
                    public memberPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.IRequest): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.IReply): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupAdminRoleGrant.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a MultiMemberGroupInvitationCreate. */
            interface IMultiMemberGroupInvitationCreate {
            }

            /** Represents a MultiMemberGroupInvitationCreate. */
            class MultiMemberGroupInvitationCreate implements IMultiMemberGroupInvitationCreate {

                /**
                 * Constructs a new MultiMemberGroupInvitationCreate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IMultiMemberGroupInvitationCreate);

                /**
                 * Creates a new MultiMemberGroupInvitationCreate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiMemberGroupInvitationCreate instance
                 */
                public static create(properties?: weshnet.protocol.v1.IMultiMemberGroupInvitationCreate): weshnet.protocol.v1.MultiMemberGroupInvitationCreate;

                /**
                 * Encodes the specified MultiMemberGroupInvitationCreate message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupInvitationCreate.verify|verify} messages.
                 * @param message MultiMemberGroupInvitationCreate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IMultiMemberGroupInvitationCreate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiMemberGroupInvitationCreate message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupInvitationCreate.verify|verify} messages.
                 * @param message MultiMemberGroupInvitationCreate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IMultiMemberGroupInvitationCreate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiMemberGroupInvitationCreate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultiMemberGroupInvitationCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupInvitationCreate;

                /**
                 * Decodes a MultiMemberGroupInvitationCreate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultiMemberGroupInvitationCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupInvitationCreate;

                /**
                 * Verifies a MultiMemberGroupInvitationCreate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiMemberGroupInvitationCreate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiMemberGroupInvitationCreate
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupInvitationCreate;

                /**
                 * Creates a plain object from a MultiMemberGroupInvitationCreate message. Also converts values to other types if specified.
                 * @param message MultiMemberGroupInvitationCreate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.MultiMemberGroupInvitationCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiMemberGroupInvitationCreate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultiMemberGroupInvitationCreate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace MultiMemberGroupInvitationCreate {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.IRequest): weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply group */
                    group?: (weshnet.protocol.v1.IGroup|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.IReply);

                    /** Reply group. */
                    public group?: (weshnet.protocol.v1.IGroup|null);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.IReply): weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.MultiMemberGroupInvitationCreate.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an AppMetadataSend. */
            interface IAppMetadataSend {
            }

            /** Represents an AppMetadataSend. */
            class AppMetadataSend implements IAppMetadataSend {

                /**
                 * Constructs a new AppMetadataSend.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAppMetadataSend);

                /**
                 * Creates a new AppMetadataSend instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppMetadataSend instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAppMetadataSend): weshnet.protocol.v1.AppMetadataSend;

                /**
                 * Encodes the specified AppMetadataSend message. Does not implicitly {@link weshnet.protocol.v1.AppMetadataSend.verify|verify} messages.
                 * @param message AppMetadataSend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAppMetadataSend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppMetadataSend message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AppMetadataSend.verify|verify} messages.
                 * @param message AppMetadataSend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAppMetadataSend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppMetadataSend message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppMetadataSend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AppMetadataSend;

                /**
                 * Decodes an AppMetadataSend message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppMetadataSend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AppMetadataSend;

                /**
                 * Verifies an AppMetadataSend message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppMetadataSend message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppMetadataSend
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AppMetadataSend;

                /**
                 * Creates a plain object from an AppMetadataSend message. Also converts values to other types if specified.
                 * @param message AppMetadataSend
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AppMetadataSend, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppMetadataSend to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AppMetadataSend
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AppMetadataSend {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);

                    /** Request payload */
                    payload?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.AppMetadataSend.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /** Request payload. */
                    public payload: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.AppMetadataSend.IRequest): weshnet.protocol.v1.AppMetadataSend.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.AppMetadataSend.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.AppMetadataSend.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AppMetadataSend.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.AppMetadataSend.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AppMetadataSend.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AppMetadataSend.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AppMetadataSend.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.AppMetadataSend.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply cid */
                    cid?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.AppMetadataSend.IReply);

                    /** Reply cid. */
                    public cid: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.AppMetadataSend.IReply): weshnet.protocol.v1.AppMetadataSend.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.AppMetadataSend.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.AppMetadataSend.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AppMetadataSend.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.AppMetadataSend.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AppMetadataSend.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AppMetadataSend.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AppMetadataSend.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.AppMetadataSend.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an AppMessageSend. */
            interface IAppMessageSend {
            }

            /** Represents an AppMessageSend. */
            class AppMessageSend implements IAppMessageSend {

                /**
                 * Constructs a new AppMessageSend.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAppMessageSend);

                /**
                 * Creates a new AppMessageSend instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppMessageSend instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAppMessageSend): weshnet.protocol.v1.AppMessageSend;

                /**
                 * Encodes the specified AppMessageSend message. Does not implicitly {@link weshnet.protocol.v1.AppMessageSend.verify|verify} messages.
                 * @param message AppMessageSend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAppMessageSend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppMessageSend message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AppMessageSend.verify|verify} messages.
                 * @param message AppMessageSend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAppMessageSend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppMessageSend message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppMessageSend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AppMessageSend;

                /**
                 * Decodes an AppMessageSend message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppMessageSend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AppMessageSend;

                /**
                 * Verifies an AppMessageSend message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppMessageSend message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppMessageSend
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AppMessageSend;

                /**
                 * Creates a plain object from an AppMessageSend message. Also converts values to other types if specified.
                 * @param message AppMessageSend
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AppMessageSend, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppMessageSend to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AppMessageSend
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AppMessageSend {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);

                    /** Request payload */
                    payload?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.AppMessageSend.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /** Request payload. */
                    public payload: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.AppMessageSend.IRequest): weshnet.protocol.v1.AppMessageSend.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.AppMessageSend.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.AppMessageSend.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AppMessageSend.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.AppMessageSend.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AppMessageSend.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AppMessageSend.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AppMessageSend.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.AppMessageSend.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply cid */
                    cid?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.AppMessageSend.IReply);

                    /** Reply cid. */
                    public cid: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.AppMessageSend.IReply): weshnet.protocol.v1.AppMessageSend.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.AppMessageSend.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.AppMessageSend.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AppMessageSend.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.AppMessageSend.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AppMessageSend.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AppMessageSend.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AppMessageSend.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.AppMessageSend.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a GroupMetadataEvent. */
            interface IGroupMetadataEvent {

                /** GroupMetadataEvent eventContext */
                eventContext?: (weshnet.protocol.v1.IEventContext|null);

                /** GroupMetadataEvent metadata */
                metadata?: (weshnet.protocol.v1.IGroupMetadata|null);

                /** GroupMetadataEvent event */
                event?: (Uint8Array|null);
            }

            /** Represents a GroupMetadataEvent. */
            class GroupMetadataEvent implements IGroupMetadataEvent {

                /**
                 * Constructs a new GroupMetadataEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupMetadataEvent);

                /** GroupMetadataEvent eventContext. */
                public eventContext?: (weshnet.protocol.v1.IEventContext|null);

                /** GroupMetadataEvent metadata. */
                public metadata?: (weshnet.protocol.v1.IGroupMetadata|null);

                /** GroupMetadataEvent event. */
                public event: Uint8Array;

                /**
                 * Creates a new GroupMetadataEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupMetadataEvent instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupMetadataEvent): weshnet.protocol.v1.GroupMetadataEvent;

                /**
                 * Encodes the specified GroupMetadataEvent message. Does not implicitly {@link weshnet.protocol.v1.GroupMetadataEvent.verify|verify} messages.
                 * @param message GroupMetadataEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupMetadataEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupMetadataEvent message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupMetadataEvent.verify|verify} messages.
                 * @param message GroupMetadataEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupMetadataEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupMetadataEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupMetadataEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupMetadataEvent;

                /**
                 * Decodes a GroupMetadataEvent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupMetadataEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupMetadataEvent;

                /**
                 * Verifies a GroupMetadataEvent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupMetadataEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupMetadataEvent
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupMetadataEvent;

                /**
                 * Creates a plain object from a GroupMetadataEvent message. Also converts values to other types if specified.
                 * @param message GroupMetadataEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupMetadataEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupMetadataEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupMetadataEvent
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GroupMessageEvent. */
            interface IGroupMessageEvent {

                /** GroupMessageEvent eventContext */
                eventContext?: (weshnet.protocol.v1.IEventContext|null);

                /** GroupMessageEvent headers */
                headers?: (weshnet.protocol.v1.IMessageHeaders|null);

                /** GroupMessageEvent message */
                message?: (Uint8Array|null);
            }

            /** Represents a GroupMessageEvent. */
            class GroupMessageEvent implements IGroupMessageEvent {

                /**
                 * Constructs a new GroupMessageEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupMessageEvent);

                /** GroupMessageEvent eventContext. */
                public eventContext?: (weshnet.protocol.v1.IEventContext|null);

                /** GroupMessageEvent headers. */
                public headers?: (weshnet.protocol.v1.IMessageHeaders|null);

                /** GroupMessageEvent message. */
                public message: Uint8Array;

                /**
                 * Creates a new GroupMessageEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupMessageEvent instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupMessageEvent): weshnet.protocol.v1.GroupMessageEvent;

                /**
                 * Encodes the specified GroupMessageEvent message. Does not implicitly {@link weshnet.protocol.v1.GroupMessageEvent.verify|verify} messages.
                 * @param message GroupMessageEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupMessageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupMessageEvent message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupMessageEvent.verify|verify} messages.
                 * @param message GroupMessageEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupMessageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupMessageEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupMessageEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupMessageEvent;

                /**
                 * Decodes a GroupMessageEvent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupMessageEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupMessageEvent;

                /**
                 * Verifies a GroupMessageEvent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupMessageEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupMessageEvent
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupMessageEvent;

                /**
                 * Creates a plain object from a GroupMessageEvent message. Also converts values to other types if specified.
                 * @param message GroupMessageEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupMessageEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupMessageEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupMessageEvent
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GroupMetadataList. */
            interface IGroupMetadataList {
            }

            /** Represents a GroupMetadataList. */
            class GroupMetadataList implements IGroupMetadataList {

                /**
                 * Constructs a new GroupMetadataList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupMetadataList);

                /**
                 * Creates a new GroupMetadataList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupMetadataList instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupMetadataList): weshnet.protocol.v1.GroupMetadataList;

                /**
                 * Encodes the specified GroupMetadataList message. Does not implicitly {@link weshnet.protocol.v1.GroupMetadataList.verify|verify} messages.
                 * @param message GroupMetadataList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupMetadataList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupMetadataList message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupMetadataList.verify|verify} messages.
                 * @param message GroupMetadataList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupMetadataList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupMetadataList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupMetadataList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupMetadataList;

                /**
                 * Decodes a GroupMetadataList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupMetadataList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupMetadataList;

                /**
                 * Verifies a GroupMetadataList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupMetadataList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupMetadataList
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupMetadataList;

                /**
                 * Creates a plain object from a GroupMetadataList message. Also converts values to other types if specified.
                 * @param message GroupMetadataList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupMetadataList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupMetadataList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupMetadataList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace GroupMetadataList {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);

                    /** Request sinceId */
                    sinceId?: (Uint8Array|null);

                    /** Request sinceNow */
                    sinceNow?: (boolean|null);

                    /** Request untilId */
                    untilId?: (Uint8Array|null);

                    /** Request untilNow */
                    untilNow?: (boolean|null);

                    /** Request reverseOrder */
                    reverseOrder?: (boolean|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.GroupMetadataList.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /** Request sinceId. */
                    public sinceId: Uint8Array;

                    /** Request sinceNow. */
                    public sinceNow: boolean;

                    /** Request untilId. */
                    public untilId: Uint8Array;

                    /** Request untilNow. */
                    public untilNow: boolean;

                    /** Request reverseOrder. */
                    public reverseOrder: boolean;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.GroupMetadataList.IRequest): weshnet.protocol.v1.GroupMetadataList.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.GroupMetadataList.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.GroupMetadataList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupMetadataList.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.GroupMetadataList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupMetadataList.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupMetadataList.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupMetadataList.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.GroupMetadataList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a GroupMessageList. */
            interface IGroupMessageList {
            }

            /** Represents a GroupMessageList. */
            class GroupMessageList implements IGroupMessageList {

                /**
                 * Constructs a new GroupMessageList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupMessageList);

                /**
                 * Creates a new GroupMessageList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupMessageList instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupMessageList): weshnet.protocol.v1.GroupMessageList;

                /**
                 * Encodes the specified GroupMessageList message. Does not implicitly {@link weshnet.protocol.v1.GroupMessageList.verify|verify} messages.
                 * @param message GroupMessageList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupMessageList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupMessageList message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupMessageList.verify|verify} messages.
                 * @param message GroupMessageList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupMessageList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupMessageList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupMessageList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupMessageList;

                /**
                 * Decodes a GroupMessageList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupMessageList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupMessageList;

                /**
                 * Verifies a GroupMessageList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupMessageList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupMessageList
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupMessageList;

                /**
                 * Creates a plain object from a GroupMessageList message. Also converts values to other types if specified.
                 * @param message GroupMessageList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupMessageList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupMessageList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupMessageList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace GroupMessageList {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);

                    /** Request sinceId */
                    sinceId?: (Uint8Array|null);

                    /** Request sinceNow */
                    sinceNow?: (boolean|null);

                    /** Request untilId */
                    untilId?: (Uint8Array|null);

                    /** Request untilNow */
                    untilNow?: (boolean|null);

                    /** Request reverseOrder */
                    reverseOrder?: (boolean|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.GroupMessageList.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /** Request sinceId. */
                    public sinceId: Uint8Array;

                    /** Request sinceNow. */
                    public sinceNow: boolean;

                    /** Request untilId. */
                    public untilId: Uint8Array;

                    /** Request untilNow. */
                    public untilNow: boolean;

                    /** Request reverseOrder. */
                    public reverseOrder: boolean;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.GroupMessageList.IRequest): weshnet.protocol.v1.GroupMessageList.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.GroupMessageList.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.GroupMessageList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupMessageList.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.GroupMessageList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupMessageList.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupMessageList.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupMessageList.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.GroupMessageList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a GroupInfo. */
            interface IGroupInfo {
            }

            /** Represents a GroupInfo. */
            class GroupInfo implements IGroupInfo {

                /**
                 * Constructs a new GroupInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupInfo);

                /**
                 * Creates a new GroupInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupInfo instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupInfo): weshnet.protocol.v1.GroupInfo;

                /**
                 * Encodes the specified GroupInfo message. Does not implicitly {@link weshnet.protocol.v1.GroupInfo.verify|verify} messages.
                 * @param message GroupInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupInfo message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupInfo.verify|verify} messages.
                 * @param message GroupInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupInfo;

                /**
                 * Decodes a GroupInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupInfo;

                /**
                 * Verifies a GroupInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupInfo
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupInfo;

                /**
                 * Creates a plain object from a GroupInfo message. Also converts values to other types if specified.
                 * @param message GroupInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace GroupInfo {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);

                    /** Request contactPk */
                    contactPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.GroupInfo.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /** Request contactPk. */
                    public contactPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.GroupInfo.IRequest): weshnet.protocol.v1.GroupInfo.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.GroupInfo.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.GroupInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupInfo.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.GroupInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupInfo.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupInfo.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupInfo.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.GroupInfo.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply group */
                    group?: (weshnet.protocol.v1.IGroup|null);

                    /** Reply memberPk */
                    memberPk?: (Uint8Array|null);

                    /** Reply devicePk */
                    devicePk?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.GroupInfo.IReply);

                    /** Reply group. */
                    public group?: (weshnet.protocol.v1.IGroup|null);

                    /** Reply memberPk. */
                    public memberPk: Uint8Array;

                    /** Reply devicePk. */
                    public devicePk: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.GroupInfo.IReply): weshnet.protocol.v1.GroupInfo.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.GroupInfo.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.GroupInfo.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupInfo.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.GroupInfo.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupInfo.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupInfo.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupInfo.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.GroupInfo.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an ActivateGroup. */
            interface IActivateGroup {
            }

            /** Represents an ActivateGroup. */
            class ActivateGroup implements IActivateGroup {

                /**
                 * Constructs a new ActivateGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IActivateGroup);

                /**
                 * Creates a new ActivateGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ActivateGroup instance
                 */
                public static create(properties?: weshnet.protocol.v1.IActivateGroup): weshnet.protocol.v1.ActivateGroup;

                /**
                 * Encodes the specified ActivateGroup message. Does not implicitly {@link weshnet.protocol.v1.ActivateGroup.verify|verify} messages.
                 * @param message ActivateGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IActivateGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ActivateGroup message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ActivateGroup.verify|verify} messages.
                 * @param message ActivateGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IActivateGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ActivateGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ActivateGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ActivateGroup;

                /**
                 * Decodes an ActivateGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ActivateGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ActivateGroup;

                /**
                 * Verifies an ActivateGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ActivateGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ActivateGroup
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ActivateGroup;

                /**
                 * Creates a plain object from an ActivateGroup message. Also converts values to other types if specified.
                 * @param message ActivateGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ActivateGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ActivateGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ActivateGroup
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ActivateGroup {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);

                    /** Request localOnly */
                    localOnly?: (boolean|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ActivateGroup.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /** Request localOnly. */
                    public localOnly: boolean;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ActivateGroup.IRequest): weshnet.protocol.v1.ActivateGroup.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ActivateGroup.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ActivateGroup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ActivateGroup.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ActivateGroup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ActivateGroup.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ActivateGroup.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ActivateGroup.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ActivateGroup.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ActivateGroup.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ActivateGroup.IReply): weshnet.protocol.v1.ActivateGroup.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ActivateGroup.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ActivateGroup.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ActivateGroup.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ActivateGroup.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ActivateGroup.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ActivateGroup.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ActivateGroup.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ActivateGroup.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a DeactivateGroup. */
            interface IDeactivateGroup {
            }

            /** Represents a DeactivateGroup. */
            class DeactivateGroup implements IDeactivateGroup {

                /**
                 * Constructs a new DeactivateGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IDeactivateGroup);

                /**
                 * Creates a new DeactivateGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeactivateGroup instance
                 */
                public static create(properties?: weshnet.protocol.v1.IDeactivateGroup): weshnet.protocol.v1.DeactivateGroup;

                /**
                 * Encodes the specified DeactivateGroup message. Does not implicitly {@link weshnet.protocol.v1.DeactivateGroup.verify|verify} messages.
                 * @param message DeactivateGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IDeactivateGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeactivateGroup message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DeactivateGroup.verify|verify} messages.
                 * @param message DeactivateGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IDeactivateGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeactivateGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeactivateGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DeactivateGroup;

                /**
                 * Decodes a DeactivateGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeactivateGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DeactivateGroup;

                /**
                 * Verifies a DeactivateGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeactivateGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeactivateGroup
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DeactivateGroup;

                /**
                 * Creates a plain object from a DeactivateGroup message. Also converts values to other types if specified.
                 * @param message DeactivateGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.DeactivateGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeactivateGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeactivateGroup
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace DeactivateGroup {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.DeactivateGroup.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.DeactivateGroup.IRequest): weshnet.protocol.v1.DeactivateGroup.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.DeactivateGroup.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.DeactivateGroup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DeactivateGroup.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.DeactivateGroup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DeactivateGroup.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DeactivateGroup.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DeactivateGroup.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.DeactivateGroup.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.DeactivateGroup.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.DeactivateGroup.IReply): weshnet.protocol.v1.DeactivateGroup.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.DeactivateGroup.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.DeactivateGroup.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DeactivateGroup.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.DeactivateGroup.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DeactivateGroup.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DeactivateGroup.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DeactivateGroup.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.DeactivateGroup.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a GroupDeviceStatus. */
            interface IGroupDeviceStatus {
            }

            /** Represents a GroupDeviceStatus. */
            class GroupDeviceStatus implements IGroupDeviceStatus {

                /**
                 * Constructs a new GroupDeviceStatus.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IGroupDeviceStatus);

                /**
                 * Creates a new GroupDeviceStatus instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupDeviceStatus instance
                 */
                public static create(properties?: weshnet.protocol.v1.IGroupDeviceStatus): weshnet.protocol.v1.GroupDeviceStatus;

                /**
                 * Encodes the specified GroupDeviceStatus message. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.verify|verify} messages.
                 * @param message GroupDeviceStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IGroupDeviceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupDeviceStatus message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.verify|verify} messages.
                 * @param message GroupDeviceStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IGroupDeviceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupDeviceStatus message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupDeviceStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupDeviceStatus;

                /**
                 * Decodes a GroupDeviceStatus message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupDeviceStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupDeviceStatus;

                /**
                 * Verifies a GroupDeviceStatus message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupDeviceStatus message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupDeviceStatus
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupDeviceStatus;

                /**
                 * Creates a plain object from a GroupDeviceStatus message. Also converts values to other types if specified.
                 * @param message GroupDeviceStatus
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.GroupDeviceStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupDeviceStatus to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GroupDeviceStatus
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace GroupDeviceStatus {

                /** Type enum. */
                enum Type {
                    TypeUnknown = 0,
                    TypePeerDisconnected = 1,
                    TypePeerConnected = 2,
                    TypePeerReconnecting = 3
                }

                /** Transport enum. */
                enum Transport {
                    TptUnknown = 0,
                    TptLAN = 1,
                    TptWAN = 2,
                    TptProximity = 3
                }

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.GroupDeviceStatus.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.GroupDeviceStatus.IRequest): weshnet.protocol.v1.GroupDeviceStatus.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.GroupDeviceStatus.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.GroupDeviceStatus.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupDeviceStatus.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupDeviceStatus.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupDeviceStatus.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.GroupDeviceStatus.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply type */
                    type?: (weshnet.protocol.v1.GroupDeviceStatus.Type|null);

                    /** Reply event */
                    event?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.GroupDeviceStatus.IReply);

                    /** Reply type. */
                    public type: weshnet.protocol.v1.GroupDeviceStatus.Type;

                    /** Reply event. */
                    public event: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.GroupDeviceStatus.IReply): weshnet.protocol.v1.GroupDeviceStatus.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.GroupDeviceStatus.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.GroupDeviceStatus.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupDeviceStatus.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupDeviceStatus.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupDeviceStatus.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.GroupDeviceStatus.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Reply {

                    /** Properties of a PeerConnected. */
                    interface IPeerConnected {

                        /** PeerConnected peerId */
                        peerId?: (string|null);

                        /** PeerConnected devicePk */
                        devicePk?: (Uint8Array|null);

                        /** PeerConnected transports */
                        transports?: (weshnet.protocol.v1.GroupDeviceStatus.Transport[]|null);

                        /** PeerConnected maddrs */
                        maddrs?: (string[]|null);
                    }

                    /** Represents a PeerConnected. */
                    class PeerConnected implements IPeerConnected {

                        /**
                         * Constructs a new PeerConnected.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerConnected);

                        /** PeerConnected peerId. */
                        public peerId: string;

                        /** PeerConnected devicePk. */
                        public devicePk: Uint8Array;

                        /** PeerConnected transports. */
                        public transports: weshnet.protocol.v1.GroupDeviceStatus.Transport[];

                        /** PeerConnected maddrs. */
                        public maddrs: string[];

                        /**
                         * Creates a new PeerConnected instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PeerConnected instance
                         */
                        public static create(properties?: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerConnected): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerConnected;

                        /**
                         * Encodes the specified PeerConnected message. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerConnected.verify|verify} messages.
                         * @param message PeerConnected message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerConnected, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PeerConnected message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerConnected.verify|verify} messages.
                         * @param message PeerConnected message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerConnected, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PeerConnected message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PeerConnected
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerConnected;

                        /**
                         * Decodes a PeerConnected message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PeerConnected
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerConnected;

                        /**
                         * Verifies a PeerConnected message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PeerConnected message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PeerConnected
                         */
                        public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerConnected;

                        /**
                         * Creates a plain object from a PeerConnected message. Also converts values to other types if specified.
                         * @param message PeerConnected
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PeerConnected to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PeerConnected
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PeerReconnecting. */
                    interface IPeerReconnecting {

                        /** PeerReconnecting peerId */
                        peerId?: (string|null);
                    }

                    /** Represents a PeerReconnecting. */
                    class PeerReconnecting implements IPeerReconnecting {

                        /**
                         * Constructs a new PeerReconnecting.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerReconnecting);

                        /** PeerReconnecting peerId. */
                        public peerId: string;

                        /**
                         * Creates a new PeerReconnecting instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PeerReconnecting instance
                         */
                        public static create(properties?: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerReconnecting): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerReconnecting;

                        /**
                         * Encodes the specified PeerReconnecting message. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerReconnecting.verify|verify} messages.
                         * @param message PeerReconnecting message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerReconnecting, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PeerReconnecting message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerReconnecting.verify|verify} messages.
                         * @param message PeerReconnecting message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerReconnecting, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PeerReconnecting message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PeerReconnecting
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerReconnecting;

                        /**
                         * Decodes a PeerReconnecting message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PeerReconnecting
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerReconnecting;

                        /**
                         * Verifies a PeerReconnecting message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PeerReconnecting message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PeerReconnecting
                         */
                        public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerReconnecting;

                        /**
                         * Creates a plain object from a PeerReconnecting message. Also converts values to other types if specified.
                         * @param message PeerReconnecting
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerReconnecting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PeerReconnecting to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PeerReconnecting
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PeerDisconnected. */
                    interface IPeerDisconnected {

                        /** PeerDisconnected peerId */
                        peerId?: (string|null);
                    }

                    /** Represents a PeerDisconnected. */
                    class PeerDisconnected implements IPeerDisconnected {

                        /**
                         * Constructs a new PeerDisconnected.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerDisconnected);

                        /** PeerDisconnected peerId. */
                        public peerId: string;

                        /**
                         * Creates a new PeerDisconnected instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PeerDisconnected instance
                         */
                        public static create(properties?: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerDisconnected): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerDisconnected;

                        /**
                         * Encodes the specified PeerDisconnected message. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerDisconnected.verify|verify} messages.
                         * @param message PeerDisconnected message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PeerDisconnected message, length delimited. Does not implicitly {@link weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerDisconnected.verify|verify} messages.
                         * @param message PeerDisconnected message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: weshnet.protocol.v1.GroupDeviceStatus.Reply.IPeerDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PeerDisconnected message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PeerDisconnected
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerDisconnected;

                        /**
                         * Decodes a PeerDisconnected message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PeerDisconnected
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerDisconnected;

                        /**
                         * Verifies a PeerDisconnected message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PeerDisconnected message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PeerDisconnected
                         */
                        public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerDisconnected;

                        /**
                         * Creates a plain object from a PeerDisconnected message. Also converts values to other types if specified.
                         * @param message PeerDisconnected
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: weshnet.protocol.v1.GroupDeviceStatus.Reply.PeerDisconnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PeerDisconnected to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PeerDisconnected
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Properties of a DebugListGroups. */
            interface IDebugListGroups {
            }

            /** Represents a DebugListGroups. */
            class DebugListGroups implements IDebugListGroups {

                /**
                 * Constructs a new DebugListGroups.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IDebugListGroups);

                /**
                 * Creates a new DebugListGroups instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DebugListGroups instance
                 */
                public static create(properties?: weshnet.protocol.v1.IDebugListGroups): weshnet.protocol.v1.DebugListGroups;

                /**
                 * Encodes the specified DebugListGroups message. Does not implicitly {@link weshnet.protocol.v1.DebugListGroups.verify|verify} messages.
                 * @param message DebugListGroups message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IDebugListGroups, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DebugListGroups message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DebugListGroups.verify|verify} messages.
                 * @param message DebugListGroups message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IDebugListGroups, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DebugListGroups message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DebugListGroups
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DebugListGroups;

                /**
                 * Decodes a DebugListGroups message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DebugListGroups
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DebugListGroups;

                /**
                 * Verifies a DebugListGroups message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DebugListGroups message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DebugListGroups
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DebugListGroups;

                /**
                 * Creates a plain object from a DebugListGroups message. Also converts values to other types if specified.
                 * @param message DebugListGroups
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.DebugListGroups, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DebugListGroups to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DebugListGroups
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace DebugListGroups {

                /** Properties of a Request. */
                interface IRequest {
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.DebugListGroups.IRequest);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.DebugListGroups.IRequest): weshnet.protocol.v1.DebugListGroups.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.DebugListGroups.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.DebugListGroups.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DebugListGroups.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.DebugListGroups.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DebugListGroups.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DebugListGroups.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DebugListGroups.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.DebugListGroups.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply groupPk */
                    groupPk?: (Uint8Array|null);

                    /** Reply groupType */
                    groupType?: (weshnet.protocol.v1.GroupType|null);

                    /** Reply contactPk */
                    contactPk?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.DebugListGroups.IReply);

                    /** Reply groupPk. */
                    public groupPk: Uint8Array;

                    /** Reply groupType. */
                    public groupType: weshnet.protocol.v1.GroupType;

                    /** Reply contactPk. */
                    public contactPk: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.DebugListGroups.IReply): weshnet.protocol.v1.DebugListGroups.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.DebugListGroups.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.DebugListGroups.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DebugListGroups.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.DebugListGroups.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DebugListGroups.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DebugListGroups.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DebugListGroups.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.DebugListGroups.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a DebugInspectGroupStore. */
            interface IDebugInspectGroupStore {
            }

            /** Represents a DebugInspectGroupStore. */
            class DebugInspectGroupStore implements IDebugInspectGroupStore {

                /**
                 * Constructs a new DebugInspectGroupStore.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IDebugInspectGroupStore);

                /**
                 * Creates a new DebugInspectGroupStore instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DebugInspectGroupStore instance
                 */
                public static create(properties?: weshnet.protocol.v1.IDebugInspectGroupStore): weshnet.protocol.v1.DebugInspectGroupStore;

                /**
                 * Encodes the specified DebugInspectGroupStore message. Does not implicitly {@link weshnet.protocol.v1.DebugInspectGroupStore.verify|verify} messages.
                 * @param message DebugInspectGroupStore message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IDebugInspectGroupStore, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DebugInspectGroupStore message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DebugInspectGroupStore.verify|verify} messages.
                 * @param message DebugInspectGroupStore message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IDebugInspectGroupStore, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DebugInspectGroupStore message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DebugInspectGroupStore
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DebugInspectGroupStore;

                /**
                 * Decodes a DebugInspectGroupStore message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DebugInspectGroupStore
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DebugInspectGroupStore;

                /**
                 * Verifies a DebugInspectGroupStore message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DebugInspectGroupStore message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DebugInspectGroupStore
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DebugInspectGroupStore;

                /**
                 * Creates a plain object from a DebugInspectGroupStore message. Also converts values to other types if specified.
                 * @param message DebugInspectGroupStore
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.DebugInspectGroupStore, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DebugInspectGroupStore to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DebugInspectGroupStore
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace DebugInspectGroupStore {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);

                    /** Request logType */
                    logType?: (weshnet.protocol.v1.DebugInspectGroupLogType|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.DebugInspectGroupStore.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /** Request logType. */
                    public logType: weshnet.protocol.v1.DebugInspectGroupLogType;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.DebugInspectGroupStore.IRequest): weshnet.protocol.v1.DebugInspectGroupStore.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.DebugInspectGroupStore.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.DebugInspectGroupStore.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DebugInspectGroupStore.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.DebugInspectGroupStore.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DebugInspectGroupStore.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DebugInspectGroupStore.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DebugInspectGroupStore.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.DebugInspectGroupStore.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply cid */
                    cid?: (Uint8Array|null);

                    /** Reply parentCids */
                    parentCids?: (Uint8Array[]|null);

                    /** Reply metadataEventType */
                    metadataEventType?: (weshnet.protocol.v1.EventType|null);

                    /** Reply devicePk */
                    devicePk?: (Uint8Array|null);

                    /** Reply payload */
                    payload?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.DebugInspectGroupStore.IReply);

                    /** Reply cid. */
                    public cid: Uint8Array;

                    /** Reply parentCids. */
                    public parentCids: Uint8Array[];

                    /** Reply metadataEventType. */
                    public metadataEventType: weshnet.protocol.v1.EventType;

                    /** Reply devicePk. */
                    public devicePk: Uint8Array;

                    /** Reply payload. */
                    public payload: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.DebugInspectGroupStore.IReply): weshnet.protocol.v1.DebugInspectGroupStore.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.DebugInspectGroupStore.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.DebugInspectGroupStore.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DebugInspectGroupStore.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.DebugInspectGroupStore.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DebugInspectGroupStore.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DebugInspectGroupStore.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DebugInspectGroupStore.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.DebugInspectGroupStore.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a DebugGroup. */
            interface IDebugGroup {
            }

            /** Represents a DebugGroup. */
            class DebugGroup implements IDebugGroup {

                /**
                 * Constructs a new DebugGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IDebugGroup);

                /**
                 * Creates a new DebugGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DebugGroup instance
                 */
                public static create(properties?: weshnet.protocol.v1.IDebugGroup): weshnet.protocol.v1.DebugGroup;

                /**
                 * Encodes the specified DebugGroup message. Does not implicitly {@link weshnet.protocol.v1.DebugGroup.verify|verify} messages.
                 * @param message DebugGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IDebugGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DebugGroup message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DebugGroup.verify|verify} messages.
                 * @param message DebugGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IDebugGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DebugGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DebugGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DebugGroup;

                /**
                 * Decodes a DebugGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DebugGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DebugGroup;

                /**
                 * Verifies a DebugGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DebugGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DebugGroup
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DebugGroup;

                /**
                 * Creates a plain object from a DebugGroup message. Also converts values to other types if specified.
                 * @param message DebugGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.DebugGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DebugGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DebugGroup
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace DebugGroup {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.DebugGroup.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.DebugGroup.IRequest): weshnet.protocol.v1.DebugGroup.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.DebugGroup.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.DebugGroup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DebugGroup.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.DebugGroup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DebugGroup.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DebugGroup.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DebugGroup.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.DebugGroup.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply peerIds */
                    peerIds?: (string[]|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.DebugGroup.IReply);

                    /** Reply peerIds. */
                    public peerIds: string[];

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.DebugGroup.IReply): weshnet.protocol.v1.DebugGroup.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.DebugGroup.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.DebugGroup.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.DebugGroup.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.DebugGroup.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.DebugGroup.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.DebugGroup.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.DebugGroup.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.DebugGroup.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** DebugInspectGroupLogType enum. */
            enum DebugInspectGroupLogType {
                DebugInspectGroupLogTypeUndefined = 0,
                DebugInspectGroupLogTypeMessage = 1,
                DebugInspectGroupLogTypeMetadata = 2
            }

            /** ContactState enum. */
            enum ContactState {
                ContactStateUndefined = 0,
                ContactStateToRequest = 1,
                ContactStateReceived = 2,
                ContactStateAdded = 3,
                ContactStateRemoved = 4,
                ContactStateDiscarded = 5,
                ContactStateBlocked = 6
            }

            /** Properties of a ShareableContact. */
            interface IShareableContact {

                /** ShareableContact pk */
                pk?: (Uint8Array|null);

                /** ShareableContact publicRendezvousSeed */
                publicRendezvousSeed?: (Uint8Array|null);

                /** ShareableContact metadata */
                metadata?: (Uint8Array|null);
            }

            /** Represents a ShareableContact. */
            class ShareableContact implements IShareableContact {

                /**
                 * Constructs a new ShareableContact.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IShareableContact);

                /** ShareableContact pk. */
                public pk: Uint8Array;

                /** ShareableContact publicRendezvousSeed. */
                public publicRendezvousSeed: Uint8Array;

                /** ShareableContact metadata. */
                public metadata: Uint8Array;

                /**
                 * Creates a new ShareableContact instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ShareableContact instance
                 */
                public static create(properties?: weshnet.protocol.v1.IShareableContact): weshnet.protocol.v1.ShareableContact;

                /**
                 * Encodes the specified ShareableContact message. Does not implicitly {@link weshnet.protocol.v1.ShareableContact.verify|verify} messages.
                 * @param message ShareableContact message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IShareableContact, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ShareableContact message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ShareableContact.verify|verify} messages.
                 * @param message ShareableContact message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IShareableContact, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ShareableContact message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ShareableContact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ShareableContact;

                /**
                 * Decodes a ShareableContact message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ShareableContact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ShareableContact;

                /**
                 * Verifies a ShareableContact message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ShareableContact message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ShareableContact
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ShareableContact;

                /**
                 * Creates a plain object from a ShareableContact message. Also converts values to other types if specified.
                 * @param message ShareableContact
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ShareableContact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ShareableContact to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ShareableContact
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ServiceTokenSupportedService. */
            interface IServiceTokenSupportedService {

                /** ServiceTokenSupportedService serviceType */
                serviceType?: (string|null);

                /** ServiceTokenSupportedService serviceEndpoint */
                serviceEndpoint?: (string|null);
            }

            /** Represents a ServiceTokenSupportedService. */
            class ServiceTokenSupportedService implements IServiceTokenSupportedService {

                /**
                 * Constructs a new ServiceTokenSupportedService.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IServiceTokenSupportedService);

                /** ServiceTokenSupportedService serviceType. */
                public serviceType: string;

                /** ServiceTokenSupportedService serviceEndpoint. */
                public serviceEndpoint: string;

                /**
                 * Creates a new ServiceTokenSupportedService instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServiceTokenSupportedService instance
                 */
                public static create(properties?: weshnet.protocol.v1.IServiceTokenSupportedService): weshnet.protocol.v1.ServiceTokenSupportedService;

                /**
                 * Encodes the specified ServiceTokenSupportedService message. Does not implicitly {@link weshnet.protocol.v1.ServiceTokenSupportedService.verify|verify} messages.
                 * @param message ServiceTokenSupportedService message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IServiceTokenSupportedService, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServiceTokenSupportedService message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ServiceTokenSupportedService.verify|verify} messages.
                 * @param message ServiceTokenSupportedService message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IServiceTokenSupportedService, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServiceTokenSupportedService message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServiceTokenSupportedService
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ServiceTokenSupportedService;

                /**
                 * Decodes a ServiceTokenSupportedService message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServiceTokenSupportedService
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ServiceTokenSupportedService;

                /**
                 * Verifies a ServiceTokenSupportedService message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ServiceTokenSupportedService message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ServiceTokenSupportedService
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ServiceTokenSupportedService;

                /**
                 * Creates a plain object from a ServiceTokenSupportedService message. Also converts values to other types if specified.
                 * @param message ServiceTokenSupportedService
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ServiceTokenSupportedService, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ServiceTokenSupportedService to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ServiceTokenSupportedService
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ServiceToken. */
            interface IServiceToken {

                /** ServiceToken token */
                token?: (string|null);

                /** ServiceToken authenticationUrl */
                authenticationUrl?: (string|null);

                /** ServiceToken supportedServices */
                supportedServices?: (weshnet.protocol.v1.IServiceTokenSupportedService[]|null);

                /** ServiceToken expiration */
                expiration?: (number|Long|null);
            }

            /** Represents a ServiceToken. */
            class ServiceToken implements IServiceToken {

                /**
                 * Constructs a new ServiceToken.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IServiceToken);

                /** ServiceToken token. */
                public token: string;

                /** ServiceToken authenticationUrl. */
                public authenticationUrl: string;

                /** ServiceToken supportedServices. */
                public supportedServices: weshnet.protocol.v1.IServiceTokenSupportedService[];

                /** ServiceToken expiration. */
                public expiration: (number|Long);

                /**
                 * Creates a new ServiceToken instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServiceToken instance
                 */
                public static create(properties?: weshnet.protocol.v1.IServiceToken): weshnet.protocol.v1.ServiceToken;

                /**
                 * Encodes the specified ServiceToken message. Does not implicitly {@link weshnet.protocol.v1.ServiceToken.verify|verify} messages.
                 * @param message ServiceToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IServiceToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServiceToken message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ServiceToken.verify|verify} messages.
                 * @param message ServiceToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IServiceToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServiceToken message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServiceToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ServiceToken;

                /**
                 * Decodes a ServiceToken message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServiceToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ServiceToken;

                /**
                 * Verifies a ServiceToken message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ServiceToken message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ServiceToken
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ServiceToken;

                /**
                 * Creates a plain object from a ServiceToken message. Also converts values to other types if specified.
                 * @param message ServiceToken
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ServiceToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ServiceToken to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ServiceToken
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CredentialVerificationServiceInitFlow. */
            interface ICredentialVerificationServiceInitFlow {
            }

            /** Represents a CredentialVerificationServiceInitFlow. */
            class CredentialVerificationServiceInitFlow implements ICredentialVerificationServiceInitFlow {

                /**
                 * Constructs a new CredentialVerificationServiceInitFlow.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.ICredentialVerificationServiceInitFlow);

                /**
                 * Creates a new CredentialVerificationServiceInitFlow instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CredentialVerificationServiceInitFlow instance
                 */
                public static create(properties?: weshnet.protocol.v1.ICredentialVerificationServiceInitFlow): weshnet.protocol.v1.CredentialVerificationServiceInitFlow;

                /**
                 * Encodes the specified CredentialVerificationServiceInitFlow message. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceInitFlow.verify|verify} messages.
                 * @param message CredentialVerificationServiceInitFlow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.ICredentialVerificationServiceInitFlow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CredentialVerificationServiceInitFlow message, length delimited. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceInitFlow.verify|verify} messages.
                 * @param message CredentialVerificationServiceInitFlow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.ICredentialVerificationServiceInitFlow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CredentialVerificationServiceInitFlow message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CredentialVerificationServiceInitFlow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.CredentialVerificationServiceInitFlow;

                /**
                 * Decodes a CredentialVerificationServiceInitFlow message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CredentialVerificationServiceInitFlow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.CredentialVerificationServiceInitFlow;

                /**
                 * Verifies a CredentialVerificationServiceInitFlow message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CredentialVerificationServiceInitFlow message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CredentialVerificationServiceInitFlow
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.CredentialVerificationServiceInitFlow;

                /**
                 * Creates a plain object from a CredentialVerificationServiceInitFlow message. Also converts values to other types if specified.
                 * @param message CredentialVerificationServiceInitFlow
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.CredentialVerificationServiceInitFlow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CredentialVerificationServiceInitFlow to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CredentialVerificationServiceInitFlow
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace CredentialVerificationServiceInitFlow {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request serviceUrl */
                    serviceUrl?: (string|null);

                    /** Request publicKey */
                    publicKey?: (Uint8Array|null);

                    /** Request link */
                    link?: (string|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.IRequest);

                    /** Request serviceUrl. */
                    public serviceUrl: string;

                    /** Request publicKey. */
                    public publicKey: Uint8Array;

                    /** Request link. */
                    public link: string;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.IRequest): weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply url */
                    url?: (string|null);

                    /** Reply secureUrl */
                    secureUrl?: (boolean|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.IReply);

                    /** Reply url. */
                    public url: string;

                    /** Reply secureUrl. */
                    public secureUrl: boolean;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.IReply): weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.CredentialVerificationServiceInitFlow.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a CredentialVerificationServiceCompleteFlow. */
            interface ICredentialVerificationServiceCompleteFlow {
            }

            /** Represents a CredentialVerificationServiceCompleteFlow. */
            class CredentialVerificationServiceCompleteFlow implements ICredentialVerificationServiceCompleteFlow {

                /**
                 * Constructs a new CredentialVerificationServiceCompleteFlow.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.ICredentialVerificationServiceCompleteFlow);

                /**
                 * Creates a new CredentialVerificationServiceCompleteFlow instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CredentialVerificationServiceCompleteFlow instance
                 */
                public static create(properties?: weshnet.protocol.v1.ICredentialVerificationServiceCompleteFlow): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow;

                /**
                 * Encodes the specified CredentialVerificationServiceCompleteFlow message. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.verify|verify} messages.
                 * @param message CredentialVerificationServiceCompleteFlow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.ICredentialVerificationServiceCompleteFlow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CredentialVerificationServiceCompleteFlow message, length delimited. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.verify|verify} messages.
                 * @param message CredentialVerificationServiceCompleteFlow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.ICredentialVerificationServiceCompleteFlow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CredentialVerificationServiceCompleteFlow message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CredentialVerificationServiceCompleteFlow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow;

                /**
                 * Decodes a CredentialVerificationServiceCompleteFlow message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CredentialVerificationServiceCompleteFlow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow;

                /**
                 * Verifies a CredentialVerificationServiceCompleteFlow message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CredentialVerificationServiceCompleteFlow message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CredentialVerificationServiceCompleteFlow
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow;

                /**
                 * Creates a plain object from a CredentialVerificationServiceCompleteFlow message. Also converts values to other types if specified.
                 * @param message CredentialVerificationServiceCompleteFlow
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CredentialVerificationServiceCompleteFlow to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CredentialVerificationServiceCompleteFlow
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace CredentialVerificationServiceCompleteFlow {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request callbackUri */
                    callbackUri?: (string|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.IRequest);

                    /** Request callbackUri. */
                    public callbackUri: string;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.IRequest): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply identifier */
                    identifier?: (string|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.IReply);

                    /** Reply identifier. */
                    public identifier: string;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.IReply): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.CredentialVerificationServiceCompleteFlow.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a VerifiedCredentialsList. */
            interface IVerifiedCredentialsList {
            }

            /** Represents a VerifiedCredentialsList. */
            class VerifiedCredentialsList implements IVerifiedCredentialsList {

                /**
                 * Constructs a new VerifiedCredentialsList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IVerifiedCredentialsList);

                /**
                 * Creates a new VerifiedCredentialsList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VerifiedCredentialsList instance
                 */
                public static create(properties?: weshnet.protocol.v1.IVerifiedCredentialsList): weshnet.protocol.v1.VerifiedCredentialsList;

                /**
                 * Encodes the specified VerifiedCredentialsList message. Does not implicitly {@link weshnet.protocol.v1.VerifiedCredentialsList.verify|verify} messages.
                 * @param message VerifiedCredentialsList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IVerifiedCredentialsList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VerifiedCredentialsList message, length delimited. Does not implicitly {@link weshnet.protocol.v1.VerifiedCredentialsList.verify|verify} messages.
                 * @param message VerifiedCredentialsList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IVerifiedCredentialsList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VerifiedCredentialsList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VerifiedCredentialsList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.VerifiedCredentialsList;

                /**
                 * Decodes a VerifiedCredentialsList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VerifiedCredentialsList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.VerifiedCredentialsList;

                /**
                 * Verifies a VerifiedCredentialsList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VerifiedCredentialsList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VerifiedCredentialsList
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.VerifiedCredentialsList;

                /**
                 * Creates a plain object from a VerifiedCredentialsList message. Also converts values to other types if specified.
                 * @param message VerifiedCredentialsList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.VerifiedCredentialsList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VerifiedCredentialsList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VerifiedCredentialsList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VerifiedCredentialsList {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request filterIdentifier */
                    filterIdentifier?: (string|null);

                    /** Request filterIssuer */
                    filterIssuer?: (string|null);

                    /** Request excludeExpired */
                    excludeExpired?: (boolean|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.VerifiedCredentialsList.IRequest);

                    /** Request filterIdentifier. */
                    public filterIdentifier: string;

                    /** Request filterIssuer. */
                    public filterIssuer: string;

                    /** Request excludeExpired. */
                    public excludeExpired: boolean;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.VerifiedCredentialsList.IRequest): weshnet.protocol.v1.VerifiedCredentialsList.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.VerifiedCredentialsList.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.VerifiedCredentialsList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.VerifiedCredentialsList.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.VerifiedCredentialsList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.VerifiedCredentialsList.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.VerifiedCredentialsList.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.VerifiedCredentialsList.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.VerifiedCredentialsList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply credential */
                    credential?: (weshnet.protocol.v1.IAccountVerifiedCredentialRegistered|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.VerifiedCredentialsList.IReply);

                    /** Reply credential. */
                    public credential?: (weshnet.protocol.v1.IAccountVerifiedCredentialRegistered|null);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.VerifiedCredentialsList.IReply): weshnet.protocol.v1.VerifiedCredentialsList.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.VerifiedCredentialsList.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.VerifiedCredentialsList.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.VerifiedCredentialsList.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.VerifiedCredentialsList.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.VerifiedCredentialsList.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.VerifiedCredentialsList.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.VerifiedCredentialsList.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.VerifiedCredentialsList.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ReplicationServiceRegisterGroup. */
            interface IReplicationServiceRegisterGroup {
            }

            /** Represents a ReplicationServiceRegisterGroup. */
            class ReplicationServiceRegisterGroup implements IReplicationServiceRegisterGroup {

                /**
                 * Constructs a new ReplicationServiceRegisterGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IReplicationServiceRegisterGroup);

                /**
                 * Creates a new ReplicationServiceRegisterGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReplicationServiceRegisterGroup instance
                 */
                public static create(properties?: weshnet.protocol.v1.IReplicationServiceRegisterGroup): weshnet.protocol.v1.ReplicationServiceRegisterGroup;

                /**
                 * Encodes the specified ReplicationServiceRegisterGroup message. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceRegisterGroup.verify|verify} messages.
                 * @param message ReplicationServiceRegisterGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IReplicationServiceRegisterGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReplicationServiceRegisterGroup message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceRegisterGroup.verify|verify} messages.
                 * @param message ReplicationServiceRegisterGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IReplicationServiceRegisterGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReplicationServiceRegisterGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReplicationServiceRegisterGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ReplicationServiceRegisterGroup;

                /**
                 * Decodes a ReplicationServiceRegisterGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReplicationServiceRegisterGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ReplicationServiceRegisterGroup;

                /**
                 * Verifies a ReplicationServiceRegisterGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReplicationServiceRegisterGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReplicationServiceRegisterGroup
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ReplicationServiceRegisterGroup;

                /**
                 * Creates a plain object from a ReplicationServiceRegisterGroup message. Also converts values to other types if specified.
                 * @param message ReplicationServiceRegisterGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ReplicationServiceRegisterGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReplicationServiceRegisterGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReplicationServiceRegisterGroup
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ReplicationServiceRegisterGroup {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request groupPk */
                    groupPk?: (Uint8Array|null);

                    /** Request token */
                    token?: (string|null);

                    /** Request authenticationUrl */
                    authenticationUrl?: (string|null);

                    /** Request replicationServer */
                    replicationServer?: (string|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ReplicationServiceRegisterGroup.IRequest);

                    /** Request groupPk. */
                    public groupPk: Uint8Array;

                    /** Request token. */
                    public token: string;

                    /** Request authenticationUrl. */
                    public authenticationUrl: string;

                    /** Request replicationServer. */
                    public replicationServer: string;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ReplicationServiceRegisterGroup.IRequest): weshnet.protocol.v1.ReplicationServiceRegisterGroup.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceRegisterGroup.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ReplicationServiceRegisterGroup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceRegisterGroup.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ReplicationServiceRegisterGroup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ReplicationServiceRegisterGroup.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ReplicationServiceRegisterGroup.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ReplicationServiceRegisterGroup.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ReplicationServiceRegisterGroup.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ReplicationServiceRegisterGroup.IReply);

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ReplicationServiceRegisterGroup.IReply): weshnet.protocol.v1.ReplicationServiceRegisterGroup.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceRegisterGroup.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ReplicationServiceRegisterGroup.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceRegisterGroup.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ReplicationServiceRegisterGroup.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ReplicationServiceRegisterGroup.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ReplicationServiceRegisterGroup.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ReplicationServiceRegisterGroup.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ReplicationServiceRegisterGroup.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ReplicationServiceReplicateGroup. */
            interface IReplicationServiceReplicateGroup {
            }

            /** Represents a ReplicationServiceReplicateGroup. */
            class ReplicationServiceReplicateGroup implements IReplicationServiceReplicateGroup {

                /**
                 * Constructs a new ReplicationServiceReplicateGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IReplicationServiceReplicateGroup);

                /**
                 * Creates a new ReplicationServiceReplicateGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReplicationServiceReplicateGroup instance
                 */
                public static create(properties?: weshnet.protocol.v1.IReplicationServiceReplicateGroup): weshnet.protocol.v1.ReplicationServiceReplicateGroup;

                /**
                 * Encodes the specified ReplicationServiceReplicateGroup message. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceReplicateGroup.verify|verify} messages.
                 * @param message ReplicationServiceReplicateGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IReplicationServiceReplicateGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReplicationServiceReplicateGroup message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceReplicateGroup.verify|verify} messages.
                 * @param message ReplicationServiceReplicateGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IReplicationServiceReplicateGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReplicationServiceReplicateGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReplicationServiceReplicateGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ReplicationServiceReplicateGroup;

                /**
                 * Decodes a ReplicationServiceReplicateGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReplicationServiceReplicateGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ReplicationServiceReplicateGroup;

                /**
                 * Verifies a ReplicationServiceReplicateGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReplicationServiceReplicateGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReplicationServiceReplicateGroup
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ReplicationServiceReplicateGroup;

                /**
                 * Creates a plain object from a ReplicationServiceReplicateGroup message. Also converts values to other types if specified.
                 * @param message ReplicationServiceReplicateGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.ReplicationServiceReplicateGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReplicationServiceReplicateGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReplicationServiceReplicateGroup
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ReplicationServiceReplicateGroup {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request group */
                    group?: (weshnet.protocol.v1.IGroup|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ReplicationServiceReplicateGroup.IRequest);

                    /** Request group. */
                    public group?: (weshnet.protocol.v1.IGroup|null);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ReplicationServiceReplicateGroup.IRequest): weshnet.protocol.v1.ReplicationServiceReplicateGroup.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceReplicateGroup.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ReplicationServiceReplicateGroup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceReplicateGroup.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ReplicationServiceReplicateGroup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ReplicationServiceReplicateGroup.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ReplicationServiceReplicateGroup.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ReplicationServiceReplicateGroup.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ReplicationServiceReplicateGroup.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply ok */
                    ok?: (boolean|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.ReplicationServiceReplicateGroup.IReply);

                    /** Reply ok. */
                    public ok: boolean;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.ReplicationServiceReplicateGroup.IReply): weshnet.protocol.v1.ReplicationServiceReplicateGroup.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceReplicateGroup.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.ReplicationServiceReplicateGroup.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.ReplicationServiceReplicateGroup.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.ReplicationServiceReplicateGroup.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.ReplicationServiceReplicateGroup.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.ReplicationServiceReplicateGroup.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.ReplicationServiceReplicateGroup.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.ReplicationServiceReplicateGroup.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a SystemInfo. */
            interface ISystemInfo {
            }

            /** Represents a SystemInfo. */
            class SystemInfo implements ISystemInfo {

                /**
                 * Constructs a new SystemInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.ISystemInfo);

                /**
                 * Creates a new SystemInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SystemInfo instance
                 */
                public static create(properties?: weshnet.protocol.v1.ISystemInfo): weshnet.protocol.v1.SystemInfo;

                /**
                 * Encodes the specified SystemInfo message. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.verify|verify} messages.
                 * @param message SystemInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.ISystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SystemInfo message, length delimited. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.verify|verify} messages.
                 * @param message SystemInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.ISystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SystemInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SystemInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.SystemInfo;

                /**
                 * Decodes a SystemInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SystemInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.SystemInfo;

                /**
                 * Verifies a SystemInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SystemInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SystemInfo
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.SystemInfo;

                /**
                 * Creates a plain object from a SystemInfo message. Also converts values to other types if specified.
                 * @param message SystemInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.SystemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SystemInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SystemInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace SystemInfo {

                /** Properties of a Request. */
                interface IRequest {
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.SystemInfo.IRequest);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.SystemInfo.IRequest): weshnet.protocol.v1.SystemInfo.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.SystemInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.SystemInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.SystemInfo.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.SystemInfo.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.SystemInfo.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.SystemInfo.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply process */
                    process?: (weshnet.protocol.v1.SystemInfo.IProcess|null);

                    /** Reply p2p */
                    p2p?: (weshnet.protocol.v1.SystemInfo.IP2P|null);

                    /** Reply orbitdb */
                    orbitdb?: (weshnet.protocol.v1.SystemInfo.IOrbitDB|null);

                    /** Reply warns */
                    warns?: (string[]|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.SystemInfo.IReply);

                    /** Reply process. */
                    public process?: (weshnet.protocol.v1.SystemInfo.IProcess|null);

                    /** Reply p2p. */
                    public p2p?: (weshnet.protocol.v1.SystemInfo.IP2P|null);

                    /** Reply orbitdb. */
                    public orbitdb?: (weshnet.protocol.v1.SystemInfo.IOrbitDB|null);

                    /** Reply warns. */
                    public warns: string[];

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.SystemInfo.IReply): weshnet.protocol.v1.SystemInfo.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.SystemInfo.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.SystemInfo.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.SystemInfo.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.SystemInfo.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.SystemInfo.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.SystemInfo.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OrbitDB. */
                interface IOrbitDB {

                    /** OrbitDB accountMetadata */
                    accountMetadata?: (weshnet.protocol.v1.SystemInfo.OrbitDB.IReplicationStatus|null);
                }

                /** Represents an OrbitDB. */
                class OrbitDB implements IOrbitDB {

                    /**
                     * Constructs a new OrbitDB.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.SystemInfo.IOrbitDB);

                    /** OrbitDB accountMetadata. */
                    public accountMetadata?: (weshnet.protocol.v1.SystemInfo.OrbitDB.IReplicationStatus|null);

                    /**
                     * Creates a new OrbitDB instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrbitDB instance
                     */
                    public static create(properties?: weshnet.protocol.v1.SystemInfo.IOrbitDB): weshnet.protocol.v1.SystemInfo.OrbitDB;

                    /**
                     * Encodes the specified OrbitDB message. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.OrbitDB.verify|verify} messages.
                     * @param message OrbitDB message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.SystemInfo.IOrbitDB, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrbitDB message, length delimited. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.OrbitDB.verify|verify} messages.
                     * @param message OrbitDB message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.SystemInfo.IOrbitDB, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrbitDB message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrbitDB
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.SystemInfo.OrbitDB;

                    /**
                     * Decodes an OrbitDB message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrbitDB
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.SystemInfo.OrbitDB;

                    /**
                     * Verifies an OrbitDB message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrbitDB message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrbitDB
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.SystemInfo.OrbitDB;

                    /**
                     * Creates a plain object from an OrbitDB message. Also converts values to other types if specified.
                     * @param message OrbitDB
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.SystemInfo.OrbitDB, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrbitDB to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OrbitDB
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OrbitDB {

                    /** Properties of a ReplicationStatus. */
                    interface IReplicationStatus {

                        /** ReplicationStatus progress */
                        progress?: (number|Long|null);

                        /** ReplicationStatus maximum */
                        maximum?: (number|Long|null);

                        /** ReplicationStatus buffered */
                        buffered?: (number|Long|null);

                        /** ReplicationStatus queued */
                        queued?: (number|Long|null);
                    }

                    /** Represents a ReplicationStatus. */
                    class ReplicationStatus implements IReplicationStatus {

                        /**
                         * Constructs a new ReplicationStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: weshnet.protocol.v1.SystemInfo.OrbitDB.IReplicationStatus);

                        /** ReplicationStatus progress. */
                        public progress: (number|Long);

                        /** ReplicationStatus maximum. */
                        public maximum: (number|Long);

                        /** ReplicationStatus buffered. */
                        public buffered: (number|Long);

                        /** ReplicationStatus queued. */
                        public queued: (number|Long);

                        /**
                         * Creates a new ReplicationStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReplicationStatus instance
                         */
                        public static create(properties?: weshnet.protocol.v1.SystemInfo.OrbitDB.IReplicationStatus): weshnet.protocol.v1.SystemInfo.OrbitDB.ReplicationStatus;

                        /**
                         * Encodes the specified ReplicationStatus message. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.OrbitDB.ReplicationStatus.verify|verify} messages.
                         * @param message ReplicationStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: weshnet.protocol.v1.SystemInfo.OrbitDB.IReplicationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReplicationStatus message, length delimited. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.OrbitDB.ReplicationStatus.verify|verify} messages.
                         * @param message ReplicationStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: weshnet.protocol.v1.SystemInfo.OrbitDB.IReplicationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReplicationStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReplicationStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.SystemInfo.OrbitDB.ReplicationStatus;

                        /**
                         * Decodes a ReplicationStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReplicationStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.SystemInfo.OrbitDB.ReplicationStatus;

                        /**
                         * Verifies a ReplicationStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReplicationStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReplicationStatus
                         */
                        public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.SystemInfo.OrbitDB.ReplicationStatus;

                        /**
                         * Creates a plain object from a ReplicationStatus message. Also converts values to other types if specified.
                         * @param message ReplicationStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: weshnet.protocol.v1.SystemInfo.OrbitDB.ReplicationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReplicationStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReplicationStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a P2P. */
                interface IP2P {

                    /** P2P connectedPeers */
                    connectedPeers?: (number|Long|null);
                }

                /** Represents a P2P. */
                class P2P implements IP2P {

                    /**
                     * Constructs a new P2P.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.SystemInfo.IP2P);

                    /** P2P connectedPeers. */
                    public connectedPeers: (number|Long);

                    /**
                     * Creates a new P2P instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns P2P instance
                     */
                    public static create(properties?: weshnet.protocol.v1.SystemInfo.IP2P): weshnet.protocol.v1.SystemInfo.P2P;

                    /**
                     * Encodes the specified P2P message. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.P2P.verify|verify} messages.
                     * @param message P2P message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.SystemInfo.IP2P, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified P2P message, length delimited. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.P2P.verify|verify} messages.
                     * @param message P2P message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.SystemInfo.IP2P, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a P2P message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns P2P
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.SystemInfo.P2P;

                    /**
                     * Decodes a P2P message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns P2P
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.SystemInfo.P2P;

                    /**
                     * Verifies a P2P message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a P2P message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns P2P
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.SystemInfo.P2P;

                    /**
                     * Creates a plain object from a P2P message. Also converts values to other types if specified.
                     * @param message P2P
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.SystemInfo.P2P, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this P2P to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for P2P
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Process. */
                interface IProcess {

                    /** Process version */
                    version?: (string|null);

                    /** Process vcsRef */
                    vcsRef?: (string|null);

                    /** Process uptimeMs */
                    uptimeMs?: (number|Long|null);

                    /** Process userCpuTimeMs */
                    userCpuTimeMs?: (number|Long|null);

                    /** Process systemCpuTimeMs */
                    systemCpuTimeMs?: (number|Long|null);

                    /** Process startedAt */
                    startedAt?: (number|Long|null);

                    /** Process rlimitCur */
                    rlimitCur?: (number|Long|null);

                    /** Process numGoroutine */
                    numGoroutine?: (number|Long|null);

                    /** Process nofile */
                    nofile?: (number|Long|null);

                    /** Process tooManyOpenFiles */
                    tooManyOpenFiles?: (boolean|null);

                    /** Process numCpu */
                    numCpu?: (number|Long|null);

                    /** Process goVersion */
                    goVersion?: (string|null);

                    /** Process operatingSystem */
                    operatingSystem?: (string|null);

                    /** Process hostName */
                    hostName?: (string|null);

                    /** Process arch */
                    arch?: (string|null);

                    /** Process rlimitMax */
                    rlimitMax?: (number|Long|null);

                    /** Process pid */
                    pid?: (number|Long|null);

                    /** Process ppid */
                    ppid?: (number|Long|null);

                    /** Process priority */
                    priority?: (number|Long|null);

                    /** Process uid */
                    uid?: (number|Long|null);

                    /** Process workingDir */
                    workingDir?: (string|null);

                    /** Process systemUsername */
                    systemUsername?: (string|null);
                }

                /** Represents a Process. */
                class Process implements IProcess {

                    /**
                     * Constructs a new Process.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.SystemInfo.IProcess);

                    /** Process version. */
                    public version: string;

                    /** Process vcsRef. */
                    public vcsRef: string;

                    /** Process uptimeMs. */
                    public uptimeMs: (number|Long);

                    /** Process userCpuTimeMs. */
                    public userCpuTimeMs: (number|Long);

                    /** Process systemCpuTimeMs. */
                    public systemCpuTimeMs: (number|Long);

                    /** Process startedAt. */
                    public startedAt: (number|Long);

                    /** Process rlimitCur. */
                    public rlimitCur: (number|Long);

                    /** Process numGoroutine. */
                    public numGoroutine: (number|Long);

                    /** Process nofile. */
                    public nofile: (number|Long);

                    /** Process tooManyOpenFiles. */
                    public tooManyOpenFiles: boolean;

                    /** Process numCpu. */
                    public numCpu: (number|Long);

                    /** Process goVersion. */
                    public goVersion: string;

                    /** Process operatingSystem. */
                    public operatingSystem: string;

                    /** Process hostName. */
                    public hostName: string;

                    /** Process arch. */
                    public arch: string;

                    /** Process rlimitMax. */
                    public rlimitMax: (number|Long);

                    /** Process pid. */
                    public pid: (number|Long);

                    /** Process ppid. */
                    public ppid: (number|Long);

                    /** Process priority. */
                    public priority: (number|Long);

                    /** Process uid. */
                    public uid: (number|Long);

                    /** Process workingDir. */
                    public workingDir: string;

                    /** Process systemUsername. */
                    public systemUsername: string;

                    /**
                     * Creates a new Process instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Process instance
                     */
                    public static create(properties?: weshnet.protocol.v1.SystemInfo.IProcess): weshnet.protocol.v1.SystemInfo.Process;

                    /**
                     * Encodes the specified Process message. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.Process.verify|verify} messages.
                     * @param message Process message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.SystemInfo.IProcess, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Process message, length delimited. Does not implicitly {@link weshnet.protocol.v1.SystemInfo.Process.verify|verify} messages.
                     * @param message Process message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.SystemInfo.IProcess, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Process message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Process
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.SystemInfo.Process;

                    /**
                     * Decodes a Process message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Process
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.SystemInfo.Process;

                    /**
                     * Verifies a Process message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Process message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Process
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.SystemInfo.Process;

                    /**
                     * Creates a plain object from a Process message. Also converts values to other types if specified.
                     * @param message Process
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.SystemInfo.Process, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Process to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Process
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a PeerList. */
            interface IPeerList {
            }

            /** Represents a PeerList. */
            class PeerList implements IPeerList {

                /**
                 * Constructs a new PeerList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IPeerList);

                /**
                 * Creates a new PeerList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PeerList instance
                 */
                public static create(properties?: weshnet.protocol.v1.IPeerList): weshnet.protocol.v1.PeerList;

                /**
                 * Encodes the specified PeerList message. Does not implicitly {@link weshnet.protocol.v1.PeerList.verify|verify} messages.
                 * @param message PeerList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IPeerList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PeerList message, length delimited. Does not implicitly {@link weshnet.protocol.v1.PeerList.verify|verify} messages.
                 * @param message PeerList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IPeerList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PeerList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PeerList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.PeerList;

                /**
                 * Decodes a PeerList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PeerList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.PeerList;

                /**
                 * Verifies a PeerList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PeerList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PeerList
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.PeerList;

                /**
                 * Creates a plain object from a PeerList message. Also converts values to other types if specified.
                 * @param message PeerList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.PeerList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PeerList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PeerList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PeerList {

                /** Properties of a Request. */
                interface IRequest {
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.PeerList.IRequest);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.PeerList.IRequest): weshnet.protocol.v1.PeerList.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.PeerList.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.PeerList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.PeerList.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.PeerList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.PeerList.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.PeerList.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.PeerList.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.PeerList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply peers */
                    peers?: (weshnet.protocol.v1.PeerList.IPeer[]|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.PeerList.IReply);

                    /** Reply peers. */
                    public peers: weshnet.protocol.v1.PeerList.IPeer[];

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.PeerList.IReply): weshnet.protocol.v1.PeerList.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.PeerList.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.PeerList.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.PeerList.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.PeerList.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.PeerList.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.PeerList.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.PeerList.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.PeerList.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Peer. */
                interface IPeer {

                    /** Peer id */
                    id?: (string|null);

                    /** Peer routes */
                    routes?: (weshnet.protocol.v1.PeerList.IRoute[]|null);

                    /** Peer errors */
                    errors?: (string[]|null);

                    /** Peer features */
                    features?: (weshnet.protocol.v1.PeerList.Feature[]|null);

                    /** Peer minLatency */
                    minLatency?: (number|Long|null);

                    /** Peer isActive */
                    isActive?: (boolean|null);

                    /** Peer direction */
                    direction?: (weshnet.protocol.v1.Direction|null);
                }

                /** Represents a Peer. */
                class Peer implements IPeer {

                    /**
                     * Constructs a new Peer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.PeerList.IPeer);

                    /** Peer id. */
                    public id: string;

                    /** Peer routes. */
                    public routes: weshnet.protocol.v1.PeerList.IRoute[];

                    /** Peer errors. */
                    public errors: string[];

                    /** Peer features. */
                    public features: weshnet.protocol.v1.PeerList.Feature[];

                    /** Peer minLatency. */
                    public minLatency: (number|Long);

                    /** Peer isActive. */
                    public isActive: boolean;

                    /** Peer direction. */
                    public direction: weshnet.protocol.v1.Direction;

                    /**
                     * Creates a new Peer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Peer instance
                     */
                    public static create(properties?: weshnet.protocol.v1.PeerList.IPeer): weshnet.protocol.v1.PeerList.Peer;

                    /**
                     * Encodes the specified Peer message. Does not implicitly {@link weshnet.protocol.v1.PeerList.Peer.verify|verify} messages.
                     * @param message Peer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.PeerList.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Peer message, length delimited. Does not implicitly {@link weshnet.protocol.v1.PeerList.Peer.verify|verify} messages.
                     * @param message Peer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.PeerList.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Peer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Peer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.PeerList.Peer;

                    /**
                     * Decodes a Peer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Peer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.PeerList.Peer;

                    /**
                     * Verifies a Peer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Peer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Peer
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.PeerList.Peer;

                    /**
                     * Creates a plain object from a Peer message. Also converts values to other types if specified.
                     * @param message Peer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.PeerList.Peer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Peer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Peer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Route. */
                interface IRoute {

                    /** Route isActive */
                    isActive?: (boolean|null);

                    /** Route address */
                    address?: (string|null);

                    /** Route direction */
                    direction?: (weshnet.protocol.v1.Direction|null);

                    /** Route latency */
                    latency?: (number|Long|null);

                    /** Route streams */
                    streams?: (weshnet.protocol.v1.PeerList.IStream[]|null);
                }

                /** Represents a Route. */
                class Route implements IRoute {

                    /**
                     * Constructs a new Route.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.PeerList.IRoute);

                    /** Route isActive. */
                    public isActive: boolean;

                    /** Route address. */
                    public address: string;

                    /** Route direction. */
                    public direction: weshnet.protocol.v1.Direction;

                    /** Route latency. */
                    public latency: (number|Long);

                    /** Route streams. */
                    public streams: weshnet.protocol.v1.PeerList.IStream[];

                    /**
                     * Creates a new Route instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Route instance
                     */
                    public static create(properties?: weshnet.protocol.v1.PeerList.IRoute): weshnet.protocol.v1.PeerList.Route;

                    /**
                     * Encodes the specified Route message. Does not implicitly {@link weshnet.protocol.v1.PeerList.Route.verify|verify} messages.
                     * @param message Route message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.PeerList.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Route message, length delimited. Does not implicitly {@link weshnet.protocol.v1.PeerList.Route.verify|verify} messages.
                     * @param message Route message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.PeerList.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Route message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Route
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.PeerList.Route;

                    /**
                     * Decodes a Route message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Route
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.PeerList.Route;

                    /**
                     * Verifies a Route message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Route message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Route
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.PeerList.Route;

                    /**
                     * Creates a plain object from a Route message. Also converts values to other types if specified.
                     * @param message Route
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.PeerList.Route, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Route to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Route
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Stream. */
                interface IStream {

                    /** Stream id */
                    id?: (string|null);
                }

                /** Represents a Stream. */
                class Stream implements IStream {

                    /**
                     * Constructs a new Stream.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.PeerList.IStream);

                    /** Stream id. */
                    public id: string;

                    /**
                     * Creates a new Stream instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Stream instance
                     */
                    public static create(properties?: weshnet.protocol.v1.PeerList.IStream): weshnet.protocol.v1.PeerList.Stream;

                    /**
                     * Encodes the specified Stream message. Does not implicitly {@link weshnet.protocol.v1.PeerList.Stream.verify|verify} messages.
                     * @param message Stream message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.PeerList.IStream, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Stream message, length delimited. Does not implicitly {@link weshnet.protocol.v1.PeerList.Stream.verify|verify} messages.
                     * @param message Stream message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.PeerList.IStream, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Stream message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Stream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.PeerList.Stream;

                    /**
                     * Decodes a Stream message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Stream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.PeerList.Stream;

                    /**
                     * Verifies a Stream message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Stream message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Stream
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.PeerList.Stream;

                    /**
                     * Creates a plain object from a Stream message. Also converts values to other types if specified.
                     * @param message Stream
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.PeerList.Stream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Stream to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Stream
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Feature enum. */
                enum Feature {
                    UnknownFeature = 0,
                    WeshFeature = 1,
                    BLEFeature = 2,
                    LocalFeature = 3,
                    TorFeature = 4,
                    QuicFeature = 5
                }
            }

            /** Direction enum. */
            enum Direction {
                UnknownDir = 0,
                InboundDir = 1,
                OutboundDir = 2,
                BiDir = 3
            }

            /** Properties of a Progress. */
            interface IProgress {

                /** Progress state */
                state?: (string|null);

                /** Progress doing */
                doing?: (string|null);

                /** Progress progress */
                progress?: (number|null);

                /** Progress completed */
                completed?: (number|Long|null);

                /** Progress total */
                total?: (number|Long|null);

                /** Progress delay */
                delay?: (number|Long|null);
            }

            /** Represents a Progress. */
            class Progress implements IProgress {

                /**
                 * Constructs a new Progress.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IProgress);

                /** Progress state. */
                public state: string;

                /** Progress doing. */
                public doing: string;

                /** Progress progress. */
                public progress: number;

                /** Progress completed. */
                public completed: (number|Long);

                /** Progress total. */
                public total: (number|Long);

                /** Progress delay. */
                public delay: (number|Long);

                /**
                 * Creates a new Progress instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Progress instance
                 */
                public static create(properties?: weshnet.protocol.v1.IProgress): weshnet.protocol.v1.Progress;

                /**
                 * Encodes the specified Progress message. Does not implicitly {@link weshnet.protocol.v1.Progress.verify|verify} messages.
                 * @param message Progress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Progress message, length delimited. Does not implicitly {@link weshnet.protocol.v1.Progress.verify|verify} messages.
                 * @param message Progress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Progress message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Progress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.Progress;

                /**
                 * Decodes a Progress message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Progress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.Progress;

                /**
                 * Verifies a Progress message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Progress message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Progress
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.Progress;

                /**
                 * Creates a plain object from a Progress message. Also converts values to other types if specified.
                 * @param message Progress
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.Progress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Progress to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Progress
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OutOfStoreMessage. */
            interface IOutOfStoreMessage {

                /** OutOfStoreMessage cid */
                cid?: (Uint8Array|null);

                /** OutOfStoreMessage devicePk */
                devicePk?: (Uint8Array|null);

                /** OutOfStoreMessage counter */
                counter?: (number|Long|null);

                /** OutOfStoreMessage sig */
                sig?: (Uint8Array|null);

                /** OutOfStoreMessage flags */
                flags?: (number|null);

                /** OutOfStoreMessage encryptedPayload */
                encryptedPayload?: (Uint8Array|null);

                /** OutOfStoreMessage nonce */
                nonce?: (Uint8Array|null);
            }

            /** Represents an OutOfStoreMessage. */
            class OutOfStoreMessage implements IOutOfStoreMessage {

                /**
                 * Constructs a new OutOfStoreMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IOutOfStoreMessage);

                /** OutOfStoreMessage cid. */
                public cid: Uint8Array;

                /** OutOfStoreMessage devicePk. */
                public devicePk: Uint8Array;

                /** OutOfStoreMessage counter. */
                public counter: (number|Long);

                /** OutOfStoreMessage sig. */
                public sig: Uint8Array;

                /** OutOfStoreMessage flags. */
                public flags: number;

                /** OutOfStoreMessage encryptedPayload. */
                public encryptedPayload: Uint8Array;

                /** OutOfStoreMessage nonce. */
                public nonce: Uint8Array;

                /**
                 * Creates a new OutOfStoreMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutOfStoreMessage instance
                 */
                public static create(properties?: weshnet.protocol.v1.IOutOfStoreMessage): weshnet.protocol.v1.OutOfStoreMessage;

                /**
                 * Encodes the specified OutOfStoreMessage message. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreMessage.verify|verify} messages.
                 * @param message OutOfStoreMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IOutOfStoreMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OutOfStoreMessage message, length delimited. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreMessage.verify|verify} messages.
                 * @param message OutOfStoreMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IOutOfStoreMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutOfStoreMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutOfStoreMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.OutOfStoreMessage;

                /**
                 * Decodes an OutOfStoreMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OutOfStoreMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.OutOfStoreMessage;

                /**
                 * Verifies an OutOfStoreMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OutOfStoreMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OutOfStoreMessage
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.OutOfStoreMessage;

                /**
                 * Creates a plain object from an OutOfStoreMessage message. Also converts values to other types if specified.
                 * @param message OutOfStoreMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.OutOfStoreMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OutOfStoreMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OutOfStoreMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OutOfStoreMessageEnvelope. */
            interface IOutOfStoreMessageEnvelope {

                /** OutOfStoreMessageEnvelope nonce */
                nonce?: (Uint8Array|null);

                /** OutOfStoreMessageEnvelope box */
                box?: (Uint8Array|null);

                /** OutOfStoreMessageEnvelope groupReference */
                groupReference?: (Uint8Array|null);
            }

            /** Represents an OutOfStoreMessageEnvelope. */
            class OutOfStoreMessageEnvelope implements IOutOfStoreMessageEnvelope {

                /**
                 * Constructs a new OutOfStoreMessageEnvelope.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IOutOfStoreMessageEnvelope);

                /** OutOfStoreMessageEnvelope nonce. */
                public nonce: Uint8Array;

                /** OutOfStoreMessageEnvelope box. */
                public box: Uint8Array;

                /** OutOfStoreMessageEnvelope groupReference. */
                public groupReference: Uint8Array;

                /**
                 * Creates a new OutOfStoreMessageEnvelope instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutOfStoreMessageEnvelope instance
                 */
                public static create(properties?: weshnet.protocol.v1.IOutOfStoreMessageEnvelope): weshnet.protocol.v1.OutOfStoreMessageEnvelope;

                /**
                 * Encodes the specified OutOfStoreMessageEnvelope message. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreMessageEnvelope.verify|verify} messages.
                 * @param message OutOfStoreMessageEnvelope message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IOutOfStoreMessageEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OutOfStoreMessageEnvelope message, length delimited. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreMessageEnvelope.verify|verify} messages.
                 * @param message OutOfStoreMessageEnvelope message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IOutOfStoreMessageEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutOfStoreMessageEnvelope message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutOfStoreMessageEnvelope
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.OutOfStoreMessageEnvelope;

                /**
                 * Decodes an OutOfStoreMessageEnvelope message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OutOfStoreMessageEnvelope
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.OutOfStoreMessageEnvelope;

                /**
                 * Verifies an OutOfStoreMessageEnvelope message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OutOfStoreMessageEnvelope message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OutOfStoreMessageEnvelope
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.OutOfStoreMessageEnvelope;

                /**
                 * Creates a plain object from an OutOfStoreMessageEnvelope message. Also converts values to other types if specified.
                 * @param message OutOfStoreMessageEnvelope
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.OutOfStoreMessageEnvelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OutOfStoreMessageEnvelope to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OutOfStoreMessageEnvelope
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OutOfStoreReceive. */
            interface IOutOfStoreReceive {
            }

            /** Represents an OutOfStoreReceive. */
            class OutOfStoreReceive implements IOutOfStoreReceive {

                /**
                 * Constructs a new OutOfStoreReceive.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IOutOfStoreReceive);

                /**
                 * Creates a new OutOfStoreReceive instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutOfStoreReceive instance
                 */
                public static create(properties?: weshnet.protocol.v1.IOutOfStoreReceive): weshnet.protocol.v1.OutOfStoreReceive;

                /**
                 * Encodes the specified OutOfStoreReceive message. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreReceive.verify|verify} messages.
                 * @param message OutOfStoreReceive message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IOutOfStoreReceive, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OutOfStoreReceive message, length delimited. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreReceive.verify|verify} messages.
                 * @param message OutOfStoreReceive message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IOutOfStoreReceive, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutOfStoreReceive message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutOfStoreReceive
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.OutOfStoreReceive;

                /**
                 * Decodes an OutOfStoreReceive message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OutOfStoreReceive
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.OutOfStoreReceive;

                /**
                 * Verifies an OutOfStoreReceive message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OutOfStoreReceive message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OutOfStoreReceive
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.OutOfStoreReceive;

                /**
                 * Creates a plain object from an OutOfStoreReceive message. Also converts values to other types if specified.
                 * @param message OutOfStoreReceive
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.OutOfStoreReceive, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OutOfStoreReceive to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OutOfStoreReceive
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace OutOfStoreReceive {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request payload */
                    payload?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.OutOfStoreReceive.IRequest);

                    /** Request payload. */
                    public payload: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.OutOfStoreReceive.IRequest): weshnet.protocol.v1.OutOfStoreReceive.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreReceive.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.OutOfStoreReceive.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreReceive.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.OutOfStoreReceive.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.OutOfStoreReceive.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.OutOfStoreReceive.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.OutOfStoreReceive.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.OutOfStoreReceive.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply message */
                    message?: (weshnet.protocol.v1.IOutOfStoreMessage|null);

                    /** Reply cleartext */
                    cleartext?: (Uint8Array|null);

                    /** Reply groupPublicKey */
                    groupPublicKey?: (Uint8Array|null);

                    /** Reply alreadyReceived */
                    alreadyReceived?: (boolean|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.OutOfStoreReceive.IReply);

                    /** Reply message. */
                    public message?: (weshnet.protocol.v1.IOutOfStoreMessage|null);

                    /** Reply cleartext. */
                    public cleartext: Uint8Array;

                    /** Reply groupPublicKey. */
                    public groupPublicKey: Uint8Array;

                    /** Reply alreadyReceived. */
                    public alreadyReceived: boolean;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.OutOfStoreReceive.IReply): weshnet.protocol.v1.OutOfStoreReceive.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreReceive.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.OutOfStoreReceive.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreReceive.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.OutOfStoreReceive.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.OutOfStoreReceive.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.OutOfStoreReceive.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.OutOfStoreReceive.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.OutOfStoreReceive.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an OutOfStoreSeal. */
            interface IOutOfStoreSeal {
            }

            /** Represents an OutOfStoreSeal. */
            class OutOfStoreSeal implements IOutOfStoreSeal {

                /**
                 * Constructs a new OutOfStoreSeal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IOutOfStoreSeal);

                /**
                 * Creates a new OutOfStoreSeal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutOfStoreSeal instance
                 */
                public static create(properties?: weshnet.protocol.v1.IOutOfStoreSeal): weshnet.protocol.v1.OutOfStoreSeal;

                /**
                 * Encodes the specified OutOfStoreSeal message. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreSeal.verify|verify} messages.
                 * @param message OutOfStoreSeal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IOutOfStoreSeal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OutOfStoreSeal message, length delimited. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreSeal.verify|verify} messages.
                 * @param message OutOfStoreSeal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IOutOfStoreSeal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutOfStoreSeal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutOfStoreSeal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.OutOfStoreSeal;

                /**
                 * Decodes an OutOfStoreSeal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OutOfStoreSeal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.OutOfStoreSeal;

                /**
                 * Verifies an OutOfStoreSeal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OutOfStoreSeal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OutOfStoreSeal
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.OutOfStoreSeal;

                /**
                 * Creates a plain object from an OutOfStoreSeal message. Also converts values to other types if specified.
                 * @param message OutOfStoreSeal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.OutOfStoreSeal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OutOfStoreSeal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OutOfStoreSeal
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace OutOfStoreSeal {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request cid */
                    cid?: (Uint8Array|null);

                    /** Request groupPublicKey */
                    groupPublicKey?: (Uint8Array|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.OutOfStoreSeal.IRequest);

                    /** Request cid. */
                    public cid: Uint8Array;

                    /** Request groupPublicKey. */
                    public groupPublicKey: Uint8Array;

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.OutOfStoreSeal.IRequest): weshnet.protocol.v1.OutOfStoreSeal.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreSeal.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.OutOfStoreSeal.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreSeal.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.OutOfStoreSeal.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.OutOfStoreSeal.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.OutOfStoreSeal.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.OutOfStoreSeal.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.OutOfStoreSeal.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply encrypted */
                    encrypted?: (Uint8Array|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.OutOfStoreSeal.IReply);

                    /** Reply encrypted. */
                    public encrypted: Uint8Array;

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.OutOfStoreSeal.IReply): weshnet.protocol.v1.OutOfStoreSeal.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreSeal.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.OutOfStoreSeal.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.OutOfStoreSeal.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.OutOfStoreSeal.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.OutOfStoreSeal.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.OutOfStoreSeal.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.OutOfStoreSeal.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.OutOfStoreSeal.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an AccountVerifiedCredentialRegistered. */
            interface IAccountVerifiedCredentialRegistered {

                /** AccountVerifiedCredentialRegistered devicePk */
                devicePk?: (Uint8Array|null);

                /** AccountVerifiedCredentialRegistered signedIdentityPublicKey */
                signedIdentityPublicKey?: (Uint8Array|null);

                /** AccountVerifiedCredentialRegistered verifiedCredential */
                verifiedCredential?: (string|null);

                /** AccountVerifiedCredentialRegistered registrationDate */
                registrationDate?: (number|Long|null);

                /** AccountVerifiedCredentialRegistered expirationDate */
                expirationDate?: (number|Long|null);

                /** AccountVerifiedCredentialRegistered identifier */
                identifier?: (string|null);

                /** AccountVerifiedCredentialRegistered issuer */
                issuer?: (string|null);
            }

            /** Represents an AccountVerifiedCredentialRegistered. */
            class AccountVerifiedCredentialRegistered implements IAccountVerifiedCredentialRegistered {

                /**
                 * Constructs a new AccountVerifiedCredentialRegistered.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IAccountVerifiedCredentialRegistered);

                /** AccountVerifiedCredentialRegistered devicePk. */
                public devicePk: Uint8Array;

                /** AccountVerifiedCredentialRegistered signedIdentityPublicKey. */
                public signedIdentityPublicKey: Uint8Array;

                /** AccountVerifiedCredentialRegistered verifiedCredential. */
                public verifiedCredential: string;

                /** AccountVerifiedCredentialRegistered registrationDate. */
                public registrationDate: (number|Long);

                /** AccountVerifiedCredentialRegistered expirationDate. */
                public expirationDate: (number|Long);

                /** AccountVerifiedCredentialRegistered identifier. */
                public identifier: string;

                /** AccountVerifiedCredentialRegistered issuer. */
                public issuer: string;

                /**
                 * Creates a new AccountVerifiedCredentialRegistered instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountVerifiedCredentialRegistered instance
                 */
                public static create(properties?: weshnet.protocol.v1.IAccountVerifiedCredentialRegistered): weshnet.protocol.v1.AccountVerifiedCredentialRegistered;

                /**
                 * Encodes the specified AccountVerifiedCredentialRegistered message. Does not implicitly {@link weshnet.protocol.v1.AccountVerifiedCredentialRegistered.verify|verify} messages.
                 * @param message AccountVerifiedCredentialRegistered message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IAccountVerifiedCredentialRegistered, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountVerifiedCredentialRegistered message, length delimited. Does not implicitly {@link weshnet.protocol.v1.AccountVerifiedCredentialRegistered.verify|verify} messages.
                 * @param message AccountVerifiedCredentialRegistered message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IAccountVerifiedCredentialRegistered, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountVerifiedCredentialRegistered message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountVerifiedCredentialRegistered
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.AccountVerifiedCredentialRegistered;

                /**
                 * Decodes an AccountVerifiedCredentialRegistered message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountVerifiedCredentialRegistered
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.AccountVerifiedCredentialRegistered;

                /**
                 * Verifies an AccountVerifiedCredentialRegistered message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountVerifiedCredentialRegistered message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountVerifiedCredentialRegistered
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.AccountVerifiedCredentialRegistered;

                /**
                 * Creates a plain object from an AccountVerifiedCredentialRegistered message. Also converts values to other types if specified.
                 * @param message AccountVerifiedCredentialRegistered
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.AccountVerifiedCredentialRegistered, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountVerifiedCredentialRegistered to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AccountVerifiedCredentialRegistered
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FirstLastCounters. */
            interface IFirstLastCounters {

                /** FirstLastCounters first */
                first?: (number|Long|null);

                /** FirstLastCounters last */
                last?: (number|Long|null);
            }

            /** Represents a FirstLastCounters. */
            class FirstLastCounters implements IFirstLastCounters {

                /**
                 * Constructs a new FirstLastCounters.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IFirstLastCounters);

                /** FirstLastCounters first. */
                public first: (number|Long);

                /** FirstLastCounters last. */
                public last: (number|Long);

                /**
                 * Creates a new FirstLastCounters instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FirstLastCounters instance
                 */
                public static create(properties?: weshnet.protocol.v1.IFirstLastCounters): weshnet.protocol.v1.FirstLastCounters;

                /**
                 * Encodes the specified FirstLastCounters message. Does not implicitly {@link weshnet.protocol.v1.FirstLastCounters.verify|verify} messages.
                 * @param message FirstLastCounters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IFirstLastCounters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FirstLastCounters message, length delimited. Does not implicitly {@link weshnet.protocol.v1.FirstLastCounters.verify|verify} messages.
                 * @param message FirstLastCounters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IFirstLastCounters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FirstLastCounters message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FirstLastCounters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.FirstLastCounters;

                /**
                 * Decodes a FirstLastCounters message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FirstLastCounters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.FirstLastCounters;

                /**
                 * Verifies a FirstLastCounters message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FirstLastCounters message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FirstLastCounters
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.FirstLastCounters;

                /**
                 * Creates a plain object from a FirstLastCounters message. Also converts values to other types if specified.
                 * @param message FirstLastCounters
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.FirstLastCounters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FirstLastCounters to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FirstLastCounters
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OrbitDBMessageHeads. */
            interface IOrbitDBMessageHeads {

                /** OrbitDBMessageHeads sealedBox */
                sealedBox?: (Uint8Array|null);

                /** OrbitDBMessageHeads rawRotation */
                rawRotation?: (Uint8Array|null);
            }

            /** Represents an OrbitDBMessageHeads. */
            class OrbitDBMessageHeads implements IOrbitDBMessageHeads {

                /**
                 * Constructs a new OrbitDBMessageHeads.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IOrbitDBMessageHeads);

                /** OrbitDBMessageHeads sealedBox. */
                public sealedBox: Uint8Array;

                /** OrbitDBMessageHeads rawRotation. */
                public rawRotation: Uint8Array;

                /**
                 * Creates a new OrbitDBMessageHeads instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OrbitDBMessageHeads instance
                 */
                public static create(properties?: weshnet.protocol.v1.IOrbitDBMessageHeads): weshnet.protocol.v1.OrbitDBMessageHeads;

                /**
                 * Encodes the specified OrbitDBMessageHeads message. Does not implicitly {@link weshnet.protocol.v1.OrbitDBMessageHeads.verify|verify} messages.
                 * @param message OrbitDBMessageHeads message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IOrbitDBMessageHeads, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OrbitDBMessageHeads message, length delimited. Does not implicitly {@link weshnet.protocol.v1.OrbitDBMessageHeads.verify|verify} messages.
                 * @param message OrbitDBMessageHeads message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IOrbitDBMessageHeads, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OrbitDBMessageHeads message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OrbitDBMessageHeads
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.OrbitDBMessageHeads;

                /**
                 * Decodes an OrbitDBMessageHeads message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OrbitDBMessageHeads
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.OrbitDBMessageHeads;

                /**
                 * Verifies an OrbitDBMessageHeads message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OrbitDBMessageHeads message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OrbitDBMessageHeads
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.OrbitDBMessageHeads;

                /**
                 * Creates a plain object from an OrbitDBMessageHeads message. Also converts values to other types if specified.
                 * @param message OrbitDBMessageHeads
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.OrbitDBMessageHeads, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OrbitDBMessageHeads to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OrbitDBMessageHeads
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace OrbitDBMessageHeads {

                /** Properties of a Box. */
                interface IBox {

                    /** Box address */
                    address?: (string|null);

                    /** Box heads */
                    heads?: (Uint8Array|null);

                    /** Box devicePk */
                    devicePk?: (Uint8Array|null);

                    /** Box peerId */
                    peerId?: (Uint8Array|null);
                }

                /** Represents a Box. */
                class Box implements IBox {

                    /**
                     * Constructs a new Box.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.OrbitDBMessageHeads.IBox);

                    /** Box address. */
                    public address: string;

                    /** Box heads. */
                    public heads: Uint8Array;

                    /** Box devicePk. */
                    public devicePk: Uint8Array;

                    /** Box peerId. */
                    public peerId: Uint8Array;

                    /**
                     * Creates a new Box instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Box instance
                     */
                    public static create(properties?: weshnet.protocol.v1.OrbitDBMessageHeads.IBox): weshnet.protocol.v1.OrbitDBMessageHeads.Box;

                    /**
                     * Encodes the specified Box message. Does not implicitly {@link weshnet.protocol.v1.OrbitDBMessageHeads.Box.verify|verify} messages.
                     * @param message Box message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.OrbitDBMessageHeads.IBox, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Box message, length delimited. Does not implicitly {@link weshnet.protocol.v1.OrbitDBMessageHeads.Box.verify|verify} messages.
                     * @param message Box message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.OrbitDBMessageHeads.IBox, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Box message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Box
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.OrbitDBMessageHeads.Box;

                    /**
                     * Decodes a Box message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Box
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.OrbitDBMessageHeads.Box;

                    /**
                     * Verifies a Box message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Box message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Box
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.OrbitDBMessageHeads.Box;

                    /**
                     * Creates a plain object from a Box message. Also converts values to other types if specified.
                     * @param message Box
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.OrbitDBMessageHeads.Box, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Box to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Box
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a RefreshContactRequest. */
            interface IRefreshContactRequest {
            }

            /** Represents a RefreshContactRequest. */
            class RefreshContactRequest implements IRefreshContactRequest {

                /**
                 * Constructs a new RefreshContactRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: weshnet.protocol.v1.IRefreshContactRequest);

                /**
                 * Creates a new RefreshContactRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RefreshContactRequest instance
                 */
                public static create(properties?: weshnet.protocol.v1.IRefreshContactRequest): weshnet.protocol.v1.RefreshContactRequest;

                /**
                 * Encodes the specified RefreshContactRequest message. Does not implicitly {@link weshnet.protocol.v1.RefreshContactRequest.verify|verify} messages.
                 * @param message RefreshContactRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: weshnet.protocol.v1.IRefreshContactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RefreshContactRequest message, length delimited. Does not implicitly {@link weshnet.protocol.v1.RefreshContactRequest.verify|verify} messages.
                 * @param message RefreshContactRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: weshnet.protocol.v1.IRefreshContactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RefreshContactRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RefreshContactRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.RefreshContactRequest;

                /**
                 * Decodes a RefreshContactRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RefreshContactRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.RefreshContactRequest;

                /**
                 * Verifies a RefreshContactRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RefreshContactRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RefreshContactRequest
                 */
                public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.RefreshContactRequest;

                /**
                 * Creates a plain object from a RefreshContactRequest message. Also converts values to other types if specified.
                 * @param message RefreshContactRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: weshnet.protocol.v1.RefreshContactRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RefreshContactRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RefreshContactRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace RefreshContactRequest {

                /** Properties of a Peer. */
                interface IPeer {

                    /** Peer id */
                    id?: (string|null);

                    /** Peer addrs */
                    addrs?: (string[]|null);
                }

                /** Represents a Peer. */
                class Peer implements IPeer {

                    /**
                     * Constructs a new Peer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.RefreshContactRequest.IPeer);

                    /** Peer id. */
                    public id: string;

                    /** Peer addrs. */
                    public addrs: string[];

                    /**
                     * Creates a new Peer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Peer instance
                     */
                    public static create(properties?: weshnet.protocol.v1.RefreshContactRequest.IPeer): weshnet.protocol.v1.RefreshContactRequest.Peer;

                    /**
                     * Encodes the specified Peer message. Does not implicitly {@link weshnet.protocol.v1.RefreshContactRequest.Peer.verify|verify} messages.
                     * @param message Peer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.RefreshContactRequest.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Peer message, length delimited. Does not implicitly {@link weshnet.protocol.v1.RefreshContactRequest.Peer.verify|verify} messages.
                     * @param message Peer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.RefreshContactRequest.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Peer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Peer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.RefreshContactRequest.Peer;

                    /**
                     * Decodes a Peer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Peer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.RefreshContactRequest.Peer;

                    /**
                     * Verifies a Peer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Peer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Peer
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.RefreshContactRequest.Peer;

                    /**
                     * Creates a plain object from a Peer message. Also converts values to other types if specified.
                     * @param message Peer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.RefreshContactRequest.Peer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Peer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Peer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Request. */
                interface IRequest {

                    /** Request contactPk */
                    contactPk?: (Uint8Array|null);

                    /** Request timeout */
                    timeout?: (number|Long|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.RefreshContactRequest.IRequest);

                    /** Request contactPk. */
                    public contactPk: Uint8Array;

                    /** Request timeout. */
                    public timeout: (number|Long);

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: weshnet.protocol.v1.RefreshContactRequest.IRequest): weshnet.protocol.v1.RefreshContactRequest.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link weshnet.protocol.v1.RefreshContactRequest.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.RefreshContactRequest.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link weshnet.protocol.v1.RefreshContactRequest.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.RefreshContactRequest.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.RefreshContactRequest.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.RefreshContactRequest.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.RefreshContactRequest.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.RefreshContactRequest.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Reply. */
                interface IReply {

                    /** Reply peersFound */
                    peersFound?: (weshnet.protocol.v1.RefreshContactRequest.IPeer[]|null);
                }

                /** Represents a Reply. */
                class Reply implements IReply {

                    /**
                     * Constructs a new Reply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: weshnet.protocol.v1.RefreshContactRequest.IReply);

                    /** Reply peersFound. */
                    public peersFound: weshnet.protocol.v1.RefreshContactRequest.IPeer[];

                    /**
                     * Creates a new Reply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Reply instance
                     */
                    public static create(properties?: weshnet.protocol.v1.RefreshContactRequest.IReply): weshnet.protocol.v1.RefreshContactRequest.Reply;

                    /**
                     * Encodes the specified Reply message. Does not implicitly {@link weshnet.protocol.v1.RefreshContactRequest.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: weshnet.protocol.v1.RefreshContactRequest.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Reply message, length delimited. Does not implicitly {@link weshnet.protocol.v1.RefreshContactRequest.Reply.verify|verify} messages.
                     * @param message Reply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: weshnet.protocol.v1.RefreshContactRequest.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Reply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): weshnet.protocol.v1.RefreshContactRequest.Reply;

                    /**
                     * Decodes a Reply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Reply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): weshnet.protocol.v1.RefreshContactRequest.Reply;

                    /**
                     * Verifies a Reply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Reply
                     */
                    public static fromObject(object: { [k: string]: any }): weshnet.protocol.v1.RefreshContactRequest.Reply;

                    /**
                     * Creates a plain object from a Reply message. Also converts values to other types if specified.
                     * @param message Reply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: weshnet.protocol.v1.RefreshContactRequest.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Reply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Reply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }
}
