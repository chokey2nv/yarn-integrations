import { useLazyQuery, useMutation } from "@apollo/client"
import { schema } from "./schema";
import { gqlQueryStringBuilder } from "@/utils";
import { ICreatePollDiscussionImpressionRequest, ICreatePollDiscussionImpressionResponse, ICreatePollDiscussionImpressionResponseBluePrint, 
    ICreatePollDiscussionRequest, ICreatePollDiscussionResponse, ICreatePollDiscussionResponseBluePrint, ICreatePollImpressionRequest, 
    ICreatePollImpressionResponse, ICreatePollImpressionResponseBluePrint, ICreatePollRequest, ICreatePollResponse, 
    ICreatePollResponseBluePrint, ICreatePollVoteRequest, ICreatePollVoteResponse, ICreatePollVoteResponseBluePrint, 
    IDeletePollDiscussionRequest, IDeletePollDiscussionResponse, IDeletePollImpressionRequest, IDeletePollImpressionResponse, 
    IDeletePollRequest, IDeletePollResponse, IDeletePollVoteRequest, IDeletePollVoteResponse, IGetPollDiscussionImpressionRequest, 
    IGetPollDiscussionImpressionResponse, IGetPollDiscussionImpressionResponseBluePrint, IGetPollDiscussionRequest, IGetPollDiscussionResponse, 
    IGetPollDiscussionResponseBluePrint, IGetPollDiscussionsRequest, IGetPollDiscussionsResponse, IGetPollDiscussionsResponseBluePrint, 
    IGetPollImpressionsCountRequest, IGetPollImpressionsCountResponse, IGetPollImpressionRequest, IGetPollImpressionResponse, 
    IGetPollImpressionResponseBluePrint, IGetPollRequest, IGetPollResponse, IGetPollResponseBluePrint, IGetPollsByCategoriesRequest, IGetPollsByCategoriesResponse, IGetPollsByCategoriesResponseBluePrint, IGetPollsRequest, IGetPollsResponse, IGetPollsResponseBluePrint, IGetPollVoteCountRequest, IGetPollVoteCountResponse, IGetPollVoteRequest, IGetPollVoteResponse, IGetPollVoteResponseBluePrint, IGetPollVotesRequest, IGetPollVotesResponse, IGetPollVotesResponseBluePrint, IUpdatePollDiscussionImpressionRequest, IUpdatePollDiscussionImpressionResponse, IUpdatePollDiscussionImpressionResponseBluePrint, IUpdatePollDiscussionRequest, IUpdatePollDiscussionResponse, IUpdatePollDiscussionResponseBluePrint, IUpdatePollRequest, IUpdatePollResponse, IUpdatePollResponseBluePrint, pollDiscussionImpressionQuery, pollDiscussionQuery, pollImpressionQuery, pollOptionQuery, pollQuery, pollStatsQuery, pollVoteQuery, 
    IGetPollDiscussionsCountResponse,
    IGetPollDiscussionsCountRequest,
    IGetPollDiscussionImpressionsCountResponse,
    IGetPollDiscussionImpressionsCountRequest,
    IEndPollResponse,
    IEndPollRequest,
    IEndPollResponseBluePrint,
    ICreateReportResponse,
    ICreateReportResponseBluePrint,
    ICreateReportRequest,
    reportQuery,
    IGetPopularPollsResponse,
    IGetPopularPollsRequest,
    IGetPopularPollsResponseBluePrint,
    IGetTrendingPollsResponse,
    IGetTrendingPollsResponseBluePrint,
    IGetTrendingPollsRequest,
    IGetSuggestedPollsResponse,
    IGetSuggestedPollsResponseBluePrint,
    IGetSuggestedPollsRequest} from "./types";
import { userLiteQuery } from "../user";

const otherQuery:Omit<IGetPollResponseBluePrint, "user"> = {
    stats: pollStatsQuery,
    pollDiscussions: pollDiscussionQuery,
    owner: userLiteQuery,
    userLite: userLiteQuery,
    pollOptions: pollOptionQuery,
}
export const usePollService = () => {    
    const [createPoll] = useMutation<{ createPoll: ICreatePollResponse }, ICreatePollRequest>(
        schema.createPoll(gqlQueryStringBuilder<ICreatePollResponse, ICreatePollResponseBluePrint>(
            ["poll"], {
                poll: pollQuery,
                ...otherQuery
            }
        ))
    );
    const [getPoll] = useLazyQuery<{ getPoll: IGetPollResponse }, IGetPollRequest>(
        schema.getPoll(gqlQueryStringBuilder<IGetPollResponse, IGetPollResponseBluePrint>(
            ["poll"], {
                poll: pollQuery,
                ...otherQuery

            }
        ))
    );
    const [getSuggestedPolls] = useLazyQuery<{ getSuggestedPolls: IGetSuggestedPollsResponse }, IGetSuggestedPollsRequest>(
        schema.getSuggestedPolls(gqlQueryStringBuilder<IGetSuggestedPollsResponse, IGetSuggestedPollsResponseBluePrint>(
            ["polls", "count"], {
                polls: pollQuery,
                ...otherQuery
            }
        ))
    );
    const [getTrendingPolls] = useLazyQuery<{ getTrendingPolls: IGetTrendingPollsResponse }, IGetTrendingPollsRequest>(
        schema.getTrendingPolls(gqlQueryStringBuilder<IGetTrendingPollsResponse, IGetTrendingPollsResponseBluePrint>(
            ["polls", "count"], {
                polls: pollQuery,
                ...otherQuery
            }
        ))
    );
    const [getPopularPolls] = useLazyQuery<{ getPopularPolls: IGetPopularPollsResponse }, IGetPopularPollsRequest>(
        schema.getPopularPolls(gqlQueryStringBuilder<IGetPopularPollsResponse, IGetPopularPollsResponseBluePrint>(
            ["polls", "count"], {
                polls: pollQuery,
                ...otherQuery
            }
        ))
    );
    const [getPollsByCategories] = useLazyQuery<{ getPollsByCategories: IGetPollsByCategoriesResponse }, IGetPollsByCategoriesRequest>(
        schema.getPollsByCategories(gqlQueryStringBuilder<IGetPollsByCategoriesResponse, IGetPollsByCategoriesResponseBluePrint>(
            ["polls", "count"], {
                polls: pollQuery,
                ...otherQuery
            }
        ))
    );
    const [getPolls] = useLazyQuery<{ getPolls: IGetPollsResponse }, IGetPollsRequest>(
        schema.getPolls(gqlQueryStringBuilder<IGetPollsResponse, IGetPollsResponseBluePrint>(
            ["polls", "count"], {
                polls: pollQuery,
                ...otherQuery
            }
        ))
    );
    const [updatePoll] = useMutation<{ updatePoll: IUpdatePollResponse }, IUpdatePollRequest>(
        schema.updatePoll(gqlQueryStringBuilder<IUpdatePollResponse, IUpdatePollResponseBluePrint>(
            ["poll"], {
                poll: pollQuery,
                ...otherQuery
            }
        ))
    );
    const [endPoll] = useMutation<{ endPoll: IEndPollResponse }, IEndPollRequest>(
        schema.endPoll(gqlQueryStringBuilder<IEndPollResponse, IEndPollResponseBluePrint>(
            ["poll"], {
                poll: pollQuery,
                ...otherQuery
            }
        ))
    );
    const [deletePoll] = useMutation<{ deletePoll: IDeletePollResponse }, IDeletePollRequest>(
        schema.deletePoll(gqlQueryStringBuilder<IDeletePollResponse>(
            ["pollId"]
        ))
    )
    //////////////////////
    // Poll Votes
    //////////////////////
    const otherPollVoteQuery: Omit<IGetPollVoteResponseBluePrint, "pollVote"> = {
        userLite: userLiteQuery
    }
    const [getPollVotesCount] = useLazyQuery<{ getPollVotesCount: IGetPollVoteCountResponse }, IGetPollVoteCountRequest>(
        schema.getPollVotesCount(gqlQueryStringBuilder<IGetPollVoteCountResponse>(
            ["count"]
        ))
    );
    const [getPollVotes] = useLazyQuery<{ getPollVotes: IGetPollVotesResponse }, IGetPollVotesRequest>(
        schema.getPollVotes(gqlQueryStringBuilder<IGetPollVotesResponse, IGetPollVotesResponseBluePrint>(
            ["pollVotes"], {
                pollVotes: pollVoteQuery,
                ...otherPollVoteQuery
            }
        ))
    );
    const [getPollVote] = useLazyQuery<{ getPollVote: IGetPollVoteResponse }, IGetPollVoteRequest>(
        schema.getPollVote(gqlQueryStringBuilder<IGetPollVoteResponse, IGetPollVoteResponseBluePrint>(
            ["pollVote"], {
                pollVote: pollVoteQuery,
                ...otherPollVoteQuery
            }
        ))
    );
    const [deletePollVote] = useMutation<{ deletePollVote: IDeletePollVoteResponse }, IDeletePollVoteRequest>(
        schema.deletePollVote(gqlQueryStringBuilder<IDeletePollVoteResponse>(
            ["pollVoteId"]
        ))
    )
    const [createPollVote] = useMutation<{ createPollVote: ICreatePollVoteResponse }, ICreatePollVoteRequest>(
        schema.createPollVote(gqlQueryStringBuilder<ICreatePollVoteResponse, ICreatePollVoteResponseBluePrint>(
            ["pollVote"], {
                pollVote: pollVoteQuery,
                ...otherPollVoteQuery
            }
        ))
    )
    //////////////////////
    // Poll Impression
    //////////////////////
    const [deletePollImpression] = useMutation<{ deletePollImpression: IDeletePollImpressionResponse }, IDeletePollImpressionRequest>(
        schema.deletePollImpression(gqlQueryStringBuilder<IDeletePollImpressionResponse>(
            ["pollImpressionId"]
        ))
    )
    const [createPollImpression] = useMutation<{ createPollImpression: ICreatePollImpressionResponse }, ICreatePollImpressionRequest>(
        schema.createPollImpression(gqlQueryStringBuilder<ICreatePollImpressionResponse, ICreatePollImpressionResponseBluePrint>(
            ["pollImpression"], {
                pollImpression: pollImpressionQuery
            }
        ))
    )
    const [getPollImpressionsCount] = useLazyQuery<{ getPollImpressionsCount: IGetPollImpressionsCountResponse }, IGetPollImpressionsCountRequest>(
        schema.getPollImpressionsCount(gqlQueryStringBuilder<IGetPollImpressionsCountResponse>(
            ["count"]
        ))
    );
    const [getPollImpression] = useLazyQuery<{ getPollImpression: IGetPollImpressionResponse }, IGetPollImpressionRequest>(
        schema.getPollImpression(gqlQueryStringBuilder<IGetPollImpressionResponse, IGetPollImpressionResponseBluePrint>(
            ["pollImpression"], {
                pollImpression: pollImpressionQuery
            }
        ))
    );
    const [getPollDiscussionsCount] = useLazyQuery<{ getPollDiscussionsCount: IGetPollDiscussionsCountResponse }, IGetPollDiscussionsCountRequest>(
        schema.getPollDiscussionsCount(gqlQueryStringBuilder<IGetPollDiscussionsCountResponse>(
            ["count"]
        ))
    );
    const [getPollDiscussions] = useLazyQuery<{ getPollDiscussions: IGetPollDiscussionsResponse }, IGetPollDiscussionsRequest>(
        schema.getPollDiscussions(gqlQueryStringBuilder<IGetPollDiscussionsResponse, IGetPollDiscussionsResponseBluePrint>(
            ["pollDiscussions"], {
                pollDiscussions: pollDiscussionQuery,
                userLite: userLiteQuery
            }
        ))
    );
    const [getPollDiscussion] = useLazyQuery<{ getPollDiscussion: IGetPollDiscussionResponse }, IGetPollDiscussionRequest>(
        schema.getPollDiscussion(gqlQueryStringBuilder<IGetPollDiscussionResponse, IGetPollDiscussionResponseBluePrint>(
            ["pollDiscussion"], {
                pollDiscussion: pollDiscussionQuery,
                userLite: userLiteQuery
            }
        ))
    );
    const [createPollDiscussion] = useMutation<{ createPollDiscussion: ICreatePollDiscussionResponse }, ICreatePollDiscussionRequest>(
        schema.createPollDiscussion(gqlQueryStringBuilder<ICreatePollDiscussionResponse, ICreatePollDiscussionResponseBluePrint>(
            ["pollDiscussion"], {
                pollDiscussion: pollDiscussionQuery,
                userLite: userLiteQuery
            }
        ))
    )
    const [updatePollDiscussion] = useMutation<{ updatePollDiscussion: IUpdatePollDiscussionResponse }, IUpdatePollDiscussionRequest>(
        schema.updatePollDiscussion(gqlQueryStringBuilder<IUpdatePollDiscussionResponse, IUpdatePollDiscussionResponseBluePrint>(
            ["pollDiscussion"], {
                pollDiscussion: pollDiscussionQuery,
                userLite: userLiteQuery
            }
        ))
    )
    const [deletePollDiscussion] = useMutation<{ deletePollDiscussion: IDeletePollDiscussionResponse }, IDeletePollDiscussionRequest>(
        schema.deletePollDiscussion
    )
    const [createPollDiscussionImpression] = useMutation<{ createPollDiscussionImpression: ICreatePollDiscussionImpressionResponse }, ICreatePollDiscussionImpressionRequest>(
        schema.createPollDiscussionImpression(gqlQueryStringBuilder<ICreatePollDiscussionImpressionResponse, ICreatePollDiscussionImpressionResponseBluePrint>(
            ["pollDiscussionImpression"], {
                "pollDiscussionImpression": pollDiscussionImpressionQuery
            }
        ))
    )
    const [updatePollDiscussionImpression] = useMutation<{ updatePollDiscussionImpression: IUpdatePollDiscussionImpressionResponse }, IUpdatePollDiscussionImpressionRequest>(
        schema.updatePollDiscussionImpression(gqlQueryStringBuilder<IUpdatePollDiscussionImpressionResponse, IUpdatePollDiscussionImpressionResponseBluePrint>(
            ["pollDiscussionImpression"], {
                "pollDiscussionImpression": pollDiscussionImpressionQuery
            }
        ))
    )
    const [getPollDiscussionImpression] = useLazyQuery<{ getPollDiscussionImpression: IGetPollDiscussionImpressionResponse }, IGetPollDiscussionImpressionRequest>(
        schema.getPollDiscussionImpression(gqlQueryStringBuilder<IGetPollDiscussionImpressionResponse, IGetPollDiscussionImpressionResponseBluePrint>(
            ["pollDiscussionImpression"], {
                pollDiscussionImpression: pollDiscussionImpressionQuery,
            }
        ))
    );
    const [getPollDiscussionImpressionsCount] = useLazyQuery<{ getPollDiscussionImpressionsCount: IGetPollDiscussionImpressionsCountResponse }, IGetPollDiscussionImpressionsCountRequest>(
        schema.getPollDiscussionImpressionsCount(gqlQueryStringBuilder<IGetPollDiscussionImpressionsCountResponse>(
            ["count"]
        ))
    );


     // Reports
     const [createReport] = useMutation<{ createReport: ICreateReportResponse }, ICreateReportRequest>(
        schema.createReport(gqlQueryStringBuilder<ICreateReportResponse, ICreateReportResponseBluePrint>(
            ["report"], {
                "report": reportQuery,
                userLite: userLiteQuery,
                reporter: userLiteQuery,
                poll: pollQuery,
            }
        ))
    )

    return {
        createReport, 
        
        createPollDiscussionImpression, updatePollDiscussionImpression, getPollDiscussionImpression,
        getPollDiscussionImpressionsCount,

        deletePollDiscussion, getPollDiscussion, getPollDiscussionsCount,
        getPollDiscussions, createPollDiscussion, updatePollDiscussion,
        getPollImpression, deletePollImpression, createPollImpression,
        getPollImpressionsCount,

        getPollVotes, getPollVote, deletePollVote, createPollVote, getPollVotesCount,    

        endPoll, deletePoll, updatePoll, createPoll, getPoll, getPolls,
        getPollsByCategories, getTrendingPolls, getPopularPolls, getSuggestedPolls,
    }
}