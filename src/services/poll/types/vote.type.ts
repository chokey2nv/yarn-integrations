import { IPaginateRequest, IPollVote, ISearchRequest } from "../../../types";
import { IUserLiteFields, userLiteQuery } from "../../user/user.entities";
import { IPollVoteFields, pollVoteQuery } from "../poll.entities";

// get poll vote
export interface IGetPollVoteRequest {
    pollVote: Partial<IPollVote>
}
export interface IGetPollVoteResponse {
    pollVote?: IPollVote
}
export const getPollVoteResponse: (keyof IGetPollVoteResponse)[] = ["pollVote"];
export interface IGetPollVoteResponseNestedFields {
    pollVote: IPollVoteFields;
    userLite: IUserLiteFields;
}
export const _getPollVoteResponseNestedFields: Omit<IGetPollVoteResponseNestedFields, "pollVote"> = {
    userLite: userLiteQuery
}
export const getPollVoteResponseNestedFields: IGetPollVoteResponseNestedFields = {
    pollVote: pollVoteQuery,
    ..._getPollVoteResponseNestedFields
}

// get poll vote count
export type IGetPollVoteCountRequest = IGetPollVoteRequest
export interface IGetPollVoteCountResponse {
    count: number;
}
export const getPollVoteCountResponse: (keyof IGetPollVoteCountResponse)[] = ["count"];

// get poll votes 
export interface IGetPollVotesRequest extends ISearchRequest, IPaginateRequest{
    pollVote?: Partial<IPollVote>
}
export interface IGetPollVotesResponse extends Omit<IGetPollVoteResponse, "pollVote"> {
    pollVotes: IPollVote[]
}
export const getPollVotesResponse: (keyof IGetPollVotesResponse)[] = ["pollVotes"];
export interface IGetPollVotesResponseNestedFields extends Omit<IGetPollVoteResponseNestedFields, "pollVote"> {  
    pollVotes: IPollVoteFields;
}
export const getPollVotesResponseNestedFields: IGetPollVotesResponseNestedFields = {
    pollVotes: pollVoteQuery,
    ..._getPollVoteResponseNestedFields
}
// delete poll vote
export interface IDeletePollVoteRequest {
    pollVoteId: string;
}
export interface IDeletePollVoteResponse {
    pollVoteId: string;
}
export const deletePollVoteResponse: (keyof IDeletePollVoteResponse)[] = ["pollVoteId"];

// create poll vote
export interface ICreatePollVoteRequest {
    pollVote: Partial<IPollVote>
}
export interface ICreatePollVoteResponse {
    pollVote?: IPollVote
}
export const createPollVoteResponse: (keyof ICreatePollVoteResponse)[] = getPollVoteResponse;
export type ICreatePollVoteResponseNestedFields = IGetPollVoteResponseNestedFields;
export const createPollVoteResponseNestedFields: ICreatePollVoteResponseNestedFields = getPollVoteResponseNestedFields;
