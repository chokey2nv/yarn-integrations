import { IPaginateRequest, IPoll, IPollOption, ISearchRequest } from "../../../types";
import { IUserFields, userLiteQuery, userQuery } from "../../user/user.entities";
import { IPollDiscussionFields, IPollFields, IPollOptionFields, IPollStatsFields,  pollDiscussionQuery, pollOptionQuery, pollQuery, pollStatsQuery } from "../poll.entities";


// get poll 
export interface IGetPollRequest {
    poll: Partial<IPoll> | IPoll
}
export interface IGetPollResponse { 
    poll?: IPoll
}
export const getPollResponse: (keyof IGetPollResponse)[] = ["poll"];
export interface IGetPollResponseNestedFields {
    poll?: IPollFields
    stats: IPollStatsFields
    pollDiscussions: IPollDiscussionFields
    owner: IUserFields
    userLite: IUserFields
    pollOptions: IPollOptionFields
}
export const _getPollResponseNestedFields: Omit<IGetPollResponseNestedFields, "poll"> = {
    stats: pollStatsQuery,
    pollDiscussions: pollDiscussionQuery,
    owner: userQuery,
    userLite: userLiteQuery,
    pollOptions: pollOptionQuery,
}
export const getPollResponseNestedFields: IGetPollResponseNestedFields = {
    ..._getPollResponseNestedFields,
    poll: pollQuery
}

// end poll
export type IEndPollRequest = IDeletePollRequest;
export type IEndPollResponse = IGetPollResponse;
export const endPollResponse: (keyof IEndPollResponse)[] = getPollResponse;
export type IEndPollResponseNestedFields = IGetPollResponseNestedFields
export const endPollResponseNestedFields: IEndPollResponseNestedFields = getPollResponseNestedFields

// get polls 
export interface IGetPollsRequest extends ISearchRequest, IPaginateRequest {
    pollIds?: string[];
    poll?: Partial<IPoll>
}
export interface IGetPollsResponse {
    polls: IPoll[];
}
export const getPollsResponse: (keyof IGetPollsResponse)[] = ["polls"];
export interface IGetPollsResponseNestedFields extends Omit<IGetPollResponseNestedFields, "poll"> {
    polls: IPollFields;
}
export const getPollsResponseNestedFields: IGetPollsResponseNestedFields = {
    ..._getPollResponseNestedFields,
    polls: pollQuery
}

// get suggested polls
export interface IGetSuggestedPollsRequest extends IPaginateRequest {
    userId: string;
}
export type IGetSuggestedPollsResponse = IGetPollsResponse;
export const getSuggestedPollsResponse: (keyof IGetSuggestedPollsResponse)[] = getPollsResponse;
export type IGetSuggestedPollsResponseNestedFields = IGetPollsResponseNestedFields;
export const getSuggestedPollsResponseNestedFields: IGetSuggestedPollsResponseNestedFields = getPollsResponseNestedFields;

// get trending polls
export interface IGetTrendingPollsRequest extends IPaginateRequest {
    
}
export type IGetTrendingPollsResponse = IGetPollsResponse;
export const getTrendingPollsResponse: (keyof IGetTrendingPollsResponse)[] = getPollsResponse;
export type IGetTrendingPollsResponseNestedFields = IGetPollsResponseNestedFields;
export const getTrendingPollsResponseNestedFields: IGetTrendingPollsResponseNestedFields = getPollsResponseNestedFields;

// popular poll request
export interface IGetPopularPollsRequest extends IPaginateRequest {
}
export type IGetPopularPollsResponse = IGetPollsResponse;
export const getPopularPollsResponse: (keyof IGetPopularPollsResponse)[] = getPollsResponse;
export type IGetPopularPollsResponseNestedFields = IGetPollsResponseNestedFields;
export const getPopularPollsResponseNestedFields: IGetPopularPollsResponseNestedFields = getPollsResponseNestedFields;

// get polls by categories
export interface IGetPollsByCategoriesRequest extends IPaginateRequest {
    categories: string[];
}
export type IGetPollsByCategoriesResponse = IGetPollsResponse;
export const getPollsByCategoriesResponse: (keyof IGetPollsByCategoriesResponse)[] = getPollsResponse;
export type IGetPollsByCategoriesResponseNestedFields = IGetPollsResponseNestedFields;
export const getPollsByCategoriesResponseNestedFields: IGetPollsByCategoriesResponseNestedFields = getPollsResponseNestedFields;

// delete poll
export interface IDeletePollRequest {
    pollId: string
}
export interface IDeletePollResponse {
    pollId: string;
}
export const deletePollResponse: (keyof IDeletePollResponse)[] = ["pollId"];




export interface ICreatePollRequest {
    poll: Partial<IPoll>
    pollOptions?: IPollOption[]
}
export type ICreatePollResponse = IGetPollResponse;
export const createPollResponse: (keyof ICreatePollResponse)[] = getPollResponse
export type ICreatePollResponseNestedFields = IGetPollResponseNestedFields
export const createPollResponseNestedFields: ICreatePollResponseNestedFields = getPollResponseNestedFields;

// update poll
export interface IUpdatePollRequest {
    pollId: string;
    poll: Partial<IPoll>
}
export type IUpdatePollResponse = IGetPollResponse
export const updatePollResponse: (keyof IUpdatePollResponse)[] = getPollResponse
export type IUpdatePollResponseNestedFields = IGetPollResponseNestedFields
export const updatePollResponseNestedFields: IUpdatePollResponseNestedFields = getPollResponseNestedFields;