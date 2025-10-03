import { gqlQueryStringBuilder } from "@/utils"
import { useLazyQuery, useMutation } from "@apollo/client"
import { challengeMemberQuery, challengeQuery, ICreateChallengeRequest, ICreateChallengeResponse, 
    ICreateChallengeResponseBluePrint, IDeleteChallengeMemberRequest, IDeleteChallengeMemberResponse, 
    IDeleteChallengeRequest, IDeleteChallengeResponse, IGetChallengeMemberRequest, IGetChallengeMemberResponse, 
    IGetChallengeMemberResponseBluePrint, IGetChallengeMembersCountRequest, IGetChallengeMembersCountResponse, IGetChallengeMembersRequest, IGetChallengeMembersResponse, 
    IGetChallengeMembersResponseBluePrint, IGetChallengeRequest, IGetChallengeResponse, IGetChallengeResponseBluePrint, 
    IGetChallengesCountRequest, 
    IGetChallengesCountResponse, 
    IGetChallengesRequest, IGetChallengesResponse, IGetChallengesResponseBluePrint, IGetUserChallengesRequest, IGetUserChallengesResponse, IGetUserChallengesResponseBluePrint, IUpdateChallengeRequest, 
    IUpdateChallengeResponse, IUpdateChallengeResponseBluePrint } from "./types"
import { schema } from "./schema"
import { userLiteQuery } from "../user"

export const useChallengeService = () => {

    const [createChallenge] = useMutation<{ createChallenge: ICreateChallengeResponse }, ICreateChallengeRequest>(
        schema.createChallenge(
            gqlQueryStringBuilder<ICreateChallengeResponse, ICreateChallengeResponseBluePrint>(
                ["challenge"], {
                    challenge: challengeQuery,
                }
            )
        )
    )
    const [updateChallenge] = useMutation<{ updateChallenge: IUpdateChallengeResponse }, IUpdateChallengeRequest>(
        schema.updateChallenge(
            gqlQueryStringBuilder<IUpdateChallengeResponse, IUpdateChallengeResponseBluePrint>(
                ["challenge"], {
                    challenge: challengeQuery,
                }
            )
        )
    )
    const [deleteChallenge] = useMutation<{ deleteChallenge: IDeleteChallengeResponse }, IDeleteChallengeRequest>(
        schema.deleteChallenge(
            gqlQueryStringBuilder<IDeleteChallengeResponse>(
                ["challengeId"]
            )
        )
    )
    const [getChallenge] = useLazyQuery<{ getChallenge: IGetChallengeResponse }, IGetChallengeRequest>(
        schema.getChallenge(
            gqlQueryStringBuilder<IGetChallengeResponse, IGetChallengeResponseBluePrint>(
                ["challenge"], {
                    challenge: challengeQuery
                }
            )
        )
    )
    const [getChallenges] = useLazyQuery<{ getChallenges: IGetChallengesResponse }, IGetChallengesRequest>(
        schema.getChallenges(
            gqlQueryStringBuilder<IGetChallengesResponse, IGetChallengesResponseBluePrint>(
                ["challenges"], {
                    challenges: challengeQuery
                }
            )
        )
    )
    const [getUserChallenges] = useLazyQuery<{ getUserChallenges: IGetUserChallengesResponse }, IGetUserChallengesRequest>(
        schema.getUserChallenges(
            gqlQueryStringBuilder<IGetUserChallengesResponse, IGetUserChallengesResponseBluePrint>(
                ["challenges"], {
                    challenges: challengeQuery
                }
            )
        )
    )
    const [getChallengesCount] = useLazyQuery<{ getChallengesCount: IGetChallengesCountResponse }, IGetChallengesCountRequest>(
        schema.getChallengesCount(
            gqlQueryStringBuilder<IGetChallengesCountResponse>(
                ["count"]
            )
        )
    )

    // Challenge Members
    const [getChallengeMember] = useLazyQuery<{ getChallengeMember: IGetChallengeMemberResponse }, IGetChallengeMemberRequest>(
        schema.getChallengeMember(
            gqlQueryStringBuilder<IGetChallengeMemberResponse, IGetChallengeMemberResponseBluePrint>(
                ["challengeMember"], {
                    challengeMember: challengeMemberQuery,
                    userLite: userLiteQuery
                }
            )
        )
    )
    const [getChallengeMembersCount] = useLazyQuery<{ getChallengeMembersCount: IGetChallengeMembersCountResponse }, IGetChallengeMembersCountRequest>(
        schema.getChallengeMembersCount(
            gqlQueryStringBuilder<IGetChallengeMembersCountResponse>(
                ["count"]
            )
        )
    )
    const [getChallengeMembers] = useLazyQuery<{ getChallengeMembers: IGetChallengeMembersResponse }, IGetChallengeMembersRequest>(
        schema.getChallengeMembers(
            gqlQueryStringBuilder<IGetChallengeMembersResponse, IGetChallengeMembersResponseBluePrint>(
                ["challengeMembers"], {
                    challengeMembers: challengeMemberQuery,
                    userLite: userLiteQuery
                }
            )
        )
    )
    const [deleteChallengeMember] = useMutation<{ deleteChallengeMember: IDeleteChallengeMemberResponse }, IDeleteChallengeMemberRequest>(
        schema.deleteChallengeMember(
            gqlQueryStringBuilder<IDeleteChallengeMemberResponse>(
                ["challengeMemberId"]
            )
        )
    )
    return {
        getChallengeMembersCount, getChallengeMember, getChallengeMembers, deleteChallengeMember,
        getChallenge, getChallenges, getUserChallenges, getChallengesCount,
        createChallenge, updateChallenge, deleteChallenge,
    }
}