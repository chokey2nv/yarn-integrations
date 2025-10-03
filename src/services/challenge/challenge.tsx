import { ApiResponse, IChallenge, IChallengeMember } from "@/utils"
import { ICreateChallengeRequest, IDeleteChallengeMemberRequest, IDeleteChallengeRequest, IGetChallengeMemberRequest, 
    IGetChallengeMembersCountRequest, 
    IGetChallengeMembersRequest, IGetChallengeRequest, IGetChallengesRequest, IGetUserChallengesRequest, IUpdateChallengeRequest } from "./types"
import { useChallengeService } from "./service"
import useNotification from "@/store/notification_store"

export const useChallenge = () => {
    const challengeService = useChallengeService()
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

    const createChallenge = async (input: ICreateChallengeRequest): Promise<ApiResponse<IChallenge>> => {
        try {
            const { data, errors } = await challengeService.createChallenge({
                variables: input
            })
            if(errors?.[0]) throw errors[0]
            return {
                success: true,
                data: data?.createChallenge.challenge
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const updateChallenge = async (input: IUpdateChallengeRequest): Promise<ApiResponse<IChallenge>> => {
        try{
            const { data, errors } = await challengeService.updateChallenge({
                variables: input
            })
            if(errors?.[0]) throw errors[0]
            return {
                success: true,
                data: data?.updateChallenge.challenge
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const deleteChallenge = async (input: IDeleteChallengeRequest): Promise<ApiResponse<string>> => {
        try {
            const { data, errors } = await challengeService.deleteChallenge({
                variables: input
            })
            if( errors?.[0] ) throw errors[0]
            return {
                success: true,
                data: data?.deleteChallenge.challengeId
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getUserChallenges = async (input: IGetUserChallengesRequest): Promise<ApiResponse<IChallenge[]>> => {
        try {
            const { data, error } = await challengeService.getUserChallenges({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error
            return {
                data: data?.getUserChallenges.challenges,
                success: true,
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getChallenges = async (input: IGetChallengesRequest): Promise<ApiResponse<IChallenge[]>> => {
        try {
            const { data, error } = await challengeService.getChallenges({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error
            return {
                data: data?.getChallenges.challenges,
                success: true,
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getChallenge = async (input: IGetChallengeRequest): Promise<ApiResponse<IChallenge>> => {
        try{
            const { data, error } = await challengeService.getChallenge({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getChallenge.challenge
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getChallengeMember = async (input: IGetChallengeMemberRequest): Promise<ApiResponse<IChallengeMember>> => {
        try{
            const { data, error } = await challengeService.getChallengeMember({
                variables: input
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getChallengeMember.challengeMember
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getChallengeMembersCount = async (input: IGetChallengeMembersCountRequest): Promise<ApiResponse<number>> => {
        try{
            const { data, error } = await challengeService.getChallengeMembersCount({
                variables: input
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getChallengeMembersCount.count
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getChallengeMembers = async (input: IGetChallengeMembersRequest): Promise<ApiResponse<IChallengeMember[]>> => {
        try{
            const { data, error } = await challengeService.getChallengeMembers({
                variables: input
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getChallengeMembers.challengeMembers
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const deleteChallengeMember = async (input: IDeleteChallengeMemberRequest): Promise<ApiResponse<string>> => {
        try {
            const { data, errors } = await challengeService.deleteChallengeMember({
                variables: input
            })
            if( errors?.[0] ) throw errors[0]
            return {
                success: true,
                data: data?.deleteChallengeMember.challengeMemberId
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    return {

        getChallengeMember: (input: IGetChallengeMemberRequest) => handleRequest(getChallengeMember, input),
        getChallengeMembers: (input: IGetChallengeMembersRequest) => handleRequest(getChallengeMembers, input),
        getChallengeMembersCount: (input: IGetChallengeMembersCountRequest) => handleRequest(getChallengeMembersCount, input),
        deleteChallengeMember: (input: IDeleteChallengeMemberRequest) => handleRequest(deleteChallengeMember, input),
        
        createChallenge: (input: ICreateChallengeRequest) => handleRequest(createChallenge, input),
        updateChallenge: (input: IUpdateChallengeRequest) => handleRequest(updateChallenge, input),
        deleteChallenge: (input: IDeleteChallengeRequest) => handleRequest(deleteChallenge, input),
        getUserChallenges: (input: IGetUserChallengesRequest) => handleRequest(getUserChallenges, input),
        getChallenges: (input: IGetChallengesRequest) => handleRequest(getChallenges, input),
        getChallenge: (input: IGetChallengeRequest) => handleRequest(getChallenge, input),
    }
}