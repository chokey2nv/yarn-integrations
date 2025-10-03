import { IBadge, IEarningAggregate, IFollow, IUserNotification, IPaginateRequest, IRankTypes, ISearchRequest, IUserBadge, IUserLite, IUserRank, IUserSuggestion, IUserNotificationSetting } from "@/utils";
import { IUser, IUserRaw } from "@/utils";


export type IUserSuggestionBluePrint = (keyof IUserSuggestion)[];
export const userSuggestionQuery:IUserSuggestionBluePrint = [
  "id", "createdAt", "userAId", "userBId"
]
export interface ISyncUserSuggestionRequest {
  userId: string;
  contacts: string[];
}
export interface ISyncUserSuggestionResponse {
  userId: string;
  totalSuggestions: number;
}
export interface IGetUserUserSuggestionsRequest extends IPaginateRequest{
  userId: string;
}
export interface IGetUserUserSuggestionsResponse {
  userLites: IUserLite[];
}
export interface IGetUserUserSuggestionsResponseBluePrint {
  userLites: IUserLiteBluePrint
}
export type IGetUserSuggestionRequest = ICreateUserSuggestionRequest;
export type IGetUserSuggestionResponse = ICreateUserSuggestionResponse;
export type IGetUserSuggestionResponseBluePrint = ICreateUserSuggestionResponseBluePrint;

export interface ICreateUserSuggestionRequest {
  userSuggestion: Partial<IUserSuggestion>;
}
export interface ICreateUserSuggestionResponse {
  userSuggestion: IUserSuggestion;
}
export interface ICreateUserSuggestionResponseBluePrint {
  userSuggestion: IUserSuggestionBluePrint;
}
export type IUserNotificationBluePrint = (keyof IUserNotification)[]
export const notificationQuery:IUserNotificationBluePrint = [
  "createdAt", "id", "userId", "notificationData", "notificationStatus", "notificationType"
]

export interface IGetNotificationsByCategoryRequest extends IPaginateRequest {
  notification: Partial<IUserNotification>;
  categories: string[]
}
export type IGetNotificationsByCategoryResponse = IGetNotificationsResponse
export interface IGetNotificationsCountRequest {
  notification?: Partial<IUserNotification>;
}
export interface IGetNotificationsCountResponse {
  count: number
}
export interface IUpdateNotificationRequest {
  notificationId: string;
  notification: Partial<IUserNotification>;
}
export interface IUpdateNotificationResponse {
  notification: IUserNotification
};
export interface IUpdateNotificationResponseBluePrint {
  notification: IUserNotificationBluePrint
}

export interface IGetNotificationsRequest extends IPaginateRequest {
  notification?: Partial<IUserNotification>;
  notificationIds?: string[]
}
export interface IGetNotificationsResponse {
  notifications: IUserNotification[]
}
export interface IGetNotificationsResponseBluePrint {
  notifications: IUserNotificationBluePrint
}


export type IFollowBluePrint = (keyof IFollow)[]
export type IUserLiteBluePrint = (keyof IUserLite)[]
export type IEarningAggregateBluePrint = (keyof IEarningAggregate)[]
export type IUserRankBluePrint = (keyof IUserRank)[]

export const followQuery:IFollowBluePrint = [
    "aFollowB", "bFollowA", "id", "userA", "userAId", "userB", "userBId"
]
export const userLiteQuery:IUserLiteBluePrint = [
  "avatar", "coinBalance", "id", "name", "username"
]
export const earningAggregateQuery:IEarningAggregateBluePrint = [
  "catShortname", "categoryName", "coins", "userId"
]
export const userRankQuery:IUserRankBluePrint = [
  // "direction", "position", "userId"
  "userLite", "rank", "totalEarning"
]


export interface IGetGlobalRanksRequest extends IPaginateRequest {
  rankType: IRankTypes
  userId?: string;
}
export interface IGetGlobalRanksResponse {
  userRanks: IUserRank[]
}
export interface IGetGlobalRanksResponseBluePrint extends Omit<IGetUserGlobalRankResponseBluePrint, "userRank"> {
  userRanks: IUserRankBluePrint
}
export interface IGetVoucherCountRequest {
  userId: string;
}
export interface IGetVoucherCountResponse {
  count: number;
}
export interface IGetEarningAggregateRequest {
  earningAggregate: Partial<IEarningAggregate>
}
export interface IGetEarningAggregateResponse {
  earningAggregates?: IEarningAggregate[]
}
export interface IGetEarningAggregateResponseBluePrint {
  earningAggregates: IEarningAggregateBluePrint
}

export type IBadgeNestedFields = (keyof IBadge)[]
export const badgeQuery:IBadgeNestedFields = [
  "coinReward", "congratsMessage", "count", "createdAt", "description", "icon", "id", "status", "title", "trigger"
]

export interface IGetBadgesRequest extends IPaginateRequest, ISearchRequest {
  badgeIds?: string[];
  badge?: Partial<IBadge>;
}
export interface IGetBadgesResponse {
  badges: IBadge[]
}
export interface IGetBadgesResponseBluePrint extends Omit<IGetBadgeResponseBluePrint, "badge"> {
  badges: IBadgeNestedFields
}

export interface IGetBadgeRequest {
  badge: Partial<IBadge>
}
export interface IGetBadgeResponse {
  badge?: IBadge
}
export interface IGetBadgeResponseBluePrint {
  badge: IBadgeNestedFields
}

export type IUserBadgeBluePrint = (keyof IUserBadge)[]
export const userBadgeQuery:IUserBadgeBluePrint = [
  "badgeId", "createdAt", "id", "userId", "badge"
]

export type ICreateUserBadgeRequest = IGetUserBadgesRequest
export type ICreateUserBadgeResponse = IGetUserBadgeResponse;
export type ICreateUserBadgeResponseBluePrint = IGetUserBadgeResponseBluePrint;


export interface IGetUserBadgeRequest {
  userBadge: Partial<IUserBadge>
}
export interface IGetUserBadgeResponse {
  userBadge: IUserBadge
}
export interface IGetUserBadgeResponseBluePrint {
  userBadge: IUserBadgeBluePrint;
  badge: IBadgeNestedFields
}

export interface IGetUserBadgeCountRequest {
  userId: string;
}
export interface IGetUserBadgeCountResponse {
  count: number
}
export interface IGetUserBadgesRequest extends Partial<IPaginateRequest> {
  userBadgeIds?: string[];
  userBadge?: Partial<IUserBadge>;
}
export interface IGetUserBadgesResponse {
  userBadges: IUserBadge[]
}
export interface IGetUserBadgesResponseBluePrint extends Omit<IGetUserBadgeResponseBluePrint, "userBadge"> {
  userBadges: IUserBadgeBluePrint;
}

export interface IGetFriendsCountRequest {
  userId: string;
}
export interface IGetFriendsCountResponse {
  count: number;
}
export interface ICheckFollowRequest {
  follower: string;
  followed: string;
}
export interface ICheckFollowResponse {
  isFollowing?: boolean;
}
export type IFollowRequest = IUnfollowRequest;
export type IFollowResponse = IUnfollowResponse; 

export interface IUnfollowRequest {
  follower: string;
  followed: string;
}
export interface IUnfollowResponse {
  success: boolean;
}

export interface IGetFollowsRequest extends IPaginateRequest, ISearchRequest {
  followIds?: string[]
  follow?: IFollow;
}
export type IGetFollowsResponse = IGetFollowsByUserResponse
export interface IGetFollowsByUserRequest extends IPaginateRequest {
  userId: string;
  search?: string;
}
export interface IGetFollowsByUserResponse {
  follows: IFollow[]
}
export interface IGetFollowsByUserResponseBluePrint {
  follows: IFollowBluePrint
  userA: IUserLiteBluePrint;
  userB: IUserLiteBluePrint;
}

export interface IGetFollowersRequest extends IPaginateRequest {
  userId: string;
}
export interface IGetFollowersResponse {
  followers: IFollow[]
}
export interface IGetFollowingsResponseBluePrint extends Omit<IGetFollowersResponseBluePrint, "followers"> {
  followings: IFollowBluePrint;
}
export interface IGetFollowersResponseBluePrint {
  followers: IFollowBluePrint;
  userA: IUserLiteBluePrint;
  userB: IUserLiteBluePrint
}

// this is not a good idea...

export const userQuery:IUserBluePrint = [
  "avatar", "coinBalance", "country", "createdAt", 
  "earning", "earning", "email", "hideRanking", "id", "isDeleted", 
  "name", "onActivePremium", "phone", "localState", "subscriptionId", 
  "tags", "totalEarning", "unlockedBadges", "username", "userLevel", "contactHash"
]
export const userNotificationSettingQuery: IUserNotificationSettingBluePrint = [
  "allowedNotifications", "id", "userId",
]

export interface IUpdateCredentialRequest {
  userId: string;
  password: string;
  email?: string;
  phone?: string;
}
export interface IUpdateCredentialResponse {
  success: boolean;
} 

// User Rank 
export interface IGetUserGlobalRankRequest {
  userId: string;
}
export interface IGetUserGlobalRankResponse {
  userRank?: IUserRank
}
export interface IGetUserGlobalRankResponseBluePrint {
  userRank: IUserRankBluePrint
  userLite: IUserLiteBluePrint
}


// user
export interface IUpdateUserRequest {
  userId: string;
  user: Partial<IUser>
}
export interface IUpdateUserResponse {
  user?: IUser
}
export interface IUpdateUserResponseBluePrint {
  user: IUserBluePrint
}
export interface IGetUsersRequest extends IPaginateRequest, ISearchRequest {
  userIds?: string[];
  user?: IUserRaw;
}
export interface IGetUsersResponse {
  users: IUser[];
}
export interface IGetUsersResponseBluePrint {
  users: IUserBluePrint
}
export interface IGetUserRequest {
  user: Partial<IUser>
}
export interface IGetUserResponse {
  user?: IUser
}
export interface IGetUserResponseBluePrint {
  user: IUserBluePrint
}
export interface IMeResponse {
  user: IUser;
  userNotificationSetting: IUserNotificationSetting;
}
export interface IMeResponseBluePrint {
  user: IUserBluePrint
  userNotificationSetting: IUserNotificationSettingBluePrint
}
export type IUserBluePrint = (keyof IUser)[]
export type IUserNotificationSettingBluePrint = (keyof IUserNotificationSetting)[]

export interface IAddUserNotificationSettingRequest {
  userNotificationSetting: Partial<IUserNotificationSetting>
}
export interface IAddUserNotificationSettingResponse {
  userNotificationSetting?: IUserNotificationSetting
}
export type IAddUserNotificationSettingResponseBluePrint = IGetUserNotificationSettingResponseBluePrint
export interface IUpdateUserNotificationSettingRequest {
  userNotificationSettingId: string;
  userNotificationSetting: Partial<IUserNotificationSetting>
}
export interface IUpdateUserNotificationSettingResponse {
  userNotificationSetting?: IUserNotificationSetting
}
export type IUpdateUserNotificationSettingResponseBluePrint = IGetUserNotificationSettingResponseBluePrint
export interface IGetUserNotificationSettingRequest {
  userNotificationSetting: Partial<IUserNotificationSetting>
}
export interface IGetUserNotificationSettingResponse {
  userNotificationSetting?: IUserNotificationSetting
}
export interface IGetUserNotificationSettingResponseBluePrint {
  userNotificationSetting: IUserNotificationSettingBluePrint
}
