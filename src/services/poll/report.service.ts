import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { pollReportSchema } from "./schemas/report.schema";
import { createReportResponse, createReportResponseNestedFields, ICreateReportRequest, ICreateReportResponse, ICreateReportResponseNestedFields } from "./types";

export const reportService = (client: GraphQLClient) => ({
    async createReport(
        input: ICreateReportRequest,
        fetchFields?: {
        root?: (keyof ICreateReportResponse)[],
        nestedFields?: ICreateReportResponseNestedFields
        },
        option?: RequestOption
    ): Promise<ICreateReportResponse | null> {
        const res = await client.request<{ createReport: ICreateReportResponse }, ICreateReportRequest>(
            pollReportSchema.createReport(
                gqlQueryStringBuilder<ICreateReportResponse, ICreateReportResponseNestedFields>(
                    fetchFields?.root ?? createReportResponse,
                    fetchFields?.nestedFields ?? createReportResponseNestedFields
                )
            ),
            input,
            option
        )
        return res.data?.createReport ?? null
    },
})