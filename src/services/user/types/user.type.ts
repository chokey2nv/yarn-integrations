import { IEarningAggregate, IFollow, IPaginateRequest, IRankTypes, ISearchRequest, IUser, IUserLite, IUserNotificationSetting, IUserRank, IUserSuggestion } from "../../../types";
import { earningAggregateQuery, IEarningAggregateFields, IFollowFields, IUserFields, IUserLiteFields, IUserNotificationSettingFields, IUserRankFields, IUserSuggestionFields, userLiteQuery, userNotificationSettingQuery, userQuery, userRankQuery } from "../user.entities";

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
export interface IGetUserUserSuggestionsResponseNestedFields {
  userLites: IUserLiteFields
}
export type IGetUserSuggestionRequest = ICreateUserSuggestionRequest;
export type IGetUserSuggestionResponse = ICreateUserSuggestionResponse;
export type IGetUserSuggestionResponseNestedFields = ICreateUserSuggestionResponseNestedFields;

export interface ICreateUserSuggestionRequest {
  userSuggestion: Partial<IUserSuggestion>;
}
export interface ICreateUserSuggestionResponse {
  userSuggestion: IUserSuggestion;
}
export interface ICreateUserSuggestionResponseNestedFields {
  userSuggestion: IUserSuggestionFields;
}

export interface IGetGlobalRanksRequest extends IPaginateRequest {
  rankType: Partial<IRankTypes>
  userId?: string;
}
export interface IGetGlobalRanksResponse {
  userRanks: IUserRank[]
}
export interface IGetGlobalRanksResponseNestedFields extends Omit<IGetUserGlobalRankResponseNestedFields, "userRank"> {
  userRanks: IUserRankFields
}
export interface IGetUserGlobalRankRequest {
  userId: string;
}
export interface IGetUserGlobalRankResponse {
  userRank?: IUserRank
}
export interface IGetUserGlobalRankResponseNestedFields {
  userRank: IUserRankFields
  userLite: IUserLiteFields
}
export const getUserGlobalRankResponseNestedFields: IGetUserGlobalRankResponseNestedFields = {
  userRank: userRankQuery,
  userLite: userLiteQuery
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
export const getEarningAggregateResponse: (keyof IGetEarningAggregateResponse)[] = ["earningAggregates"];
export interface IGetEarningAggregateResponseNestedFields {
  earningAggregates: IEarningAggregateFields
}
export const getEarningAggregateResponseNestedFields:IGetEarningAggregateResponseNestedFields = {
  earningAggregates: earningAggregateQuery
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
  follow?: Partial<IFollow>;
}
export type IGetFollowsResponse = IGetFollowsByUserResponse
export interface IGetFollowsByUserRequest extends IPaginateRequest {
  userId: string;
  search?: string;
}
export interface IGetFollowsByUserResponse {
  follows: IFollow[]
}
export interface IGetFollowsByUserResponseNestedFields {
  follows: IFollowFields
  userA: IUserLiteFields;
  userB: IUserLiteFields;
}

export interface IGetFollowersRequest extends IPaginateRequest {
  userId: string;
}
export interface IGetFollowersResponse {
  followers: IFollow[]
}
export interface IGetFollowingsResponseNestedFields extends Omit<IGetFollowersResponseNestedFields, "followers"> {
  followings: IFollowFields;
}
export interface IGetFollowersResponseNestedFields {
  followers: IFollowFields;
  userA: IUserLiteFields;
  userB: IUserLiteFields
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
  user: IUserFields
}
export interface IGetUsersRequest extends IPaginateRequest, ISearchRequest {
  userIds?: string[];
  user?: Partial<IUser>;
}
export interface IGetUsersResponse {
  users: IUser[];
}
export interface IGetUsersResponseBluePrint {
  users: IUserFields
}
export interface IGetUserRequest {
  user: Partial<IUser>
}
export interface IGetUserResponse {
  user?: IUser
}
export interface IGetUserResponseNestedFields {
  user: IUserFields
}
export interface IMeResponse {
  user: IUser;
  userNotificationSetting: IUserNotificationSetting;
}
export const meResponse: (keyof IMeResponse)[] = ["user", "userNotificationSetting"];
export interface IMeResponseNestedFields {
  user: IUserFields
  userNotificationSetting: IUserNotificationSettingFields
}
export const meResponseNestedFields: IMeResponseNestedFields = {
  user: userQuery,
  userNotificationSetting: userNotificationSettingQuery
}



export interface IUpdateCredentialRequest {
  userId: string;
  password: string;
  email?: string;
  phone?: string;
}
export interface IUpdateCredentialResponse {
  success: boolean;
} 