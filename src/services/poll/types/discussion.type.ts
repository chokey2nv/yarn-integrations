import { IDiscussion, IDiscussionImpression, IPaginateRequest } from "../../../types";
import { IUserLiteFields, userLiteQuery } from "../../user/user.entities";
import { IPollDiscussionFields, IPollDiscussionImpressionFields, pollDiscussionImpressionQuery, pollDiscussionQuery } from "../poll.entities";

// get discussion impression count
export interface IGetPollDiscussionImpressionsCountRequest {
    pollDiscussionImpression?: Partial<IDiscussionImpression>
}
export interface IGetPollDiscussionImpressionsCountResponse {
    count: number;
}
export const getPollDiscussionImpressionsCountResponse: (keyof IGetPollDiscussionImpressionsCountResponse)[] = ["count"];

// get discussion impression
export interface IGetPollDiscussionImpressionRequest{
    pollDiscussionImpression: Partial<IDiscussionImpression>
}
export interface IGetPollDiscussionImpressionResponse {
    pollDiscussionImpression: IDiscussionImpression
}
export const getPollDiscussionImpressionResponse: (keyof IGetPollDiscussionImpressionResponse)[] = ["pollDiscussionImpression"];
export interface IGetPollDiscussionImpressionResponseNestedFields {
    pollDiscussionImpression: IPollDiscussionImpressionFields;
}
export const getPollDiscussionImpressionResponseNestedFields: IGetPollDiscussionImpressionResponseNestedFields = {
    pollDiscussionImpression: pollDiscussionImpressionQuery
}

// update poll discussion impression
export interface IUpdatePollDiscussionImpressionRequest {
    pollDiscussionImpressionId: string;
    pollDiscussionImpression: Partial<IDiscussionImpression>
}
export type IUpdatePollDiscussionImpressionResponse = IGetPollDiscussionImpressionResponse;
export const updatePollDiscussionImpressionResponse: (keyof IUpdatePollDiscussionImpressionResponse)[] = getPollDiscussionImpressionResponse;
export type IUpdatePollDiscussionImpressionResponseNestedFields = IGetPollDiscussionImpressionResponseNestedFields;
export const updatePollDiscussionImpressionResponseNestedFields: IUpdatePollDiscussionImpressionResponseNestedFields = getPollDiscussionImpressionResponseNestedFields

// create poll discussion impression
export interface ICreatePollDiscussionImpressionRequest {
    pollDiscussionImpression: Partial<IDiscussionImpression>;
}
export type ICreatePollDiscussionImpressionResponse = IGetPollDiscussionImpressionResponse;
export const createPollDiscussionImpressionResponse: (keyof ICreatePollDiscussionImpressionResponse)[] = getPollDiscussionImpressionResponse;
export type ICreatePollDiscussionImpressionResponseNestedFields = IGetPollDiscussionImpressionResponseNestedFields;
export const createPollDiscussionImpressionResponseNestedFields: ICreatePollDiscussionImpressionResponseNestedFields = getPollDiscussionImpressionResponseNestedFields

/////////////////////
// Poll PollDiscussion
/////////////////////
// get poll discussion
export interface IGetPollDiscussionRequest {
    pollDiscussion: Partial<IDiscussion>
}
export interface IGetPollDiscussionResponse {
    pollDiscussion: IDiscussion
}
export const getPollDiscussionResponse: (keyof IGetPollDiscussionResponse)[] = ["pollDiscussion"];
export interface IGetPollDiscussionResponseNestedFields {
    pollDiscussion: IPollDiscussionFields;
    userLite: IUserLiteFields;
}
export const _getPollDiscussionResponseNestedFields: Omit<IGetPollDiscussionResponseNestedFields, "pollDiscussion"> = {
    userLite: userLiteQuery
}
export const getPollDiscussionResponseNestedFields: IGetPollDiscussionResponseNestedFields = {
    pollDiscussion: pollDiscussionQuery,
    ..._getPollDiscussionResponseNestedFields
}

// get poll impressions
export interface IGetPollDiscussionsRequest extends IPaginateRequest {
    pollDiscussion: Partial<IDiscussion>
}
export interface IGetPollDiscussionsResponse {
    pollDiscussions: IDiscussion[]
}
export const getPollDiscussionsResponse: (keyof IGetPollDiscussionsResponse)[] = ["pollDiscussions"];
export interface IGetPollDiscussionsResponseNestedFields extends Omit<IGetPollDiscussionResponseNestedFields, "pollDiscussion"> {
    pollDiscussions: IPollDiscussionFields;
}
export const getPollDiscussionsResponseNestedFields: IGetPollDiscussionsResponseNestedFields = {
    ..._getPollDiscussionResponseNestedFields,
    pollDiscussions: pollDiscussionQuery
}

// delete poll discussion
export interface IDeletePollDiscussionRequest {
    pollDiscussionId: string;
}
export type IDeletePollDiscussionResponse = IDeletePollDiscussionRequest;
export const deletePollDiscussionResponse: (keyof IDeletePollDiscussionResponse)[] = ["pollDiscussionId"];

// update poll discussion
export interface IUpdatePollDiscussionRequest {
    pollDiscussionId: string;
    pollDiscussion: Partial<IDiscussion>
}
export type IUpdatePollDiscussionResponse = IGetPollDiscussionResponse;
export const updatePollDiscussionResponse: (keyof IUpdatePollDiscussionResponse)[] = getPollDiscussionResponse;
export type IUpdatePollDiscussionResponseNestedFields = IGetPollDiscussionResponseNestedFields;
export const updatePollDiscussionResponseNestedFields: IUpdatePollDiscussionResponseNestedFields = getPollDiscussionResponseNestedFields;

// create poll discussion
export interface ICreatePollDiscussionRequest {
    pollDiscussion: Partial<IDiscussion>;
}
export type ICreatePollDiscussionResponse = IGetPollDiscussionResponse;
export const createPollDiscussionResponse: (keyof ICreatePollDiscussionResponse)[] = getPollDiscussionResponse;
export type ICreatePollDiscussionResponseNestedFields = IGetPollDiscussionResponseNestedFields;
export const createPollDiscussionResponseNestedFields: ICreatePollDiscussionResponseNestedFields = getPollDiscussionResponseNestedFields

// get poll discussions count  
export type IGetPollDiscussionsCountRequest = IGetPollDiscussionRequest;
export interface IGetPollDiscussionsCountResponse {
    count: number;
}
export const getPollDiscussionsCountResponse:(keyof IGetPollDiscussionsCountResponse)[] = ["count"]
