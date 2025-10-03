import { IDiscussion, IDiscussionImpression, IPaginateRequest, IPoll, IPollImpression, IPollOption, IPollStat, IPollVote, IReport, ISearchRequest } from "@/utils";
import { IUserBluePrint, IUserLiteBluePrint } from "../user";


export type IReportBluePrint = (keyof IReport)[];
export const reportQuery: IReportBluePrint = [
    "challengeId", "communityId", "createdAt", "id", "pollId", "reason", "resolvedAt",
    "reportStatus", "reportType", "updatedAt", "userId", "userComment", "userLite", 
    "reporterId", "reportCode", 
]
export type ICreateReportRequest = IGetReportRequest;
export type ICreateReportResponse = IGetReportResponse;
export type ICreateReportResponseBluePrint = IGetReportResponseBluePrint;
export interface IGetReportRequest {
    report: Partial<IReport>;
}
export interface IGetReportResponse {
    report: IReport
}
export interface IGetReportResponseBluePrint {
    report: IReportBluePrint;
    reporter?: IUserLiteBluePrint;
    userLite?: IUserLiteBluePrint;
    poll?: IPollBluePrint;

}





export type IPollBluePrint = (keyof IPoll)[]
export type IPollStatsBluePrint = (keyof IPollStat)[]
export type IPollOptionBluePrint = (keyof IPollOption)[]
export const pollQuery:IPollBluePrint = [
    "category", "createdAt", "description", "id", "title",
    "pollDiscussionIds", "pollDiscussions", "description", "createdAt",
    "image", "multipleAnswer", "pollOptions", "owner", "ownerId", 
    "question", "reward", "pollStatus", "tag", "title",
    "isChallenge", "challengeId", "start", "end"
]
export const pollStatsQuery:IPollStatsBluePrint = [
    "discussionCount", "negativeImpression", "positiveImpressions", "totalVotes"
]
export const pollOptionQuery:IPollOptionBluePrint = [
    "id", "image", "percentage", "text", "votes"
]


/////////////////////
// Poll PollDiscussion
/////////////////////
export type IPollDiscussionImpressionBluePrint = (keyof IDiscussionImpression)[];
export const pollDiscussionImpressionQuery:IPollDiscussionImpressionBluePrint = [
    "discussionId", "id", "isLiked", "isLoved", "pollId", "userId"
]
export interface IGetPollDiscussionImpressionsCountRequest {
    pollDiscussionImpression?: Partial<IDiscussionImpression>
}
export interface IGetPollDiscussionImpressionsCountResponse {
    count: number;
}

export interface IGetPollDiscussionImpressionRequest{
    pollDiscussionImpression: Partial<IDiscussionImpression>
}
export interface IGetPollDiscussionImpressionResponse {
    pollDiscussionImpression: IDiscussionImpression
}
export type IGetPollDiscussionImpressionResponseBluePrint = ICreatePollDiscussionImpressionResponseBluePrint;

export interface IUpdatePollDiscussionImpressionRequest {
    pollDiscussionImpressionId: string;
    pollDiscussionImpression: Partial<IDiscussionImpression>
}
export interface IUpdatePollDiscussionImpressionResponse {
    pollDiscussionImpression: IDiscussionImpression
}
export type IUpdatePollDiscussionImpressionResponseBluePrint = ICreatePollDiscussionImpressionResponseBluePrint;

export interface ICreatePollDiscussionImpressionRequest {
    pollDiscussionImpression: Partial<IDiscussionImpression>;
}
export interface ICreatePollDiscussionImpressionResponse {
    pollDiscussionImpression: IDiscussionImpression;
}
export interface ICreatePollDiscussionImpressionResponseBluePrint {
    pollDiscussionImpression: IPollDiscussionImpressionBluePrint;
}

/////////////////////
// Poll PollDiscussion
/////////////////////
export type IPollDiscussionBluePrint = (keyof IDiscussion)[];
export const pollDiscussionQuery:IPollDiscussionBluePrint = [
    "createdAt", "id", "isRoot", "likes", "repliedToId", "pollId", "replyIds", "text",
    "userLite", "userId"
]
export interface IDeletePollDiscussionRequest {
    pollDiscussionId: string;
}
export type IDeletePollDiscussionResponse = IDeletePollDiscussionRequest;
export interface IUpdatePollDiscussionRequest {
    pollDiscussionId: string;
    pollDiscussion: Partial<IDiscussion>
}
export type IUpdatePollDiscussionResponse = ICreatePollDiscussionResponse;
export type IUpdatePollDiscussionResponseBluePrint = ICreatePollDiscussionResponseBluePrint;
export interface ICreatePollDiscussionRequest {
    pollDiscussion: Partial<IDiscussion>;
}
export interface ICreatePollDiscussionResponse {
    pollDiscussion: IDiscussion;
}
export type ICreatePollDiscussionResponseBluePrint = IGetPollDiscussionResponseBluePrint;

export type IGetPollDiscussionsCountRequest = IGetPollDiscussionRequest;
export interface IGetPollDiscussionsCountResponse {
    count: number;
}
export interface IGetPollDiscussionsRequest extends IPaginateRequest {
    pollDiscussion: Partial<IDiscussion>
}
export interface IGetPollDiscussionsResponse {
    pollDiscussions: IDiscussion[]
}
export interface IGetPollDiscussionsResponseBluePrint {
    pollDiscussions: IPollDiscussionBluePrint;
    userLite: IUserLiteBluePrint;
}
export interface IGetPollDiscussionRequest {
    pollDiscussion: Partial<IDiscussion>
}
export interface IGetPollDiscussionResponse {
    pollDiscussion: IDiscussion
}
export interface IGetPollDiscussionResponseBluePrint extends Omit<IGetPollDiscussionsResponseBluePrint, "pollDiscussions"> {
    pollDiscussion: IPollDiscussionBluePrint;
}

/////////////////////
// Poll Impression
/////////////////////
export type IPollImpressionBluePrint = (keyof IPollImpression)[]
export const pollImpressionQuery: IPollImpressionBluePrint = [
    "createdAt", "id", "pollImpressionOption", "pollId", "userId"
]
export interface IDeletePollImpressionRequest {
    pollImpressionId: string;
}
export interface IDeletePollImpressionResponse {
    pollImpressionId: string;
}
export interface ICreatePollImpressionRequest {
    pollImpression: Partial<IPollImpression>
}
export interface ICreatePollImpressionResponse {
    pollImpression?: IPollImpression
}
export type ICreatePollImpressionResponseBluePrint = IGetPollImpressionResponseBluePrint;
export type IGetPollImpressionsCountRequest = IGetPollImpressionRequest;
export interface IGetPollImpressionsCountResponse {
    count: number;
}
export interface IGetPollImpressionRequest {
    pollImpression: Partial<IPollImpression>
}
export interface IGetPollImpressionResponse {
    pollImpression?: IPollImpression;
}
export interface IGetPollImpressionResponseBluePrint {
    pollImpression: IPollImpressionBluePrint;
}

/////////////////////
// Poll Votes
/////////////////////
export type IPollVoteBluePrint = (keyof IPollVote)[]
export const pollVoteQuery: IPollVoteBluePrint = [
    "createdAt", "id", "pollId", "userId", "userLite", "optionId"
]
export interface IGetPollVoteRequest {
    pollVote: Partial<IPollVote>
}
export interface IGetPollVoteResponse {
    pollVote?: IPollVote
}
export interface IGetPollVoteResponseBluePrint {
    pollVote: IPollVoteBluePrint;
    userLite: IUserLiteBluePrint
}


export type IGetPollVoteCountRequest = IGetPollVoteRequest
export interface IGetPollVoteCountResponse {
    count: number;
}
export interface IGetPollVotesRequest extends ISearchRequest, IPaginateRequest{
    pollVote?: Partial<IPollVote>
}
export interface IGetPollVotesResponse {
    pollVotes: IPollVote[]
}
export interface IGetPollVotesResponseBluePrint extends Omit<IGetPollVoteResponseBluePrint, "pollVote"> {  
    pollVotes: IPollVoteBluePrint;
}
export interface IDeletePollVoteRequest {
    pollVoteId: string;
}
export interface IDeletePollVoteResponse {
    pollVoteId: string;
}
export interface ICreatePollVoteRequest {
    pollVote: Partial<IPollVote>
}
export interface ICreatePollVoteResponse {
    pollVote?: IPollVote
}
export type ICreatePollVoteResponseBluePrint = IGetPollVoteResponseBluePrint
/////////////////////
// Polls
/////////////////////
export type IEndPollRequest = IDeletePollRequest;
export type IEndPollResponse = IGetPollResponse;
export type IEndPollResponseBluePrint = IGetPollResponseBluePrint

export interface IGetSuggestedPollsRequest extends IPaginateRequest {
    userId: string;
}
export interface IGetSuggestedPollsResponse {
    polls: IPoll[];
    count: number;
}
export type IGetSuggestedPollsResponseBluePrint = IGetPollsResponseBluePrint;
export interface IGetTrendingPollsRequest extends IPaginateRequest {
    
}
export interface IGetTrendingPollsResponse {
    polls: IPoll[];
    count: number;
}
export type IGetTrendingPollsResponseBluePrint = IGetPollsResponseBluePrint;
export interface IGetPopularPollsRequest extends IPaginateRequest {
}
export interface IGetPopularPollsResponse {
    polls: IPoll[];
    count: number;
}
export type IGetPopularPollsResponseBluePrint = IGetPollsResponseBluePrint;
export interface IGetPollsByCategoriesRequest extends IPaginateRequest {
    categories: string[];
}
export interface IGetPollsByCategoriesResponse {
    polls: IPoll[];
    count: number;
}
export type IGetPollsByCategoriesResponseBluePrint = IGetPollsResponseBluePrint;

export interface IDeletePollRequest {
    pollId: string
}
export interface IDeletePollResponse {
    pollId: string;
}
export interface IGetPollsRequest extends ISearchRequest, IPaginateRequest {
    pollIds?: string[];
    poll?: Partial<IPoll>
}
export interface IGetPollsResponse {
    polls: IPoll[]
    count: number
}
export interface IGetPollsResponseBluePrint extends Omit<IGetPollResponseBluePrint, "poll"> {
    polls: IPollBluePrint
}
export interface IGetPollRequest {
    poll: Partial<IPoll> | IPoll
}
export interface IGetPollResponse { 
    poll?: IPoll
}
export interface IGetPollResponseBluePrint {
    poll?: IPollBluePrint
    stats: IPollStatsBluePrint
    pollDiscussions: IPollDiscussionBluePrint
    owner: IUserBluePrint
    userLite: IUserBluePrint
    pollOptions: IPollOptionBluePrint
}


export interface ICreatePollRequest {
    poll: Partial<IPoll>
    pollOptions?: IPollOption[]
}
export interface ICreatePollResponse {
    poll: IPoll
}
export type ICreatePollResponseBluePrint = IGetPollResponseBluePrint
export interface IUpdatePollRequest {
    pollId: string;
    poll: Partial<IPoll>
}
export interface IUpdatePollResponse {
    poll: IPoll
}
export type IUpdatePollResponseBluePrint = IGetPollResponseBluePrint