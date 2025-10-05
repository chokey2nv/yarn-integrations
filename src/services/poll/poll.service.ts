import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { pollSchema } from "./schemas/poll.schema";
import { createPollResponse, createPollResponseNestedFields, deletePollResponse, endPollResponse, endPollResponseNestedFields, getPollResponse, getPollResponseNestedFields, getPollsByCategoriesResponse, getPollsByCategoriesResponseNestedFields, getPollsResponse, getPollsResponseNestedFields, getPopularPollsResponse, getPopularPollsResponseNestedFields, getSuggestedPollsResponse, getSuggestedPollsResponseNestedFields, getTrendingPollsResponse, getTrendingPollsResponseNestedFields, ICreatePollRequest, ICreatePollResponse, ICreatePollResponseNestedFields, IDeletePollRequest, IDeletePollResponse, IEndPollRequest, IEndPollResponse, IEndPollResponseNestedFields, IGetPollRequest, IGetPollResponse, IGetPollResponseNestedFields, IGetPollsByCategoriesRequest, IGetPollsByCategoriesResponse, IGetPollsByCategoriesResponseNestedFields, IGetPollsRequest, IGetPollsResponse, IGetPollsResponseNestedFields, IGetPopularPollsRequest, IGetPopularPollsResponse, IGetPopularPollsResponseNestedFields, IGetSuggestedPollsRequest, IGetSuggestedPollsResponse, IGetSuggestedPollsResponseNestedFields, IGetTrendingPollsRequest, IGetTrendingPollsResponse, IGetTrendingPollsResponseNestedFields, IUpdatePollRequest, IUpdatePollResponse, IUpdatePollResponseNestedFields, updatePollResponse, updatePollResponseNestedFields } from "./types";

export const pollService = (client: GraphQLClient) => ({
    async createPoll(
        input: ICreatePollRequest,
        fetchFields?: {
        root?: (keyof ICreatePollResponse)[],
        nestedFields?: ICreatePollResponseNestedFields
        },
        option?: RequestOption
    ): Promise<ICreatePollResponse | null> {
        const res = await client.request<{ createPoll: ICreatePollResponse }, ICreatePollRequest>(
        pollSchema.createPoll(
            gqlQueryStringBuilder<ICreatePollResponse, ICreatePollResponseNestedFields>(
                fetchFields?.root ?? createPollResponse,
                fetchFields?.nestedFields ?? createPollResponseNestedFields
            )
        ),
        input,
        option
        )
        return res.data?.createPoll ?? null
    },
    async updatePoll(
        input: IUpdatePollRequest,
        fetchFields?: {
        root?: (keyof IUpdatePollResponse)[],
        nestedFields?: IUpdatePollResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IUpdatePollResponse | null> {
        const res = await client.request<{ updatePoll: IUpdatePollResponse }, IUpdatePollRequest>(
        pollSchema.updatePoll(
            gqlQueryStringBuilder<IUpdatePollResponse, IUpdatePollResponseNestedFields>(
                fetchFields?.root ?? updatePollResponse,
                fetchFields?.nestedFields ?? updatePollResponseNestedFields
            )
        ),
        input,
        option
        )
        return res.data?.updatePoll ?? null
    },
    async deletePoll(
        input: IDeletePollRequest,
        fetchFields?: {
            root?: (keyof IDeletePollResponse)[],
        },
        option?: RequestOption
    ): Promise<IDeletePollResponse | null> {
        const res = await client.request<{ deletePoll: IDeletePollResponse }, IDeletePollRequest>(
        pollSchema.deletePoll(
            gqlQueryStringBuilder<IDeletePollResponse>(
                fetchFields?.root ?? deletePollResponse
            )
        ),
        input,
        option
        )
        return res.data?.deletePoll ?? null
    },
    async endPoll(
        input: IEndPollRequest,
        fetchFields?: {
        root?: (keyof IEndPollResponse)[],
        nestedFields?: IEndPollResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IEndPollResponse | null> {
        const res = await client.request<{ endPoll: IEndPollResponse }, IEndPollRequest>(
            pollSchema.endPoll(
                gqlQueryStringBuilder<IEndPollResponse, IEndPollResponseNestedFields>(
                    fetchFields?.root ?? endPollResponse,
                    fetchFields?.nestedFields ?? endPollResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.endPoll ?? null
    },
    async getPoll(
        input: IGetPollRequest,
        fetchFields?: {
        root?: (keyof IGetPollResponse)[],
        nestedFields?: IGetPollResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetPollResponse | null> {
        const res = await client.request<{ getPoll: IGetPollResponse }, IGetPollRequest>(
            pollSchema.getPoll(
                gqlQueryStringBuilder<IGetPollResponse, IGetPollResponseNestedFields>(
                    fetchFields?.root ?? getPollResponse,
                    fetchFields?.nestedFields ?? getPollResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getPoll ?? null
    },
    async getPolls(
        input: IGetPollsRequest,
        fetchFields?: {
        root?: (keyof IGetPollsResponse)[],
        nestedFields?: IGetPollsResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetPollsResponse | null> {
        const res = await client.request<{ getPolls: IGetPollsResponse }, IGetPollsRequest>(
            pollSchema.getPolls(
                gqlQueryStringBuilder<IGetPollsResponse, IGetPollsResponseNestedFields>(
                    fetchFields?.root ?? getPollsResponse,
                    fetchFields?.nestedFields ?? getPollsResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getPolls ?? null
    },
    async getPollsByCategories(
        input: IGetPollsByCategoriesRequest,
        fetchFields?: {
        root?: (keyof IGetPollsByCategoriesResponse)[],
        nestedFields?: IGetPollsByCategoriesResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetPollsByCategoriesResponse | null> {
        const res = await client.request<{ getPollsByCategories: IGetPollsByCategoriesResponse }, IGetPollsByCategoriesRequest>(
            pollSchema.getPollsByCategories(
                gqlQueryStringBuilder<IGetPollsByCategoriesResponse, IGetPollsByCategoriesResponseNestedFields>(
                    fetchFields?.root ?? getPollsByCategoriesResponse,
                    fetchFields?.nestedFields ?? getPollsByCategoriesResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getPollsByCategories ?? null
    },
    async getPopularPolls(
        input: IGetPopularPollsRequest,
        fetchFields?: {
        root?: (keyof IGetPopularPollsResponse)[],
        nestedFields?: IGetPopularPollsResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetPopularPollsResponse | null> {
        const res = await client.request<{ getPopularPolls: IGetPopularPollsResponse }, IGetPopularPollsRequest>(
            pollSchema.getPopularPolls(
                gqlQueryStringBuilder<IGetPopularPollsResponse, IGetPopularPollsResponseNestedFields>(
                    fetchFields?.root ?? getPopularPollsResponse,
                    fetchFields?.nestedFields ?? getPopularPollsResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getPopularPolls ?? null
    },
    async getTrendingPolls(
        input: IGetTrendingPollsRequest,
        fetchFields?: {
        root?: (keyof IGetTrendingPollsResponse)[],
        nestedFields?: IGetTrendingPollsResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetTrendingPollsResponse | null> {
        const res = await client.request<{ getTrendingPolls: IGetTrendingPollsResponse }, IGetTrendingPollsRequest>(
            pollSchema.getTrendingPolls(
                gqlQueryStringBuilder<IGetTrendingPollsResponse, IGetTrendingPollsResponseNestedFields>(
                    fetchFields?.root ?? getTrendingPollsResponse,
                    fetchFields?.nestedFields ?? getTrendingPollsResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getTrendingPolls ?? null
    },
    async getSuggestedPolls(
        input: IGetSuggestedPollsRequest,
        fetchFields?: {
            root?: (keyof IGetSuggestedPollsResponse)[],
            nestedFields?: IGetSuggestedPollsResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetSuggestedPollsResponse | null> {
        const res = await client.request<{ getSuggestedPolls: IGetSuggestedPollsResponse }, IGetSuggestedPollsRequest>(
            pollSchema.getSuggestedPolls(
                gqlQueryStringBuilder<IGetSuggestedPollsResponse, IGetSuggestedPollsResponseNestedFields>(
                    fetchFields?.root ?? getSuggestedPollsResponse,
                    fetchFields?.nestedFields ?? getSuggestedPollsResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getSuggestedPolls ?? null
    },
})