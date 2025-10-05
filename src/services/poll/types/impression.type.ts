import { IPollImpression } from "../../../types";
import { IPollImpressionFields, pollImpressionQuery } from "../poll.entities";

// get poll impression 
export interface IGetPollImpressionRequest {
    pollImpression: Partial<IPollImpression>
}
export interface IGetPollImpressionResponse {
    pollImpression?: IPollImpression;
}
export const getPollImpressionResponse: (keyof IGetPollImpressionResponse)[] = ["pollImpression"];
export interface IGetPollImpressionResponseNestedFields {
    pollImpression: IPollImpressionFields;
}
export const getPollImpressionResponseNestedFields: IGetPollImpressionResponseNestedFields = {
    pollImpression: pollImpressionQuery
}

export interface IDeletePollImpressionRequest {
    pollImpressionId: string;
}
export interface IDeletePollImpressionResponse {
    pollImpressionId: string;
}
export const deletePollImpressionResponse: (keyof IDeletePollImpressionResponse)[] = ["pollImpressionId"];

// create poll impression
export interface ICreatePollImpressionRequest {
    pollImpression: Partial<IPollImpression>
}
export type ICreatePollImpressionResponse = IGetPollImpressionResponse;
export const createPollImpressionResponse: (keyof ICreatePollImpressionResponse)[] = getPollImpressionResponse;
export type ICreatePollImpressionResponseNestedFields = IGetPollImpressionResponseNestedFields;
export const createPollImpressionResponseNestedFields: ICreatePollImpressionResponseNestedFields = getPollImpressionResponseNestedFields;

// get poll impressions count
export type IGetPollImpressionsCountRequest = IGetPollImpressionRequest;
export interface IGetPollImpressionsCountResponse {
    count: number;
}
export const getPollImpressionsCountResponse: (keyof IGetPollImpressionsCountResponse)[] = ["count"];
