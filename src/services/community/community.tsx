import { ApiResponse, IChatMessage, ICommunity, ICommunityInvite, ICommunityMember } from "@/utils"
import { ICreateCommunityRequest, IDeleteCommunityRequest, IGetCommunityRequest, IGetCommunitiesRequest, IUpdateCommunityRequest, IGetPopularCommunitiesRequest, IGetCommunityInviteRequest, IGetChatMessageRequest, ICreateChatMessageRequest, IUpdateChatMessageRequest, ICreateCommunityInviteRequest, IGetChatMessagesRequest, IGetCommunityMemberRequest, ICreateCommunityMemberRequest, IGetCommunityMembersRequest, IDeleteCommunityMemberRequest, IDeleteCommunityInviteRequest, ICreateCommunityWithMembersRequest, IGetCommunityMembersCountRequest } from "./types"
import { useCommunityService } from "./service"
import useNotification from "@/store/notification_store"

export const useCommunity = () => {
    const communityService = useCommunityService()
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
    const createCommunity = async (input: ICreateCommunityRequest): Promise<ApiResponse<ICommunity>> => {
        try {
            const { data, errors } = await communityService.createCommunity({
                variables: input
            })
            if(errors?.[0]) throw errors[0]
            return {
                success: true,
                data: data?.createCommunity.community
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const createCommunityWithMembers = async (input: ICreateCommunityWithMembersRequest): Promise<ApiResponse<ICommunity>> => {
        try {
            const { data, errors } = await communityService.createCommunityWithMembers({
                variables: input
            })
            if(errors?.[0]) throw errors[0]
            return {
                success: true,
                data: data?.createCommunityWithMembers.community
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const updateCommunity = async (input: IUpdateCommunityRequest): Promise<ApiResponse<ICommunity>> => {
        try{
            const { data, errors } = await communityService.updateCommunity({
                variables: input
            })
            if(errors?.[0]) throw errors[0]
            return {
                success: true,
                data: data?.updateCommunity.community
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const deleteCommunity = async (input: IDeleteCommunityRequest): Promise<ApiResponse<string>> => {
        try {
            const { data, errors } = await communityService.deleteCommunity({
                variables: input
            })
            if( errors?.[0] ) throw errors[0]
            return {
                success: true,
                data: data?.deleteCommunity.communityId
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getCommunities = async (input: IGetCommunitiesRequest): Promise<ApiResponse<ICommunity[]>> => {
        try {
            const { data, error } = await communityService.getCommunities({
                variables: input
            })
            if(error) throw error
            return {
                data: data?.getCommunities.communities,
                success: true,
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getPopularCommunities = async (input: IGetPopularCommunitiesRequest): Promise<ApiResponse<ICommunity[]>> => {
        try {
            const { data, error } = await communityService.getPopularCommunities({
                variables: input
            })
            if(error) throw error
            return {
                data: data?.getPopularCommunities.communities,
                success: true,
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getCommunity = async (input: IGetCommunityRequest): Promise<ApiResponse<ICommunity>> => {
        try{
            const { data, error } = await communityService.getCommunity({
                variables: input
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getCommunity.community
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }

    // Invite
    const getCommunityInvite = async (input: IGetCommunityInviteRequest): Promise<ApiResponse<ICommunityInvite>> => {
        try{
            const { data, error } = await communityService.getCommunityInvite({
                variables: input
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getCommunityInvite.communityInvite
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const createCommunityInvite = async (input: ICreateCommunityInviteRequest): Promise<ApiResponse<ICommunityInvite>> => {
        try{
            const { data, errors } = await communityService.createCommunityInvite({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true, 
                data: data?.createCommunityInvite.communityInvite
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const deleteCommunityInvite = async (input: IDeleteCommunityInviteRequest): Promise<ApiResponse<string>> => {
        try{
            const { data, errors } = await communityService.deleteCommunityInvite({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true, 
                data: data?.deleteCommunityInvite.communityInviteId
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }

    // Chats
    const getChatMessage = async (input: IGetChatMessageRequest): Promise<ApiResponse<IChatMessage>> => {
        try{
            const { data, error } = await communityService.getChatMessage({
                variables: input
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getChatMessage.chatMessage
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getChatMessages = async (input: IGetChatMessagesRequest): Promise<ApiResponse<IChatMessage[]>> => {
        try{
            const { data, error } = await communityService.getChatMessages({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getChatMessages?.chatMessages
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const createChatMessage = async (input: ICreateChatMessageRequest): Promise<ApiResponse<IChatMessage>> => {
        try{
            const { data, errors } = await communityService.createChatMessage({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true, 
                data: data?.createChatMessage.chatMessage
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const updateChatMessage = async (input: IUpdateChatMessageRequest): Promise<ApiResponse<IChatMessage>> => {
        try{
            const { data, errors } = await communityService.updateChatMessage({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true, 
                data: data?.updateChatMessage.chatMessage
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    // Community Members 
    const getCommunityMembersCount = async (input: IGetCommunityMembersCountRequest): Promise<ApiResponse<number>> => {
        try{
            const { data, error } = await communityService.getCommunityMembersCount({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getCommunityMembersCount.count
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getCommunityMembers = async (input: IGetCommunityMembersRequest): Promise<ApiResponse<ICommunityMember[]>> => {
        try{
            const { data, error } = await communityService.getCommunityMembers({
                variables: input
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getCommunityMembers.communityMembers
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getCommunityMember = async (input: IGetCommunityMemberRequest): Promise<ApiResponse<ICommunityMember>> => {
        try{
            const { data, error } = await communityService.getCommunityMember({
                variables: input
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getCommunityMember.communityMember
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const createCommunityMember = async (input: ICreateCommunityMemberRequest): Promise<ApiResponse<ICommunityMember>> => {
        try{
            const { data, errors } = await communityService.createCommunityMember({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true, 
                data: data?.createCommunityMember.communityMember
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const deleteCommunityMember = async (input: IDeleteCommunityMemberRequest): Promise<ApiResponse<string>> => {
        try{
            const { data, errors } = await communityService.deleteCommunityMember({
                variables: input
            })
            if(errors?.[0]) throw errors[0];
            return {
                success: true, 
                data: data?.deleteCommunityMember.communityMemberId
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    return {
        deleteCommunityMember: (input: IDeleteCommunityMemberRequest) => handleRequest(deleteCommunityMember, input), 
        createCommunityMember: (input: ICreateCommunityMemberRequest) => handleRequest(createCommunityMember, input), 
        getCommunityMember: (input: IGetCommunityMemberRequest) => handleRequest(getCommunityMember, input), 
        getCommunityMembers: (input: IGetCommunityMembersRequest) => handleRequest(getCommunityMembers, input), 
        getCommunityMembersCount: (input: IGetCommunityMembersCountRequest) => handleRequest(getCommunityMembersCount, input), 


        getChatMessages: (input: IGetChatMessagesRequest) => handleRequest(getChatMessages, input), 
        getChatMessage: (input: IGetChatMessageRequest) => handleRequest(getChatMessage, input), 
        createChatMessage: (input: ICreateChatMessageRequest) => handleRequest(createChatMessage, input), 
        updateChatMessage: (input: IUpdateChatMessageRequest) => handleRequest(updateChatMessage, input), 


        getCommunityInvite: (input: IGetCommunityInviteRequest) => handleRequest(getCommunityInvite, input), 
        createCommunityInvite: (input: ICreateCommunityInviteRequest) => handleRequest(createCommunityInvite, input), 
        deleteCommunityInvite: (input: IDeleteCommunityInviteRequest) => handleRequest(deleteCommunityInvite, input), 

        createCommunity: (input: ICreateCommunityRequest) => handleRequest(createCommunity, input), 
        createCommunityWithMembers: (input: ICreateCommunityWithMembersRequest) => handleRequest(createCommunityWithMembers, input), 
        updateCommunity: (input: IUpdateCommunityRequest) => handleRequest(updateCommunity, input),
        deleteCommunity: (input: IDeleteCommunityRequest) => handleRequest(deleteCommunity, input),
        getCommunities: (input: IGetCommunitiesRequest) => handleRequest(getCommunities, input),
        getPopularCommunities: (input: IGetPopularCommunitiesRequest) => handleRequest(getPopularCommunities, input),
        getCommunity: (input: IGetCommunityRequest) => handleRequest(getCommunity, input),
    }
}