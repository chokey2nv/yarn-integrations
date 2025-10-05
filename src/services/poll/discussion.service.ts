import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { pollDiscussionSchema } from "./schemas/discussion.schema";
import { createPollDiscussionImpressionResponse, createPollDiscussionImpressionResponseNestedFields, createPollDiscussionResponse, createPollDiscussionResponseNestedFields, deletePollDiscussionResponse, getPollDiscussionImpressionResponse, getPollDiscussionImpressionResponseNestedFields, getPollDiscussionImpressionsCountResponse, getPollDiscussionResponse, getPollDiscussionResponseNestedFields, getPollDiscussionsCountResponse, getPollDiscussionsResponse, getPollDiscussionsResponseNestedFields, ICreatePollDiscussionImpressionRequest, ICreatePollDiscussionImpressionResponse, ICreatePollDiscussionImpressionResponseNestedFields, ICreatePollDiscussionRequest, ICreatePollDiscussionResponse, ICreatePollDiscussionResponseNestedFields, IDeletePollDiscussionRequest, IDeletePollDiscussionResponse, IGetPollDiscussionImpressionRequest, IGetPollDiscussionImpressionResponse, IGetPollDiscussionImpressionResponseNestedFields, IGetPollDiscussionImpressionsCountRequest, IGetPollDiscussionImpressionsCountResponse, IGetPollDiscussionRequest, IGetPollDiscussionResponse, IGetPollDiscussionResponseNestedFields, IGetPollDiscussionsCountRequest, IGetPollDiscussionsCountResponse, IGetPollDiscussionsRequest, IGetPollDiscussionsResponse, IGetPollDiscussionsResponseNestedFields, IUpdatePollDiscussionImpressionRequest, IUpdatePollDiscussionImpressionResponse, IUpdatePollDiscussionImpressionResponseNestedFields, IUpdatePollDiscussionRequest, IUpdatePollDiscussionResponse, IUpdatePollDiscussionResponseNestedFields, updatePollDiscussionImpressionResponse, updatePollDiscussionImpressionResponseNestedFields, updatePollDiscussionResponse, updatePollDiscussionResponseNestedFields } from "./types";

export const discussionService = (client: GraphQLClient) => ({
    async getPollDiscussionsCount(
        input: IGetPollDiscussionsCountRequest,
        fetchFields?: {
            root?: (keyof IGetPollDiscussionsCountResponse)[],
        },
        option?: RequestOption
    ): Promise<IGetPollDiscussionsCountResponse | null> {
        const res = await client.request<{ getPollDiscussionsCount: IGetPollDiscussionsCountResponse }, IGetPollDiscussionsCountRequest>(
            pollDiscussionSchema.getPollDiscussionsCount(
                gqlQueryStringBuilder<IGetPollDiscussionsCountResponse>(
                    fetchFields?.root ?? getPollDiscussionsCountResponse,
                )
            ),
            input,
            option
        )
        return res.data?.getPollDiscussionsCount ?? null
    },
    async getPollDiscussion(
        input: IGetPollDiscussionRequest,
        fetchFields?: {
            root?: (keyof IGetPollDiscussionResponse)[],
            nestedFields?: IGetPollDiscussionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetPollDiscussionResponse | null> {
        const res = await client.request<{ getPollDiscussion: IGetPollDiscussionResponse }, IGetPollDiscussionRequest>(
            pollDiscussionSchema.getPollDiscussion(
                gqlQueryStringBuilder<IGetPollDiscussionResponse, IGetPollDiscussionResponseNestedFields>(
                    fetchFields?.root ?? getPollDiscussionResponse,
                    fetchFields?.nestedFields ?? getPollDiscussionResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getPollDiscussion ?? null
    },
    async getPollDiscussions(
        input: IGetPollDiscussionsRequest,
        fetchFields?: {
            root?: (keyof IGetPollDiscussionsResponse)[],
            nestedFields?: IGetPollDiscussionsResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetPollDiscussionsResponse | null> {
        const res = await client.request<{ getPollDiscussions: IGetPollDiscussionsResponse }, IGetPollDiscussionsRequest>(
            pollDiscussionSchema.getPollDiscussions(
                gqlQueryStringBuilder<IGetPollDiscussionsResponse, IGetPollDiscussionsResponseNestedFields>(
                    fetchFields?.root ?? getPollDiscussionsResponse,
                    fetchFields?.nestedFields ?? getPollDiscussionsResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getPollDiscussions ?? null
    },
    async createPollDiscussion(
        input: ICreatePollDiscussionRequest,
        fetchFields?: {
            root?: (keyof ICreatePollDiscussionResponse)[],
            nestedFields?: ICreatePollDiscussionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<ICreatePollDiscussionResponse | null> {
        const res = await client.request<{ createPollDiscussion: ICreatePollDiscussionResponse }, ICreatePollDiscussionRequest>(
            pollDiscussionSchema.createPollDiscussion(
                gqlQueryStringBuilder<ICreatePollDiscussionResponse, ICreatePollDiscussionResponseNestedFields>(
                    fetchFields?.root ?? createPollDiscussionResponse,
                    fetchFields?.nestedFields ?? createPollDiscussionResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.createPollDiscussion ?? null
    },
    async updatePollDiscussion(
        input: IUpdatePollDiscussionRequest,
        fetchFields?: {
            root?: (keyof IUpdatePollDiscussionResponse)[],
            nestedFields?: IUpdatePollDiscussionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IUpdatePollDiscussionResponse | null> {
        const res = await client.request<{ updatePollDiscussion: IUpdatePollDiscussionResponse }, IUpdatePollDiscussionRequest>(
            pollDiscussionSchema.updatePollDiscussion(
                gqlQueryStringBuilder<IUpdatePollDiscussionResponse, IUpdatePollDiscussionResponseNestedFields>(
                    fetchFields?.root ?? updatePollDiscussionResponse,
                    fetchFields?.nestedFields ?? updatePollDiscussionResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.updatePollDiscussion ?? null
    },
    async deletePollDiscussion(
        input: IDeletePollDiscussionRequest,
        fetchFields?: {
            root?: (keyof IDeletePollDiscussionResponse)[],
        },
        option?: RequestOption
    ): Promise<IDeletePollDiscussionResponse | null> {
        const res = await client.request<{ deletePollDiscussion: IDeletePollDiscussionResponse }, IDeletePollDiscussionRequest>(
            pollDiscussionSchema.deletePollDiscussion(
                gqlQueryStringBuilder<IDeletePollDiscussionResponse>(
                    fetchFields?.root ?? deletePollDiscussionResponse,
                )
            ),
            input,
            option
        )
        return res.data?.deletePollDiscussion ?? null
    },

    // discussion impression 

    async getPollDiscussionImpressionsCount(
        input: IGetPollDiscussionImpressionsCountRequest,
        fetchFields?: {
            root?: (keyof IGetPollDiscussionImpressionsCountResponse)[],
        },
        option?: RequestOption
    ): Promise<IGetPollDiscussionImpressionsCountResponse | null> {
        const res = await client.request<{ getPollDiscussionImpressionsCount: IGetPollDiscussionImpressionsCountResponse }, IGetPollDiscussionImpressionsCountRequest>(
            pollDiscussionSchema.getPollDiscussionImpressionsCount(
                gqlQueryStringBuilder<IGetPollDiscussionImpressionsCountResponse>(
                    fetchFields?.root ?? getPollDiscussionImpressionsCountResponse
                )
            ),
            input,
            option
        )
        return res.data?.getPollDiscussionImpressionsCount ?? null
    },
    async getPollDiscussionImpression(
        input: IGetPollDiscussionImpressionRequest,
        fetchFields?: {
            root?: (keyof IGetPollDiscussionImpressionResponse)[],
            nestedFields?: IGetPollDiscussionImpressionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetPollDiscussionImpressionResponse | null> {
        const res = await client.request<{ getPollDiscussionImpression: IGetPollDiscussionImpressionResponse }, IGetPollDiscussionImpressionRequest>(
            pollDiscussionSchema.getPollDiscussionImpression(
                gqlQueryStringBuilder<IGetPollDiscussionImpressionResponse, IGetPollDiscussionImpressionResponseNestedFields>(
                    fetchFields?.root ?? getPollDiscussionImpressionResponse,
                    fetchFields?.nestedFields ?? getPollDiscussionImpressionResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getPollDiscussionImpression ?? null
    },
    async updatePollDiscussionImpression(
        input: IUpdatePollDiscussionImpressionRequest,
        fetchFields?: {
            root?: (keyof IUpdatePollDiscussionImpressionResponse)[],
            nestedFields?: IUpdatePollDiscussionImpressionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IUpdatePollDiscussionImpressionResponse | null> {
        const res = await client.request<{ updatePollDiscussionImpression: IUpdatePollDiscussionImpressionResponse }, IUpdatePollDiscussionImpressionRequest>(
            pollDiscussionSchema.updatePollDiscussionImpression(
                gqlQueryStringBuilder<IUpdatePollDiscussionImpressionResponse, IUpdatePollDiscussionImpressionResponseNestedFields>(
                    fetchFields?.root ?? updatePollDiscussionImpressionResponse,
                    fetchFields?.nestedFields ?? updatePollDiscussionImpressionResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.updatePollDiscussionImpression ?? null
    },
    async createPollDiscussionImpression(
        input: ICreatePollDiscussionImpressionRequest,
        fetchFields?: {
            root?: (keyof ICreatePollDiscussionImpressionResponse)[],
            nestedFields?: ICreatePollDiscussionImpressionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<ICreatePollDiscussionImpressionResponse | null> {
        const res = await client.request<{ createPollDiscussionImpression: ICreatePollDiscussionImpressionResponse }, ICreatePollDiscussionImpressionRequest>(
            pollDiscussionSchema.createPollDiscussionImpression(
                gqlQueryStringBuilder<ICreatePollDiscussionImpressionResponse, ICreatePollDiscussionImpressionResponseNestedFields>(
                    fetchFields?.root ?? createPollDiscussionImpressionResponse,
                    fetchFields?.nestedFields ?? createPollDiscussionImpressionResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.createPollDiscussionImpression ?? null
    },
})