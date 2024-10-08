
import api from './api/index.d'
import { Unary, ResponseStream, RequestStream } from './types'

export type ServiceClientType<S> =  S extends typeof api.protocol.ProtocolService ? ProtocolServiceClient : never;


export interface ProtocolServiceClient {
    serviceExportData: ResponseStream<api.protocol.ServiceExportData.IRequest, api.protocol.ServiceExportData.Reply>,
    serviceGetConfiguration: Unary<api.protocol.ServiceGetConfiguration.IRequest, api.protocol.ServiceGetConfiguration.Reply>,
    contactRequestReference: Unary<api.protocol.ContactRequestReference.IRequest, api.protocol.ContactRequestReference.Reply>,
    contactRequestDisable: Unary<api.protocol.ContactRequestDisable.IRequest, api.protocol.ContactRequestDisable.Reply>,
    contactRequestEnable: Unary<api.protocol.ContactRequestEnable.IRequest, api.protocol.ContactRequestEnable.Reply>,
    contactRequestResetReference: Unary<api.protocol.ContactRequestResetReference.IRequest, api.protocol.ContactRequestResetReference.Reply>,
    contactRequestSend: Unary<api.protocol.ContactRequestSend.IRequest, api.protocol.ContactRequestSend.Reply>,
    contactRequestAccept: Unary<api.protocol.ContactRequestAccept.IRequest, api.protocol.ContactRequestAccept.Reply>,
    contactRequestDiscard: Unary<api.protocol.ContactRequestDiscard.IRequest, api.protocol.ContactRequestDiscard.Reply>,
    shareContact: Unary<api.protocol.ShareContact.IRequest, api.protocol.ShareContact.Reply>,
    decodeContact: Unary<api.protocol.DecodeContact.IRequest, api.protocol.DecodeContact.Reply>,
    contactBlock: Unary<api.protocol.ContactBlock.IRequest, api.protocol.ContactBlock.Reply>,
    contactUnblock: Unary<api.protocol.ContactUnblock.IRequest, api.protocol.ContactUnblock.Reply>,
    contactAliasKeySend: Unary<api.protocol.ContactAliasKeySend.IRequest, api.protocol.ContactAliasKeySend.Reply>,
    multiMemberGroupCreate: Unary<api.protocol.MultiMemberGroupCreate.IRequest, api.protocol.MultiMemberGroupCreate.Reply>,
    multiMemberGroupJoin: Unary<api.protocol.MultiMemberGroupJoin.IRequest, api.protocol.MultiMemberGroupJoin.Reply>,
    multiMemberGroupLeave: Unary<api.protocol.MultiMemberGroupLeave.IRequest, api.protocol.MultiMemberGroupLeave.Reply>,
    multiMemberGroupAliasResolverDisclose: Unary<api.protocol.MultiMemberGroupAliasResolverDisclose.IRequest, api.protocol.MultiMemberGroupAliasResolverDisclose.Reply>,
    multiMemberGroupAdminRoleGrant: Unary<api.protocol.MultiMemberGroupAdminRoleGrant.IRequest, api.protocol.MultiMemberGroupAdminRoleGrant.Reply>,
    multiMemberGroupInvitationCreate: Unary<api.protocol.MultiMemberGroupInvitationCreate.IRequest, api.protocol.MultiMemberGroupInvitationCreate.Reply>,
    appMetadataSend: Unary<api.protocol.AppMetadataSend.IRequest, api.protocol.AppMetadataSend.Reply>,
    appMessageSend: Unary<api.protocol.AppMessageSend.IRequest, api.protocol.AppMessageSend.Reply>,
    groupMetadataList: ResponseStream<api.protocol.GroupMetadataList.IRequest, api.protocol.GroupMetadataEvent>,
    groupMessageList: ResponseStream<api.protocol.GroupMessageList.IRequest, api.protocol.GroupMessageEvent>,
    groupInfo: Unary<api.protocol.GroupInfo.IRequest, api.protocol.GroupInfo.Reply>,
    activateGroup: Unary<api.protocol.ActivateGroup.IRequest, api.protocol.ActivateGroup.Reply>,
    deactivateGroup: Unary<api.protocol.DeactivateGroup.IRequest, api.protocol.DeactivateGroup.Reply>,
    groupDeviceStatus: ResponseStream<api.protocol.GroupDeviceStatus.IRequest, api.protocol.GroupDeviceStatus.Reply>,
    debugListGroups: ResponseStream<api.protocol.DebugListGroups.IRequest, api.protocol.DebugListGroups.Reply>,
    debugInspectGroupStore: ResponseStream<api.protocol.DebugInspectGroupStore.IRequest, api.protocol.DebugInspectGroupStore.Reply>,
    debugGroup: Unary<api.protocol.DebugGroup.IRequest, api.protocol.DebugGroup.Reply>,
    systemInfo: Unary<api.protocol.SystemInfo.IRequest, api.protocol.SystemInfo.Reply>,
    credentialVerificationServiceInitFlow: Unary<api.protocol.CredentialVerificationServiceInitFlow.IRequest, api.protocol.CredentialVerificationServiceInitFlow.Reply>,
    credentialVerificationServiceCompleteFlow: Unary<api.protocol.CredentialVerificationServiceCompleteFlow.IRequest, api.protocol.CredentialVerificationServiceCompleteFlow.Reply>,
    verifiedCredentialsList: ResponseStream<api.protocol.VerifiedCredentialsList.IRequest, api.protocol.VerifiedCredentialsList.Reply>,
    replicationServiceRegisterGroup: Unary<api.protocol.ReplicationServiceRegisterGroup.IRequest, api.protocol.ReplicationServiceRegisterGroup.Reply>,
    peerList: Unary<api.protocol.PeerList.IRequest, api.protocol.PeerList.Reply>,
    outOfStoreReceive: Unary<api.protocol.OutOfStoreReceive.IRequest, api.protocol.OutOfStoreReceive.Reply>,
    outOfStoreSeal: Unary<api.protocol.OutOfStoreSeal.IRequest, api.protocol.OutOfStoreSeal.Reply>,
    refreshContactRequest: Unary<api.protocol.RefreshContactRequest.IRequest, api.protocol.RefreshContactRequest.Reply>,
}

