import { IPaginateRequest, IUserNotification, IUserNotificationSetting } from "../../../types";
import { IUserNotificationFields, IUserNotificationSettingFields } from "../user.entities";

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
export interface IUpdateNotificationResponseNestedFields {
  notification: IUserNotificationFields
}

export interface IGetNotificationsRequest extends IPaginateRequest {
  notification?: Partial<IUserNotification>;
  notificationIds?: string[]
}
export interface IGetNotificationsResponse {
  notifications: IUserNotification[]
}
export interface IGetNotificationsResponseNestedFields {
  notifications: IUserNotificationFields
}


export interface IAddUserNotificationSettingRequest {
  userNotificationSetting: Partial<IUserNotificationSetting>
}
export interface IAddUserNotificationSettingResponse {
  userNotificationSetting?: IUserNotificationSetting
}
export type IAddUserNotificationSettingResponseNestedFields = IGetUserNotificationSettingResponseNestedFields
export interface IUpdateUserNotificationSettingRequest {
  userNotificationSettingId: string;
  userNotificationSetting: Partial<IUserNotificationSetting>
}
export interface IUpdateUserNotificationSettingResponse {
  userNotificationSetting?: IUserNotificationSetting
}
export type IUpdateUserNotificationSettingResponseNestedFields = IGetUserNotificationSettingResponseNestedFields
export interface IGetUserNotificationSettingRequest {
  userNotificationSetting: Partial<IUserNotificationSetting>
}
export interface IGetUserNotificationSettingResponse {
  userNotificationSetting?: IUserNotificationSetting
}
export interface IGetUserNotificationSettingResponseNestedFields {
  userNotificationSetting: IUserNotificationSettingFields
}
