import { IReport } from "../../../types";
import { IUserLiteFields, userLiteQuery } from "../../user/user.entities";
import { IPollFields, IReportFields, pollQuery, reportQuery } from "../poll.entities";

export interface IGetReportRequest {
    report: Partial<IReport>;
}
export interface IGetReportResponse {
    report: IReport
}
export const getReportResponse: (keyof IGetReportResponse)[] = ["report"];
export interface IGetReportResponseNestedFields {
    report: IReportFields;
    reporter?: IUserLiteFields;
    userLite?: IUserLiteFields;
    poll?: IPollFields;

}
export const getReportResponseNestedFields: IGetReportResponseNestedFields = {
    report: reportQuery,
    reporter: userLiteQuery,
    userLite: userLiteQuery,
    poll: pollQuery,
}


export type ICreateReportRequest = IGetReportRequest;
export type ICreateReportResponse = IGetReportResponse;
export const createReportResponse: (keyof ICreateReportResponse)[] = getReportResponse;
export type ICreateReportResponseNestedFields = IGetReportResponseNestedFields;
export const createReportResponseNestedFields: ICreateReportResponseNestedFields = getReportResponseNestedFields;
