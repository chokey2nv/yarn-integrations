import { gqlQueryStringBuilder } from "@/utils"
import { useLazyQuery, useMutation } from "@apollo/client"
import { communityQuery, ICreateCommunityRequest, ICreateCommunityResponse, 
    ICreateCommunityResponseBluePrint, IDeleteCommunityRequest, IDeleteCommunityResponse, 
    IGetCommunityRequest, IGetCommunityResponse, IGetCommunityResponseBluePrint, 
    IGetCommunitiesRequest, IGetCommunitiesResponse, IGetCommunitiesResponseBluePrint, 
    IUpdateCommunityRequest, IUpdateCommunityResponse, IUpdateCommunityResponseBluePrint, 
    IGetCommunityInviteResponse, IGetCommunityInviteResponseBluePrint, IGetCommunityInviteRequest, 
    communityInviteQuery, ICreateCommunityInviteResponse, ICreateCommunityInviteRequest, 
    IGetChatMessageResponse, IGetChatMessageResponseBluePrint, IGetChatMessageRequest, 
    chatMessageQuery, ICreateChatMessageResponse, 
    ICreateCommunityInviteResponseBluePrint, ICreateChatMessageRequest, 
    ICreateChatMessageResponseBluePrint, IGetChatMessagesResponse, IGetChatMessagesResponseBluePrint, 
    IGetChatMessagesRequest, IUpdateChatMessageResponse, IUpdateChatMessageResponseBluePrint, 
    IUpdateChatMessageRequest, IGetCommunityMemberResponse, IGetCommunityMemberResponseBluePrint, 
    IGetCommunityMemberRequest, communityMemberQuery, ICreateCommunityMemberResponse, 
    ICreateCommunityMemberResponseBluePrint, ICreateCommunityMemberRequest, IGetCommunityMembersResponse, 
    IGetCommunityMembersResponseBluePrint, IGetCommunityMembersRequest, IDeleteCommunityMemberResponse, 
    IDeleteCommunityMemberRequest, IDeleteCommunityInviteResponse,
    IDeleteCommunityInviteRequest,
    ICreateCommunityWithMembersResponse,
    ICreateCommunityWithMembersResponseBluePrint,
    IGetPopularCommunitiesRequest,
    IGetCommunityMembersCountResponse,
    IGetCommunityMembersCountRequest
} from "./types"
import { schema } from "./schema"
import { userLiteQuery, userQuery } from "../user"

export const useCommunityService = () => {

    const [createCommunity] = useMutation<{ createCommunity: ICreateCommunityResponse }, ICreateCommunityRequest>(
        schema.createCommunity(
            gqlQueryStringBuilder<ICreateCommunityResponse, ICreateCommunityResponseBluePrint>(
                ["community"], {
                    community: communityQuery,
                }
            )
        )
    )
    const [createCommunityWithMembers] = useMutation<{ createCommunityWithMembers: ICreateCommunityWithMembersResponse }, ICreateCommunityRequest>(
        schema.createCommunityWithMembers(
            gqlQueryStringBuilder<ICreateCommunityWithMembersResponse, ICreateCommunityWithMembersResponseBluePrint>(
                ["community"], {
                    community: communityQuery,
                }
            )
        )
    )
    const [updateCommunity] = useMutation<{ updateCommunity: IUpdateCommunityResponse }, IUpdateCommunityRequest>(
        schema.updateCommunity(
            gqlQueryStringBuilder<IUpdateCommunityResponse, IUpdateCommunityResponseBluePrint>(
                ["community"], {
                    community: communityQuery,
                }
            )
        )
    )
    const [deleteCommunity] = useMutation<{ deleteCommunity: IDeleteCommunityResponse }, IDeleteCommunityRequest>(
        schema.deleteCommunity(
            gqlQueryStringBuilder<IDeleteCommunityResponse>(
                ["communityId"]
            )
        )
    )
    const [getCommunity] = useLazyQuery<{ getCommunity: IGetCommunityResponse }, IGetCommunityRequest>(
        schema.getCommunity(
            gqlQueryStringBuilder<IGetCommunityResponse, IGetCommunityResponseBluePrint>(
                ["community"], {
                    community: communityQuery
                }
            )
        )
    )
    const [getCommunities] = useLazyQuery<{ getCommunities: IGetCommunitiesResponse }, IGetCommunitiesRequest>(
        schema.getCommunities(
            gqlQueryStringBuilder<IGetCommunitiesResponse, IGetCommunitiesResponseBluePrint>(
                ["communities"], {
                    communities: communityQuery
                }
            )
        )
    )
    const [getPopularCommunities] = useLazyQuery<{ getPopularCommunities: IGetCommunitiesResponse }, IGetPopularCommunitiesRequest>(
        schema.getPopularCommunities(
            gqlQueryStringBuilder<IGetCommunitiesResponse, IGetCommunitiesResponseBluePrint>(
                ["communities"], {
                    communities: communityQuery
                }
            )
        )
    )

    // Invite
    const [getCommunityInvite] = useLazyQuery<{ getCommunityInvite: IGetCommunityInviteResponse }, IGetCommunityInviteRequest>(
        schema.getCommunityInvite(
            gqlQueryStringBuilder<IGetCommunityInviteResponse, IGetCommunityInviteResponseBluePrint>(
                ["communityInvite"], {
                    communityInvite: communityInviteQuery,
                }
            )
        )
    )
    const [createCommunityInvite] = useMutation<{ createCommunityInvite: ICreateCommunityInviteResponse }, ICreateCommunityInviteRequest>(
        schema.createCommunityInvite(
            gqlQueryStringBuilder<ICreateCommunityInviteResponse, ICreateCommunityInviteResponseBluePrint>(
                ["communityInvite"]
            )
        )
    )
    const [deleteCommunityInvite] = useMutation<{ deleteCommunityInvite: IDeleteCommunityInviteResponse }, IDeleteCommunityInviteRequest>(
        schema.deleteCommunityInvite(
            gqlQueryStringBuilder<IDeleteCommunityInviteResponse>(
                ["communityInviteId"]
            )
        )
    )
    // Community Chats
    const [getChatMessage] = useLazyQuery<{ getChatMessage: IGetChatMessageResponse }, IGetChatMessageRequest>(
        schema.getChatMessage(
            gqlQueryStringBuilder<IGetChatMessageResponse, IGetChatMessageResponseBluePrint>(
                ["chatMessage"], {
                    chatMessage: chatMessageQuery,
                    // message: chatMessageQuery,
                    userLite: userLiteQuery
                }
            )
        )
    )
    const [getChatMessages] = useLazyQuery<{ getChatMessages: IGetChatMessagesResponse }, IGetChatMessagesRequest>(
        schema.getChatMessages(
            gqlQueryStringBuilder<IGetChatMessagesResponse, IGetChatMessagesResponseBluePrint>(
                ["chatMessages"], {
                    chatMessages: chatMessageQuery,
                    userLite: userLiteQuery,
                }
            )
        )
    )
    const [createChatMessage] = useMutation<{ createChatMessage: ICreateChatMessageResponse }, ICreateChatMessageRequest>(
        schema.createChatMessage(
            gqlQueryStringBuilder<ICreateChatMessageResponse, ICreateChatMessageResponseBluePrint>(
                ["chatMessage"],{
                    chatMessage: chatMessageQuery,
                    userLite: userLiteQuery
                }
            )
        )
    )
    const [updateChatMessage] = useMutation<{ updateChatMessage: IUpdateChatMessageResponse }, IUpdateChatMessageRequest>(
        schema.updateChatMessage(
            gqlQueryStringBuilder<IUpdateChatMessageResponse, IUpdateChatMessageResponseBluePrint>(
                ["chatMessage"],{
                    chatMessage: chatMessageQuery,
                    userLite: userLiteQuery
                }
            )
        )
    )
    // Community Members
    const [getCommunityMembersCount] = useLazyQuery<{ getCommunityMembersCount: IGetCommunityMembersCountResponse }, IGetCommunityMembersCountRequest>(
        schema.getCommunityMembersCount(
            gqlQueryStringBuilder<IGetCommunityMembersCountResponse>(
                ["count"]
            )
        )
    )
    const [getCommunityMembers] = useLazyQuery<{ getCommunityMembers: IGetCommunityMembersResponse }, IGetCommunityMembersRequest>(
        schema.getCommunityMembers(
            gqlQueryStringBuilder<IGetCommunityMembersResponse, IGetCommunityMembersResponseBluePrint>(
                ["communityMembers"], {
                    communityMembers: communityMemberQuery,
                    user: userLiteQuery,
                }
            )
        )
    )
    const [getCommunityMember] = useLazyQuery<{ getCommunityMember: IGetCommunityMemberResponse }, IGetCommunityMemberRequest>(
        schema.getCommunityMember(
            gqlQueryStringBuilder<IGetCommunityMemberResponse, IGetCommunityMemberResponseBluePrint>(
                ["communityMember"], {
                    communityMember: communityMemberQuery,
                    user: userLiteQuery,
                }
            )
        )
    )
    const [createCommunityMember] = useMutation<{ createCommunityMember: ICreateCommunityMemberResponse }, ICreateCommunityMemberRequest>(
        schema.createCommunityMember(
            gqlQueryStringBuilder<ICreateCommunityMemberResponse, ICreateCommunityMemberResponseBluePrint>(
                ["communityMember"], {
                    communityMember: communityMemberQuery,
                    user: userLiteQuery,
                }
            )
        )
    )
    const [deleteCommunityMember] = useMutation<{ deleteCommunityMember: IDeleteCommunityMemberResponse }, IDeleteCommunityMemberRequest>(
        schema.deleteCommunityMember(
            gqlQueryStringBuilder<IDeleteCommunityMemberResponse>(
                ["communityMemberId"], 
            )
        )
    )

    return {
        getCommunityMembers, getCommunityMember, createCommunityMember, deleteCommunityMember, getCommunityMembersCount,
        getCommunityInvite, createCommunityInvite, deleteCommunityInvite,
        getChatMessage, updateChatMessage,
        getChatMessages, createChatMessage,
        getCommunity, getCommunities, getPopularCommunities,
        createCommunity, createCommunityWithMembers, updateCommunity, deleteCommunity,
    }
}