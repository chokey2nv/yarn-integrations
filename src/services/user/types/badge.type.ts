import { IBadge, IPaginateRequest, ISearchRequest, IUserBadge } from "../../../types";
import { IBadgeFields, IUserBadgeFields } from "../user.entities";


export interface IGetBadgesRequest extends IPaginateRequest, ISearchRequest {
  badgeIds?: string[];
  badge?: Partial<IBadge>;
}
export interface IGetBadgesResponse {
  badges: IBadge[]
}
export interface IGetBadgesResponseNestedFields extends Omit<IGetBadgeResponseNestedFields, "badge"> {
  badges: IBadgeFields
}

export interface IGetBadgeRequest {
  badge: Partial<IBadge>
}
export interface IGetBadgeResponse {
  badge?: IBadge
}
export interface IGetBadgeResponseNestedFields {
  badge: IBadgeFields
}

export type ICreateUserBadgeRequest = IGetUserBadgesRequest
export type ICreateUserBadgeResponse = IGetUserBadgeResponse;
export type ICreateUserBadgeResponseNestedFields = IGetUserBadgeResponseNestedFields;


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
export interface IGetUserBadgesRequest extends Partial<IPaginateRequest> {
  userBadgeIds?: string[];
  userBadge?: Partial<IUserBadge>;
}
export interface IGetUserBadgesResponse {
  userBadges: IUserBadge[]
}
export interface IGetUserBadgesResponseNestedFields extends Omit<IGetUserBadgeResponseNestedFields, "userBadge"> {
  userBadges: IUserBadgeFields;
}
