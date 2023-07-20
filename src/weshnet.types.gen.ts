import * as api from './api'
import { UnaryType, ResponseStreamType } from './types'

export type ServiceClientType<S> =
S extends api.protocol.ProtocolService ? WelshProtocolServiceClient :
never

export interface WelshProtocolServiceClient {
ResponseStreamType<api.protocol.ProtocolService["serviceExportData"]>
UnaryType<api.protocol.ProtocolService["serviceGetConfiguration"]>
UnaryType<api.protocol.ProtocolService["contactRequestReference"]>
UnaryType<api.protocol.ProtocolService["contactRequestDisable"]>
UnaryType<api.protocol.ProtocolService["contactRequestEnable"]>
UnaryType<api.protocol.ProtocolService["contactRequestResetReference"]>
UnaryType<api.protocol.ProtocolService["contactRequestSend"]>
UnaryType<api.protocol.ProtocolService["contactRequestAccept"]>
UnaryType<api.protocol.ProtocolService["contactRequestDiscard"]>
UnaryType<api.protocol.ProtocolService["shareContact"]>
UnaryType<api.protocol.ProtocolService["decodeContact"]>
UnaryType<api.protocol.ProtocolService["contactBlock"]>
UnaryType<api.protocol.ProtocolService["contactUnblock"]>
UnaryType<api.protocol.ProtocolService["contactAliasKeySend"]>
UnaryType<api.protocol.ProtocolService["multiMemberGroupCreate"]>
UnaryType<api.protocol.ProtocolService["multiMemberGroupJoin"]>
UnaryType<api.protocol.ProtocolService["multiMemberGroupLeave"]>
UnaryType<api.protocol.ProtocolService["multiMemberGroupAliasResolverDisclose"]>
UnaryType<api.protocol.ProtocolService["multiMemberGroupAdminRoleGrant"]>
UnaryType<api.protocol.ProtocolService["multiMemberGroupInvitationCreate"]>
UnaryType<api.protocol.ProtocolService["appMetadataSend"]>
UnaryType<api.protocol.ProtocolService["appMessageSend"]>
ResponseStreamType<api.protocol.ProtocolService["groupMetadataList"]>
ResponseStreamType<api.protocol.ProtocolService["groupMessageList"]>
UnaryType<api.protocol.ProtocolService["groupInfo"]>
UnaryType<api.protocol.ProtocolService["activateGroup"]>
UnaryType<api.protocol.ProtocolService["deactivateGroup"]>
ResponseStreamType<api.protocol.ProtocolService["groupDeviceStatus"]>
ResponseStreamType<api.protocol.ProtocolService["debugListGroups"]>
ResponseStreamType<api.protocol.ProtocolService["debugInspectGroupStore"]>
UnaryType<api.protocol.ProtocolService["debugGroup"]>
UnaryType<api.protocol.ProtocolService["debugAuthServiceSetToken"]>
UnaryType<api.protocol.ProtocolService["systemInfo"]>
UnaryType<api.protocol.ProtocolService["authServiceInitFlow"]>
UnaryType<api.protocol.ProtocolService["authServiceCompleteFlow"]>
UnaryType<api.protocol.ProtocolService["credentialVerificationServiceInitFlow"]>
UnaryType<api.protocol.ProtocolService["credentialVerificationServiceCompleteFlow"]>
ResponseStreamType<api.protocol.ProtocolService["verifiedCredentialsList"]>
ResponseStreamType<api.protocol.ProtocolService["servicesTokenList"]>
UnaryType<api.protocol.ProtocolService["replicationServiceRegisterGroup"]>
UnaryType<api.protocol.ProtocolService["peerList"]>
UnaryType<api.protocol.ProtocolService["outOfStoreReceive"]>
UnaryType<api.protocol.ProtocolService["outOfStoreSeal"]>
UnaryType<api.protocol.ProtocolService["refreshContactRequest"]>
}
