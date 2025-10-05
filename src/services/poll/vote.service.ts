import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { pollVoteSchema } from "./schemas/vote.schema";
import { createPollVoteResponse, createPollVoteResponseNestedFields, deletePollVoteResponse, getPollVoteResponse, getPollVoteResponseNestedFields, getPollVotesCountResponse, getPollVotesResponse, getPollVotesResponseNestedFields, ICreatePollVoteRequest, ICreatePollVoteResponse, ICreatePollVoteResponseNestedFields, IDeletePollVoteRequest, IDeletePollVoteResponse, IGetPollVoteRequest, IGetPollVoteResponse, IGetPollVoteResponseNestedFields, IGetPollVotesCountRequest, IGetPollVotesCountResponse, IGetPollVotesRequest, IGetPollVotesResponse, IGetPollVotesResponseNestedFields } from "./types"

export const voteService = (client: GraphQLClient) => ({
    async getPollVotesCount(
        input: IGetPollVotesCountRequest,
        fetchFields?: {
            root?: (keyof IGetPollVotesCountResponse)[],
        },
        option?: RequestOption
    ): Promise<IGetPollVotesCountResponse | null> {
        const res = await client.request<{ getPollVotesCount: IGetPollVotesCountResponse }, IGetPollVotesCountRequest>(
            pollVoteSchema.getPollVotesCount(
                gqlQueryStringBuilder<IGetPollVotesCountResponse>(
                    fetchFields?.root ?? getPollVotesCountResponse,
                )
            ),
            input,
            option
        )
        return res.data?.getPollVotesCount ?? null
    },
    async getPollVote(
        input: IGetPollVoteRequest,
        fetchFields?: {
        root?: (keyof IGetPollVoteResponse)[],
        nestedFields?: IGetPollVoteResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetPollVoteResponse | null> {
        const res = await client.request<{ getPollVote: IGetPollVoteResponse }, IGetPollVoteRequest>(
            pollVoteSchema.getPollVote(
                gqlQueryStringBuilder<IGetPollVoteResponse, IGetPollVoteResponseNestedFields>(
                    fetchFields?.root ?? getPollVoteResponse,
                    fetchFields?.nestedFields ?? getPollVoteResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getPollVote ?? null
    },
    async getPollVotes(
        input: IGetPollVotesRequest,
        fetchFields?: {
        root?: (keyof IGetPollVotesResponse)[],
        nestedFields?: IGetPollVotesResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetPollVotesResponse | null> {
        const res = await client.request<{ getPollVotes: IGetPollVotesResponse }, IGetPollVotesRequest>(
            pollVoteSchema.getPollVotes(
                gqlQueryStringBuilder<IGetPollVotesResponse, IGetPollVotesResponseNestedFields>(
                    fetchFields?.root ?? getPollVotesResponse,
                    fetchFields?.nestedFields ?? getPollVotesResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getPollVotes ?? null
    },
    async deletePollVote(
        input: IDeletePollVoteRequest,
        fetchFields?: {
            root?: (keyof IDeletePollVoteResponse)[],
        },
        option?: RequestOption
    ): Promise<IDeletePollVoteResponse | null> {
        const res = await client.request<{ deletePollVote: IDeletePollVoteResponse }, IDeletePollVoteRequest>(
            pollVoteSchema.deletePollVote(
                gqlQueryStringBuilder<IDeletePollVoteResponse>(
                    fetchFields?.root ?? deletePollVoteResponse
                )
            ),
            input,
            option
        )
        return res.data?.deletePollVote ?? null
    },
    async createPollVote(
        input: ICreatePollVoteRequest,
        fetchFields?: {
        root?: (keyof ICreatePollVoteResponse)[],
        nestedFields?: ICreatePollVoteResponseNestedFields
        },
        option?: RequestOption
    ): Promise<ICreatePollVoteResponse | null> {
        const res = await client.request<{ createPollVote: ICreatePollVoteResponse }, ICreatePollVoteRequest>(
            pollVoteSchema.createPollVote(
                gqlQueryStringBuilder<ICreatePollVoteResponse, ICreatePollVoteResponseNestedFields>(
                    fetchFields?.root ?? createPollVoteResponse,
                    fetchFields?.nestedFields ?? createPollVoteResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.createPollVote ?? null
    },
})