
import { protocol } from "./api/index.d";
import { Unary, ResponseStream, RequestStream } from './types'

export type ServiceClientType<S> =  S extends typeof protocol.ProtocolService ? ProtocolServiceClient : never;


export interface ProtocolServiceClient {
    serviceExportData: ResponseStream<protocol.ServiceExportData.IRequest, protocol.ServiceExportData.Reply>,
    serviceGetConfiguration: Unary<protocol.ServiceGetConfiguration.IRequest, protocol.ServiceGetConfiguration.Reply>,
    contactRequestReference: Unary<protocol.ContactRequestReference.IRequest, protocol.ContactRequestReference.Reply>,
    contactRequestDisable: Unary<protocol.ContactRequestDisable.IRequest, protocol.ContactRequestDisable.Reply>,
    contactRequestEnable: Unary<protocol.ContactRequestEnable.IRequest, protocol.ContactRequestEnable.Reply>,
    contactRequestResetReference: Unary<protocol.ContactRequestResetReference.IRequest, protocol.ContactRequestResetReference.Reply>,
    contactRequestSend: Unary<protocol.ContactRequestSend.IRequest, protocol.ContactRequestSend.Reply>,
    contactRequestAccept: Unary<protocol.ContactRequestAccept.IRequest, protocol.ContactRequestAccept.Reply>,
    contactRequestDiscard: Unary<protocol.ContactRequestDiscard.IRequest, protocol.ContactRequestDiscard.Reply>,
    shareContact: Unary<protocol.ShareContact.IRequest, protocol.ShareContact.Reply>,
    decodeContact: Unary<protocol.DecodeContact.IRequest, protocol.DecodeContact.Reply>,
    contactBlock: Unary<protocol.ContactBlock.IRequest, protocol.ContactBlock.Reply>,
    contactUnblock: Unary<protocol.ContactUnblock.IRequest, protocol.ContactUnblock.Reply>,
    contactAliasKeySend: Unary<protocol.ContactAliasKeySend.IRequest, protocol.ContactAliasKeySend.Reply>,
    multiMemberGroupCreate: Unary<protocol.MultiMemberGroupCreate.IRequest, protocol.MultiMemberGroupCreate.Reply>,
    multiMemberGroupJoin: Unary<protocol.MultiMemberGroupJoin.IRequest, protocol.MultiMemberGroupJoin.Reply>,
    multiMemberGroupLeave: Unary<protocol.MultiMemberGroupLeave.IRequest, protocol.MultiMemberGroupLeave.Reply>,
    multiMemberGroupAliasResolverDisclose: Unary<protocol.MultiMemberGroupAliasResolverDisclose.IRequest, protocol.MultiMemberGroupAliasResolverDisclose.Reply>,
    multiMemberGroupAdminRoleGrant: Unary<protocol.MultiMemberGroupAdminRoleGrant.IRequest, protocol.MultiMemberGroupAdminRoleGrant.Reply>,
    multiMemberGroupInvitationCreate: Unary<protocol.MultiMemberGroupInvitationCreate.IRequest, protocol.MultiMemberGroupInvitationCreate.Reply>,
    appMetadataSend: Unary<protocol.AppMetadataSend.IRequest, protocol.AppMetadataSend.Reply>,
    appMessageSend: Unary<protocol.AppMessageSend.IRequest, protocol.AppMessageSend.Reply>,
    groupMetadataList: ResponseStream<protocol.GroupMetadataList.IRequest, protocol.GroupMetadataEvent>,
    groupMessageList: ResponseStream<protocol.GroupMessageList.IRequest, protocol.GroupMessageEvent>,
    groupInfo: Unary<protocol.GroupInfo.IRequest, protocol.GroupInfo.Reply>,
    activateGroup: Unary<protocol.ActivateGroup.IRequest, protocol.ActivateGroup.Reply>,
    deactivateGroup: Unary<protocol.DeactivateGroup.IRequest, protocol.DeactivateGroup.Reply>,
    groupDeviceStatus: ResponseStream<protocol.GroupDeviceStatus.IRequest, protocol.GroupDeviceStatus.Reply>,
    debugListGroups: ResponseStream<protocol.DebugListGroups.IRequest, protocol.DebugListGroups.Reply>,
    debugInspectGroupStore: ResponseStream<protocol.DebugInspectGroupStore.IRequest, protocol.DebugInspectGroupStore.Reply>,
    debugGroup: Unary<protocol.DebugGroup.IRequest, protocol.DebugGroup.Reply>,
    systemInfo: Unary<protocol.SystemInfo.IRequest, protocol.SystemInfo.Reply>,
    credentialVerificationServiceInitFlow: Unary<protocol.CredentialVerificationServiceInitFlow.IRequest, protocol.CredentialVerificationServiceInitFlow.Reply>,
    credentialVerificationServiceCompleteFlow: Unary<protocol.CredentialVerificationServiceCompleteFlow.IRequest, protocol.CredentialVerificationServiceCompleteFlow.Reply>,
    verifiedCredentialsList: ResponseStream<protocol.VerifiedCredentialsList.IRequest, protocol.VerifiedCredentialsList.Reply>,
    replicationServiceRegisterGroup: Unary<protocol.ReplicationServiceRegisterGroup.IRequest, protocol.ReplicationServiceRegisterGroup.Reply>,
    peerList: Unary<protocol.PeerList.IRequest, protocol.PeerList.Reply>,
    outOfStoreReceive: Unary<protocol.OutOfStoreReceive.IRequest, protocol.OutOfStoreReceive.Reply>,
    outOfStoreSeal: Unary<protocol.OutOfStoreSeal.IRequest, protocol.OutOfStoreSeal.Reply>,
    refreshContactRequest: Unary<protocol.RefreshContactRequest.IRequest, protocol.RefreshContactRequest.Reply>,
}

