import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { pollImpressionSchema } from "./schemas/impression.schema";
import { 
    createPollImpressionResponse, 
    createPollImpressionResponseNestedFields, 
    deletePollImpressionResponse, 
    getPollImpressionResponse, 
    getPollImpressionResponseNestedFields, 
    getPollImpressionsCountResponse, 
    ICreatePollImpressionRequest, 
    ICreatePollImpressionResponse, 
    ICreatePollImpressionResponseNestedFields, 
    IDeletePollImpressionRequest, 
    IDeletePollImpressionResponse, 
    IGetPollImpressionRequest, 
    IGetPollImpressionResponse, 
    IGetPollImpressionResponseNestedFields, 
    IGetPollImpressionsCountRequest, 
    IGetPollImpressionsCountResponse,     
} from "./types"

export const impressionService = (client: GraphQLClient) => ({
    async getPollImpressionsCount(
        input: IGetPollImpressionsCountRequest,
        fetchFields?: {
            root?: (keyof IGetPollImpressionsCountResponse)[],
        },
        option?: RequestOption
    ): Promise<IGetPollImpressionsCountResponse | null> {
        const res = await client.request<{ getPollImpressionsCount: IGetPollImpressionsCountResponse }, IGetPollImpressionsCountRequest>(
            pollImpressionSchema.getPollImpressionsCount(
                gqlQueryStringBuilder<IGetPollImpressionsCountResponse>(
                    fetchFields?.root ?? getPollImpressionsCountResponse,
                )
            ),
            input,
            option
        )
        return res.data?.getPollImpressionsCount ?? null
    },
    async getPollImpression(
        input: IGetPollImpressionRequest,
        fetchFields?: {
        root?: (keyof IGetPollImpressionResponse)[],
        nestedFields?: IGetPollImpressionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<IGetPollImpressionResponse | null> {
        const res = await client.request<{ getPollImpression: IGetPollImpressionResponse }, IGetPollImpressionRequest>(
            pollImpressionSchema.getPollImpression(
                gqlQueryStringBuilder<IGetPollImpressionResponse, IGetPollImpressionResponseNestedFields>(
                    fetchFields?.root ?? getPollImpressionResponse,
                    fetchFields?.nestedFields ?? getPollImpressionResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.getPollImpression ?? null
    },
    async deletePollImpression(
        input: IDeletePollImpressionRequest,
        fetchFields?: {
            root?: (keyof IDeletePollImpressionResponse)[],
        },
        option?: RequestOption
    ): Promise<IDeletePollImpressionResponse | null> {
        const res = await client.request<{ deletePollImpression: IDeletePollImpressionResponse }, IDeletePollImpressionRequest>(
            pollImpressionSchema.deletePollImpression(
                gqlQueryStringBuilder<IDeletePollImpressionResponse>(
                    fetchFields?.root ?? deletePollImpressionResponse
                )
            ),
            input,
            option
        )
        return res.data?.deletePollImpression ?? null
    },
    async createPollImpression(
        input: ICreatePollImpressionRequest,
        fetchFields?: {
        root?: (keyof ICreatePollImpressionResponse)[],
        nestedFields?: ICreatePollImpressionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<ICreatePollImpressionResponse | null> {
        const res = await client.request<{ createPollImpression: ICreatePollImpressionResponse }, ICreatePollImpressionRequest>(
            pollImpressionSchema.createPollImpression(
                gqlQueryStringBuilder<ICreatePollImpressionResponse, ICreatePollImpressionResponseNestedFields>(
                    fetchFields?.root ?? createPollImpressionResponse,
                    fetchFields?.nestedFields ?? createPollImpressionResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.createPollImpression ?? null
    },
})