import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { badgeSchema } from "./schemas";
import { createUserBadgeResponse, createUserBadgeResponseNestedFields, getBadgeResponse, getBadgeResponseNestedFields, getBadgesResponse, getBadgesResponseNestedFields, getEarningAggregateResponse, getEarningAggregateResponseNestedFields, getUserBadgeCountResponse, getUserBadgesResponse, getUserBadgesResponseNestedFields, getVoucherRedemptionsCountResponse, ICreateUserBadgeRequest, ICreateUserBadgeResponse, ICreateUserBadgeResponseNestedFields, IGetBadgeRequest, IGetBadgeResponse, IGetBadgeResponseNestedFields, IGetBadgesRequest, IGetBadgesResponse, IGetBadgesResponseNestedFields, IGetEarningAggregateRequest, IGetEarningAggregateResponse, IGetEarningAggregateResponseNestedFields, IGetUserBadgeCountRequest, IGetUserBadgeCountResponse, IGetUserBadgesRequest, IGetUserBadgesResponse, IGetUserBadgesResponseNestedFields, IGetVoucherRedemptionsCountRequest, IGetVoucherRedemptionsCountResponse } from "./types";

export const createBadgeService = (client: GraphQLClient) => {
    return {
        async getBadge(
            input: IGetBadgeRequest,
            fetchFields?: {
            root?: (keyof IGetBadgeResponse)[],
            nestedFields?: IGetBadgeResponseNestedFields
            },
            option?: RequestOption
        ): Promise<IGetBadgeResponse | null> {
            const res = await client.request<{ getBadge: IGetBadgeResponse }, IGetBadgeRequest>(
            badgeSchema.getBadge(
                gqlQueryStringBuilder<IGetBadgeResponse, IGetBadgeResponseNestedFields>(
                fetchFields?.root ?? getBadgeResponse,
                fetchFields?.nestedFields ?? getBadgeResponseNestedFields
                )
            ),
            input,
            option
            )
            return res.data?.getBadge ?? null
        },
        async getBadges(
            input: IGetBadgesRequest,
            fetchFields?: {
            root?: (keyof IGetBadgesResponse)[],
            nestedFields?: IGetBadgesResponseNestedFields
            },
            option?: RequestOption
        ): Promise<IGetBadgesResponse | null> {
            const res = await client.request<{ getBadges: IGetBadgesResponse }, IGetBadgesRequest>(
            badgeSchema.getBadges(
                gqlQueryStringBuilder<IGetBadgesResponse, IGetBadgesResponseNestedFields>(
                fetchFields?.root ?? getBadgesResponse,
                fetchFields?.nestedFields ?? getBadgesResponseNestedFields
                )
            ),
            input,
            option
            )
            return res.data?.getBadges ?? null
        },
        async getUserBadges(
            input: IGetUserBadgesRequest,
            fetchFields?: {
            root?: (keyof IGetUserBadgesResponse)[],
            nestedFields?: IGetUserBadgesResponseNestedFields
            },
            option?: RequestOption
        ): Promise<IGetUserBadgesResponse | null> {
            const res = await client.request<{ getUserBadges: IGetUserBadgesResponse }, IGetUserBadgesRequest>(
                badgeSchema.getUserBadges(
                    gqlQueryStringBuilder<IGetUserBadgesResponse, IGetUserBadgesResponseNestedFields>(
                    fetchFields?.root ?? getUserBadgesResponse,
                    fetchFields?.nestedFields ?? getUserBadgesResponseNestedFields
                    )
                ),
                input,
                option
            )
            return res.data?.getUserBadges ?? null
        },
        async getUserBadgeCount(
            input: IGetUserBadgeCountRequest,
            fetchFields?: {
                root?: (keyof IGetUserBadgeCountResponse)[],
            },
            option?: RequestOption
        ): Promise<IGetUserBadgeCountResponse | null> {
            const res = await client.request<{ getUserBadgeCount: IGetUserBadgeCountResponse }, IGetUserBadgeCountRequest>(
                badgeSchema.getUserBadgeCount(
                    gqlQueryStringBuilder<IGetUserBadgeCountResponse>(
                        fetchFields?.root ?? getUserBadgeCountResponse,
                    )
                ),
                input,
                option
            )
            return res.data?.getUserBadgeCount ?? null
        },
        async createUserBadge(
            input: ICreateUserBadgeRequest,
            fetchFields?: {
                root?: (keyof ICreateUserBadgeResponse)[],
                nestedFields?: ICreateUserBadgeResponseNestedFields,
            },
            option?: RequestOption
        ): Promise<ICreateUserBadgeResponse | null> {
            const res = await client.request<{ createUserBadge: ICreateUserBadgeResponse }, ICreateUserBadgeRequest>(
                badgeSchema.createUserBadge(
                    gqlQueryStringBuilder<ICreateUserBadgeResponse, ICreateUserBadgeResponseNestedFields>(
                        fetchFields?.root ?? createUserBadgeResponse,
                        fetchFields?.nestedFields ?? createUserBadgeResponseNestedFields
                    )
                ),
                input,
                option
            )
            return res.data?.createUserBadge ?? null
        },
        async getEarningAggregate(
            input: IGetEarningAggregateRequest,
            fetchFields?: {
                root?: (keyof IGetEarningAggregateResponse)[],
                nestedFields?: IGetEarningAggregateResponseNestedFields,
            },
            option?: RequestOption
        ): Promise<IGetEarningAggregateResponse | null> {
            const res = await client.request<{ getEarningAggregate: IGetEarningAggregateResponse }, IGetEarningAggregateRequest>(
                badgeSchema.getEarningAggregate(
                    gqlQueryStringBuilder<IGetEarningAggregateResponse, IGetEarningAggregateResponseNestedFields>(
                        fetchFields?.root ?? getEarningAggregateResponse,
                        fetchFields?.nestedFields ?? getEarningAggregateResponseNestedFields
                    )
                ),
                input,
                option
            )
            return res.data?.getEarningAggregate ?? null
        },
        async getVoucherRedemptionsCount(
            input: IGetVoucherRedemptionsCountRequest,
            fetchFields?: {
                root?: (keyof IGetVoucherRedemptionsCountResponse)[],
            },
            option?: RequestOption
        ): Promise<IGetVoucherRedemptionsCountResponse | null> {
            const res = await client.request<{ getVoucherRedemptionsCount: IGetVoucherRedemptionsCountResponse }, IGetVoucherRedemptionsCountRequest>(
                badgeSchema.getVoucherRedemptionsCount(
                    gqlQueryStringBuilder<IGetVoucherRedemptionsCountResponse>(
                        fetchFields?.root ?? getVoucherRedemptionsCountResponse,
                    )
                ),
                input,
                option
            )
            return res.data?.getVoucherRedemptionsCount ?? null
        },
    }
}