import { IEarningAggregate, IFollow, IPaginateRequest, IRankTypes, ISearchRequest, IUser, IUserLite, IUserNotificationSetting, IUserRank, IUserSuggestion } from "../../../types";
import { earningAggregateQuery, followQuery, IEarningAggregateFields, IFollowFields, IUserFields, IUserLiteFields, IUserNotificationSettingFields, IUserRankFields, IUserSuggestionFields, userLiteQuery, userNotificationSettingQuery, userQuery, userRankQuery, userSuggestionQuery } from "../user.entities";
import { createUserBadgeResponse } from "./badge.type";

export interface ISyncUserSuggestionRequest {
  userId: string;
  contacts: string[];
}
export interface ISyncUserSuggestionResponse {
  userId: string;
  totalSuggestions: number;
}
export const syncUserSuggestionResponse: (keyof ISyncUserSuggestionResponse)[] = ["userId", "totalSuggestions"];
export interface IGetUserUserSuggestionsRequest extends IPaginateRequest{
  userId: string;
}
export interface IGetUserUserSuggestionsResponse {
  userLites: IUserLite[];
}
export const getUserUserSuggestionsResponse: (keyof IGetUserUserSuggestionsResponse)[] = ["userLites"];
export interface IGetUserUserSuggestionsResponseNestedFields {
  userLites: IUserLiteFields
}
export const getUserUserSuggestionsResponseNestedFields: IGetUserUserSuggestionsResponseNestedFields = {
  userLites: userLiteQuery
}
export type IGetUserSuggestionRequest = ICreateUserSuggestionRequest;
export interface IGetUserSuggestionResponse {
    userSuggestion: IUserSuggestion
}
export const getUserSuggestionResponse: (keyof IGetUserSuggestionResponse)[] = ["userSuggestion"];
export interface IGetUserSuggestionResponseNestedFields {
  userSuggestion: IUserSuggestionFields
}
export const getUserSuggestionResponseNestedFields: IGetUserSuggestionResponseNestedFields = {
  userSuggestion: userSuggestionQuery
}

export interface ICreateUserSuggestionRequest {
  userSuggestion: Partial<IUserSuggestion>;
}
export interface ICreateUserSuggestionResponse {
  userSuggestion: IUserSuggestion;
}
export const createUserSuggestionResponse: (keyof ICreateUserSuggestionResponse)[] = ["userSuggestion"];
export interface ICreateUserSuggestionResponseNestedFields {
  userSuggestion: IUserSuggestionFields;
}
export const createUserSuggestionResponseNestedFields: ICreateUserSuggestionResponseNestedFields = {
  userSuggestion: userSuggestionQuery
}

// global ranks
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

// get ranked users 
export type IGetRankedUsersRequest = IGetGlobalRanksRequest;
export type IGetRankedUsersResponse = IGetGlobalRanksResponse;
export type IGetRankedUsersResponseNestedFields = IGetGlobalRanksResponseNestedFields
export const getRankedUsersResponse: (keyof IGetRankedUsersResponse)[] = ["userRanks"];
export const getRankedUsersResponseNestedFields: IGetRankedUsersResponseNestedFields = {
  userRanks: userRankQuery,
  userLite: userLiteQuery,
}

export interface IGetUserGlobalRankRequest {
  userId: string;
}
export interface IGetUserGlobalRankResponse {
  userRank?: IUserRank
}
export const getUserGlobalRankResponse: (keyof IGetUserGlobalRankResponse)[] = ["userRank"];
export interface IGetUserGlobalRankResponseNestedFields {
  userRank: IUserRankFields
  userLite: IUserLiteFields
}
export const getUserGlobalRankResponseNestedFields: IGetUserGlobalRankResponseNestedFields = {
  userRank: userRankQuery,
  userLite: userLiteQuery
}

export interface IGetFriendsCountRequest {
  userId: string;
}
export interface IGetFriendsCountResponse {
  count: number;
}
export const getFriendsCountResponse: (keyof IGetFriendsCountResponse)[] = ["count"];

export interface ICheckFollowRequest {
  follower: string;
  followed: string;
}
export interface ICheckFollowResponse {
  isFollowing?: boolean;
}
export const checkFollowResponse: (keyof ICheckFollowResponse)[] = ["isFollowing"];

export type IFollowRequest = IUnfollowRequest;
export type IFollowResponse = IUnfollowResponse; 
export const followResponse: (keyof IFollowResponse)[] = ["success"];

export interface IUnfollowRequest {
  follower: string;
  followed: string;
}
export interface IUnfollowResponse {
  success: boolean;
}
export const unfollowResponse: (keyof IUnfollowResponse)[] = ["success"];

export interface IGetFollowsByUserRequest extends IPaginateRequest {
  userId: string;
  search?: string;
}
export interface IGetFollowsByUserResponse {
  follows: IFollow[]
}
export const getFollowsByUserResponse: (keyof IGetFollowsByUserResponse)[] = ["follows"];
export interface IGetFollowsByUserResponseNestedFields {
  follows: IFollowFields
  userA: IUserLiteFields;
  userB: IUserLiteFields;
}
export const getFollowsByUserResponseNestedFields: IGetFollowsByUserResponseNestedFields = {
  follows: followQuery,
  userA: userLiteQuery,
  userB: userLiteQuery
}

export interface IGetFollowsRequest extends IPaginateRequest, ISearchRequest {
  followIds?: string[]
  follow?: Partial<IFollow>;
}
export type IGetFollowsResponse = IGetFollowsByUserResponse
export const getFollowsResponse: (keyof IGetFollowsResponse)[] = ["follows"];
export type IGetFollowsResponseNestedFields = IGetFollowsByUserResponseNestedFields
export const getFollowsResponseNestedFields: IGetFollowsResponseNestedFields = getFollowsByUserResponseNestedFields


export interface IGetFollowersRequest extends IPaginateRequest {
  userId: string;
}
export interface IGetFollowersResponse {
  followers: IFollow[]
}
export const getFollowersResponse: (keyof IGetFollowersResponse)[] = ["followers"];
export interface IGetFollowingsResponseNestedFields extends Omit<IGetFollowersResponseNestedFields, "followers"> {
  followings: IFollowFields;
}
export interface IGetFollowersResponseNestedFields {
  followers: IFollowFields;
  userA: IUserLiteFields;
  userB: IUserLiteFields
}
export const getFollowersResponseNestedFields: IGetFollowersResponseNestedFields = {
  followers: followQuery,
  userA: userLiteQuery,
  userB: userLiteQuery
}


// user
export interface IGetUserRequest {
  user: Partial<IUser>
}
export interface IGetUserResponse {
  user?: IUser
}
export const getUserResponse: (keyof IGetUserResponse)[] = ["user"];
export interface IGetUserResponseNestedFields {
  user: IUserFields
}
export const getUserResponseNestedFields: IGetUserResponseNestedFields = {
  user: userQuery
}

// update user
export interface IUpdateUserRequest {
  userId: string;
  user: Partial<IUser>
}
export interface IUpdateUserResponse {
  user?: IUser
}
export const updateUserResponse = getUserResponse;
export type IUpdateUserResponseNestedFields = IGetUserResponseNestedFields
export const updateUserResponseNestedFields = getUserResponseNestedFields;

// get users
export interface IGetUsersRequest extends IPaginateRequest, ISearchRequest {
  userIds?: string[];
  user?: Partial<IUser>;
}
export interface IGetUsersResponse {
  users: IUser[];
}
export const getUsersResponse: (keyof IGetUsersResponse)[] = ["users"];
export interface IGetUsersResponseNestedFields extends Omit<IGetUserResponseNestedFields, "user"> {
  users: IUserFields
}
export const getUsersResponseNestedFields: IGetUsersResponseNestedFields = {
  users: userQuery
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
export const updateCredentialResponse: (keyof IUpdateCredentialResponse)[] = ["success"];