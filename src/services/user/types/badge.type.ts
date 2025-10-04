import { IBadge, IEarningAggregate, IPaginateRequest, ISearchRequest, IUserBadge } from "../../../types";
import { badgeQuery, earningAggregateQuery, IBadgeFields, IEarningAggregateFields, IUserBadgeFields, userBadgeQuery } from "../user.entities";


export interface IGetBadgesRequest extends IPaginateRequest, ISearchRequest {
  badgeIds?: string[];
  badge?: Partial<IBadge>;
}
export interface IGetBadgesResponse {
  badges: IBadge[]
}
export const getBadgesResponse: (keyof IGetBadgesResponse)[] = [
    "badges"
]
export interface IGetBadgesResponseNestedFields extends Omit<IGetBadgeResponseNestedFields, "badge"> {
  badges: IBadgeFields
}
export const getBadgesResponseNestedFields: IGetBadgesResponseNestedFields = {
  badges: badgeQuery
}

export interface IGetBadgeRequest {
  badge: Partial<IBadge>
}
export interface IGetBadgeResponse {
  badge?: IBadge
}
export const getBadgeResponse: (keyof IGetBadgeResponse)[] = [
    "badge"
]
export interface IGetBadgeResponseNestedFields {
  badge: IBadgeFields
}
export const getBadgeResponseNestedFields: IGetBadgeResponseNestedFields = {
  badge: badgeQuery
}

export type ICreateUserBadgeRequest = IGetUserBadgesRequest
export type ICreateUserBadgeResponse = IGetUserBadgeResponse;
export const createUserBadgeResponse: (keyof ICreateUserBadgeResponse)[] = ["userBadge"];
export type ICreateUserBadgeResponseNestedFields = IGetUserBadgeResponseNestedFields;
export const createUserBadgeResponseNestedFields: ICreateUserBadgeResponseNestedFields = {
  userBadge: userBadgeQuery,
  badge: badgeQuery
}

export interface IGetUserBadgeRequest {
  userBadge: Partial<IUserBadge>
}
export interface IGetUserBadgeResponse {
  userBadge: IUserBadge
}
export interface IGetUserBadgeResponseNestedFields {
  userBadge: IUserBadgeFields;
  badge: IBadgeFields
}

export interface IGetUserBadgeCountRequest {
  userId: string;
}
export interface IGetUserBadgeCountResponse {
  count: number
}
export const getUserBadgeCountResponse: (keyof IGetUserBadgeCountResponse)[] = ["count"];
export interface IGetUserBadgesRequest extends Partial<IPaginateRequest> {
  userBadgeIds?: string[];
  userBadge?: Partial<IUserBadge>;
}
export interface IGetUserBadgesResponse {
  userBadges: IUserBadge[]
}
export const getUserBadgesResponse: (keyof IGetUserBadgesResponse)[] = ["userBadges"];
export interface IGetUserBadgesResponseNestedFields extends Omit<IGetUserBadgeResponseNestedFields, "userBadge"> {
  userBadges: IUserBadgeFields;
}
export const getUserBadgesResponseNestedFields: IGetUserBadgesResponseNestedFields = {
  userBadges: userBadgeQuery,
  badge: badgeQuery,
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

export interface IGetVoucherRedemptionsCountRequest {
  userId: string;
}
export interface IGetVoucherRedemptionsCountResponse {
  count: number;
}
export const getVoucherRedemptionsCountResponse: (keyof IGetVoucherRedemptionsCountResponse)[] = ["count"];
