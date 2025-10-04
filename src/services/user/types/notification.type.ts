import { IPaginateRequest, IUserNotification, IUserNotificationSetting } from "../../../types";
import { IUserNotificationFields, IUserNotificationSettingFields, notificationQuery, userNotificationSettingQuery } from "../user.entities";

// get notification
export interface IGetNotificationsRequest extends IPaginateRequest {
  notification?: Partial<IUserNotification>;
  notificationIds?: string[]
}
export interface IGetNotificationsResponse {
  notifications: IUserNotification[]
}
export const getNotificationsResponse: (keyof IGetNotificationsResponse)[] = ["notifications"]
export interface IGetNotificationsResponseNestedFields {
  notifications: IUserNotificationFields
}
export const getNotificationsResponseNestedFields: IGetNotificationsResponseNestedFields = {
  notifications: notificationQuery
}


export interface IGetNotificationsByCategoryRequest extends IPaginateRequest {
  notification: Partial<IUserNotification>;
  categories: string[]
}
export type IGetNotificationsByCategoryResponse = IGetNotificationsResponse
export const getNotificationsByCategoryResponse: (keyof IGetNotificationsByCategoryResponse)[] = getNotificationsResponse
export type IGetNotificationsByCategoryResponseNestedFields = IGetNotificationsResponseNestedFields
export const getNotificationsByCategoryResponseNestedFields: IGetNotificationsByCategoryResponseNestedFields = getNotificationsResponseNestedFields

export interface IGetNotificationsCountRequest {
  notification?: Partial<IUserNotification>;
}
export interface IGetNotificationsCountResponse {
  count: number
}
export const getNotificationCountResponse: (keyof IGetNotificationsCountResponse)[] = ["count"]
export interface IUpdateNotificationRequest {
  notificationId: string;
  notification: Partial<IUserNotification>;
}
export interface IUpdateNotificationResponse {
  notification: IUserNotification
};
export const updateNotificationResponse: (keyof IUpdateNotificationResponse)[] = ["notification"]
export interface IUpdateNotificationResponseNestedFields {
  notification: IUserNotificationFields
}
export const updateNotificationResponseNestedFields: IUpdateNotificationResponseNestedFields = {
  notification: notificationQuery
}




// get user notification setting 
export interface IGetUserNotificationSettingRequest {
  userNotificationSetting: Partial<IUserNotificationSetting>
}
export interface IGetUserNotificationSettingResponse {
  userNotificationSetting?: IUserNotificationSetting
}
export const getUserNotificationSettingResponse: (keyof IGetUserNotificationSettingResponse)[] = ["userNotificationSetting"]
export interface IGetUserNotificationSettingResponseNestedFields {
  userNotificationSetting: IUserNotificationSettingFields
}
export const getUserNotificationSettingResponseNestedFields: IGetUserNotificationSettingResponseNestedFields = {
  userNotificationSetting: userNotificationSettingQuery
}

// add user notification settings
export interface IAddUserNotificationSettingRequest {
  userNotificationSetting: Partial<IUserNotificationSetting>
}
export type IAddUserNotificationSettingResponse = IGetUserNotificationSettingResponse;
export const addUserNotificationSettingResponse: (keyof IAddUserNotificationSettingResponse)[] = getUserNotificationSettingResponse
export type IAddUserNotificationSettingResponseNestedFields = IGetUserNotificationSettingResponseNestedFields
export const addUserNotificationSettingResponseNestedFields:IAddUserNotificationSettingResponseNestedFields = getUserNotificationSettingResponseNestedFields
export interface IUpdateUserNotificationSettingRequest {
  userNotificationSettingId: string;
  userNotificationSetting: Partial<IUserNotificationSetting>
}
export type IUpdateUserNotificationSettingResponse = IGetUserNotificationSettingResponse
export const updateUserNotificationSettingResponse: (keyof IUpdateUserNotificationSettingResponse)[] = getUserNotificationSettingResponse
export type IUpdateUserNotificationSettingResponseNestedFields = IGetUserNotificationSettingResponseNestedFields
export const updateUserNotificationSettingResponseNestedFields: IUpdateUserNotificationSettingResponseNestedFields = getUserNotificationSettingResponseNestedFields

