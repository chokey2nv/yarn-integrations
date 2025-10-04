import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { notificationSchema } from "./schemas";
import { addUserNotificationSettingResponse, addUserNotificationSettingResponseNestedFields, getNotificationCountResponse, getNotificationsByCategoryResponse, getNotificationsByCategoryResponseNestedFields, getNotificationsResponse, getNotificationsResponseNestedFields, getUserNotificationSettingResponse, getUserNotificationSettingResponseNestedFields, IAddUserNotificationSettingRequest, IAddUserNotificationSettingResponse, IAddUserNotificationSettingResponseNestedFields, IGetNotificationsByCategoryRequest, IGetNotificationsByCategoryResponse, IGetNotificationsByCategoryResponseNestedFields, IGetNotificationsCountRequest, IGetNotificationsCountResponse, IGetNotificationsRequest, IGetNotificationsResponse, IGetNotificationsResponseNestedFields, IGetUserNotificationSettingRequest, IGetUserNotificationSettingResponse, IGetUserNotificationSettingResponseNestedFields, IUpdateNotificationRequest, IUpdateNotificationResponse, IUpdateNotificationResponseNestedFields, IUpdateUserNotificationSettingRequest, IUpdateUserNotificationSettingResponse, IUpdateUserNotificationSettingResponseNestedFields, updateNotificationResponse, updateNotificationResponseNestedFields, updateUserNotificationSettingResponse, updateUserNotificationSettingResponseNestedFields } from "./types";

export const createNotificationService = (client: GraphQLClient) => {
    return {
        async addUserNotificationSetting(
            input: IAddUserNotificationSettingRequest,
            fetchFields?: {
                root?: (keyof IAddUserNotificationSettingResponse)[],
                nestedFields?: IAddUserNotificationSettingResponseNestedFields
            },
            option?: RequestOption
        ): Promise<IAddUserNotificationSettingResponse | null> {
            const res = await client.request<{ addUserNotificationSetting: IAddUserNotificationSettingResponse }, IAddUserNotificationSettingRequest>(
                notificationSchema.addUserNotificationSetting(
                    gqlQueryStringBuilder<IAddUserNotificationSettingResponse, IAddUserNotificationSettingResponseNestedFields>(
                        fetchFields?.root ?? addUserNotificationSettingResponse,
                        fetchFields?.nestedFields ?? addUserNotificationSettingResponseNestedFields
                    )
                ),
                input,
                option
            )
            return res.data?.addUserNotificationSetting ?? null
        },
        async updateUserNotificationSetting(
            input: IUpdateUserNotificationSettingRequest,
            fetchFields?: {
                root?: (keyof IUpdateUserNotificationSettingResponse)[],
                nestedFields?: IUpdateUserNotificationSettingResponseNestedFields
            },
            option?: RequestOption
        ): Promise<IUpdateUserNotificationSettingResponse | null> {
            const res = await client.request<{ updateUserNotificationSetting: IUpdateUserNotificationSettingResponse }, IUpdateUserNotificationSettingRequest>(
                notificationSchema.updateUserNotificationSetting(
                    gqlQueryStringBuilder<IUpdateUserNotificationSettingResponse, IUpdateUserNotificationSettingResponseNestedFields>(
                        fetchFields?.root ?? updateUserNotificationSettingResponse,
                        fetchFields?.nestedFields ?? updateUserNotificationSettingResponseNestedFields
                    )
                ),
                input,
                option
            )
            return res.data?.updateUserNotificationSetting ?? null
        },
        async getUserNotificationSetting(
            input: IGetUserNotificationSettingRequest,
            fetchFields?: {
                root?: (keyof IGetUserNotificationSettingResponse)[],
                nestedFields?: IGetUserNotificationSettingResponseNestedFields
            },
            option?: RequestOption
        ): Promise<IGetUserNotificationSettingResponse | null> {
            const res = await client.request<{ getUserNotificationSetting: IGetUserNotificationSettingResponse }, IGetUserNotificationSettingRequest>(
                notificationSchema.getUserNotificationSetting(
                    gqlQueryStringBuilder<IGetUserNotificationSettingResponse, IGetUserNotificationSettingResponseNestedFields>(
                        fetchFields?.root ?? getUserNotificationSettingResponse,
                        fetchFields?.nestedFields ?? getUserNotificationSettingResponseNestedFields
                    )
                ),
                input,
                option
            )
            return res.data?.getUserNotificationSetting ?? null
        },
        async getNotificationsByCategory(
            input: IGetNotificationsByCategoryRequest,
            fetchFields?: {
                root?: (keyof IGetNotificationsByCategoryResponse)[],
                nestedFields?: IGetNotificationsByCategoryResponseNestedFields
            },
            option?: RequestOption
        ): Promise<IGetNotificationsByCategoryResponse | null> {
            const res = await client.request<{ getNotificationsByCategory: IGetNotificationsByCategoryResponse }, IGetNotificationsByCategoryRequest>(
                notificationSchema.getNotificationsByCategory(
                    gqlQueryStringBuilder<IGetNotificationsByCategoryResponse, IGetNotificationsByCategoryResponseNestedFields>(
                        fetchFields?.root ?? getNotificationsByCategoryResponse,
                        fetchFields?.nestedFields ?? getNotificationsByCategoryResponseNestedFields
                    )
                ),
                input,
                option
            )
            return res.data?.getNotificationsByCategory ?? null
        },
        async getNotifications(
            input: IGetNotificationsRequest,
            fetchFields?: {
                root?: (keyof IGetNotificationsResponse)[],
                nestedFields?: IGetNotificationsResponseNestedFields
            },
            option?: RequestOption
        ): Promise<IGetNotificationsResponse | null> {
            const res = await client.request<{ getNotifications: IGetNotificationsResponse }, IGetNotificationsRequest>(
                notificationSchema.getNotifications(
                    gqlQueryStringBuilder<IGetNotificationsResponse, IGetNotificationsResponseNestedFields>(
                        fetchFields?.root ?? getNotificationsResponse,
                        fetchFields?.nestedFields ?? getNotificationsResponseNestedFields
                    )
                ),
                input,
                option
            )
            return res.data?.getNotifications ?? null
        },
        async getNotificationCount(
            input: IGetNotificationsCountRequest,
            fetchFields?: {
                root?: (keyof IGetNotificationsCountResponse)[],
            },
            option?: RequestOption
        ): Promise<IGetNotificationsCountResponse | null> {
            const res = await client.request<{ getNotificationCount: IGetNotificationsCountResponse }, IGetNotificationsCountRequest>(
                notificationSchema.getNotificationCount(
                    gqlQueryStringBuilder<IGetNotificationsCountResponse>(
                        fetchFields?.root ?? getNotificationCountResponse,
                    )
                ),
                input,
                option
            )
            return res.data?.getNotificationCount ?? null
        },
        async updateNotification(
            input: IUpdateNotificationRequest,
            fetchFields?: {
                root?: (keyof IUpdateNotificationResponse)[],
                nestedFields: IUpdateNotificationResponseNestedFields
            },
            option?: RequestOption
        ): Promise<IUpdateNotificationResponse | null> {
            const res = await client.request<{ updateNotification: IUpdateNotificationResponse }, IUpdateNotificationRequest>(
                notificationSchema.updateNotification(
                    gqlQueryStringBuilder<IUpdateNotificationResponse, IUpdateNotificationResponseNestedFields>(
                        fetchFields?.root ?? updateNotificationResponse,
                        fetchFields?.nestedFields ?? updateNotificationResponseNestedFields
                    )
                ),
                input,
                option
            )
            return res.data?.updateNotification ?? null
        },
    }
}