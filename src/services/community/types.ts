import { IChatMessage, ICommunity, ICommunityInvite, ICommunityMember, IPaginateRequest, ISearchRequest, IUserLite } from "@/utils";
import { IUserBluePrint, IUserLiteBluePrint } from "../user";


////////////////////
// Community
////////////////////
export type ICommunityMemberBluePrint = (keyof ICommunityMember)[]
export const communityMemberQuery:ICommunityMemberBluePrint = [
    "communityId", "createdAt", "id", "isAdmin", "userId", "user"
]

export interface IDeleteCommunityMemberRequest {
    communityMemberId: string;
}
export interface IDeleteCommunityMemberResponse{
    communityMemberId: string;
}

export type ICreateCommunityMemberRequest = IGetCommunityMemberRequest
export type ICreateCommunityMemberResponse = IGetCommunityMemberResponse
export type ICreateCommunityMemberResponseBluePrint = IGetCommunityMemberResponseBluePrint

export type IGetCommunityMembersCountRequest = IGetCommunityMemberRequest
export interface IGetCommunityMembersCountResponse {
    count: number
}

export interface IGetCommunityMembersRequest extends IPaginateRequest {
    communityMemberIds?: string[];
    communityMember?: Partial<ICommunityMember>
}
export interface IGetCommunityMembersResponse {
    communityMembers: ICommunityMember[]
}
export interface IGetCommunityMembersResponseBluePrint extends Omit<IGetCommunityMemberResponseBluePrint, "communityMember"> {
    communityMembers: ICommunityMemberBluePrint;
}


export interface IGetCommunityMemberRequest {
    communityMember: Partial<ICommunityMember>;
}
export interface IGetCommunityMemberResponse {
    communityMember: ICommunityMember;
}
export interface IGetCommunityMemberResponseBluePrint {
    communityMember: ICommunityMemberBluePrint;
    user: IUserLiteBluePrint;
}



////////////////////
// Community
////////////////////

export type ICommunityBluePrint = (keyof ICommunity)[]
export const communityQuery:ICommunityBluePrint = [
    "categories", "coverImage", "description", "id", "levelRequired", "logo",
    "memberCount", "name", 
    // //"statistics"
]
export interface IDeleteCommunityRequest {
    communityId: string
}
export interface IDeleteCommunityResponse {
    communityId: string;
}

export interface IUpdateCommunityRequest {
    communityId: string;
    community: Partial<ICommunity>;
}
export interface IUpdateCommunityResponse {
    community: ICommunity;
}
export type IUpdateCommunityResponseBluePrint = IGetCommunityResponseBluePrint;

export interface ICreateCommunityRequest {
    community: Partial<ICommunity>;
}
export type ICreateCommunityResponse = IGetCommunityResponse
export type ICreateCommunityResponseBluePrint = IGetCommunityResponseBluePrint
export interface ICreateCommunityWithMembersRequest {
    community: Partial<ICommunity>;
    invitedMemberIds: string[]
}
export type ICreateCommunityWithMembersResponse = IGetCommunityResponse
export type ICreateCommunityWithMembersResponseBluePrint = IGetCommunityResponseBluePrint
export interface IGetCommunitiesRequest extends ISearchRequest, IPaginateRequest {
    community?: Partial<ICommunity>;
    communityIds?: string[]
}
export interface IGetCommunitiesResponse {
    communities: ICommunity[]
}
export interface IGetCommunitiesResponseBluePrint {
    communities: ICommunityBluePrint
}
export interface IGetPopularCommunitiesRequest extends IPaginateRequest {

}
export interface IGetCommunityRequest {
    community: Partial<ICommunity>
}
export interface IGetCommunityResponse {
    community?: ICommunity
}
export interface IGetCommunityResponseBluePrint {
    community?: ICommunityBluePrint
}

// Community Invite 
export type ICommunityInviteBluePrint = (keyof ICommunityInvite)[]
export const communityInviteQuery:ICommunityInviteBluePrint = [
    "communityId", "id", "userId"
]

export interface IDeleteCommunityInviteRequest {
    communityInviteId: string;
}
export interface IDeleteCommunityInviteResponse {
    communityInviteId: string;
}

export type ICreateCommunityInviteRequest = IGetCommunityInviteRequest
export type ICreateCommunityInviteResponse = IGetCommunityInviteResponse;
export type ICreateCommunityInviteResponseBluePrint = IGetCommunityInviteResponseBluePrint;

export interface IGetCommunityInviteRequest {
    communityInvite: Partial<ICommunityInvite>
}
export interface IGetCommunityInviteResponse {
    communityInvite: ICommunityInvite;
}
export interface IGetCommunityInviteResponseBluePrint {
    communityInvite: ICommunityInviteBluePrint;
}



// IChatMessage
export type IChatMessageBluePrint = (keyof IChatMessage)[]
export const chatMessageQuery:IChatMessageBluePrint = [
    "channelId", "communityId", "createdAt", "id", "images", "isAdmin",
    "message", "replyToMessageId", "userLite", "userId", "chatType"
]

export interface IUpdateChatMessageRequest {
    chatMessageId: string;
    chatMessage: Partial<IChatMessage>
}
export type IUpdateChatMessageResponse = IGetChatMessageResponse;
export type IUpdateChatMessageResponseBluePrint = IGetChatMessageResponseBluePrint


export interface ICreateChatMessageRequest {
    chatMessage?: Partial<IChatMessage>
}
export interface ICreateChatMessageResponse {
    chatMessage: IChatMessage;
}
export type ICreateChatMessageResponseBluePrint = IGetChatMessageResponseBluePrint;

export interface IGetChatMessagesRequest extends IPaginateRequest {
    chatMessage?: Partial<IChatMessage>;
    chatMessageIds?: string[]
}
export interface IGetChatMessagesResponse {
    chatMessages: IChatMessage[]
}
export interface IGetChatMessagesResponseBluePrint extends Omit<IGetChatMessageResponseBluePrint, "chatMessage"> {
    chatMessages: IChatMessageBluePrint;
}


export interface IGetChatMessageRequest {
    chatMessage: Partial<IChatMessage>
}
export interface IGetChatMessageResponse {
    chatMessage: IChatMessage;
}
export interface IGetChatMessageResponseBluePrint {
    chatMessage: IChatMessageBluePrint
    userLite: IUserLiteBluePrint;
}