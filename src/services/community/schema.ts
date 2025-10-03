import { gql } from "@apollo/client";

export const schema = {
    // Community Member 
    deleteCommunityMember: (query: string) => gql`
        mutation deleteCommunityMember($communityId: String!, $memberId: String!){
            deleteCommunityMember(communityId: $communityId, memberId: $memberId){
                ${query}
            }
        }
    `,
    createCommunityMember: (query: string) => gql`
        mutation createCommunityMember($communityMember: CommunityMemberInput!){
            createCommunityMember(communityMember: $communityMember){
                ${query}
            }
        }
    `,
    getCommunityMembers: (query: string) => gql`
        query getCommunityMembers($communityMemberIds: [String], $communityMember: CommunityMemberInput, $limit: Int!, $skip: Int!){
            getCommunityMembers(communityMemberIds: $communityMemberIds, communityMember: $communityMember, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
    getCommunityMembersCount: (query: string) => gql`
        query getCommunityMembersCount($communityMember: CommunityMemberInput!){
            getCommunityMembersCount(communityMember: $communityMember){
                ${query}
            }
        }
    `,
    getCommunityMember: (query: string) => gql`
        query getCommunityMember($communityMember: CommunityMemberInput!){
            getCommunityMember(communityMember: $communityMember){
                ${query}
            }
        }
    `,
    // Community Chat 
    updateChatMessage: (query: string) => gql`
        mutation updateChatMessage($chatMessageId: String!, $chatMessage: ChatMessageInput!){
            updateCommunity(chatMessageId: $chatMessageId, chatMessage: $chatMessage){
                ${query}
            }
        }
    `,
    createChatMessage: (query: string) => gql`
        mutation createChatMessage($chatMessage: ChatMessageInput!){
            createChatMessage(chatMessage: $chatMessage){
                ${query}
            }
        }
    `,
    getChatMessage: (query: string) => gql`
        query getChatMessage($chatMessage: ChatMessageInput!){
            getChatMessage(chatMessage: $chatMessage){
                ${query}
            }
        }
    `,
    getChatMessages: (query: string) => gql`
        query getChatMessages($search: String, $chatMessageIds: [String], $chatMessage: ChatMessageInput, $limit: Int!, $skip: Int!){
            getChatMessages(search: $search, chatMessageIds: $chatMessageIds, chatMessage: $chatMessage, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
    // Community Invite
    createCommunityInvite: (query: string) => gql`
        mutation createCommunityInvite($communityInvite: CommunityInviteInput!){
            createCommunityInvite(communityInvite: $communityInvite){
                ${query}
            }
        }
    `,
    deleteCommunityInvite: (query: string) => gql`
        mutation deleteCommunityInvite($communityInviteId: String!){
            deleteCommunityInvite(communityInviteId: $communityInviteId){
                ${query}
            }
        }
    `,
    getCommunityInvite: (query: string) => gql`
        query getCommunityInvite($communityInvite: CommunityInviteInput!){
            getCommunityInvite(communityInvite: $communityInvite){
                ${query}
            }
        }
    `,
    // Community
    createCommunity: (query: string) => gql`
        mutation createCommunity($community: CommunityInput!) {
            createCommunity(community: $community) {
                ${query}
            }
        }
    `,
    createCommunityWithMembers: (query: string) => gql`
        mutation createCommunity($community: CommunityInput!, $invitedMembersIds: [String]!) {
            createCommunity(community: $community, invitedMembersIds: $invitedMembersIds) {
                ${query}
            }
        }
    `,
    getCommunity: (query: string) => gql`
        query getCommunity($community: CommunityInput!) {
            getCommunity(community: $community) {
                ${query}
            }
        }
    `,
    getCommunities: (query: string) => gql`
        query getCommunities($community: CommunityInput, $communityIds: [String], $search: String, $limit: Int!, $skip: Int!) {
            getCommunities(community: $community, communityIds: $communityIds, search: $search, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    getPopularCommunities: (query: string) => gql`
        query getPopularCommunities($limit: Int!, $skip: Int!) {
            getPopularCommunities(limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    updateCommunity: (query: string) => gql`
        mutation updateCommunity($communityId: String!, $community: CommunityInput!) {
            updateCommunity(communityId: $communityId, community: $community) {
                ${query}
            }
        }
    `,
    deleteCommunity: (query: string) => gql`
        mutation deleteCommunity($communityId: String!) {
            deleteCommunity(communityId: $communityId) {
                ${query}
            }
        }
    `,
}
