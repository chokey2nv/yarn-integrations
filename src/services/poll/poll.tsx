import { ApiResponse, IDiscussion, IDiscussionImpression, IPoll, IPollImpression, IPollsResponse, IPollVote, IReport } from "@/utils"
import { ICreatePollDiscussionImpressionRequest, ICreatePollDiscussionRequest, ICreatePollImpressionRequest, ICreatePollRequest, ICreatePollVoteRequest, IDeletePollDiscussionRequest, IDeletePollImpressionRequest, IDeletePollRequest, IDeletePollVoteRequest, IGetPollDiscussionImpressionRequest, IGetPollDiscussionImpressionResponse, IGetPollDiscussionRequest, IGetPollDiscussionsRequest, IGetPollImpressionsCountRequest, IGetPollImpressionRequest, IGetPollRequest, IGetPollsByCategoriesRequest, IGetPollsRequest, IGetPollVoteCountRequest, IGetPollVoteRequest, IGetPollVotesRequest, IUpdatePollDiscussionImpressionRequest, IUpdatePollDiscussionRequest, IUpdatePollRequest, IGetPollDiscussionsCountRequest, IGetPollDiscussionImpressionsCountRequest, IEndPollRequest, ICreateReportRequest, IGetPopularPollsRequest, IGetTrendingPollsRequest, IGetSuggestedPollsRequest } from "./types"
import { usePollService } from "./service"
import useNotification from "@/store/notification_store"

export const usePolls = () => {
    const pollService = usePollService()
    const notification = useNotification()
    const handleRequest = async <T,O>(requestFn: (input: T) => Promise<ApiResponse<O>>, input: T): Promise<O|undefined> => {
        const { data, success, err } = await requestFn(input);
        if (!success) {
            console.info({ Name: requestFn.name, err })
            notification.show({
                type: "error",
                message: err?.message || "An error occurred",
            });
            return undefined;
        }
        return data ?? undefined
    };
    ////////////////////
    // Poll Impressions
    ////////////////////
    const getPollImpressionsCount = async (input: IGetPollImpressionsCountRequest): Promise<ApiResponse<number>> => {
        try{
            const { data, error } = await pollService.getPollImpressionsCount({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPollImpressionsCount.count
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getPollImpression = async (input: IGetPollImpressionRequest): Promise<ApiResponse<IPollImpression>> => {
        try{
            const { data, error } = await pollService.getPollImpression({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPollImpression.pollImpression
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const createPollImpression = async (input: ICreatePollImpressionRequest): Promise<ApiResponse<IPollImpression>> => {
        try{
            const { data, errors } = await pollService.createPollImpression({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true,
                data: data?.createPollImpression.pollImpression
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const deletePollImpression = async (input: IDeletePollImpressionRequest): Promise<ApiResponse<string>> => {
        try{
            const { data, errors } = await pollService.deletePollImpression({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true,
                data: data?.deletePollImpression.pollImpressionId
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    ////////////////////
    // Poll Votes
    ////////////////////
    const getPollVotesCount = async (input: IGetPollVoteCountRequest): Promise<ApiResponse<number>> => {
        try{
            const { data, error } = await pollService.getPollVotesCount({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPollVotesCount.count
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getPollVotes = async (input: IGetPollVotesRequest): Promise<ApiResponse<IPollVote[]>> => {
        try{
            const { data, error } = await pollService.getPollVotes({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPollVotes.pollVotes
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getPollVote = async (input: IGetPollVoteRequest): Promise<ApiResponse<IPollVote>> => {
        try{
            const { data, error } = await pollService.getPollVote({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPollVote.pollVote
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const createPollVote = async (input: ICreatePollVoteRequest): Promise<ApiResponse<IPollVote>> => {
        try{
            const { data, errors } = await pollService.createPollVote({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true,
                data: data?.createPollVote.pollVote
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const deletePollVote = async (input: IDeletePollVoteRequest): Promise<ApiResponse<string>> => {
        try{
            const { data, errors } = await pollService.deletePollVote({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true,
                data: data?.deletePollVote.pollVoteId
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    ////////////////////
    // Polls
    ////////////////////
    const deletePoll = async (input: IDeletePollRequest): Promise<ApiResponse<string>> => {
        try{
            const { data, errors } = await pollService.deletePoll({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true,
                data: data?.deletePoll.pollId
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const updatePoll = async (input: IUpdatePollRequest): Promise<ApiResponse<IPoll>> => {
        try{
            const { data, errors } = await pollService.updatePoll({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true,
                data: data?.updatePoll.poll
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getPolls = async (input: IGetPollsRequest): Promise<ApiResponse<IPollsResponse>> => {
        try{
            const { data, error } = await pollService.getPolls({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPolls
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getPollsByCategories = async (input: IGetPollsByCategoriesRequest): Promise<ApiResponse<IPollsResponse>> => {
        try{
            const { data, error } = await pollService.getPollsByCategories({
                variables: input,
                fetchPolicy: "network-only",
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPollsByCategories
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getPopularPolls = async (input: IGetPopularPollsRequest): Promise<ApiResponse<IPollsResponse>> => {
        try{
            const { data, error } = await pollService.getPopularPolls({
                variables: input,
                fetchPolicy: "network-only",
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPopularPolls
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getTrendingPolls = async (input: IGetTrendingPollsRequest): Promise<ApiResponse<IPollsResponse>> => {
        try{
            const { data, error } = await pollService.getTrendingPolls({
                variables: input,
                fetchPolicy: "network-only",
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getTrendingPolls
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getSuggestedPolls = async (input: IGetSuggestedPollsRequest): Promise<ApiResponse<IPollsResponse>> => {
        try{
            const { data, error } = await pollService.getSuggestedPolls({
                variables: input,
                fetchPolicy: "network-only",
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getSuggestedPolls
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getPoll = async (input: IGetPollRequest): Promise<ApiResponse<IPoll>> => {
        try{
            const { data, error } = await pollService.getPoll({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPoll.poll
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const createPoll = async (input: ICreatePollRequest): Promise<ApiResponse<IPoll>> => {
        try{
            const { data, errors } = await pollService.createPoll({
                variables: input
            })
            if(errors?.[0]) throw errors[0];

            return {
                success: true,
                data: data?.createPoll.poll
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }  
    const endPoll = async (input: IEndPollRequest): Promise<ApiResponse<IPoll>> => {
        try{
            const { data, errors } = await pollService.endPoll({
                variables: input
            })
            if(errors?.[0]) throw errors[0];

            return {
                success: true,
                data: data?.endPoll.poll
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }  
    const createPollDiscussion = async (input: ICreatePollDiscussionRequest): Promise<ApiResponse<IDiscussion>> => {
        try{
            const { data, errors } = await pollService.createPollDiscussion({
                variables: input
            })
            if(errors?.[0]) throw errors[0];

            return {
                success: true,
                data: data?.createPollDiscussion.pollDiscussion
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }  
    const updatePollDiscussion = async (input: IUpdatePollDiscussionRequest): Promise<ApiResponse<IDiscussion>> => {
        try{
            const { data, errors } = await pollService.updatePollDiscussion({
                variables: input
            })
            if(errors?.[0]) throw errors[0];

            return {
                success: true,
                data: data?.updatePollDiscussion.pollDiscussion
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }  
    const deletePollDiscussion = async (input: IDeletePollDiscussionRequest): Promise<ApiResponse<string>> => {
        try{
            const { data, errors } = await pollService.deletePollDiscussion({
                variables: input
            })
            if(errors?.[0]) throw errors[0];

            return {
                success: true,
                data: data?.deletePollDiscussion.pollDiscussionId
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }  
    const getPollDiscussions = async (input: IGetPollDiscussionsRequest): Promise<ApiResponse<IDiscussion[]>> => {
        try{
            const { data, error } = await pollService.getPollDiscussions({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPollDiscussions.pollDiscussions
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getPollDiscussion = async (input: IGetPollDiscussionRequest): Promise<ApiResponse<IDiscussion>> => {
        try{
            const { data, error } = await pollService.getPollDiscussion({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPollDiscussion.pollDiscussion
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getPollDiscussionsCount = async (input: IGetPollDiscussionsCountRequest): Promise<ApiResponse<number>> => {
        try{
            const { data, error } = await pollService.getPollDiscussionsCount({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPollDiscussionsCount.count
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getPollDiscussionImpression = async (input: IGetPollDiscussionImpressionRequest): Promise<ApiResponse<IDiscussionImpression>> => {
        try{
            const { data, error } = await pollService.getPollDiscussionImpression({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPollDiscussionImpression.pollDiscussionImpression
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const getPollDiscussionImpressionsCount = async (input: IGetPollDiscussionImpressionsCountRequest): Promise<ApiResponse<number>> => {
        try{
            const { data, error } = await pollService.getPollDiscussionImpressionsCount({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true,
                data: data?.getPollDiscussionImpressionsCount.count
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    }
    const updatePollDiscussionImpression = async (input: IUpdatePollDiscussionImpressionRequest): Promise<ApiResponse<IDiscussionImpression>> => {
        try{
            const { data, errors } = await pollService.updatePollDiscussionImpression({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(errors?.[0]) throw errors[0];

            return {
                success: true,
                data: data?.updatePollDiscussionImpression.pollDiscussionImpression
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    } 
    const createPollDiscussionImpression = async (input: ICreatePollDiscussionImpressionRequest): Promise<ApiResponse<IDiscussionImpression>> => {
        try{
            const { data, errors } = await pollService.createPollDiscussionImpression({
                variables: input
            })
            if(errors?.[0]) throw errors[0];

            return {
                success: true,
                data: data?.createPollDiscussionImpression.pollDiscussionImpression
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    } 

    const createReport = async (input: ICreateReportRequest): Promise<ApiResponse<IReport>> => {
        try{
            const { data, errors } = await pollService.createReport({
                variables: input
            })
            if(errors?.[0]) throw errors[0];

            return {
                success: true,
                data: data?.createReport.report
            }
        }catch(e){
            return {
                err: e as Error,
            }
        }
    } 
    return {
        createReport: (input: ICreateReportRequest) => handleRequest(createReport, input),

        getPollDiscussionImpressionsCount: (input: IGetPollDiscussionImpressionsCountRequest) => handleRequest(getPollDiscussionImpressionsCount, input),
        getPollDiscussionImpression: (input: IGetPollDiscussionImpressionRequest) => handleRequest(getPollDiscussionImpression, input),
        updatePollDiscussionImpression: (input: IUpdatePollDiscussionImpressionRequest) => handleRequest(updatePollDiscussionImpression, input),
        createPollDiscussionImpression: (input: ICreatePollDiscussionImpressionRequest) => handleRequest(createPollDiscussionImpression, input),
        
        getPollDiscussion: (input: IGetPollDiscussionRequest) => handleRequest(getPollDiscussion, input),
        getPollDiscussions: (input: IGetPollDiscussionsRequest) => handleRequest(getPollDiscussions, input),
        getPollDiscussionsCount: (input: IGetPollDiscussionsCountRequest) => handleRequest(getPollDiscussionsCount, input),
        deletePollDiscussion: (input: IDeletePollDiscussionRequest) => handleRequest(deletePollDiscussion, input),
        updatePollDiscussion: (input: IUpdatePollDiscussionRequest) => handleRequest(updatePollDiscussion, input),
        createPollDiscussion: (input: ICreatePollDiscussionRequest) => handleRequest(createPollDiscussion, input),

        createPoll: (input: ICreatePollRequest) => handleRequest(createPoll, input),
        endPoll: (input: IEndPollRequest) => handleRequest(endPoll, input),
        getPoll: (input: IGetPollRequest) => handleRequest(getPoll, input),
        getPolls: (input: IGetPollsRequest) => handleRequest(getPolls, input),
        updatePoll: (input: IUpdatePollRequest) => handleRequest(updatePoll, input),
        deletePoll: (input: IDeletePollRequest) => handleRequest(deletePoll, input),
        getPollsByCategories: (input: IGetPollsByCategoriesRequest) => handleRequest(getPollsByCategories, input),
        getPopularPolls: (input: IGetPopularPollsRequest) => handleRequest(getPopularPolls, input),
        getTrendingPolls: (input: IGetTrendingPollsRequest) => handleRequest(getTrendingPolls, input),
        getSuggestedPolls: (input: IGetSuggestedPollsRequest) => handleRequest(getSuggestedPolls, input),

        getPollVotesCount: (input: IGetPollVoteCountRequest) => handleRequest(getPollVotesCount, input),
        deletePollVote: (input: IDeletePollVoteRequest) => handleRequest(deletePollVote, input),
        createPollVote: (input: ICreatePollVoteRequest) => handleRequest(createPollVote, input),
        getPollVote: (input: IGetPollVoteRequest) => handleRequest(getPollVote, input),
        getPollVotes: (input: IGetPollVotesRequest) => handleRequest(getPollVotes, input),

        getPollImpressionsCount: (input: IGetPollImpressionsCountRequest) => handleRequest(getPollImpressionsCount, input),
        getPollImpression: (input: IGetPollImpressionRequest) => handleRequest(getPollImpression, input),
        createPollImpression: (input: ICreatePollImpressionRequest) => handleRequest(createPollImpression, input),
        deletePollImpression: (input: IDeletePollImpressionRequest) => handleRequest(deletePollImpression, input),
    } 
}