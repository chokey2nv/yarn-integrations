import { gql } from "@apollo/client";

export const schema = {
    // Challenge Members
    getChallengeMembersCount: (query: string) => gql`
        query getChallengeMembersCount($challengeMember: ChallengeMemberInput!) {
            getChallengeMembersCount(challengeMember: $challengeMember) {
                ${query}
            }
        }
    `,
    getChallengeMember: (query: string) => gql`
        query getChallengeMember($challengeMember: ChallengeMemberInput!) {
            getChallengeMember(challengeMember: $challengeMember) {
                ${query}
            }
        }
    `,
    getChallengeMembers: (query: string) => gql`
        query getChallengeMembers($challengeMemberIds: [String], $challengeMember: ChallengeMemberInput!, $limit: Int!, $skip: Int!) {
            getChallengeMembers(challengeMemberIds: $challengeMemberIds, challengeMember: $challengeMember, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    deleteChallengeMember: (query: string) => gql`
        mutation deleteChallengeMember($challengeMemberId: String!) {
            deleteChallengeMember(challengeMemberId: $challengeMemberId) {
                ${query}
            }
        }
    `,

    // Challenges
    createChallenge: (query: string) => gql`
        mutation createChallenge($challenge: ChallengeInput!, $poll: PollInput!, $pollOptions: [PollOptionInput]!, $creator: CreatorInput!, $reviewerIds: [String]) {
            createChallenge(challenge: $challenge, poll: $poll, pollOptions: $pollOptions, creator: $creator, reviewerIds: $reviewerIds) {
                ${query}
            }
        }
    `,
    getChallenge: (query: string) => gql`
        query getChallenge($challenge: ChallengeInput!) {
            getChallenge(challenge: $challenge) {
                ${query}
            }
        }
    `,
    getFeaturedChallenges: (query: string) => gql`
        query getFeaturedChallenges {
            getFeaturedChallenges {
                ${query}
            }
        }
    `,
    getChallenges: (query: string) => gql`
        query getChallenges($challenge: ChallengeInput, $challengeIds: [String], $search: String, $limit: Int!, $skip: Int!) {
            getChallenges(challenge: $challenge, challengeIds: $challengeIds, search: $search, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    getUserChallenges: (query: string) => gql`
        query getUserChallenges($userId: String!, $limit: Int!, $skip: Int!) {
            getUserChallenges(userId: $userId, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    getChallengesCount: (query: string) => gql`
        query getChallengesCount($challenge: ChallengeInput!) {
            getChallengesCount(challenge: $challenge) {
                ${query}
            }
        }
    `,
    updateChallenge: (query: string) => gql`
        mutation updateChallenge($challengeId: String!, $challenge: ChallengeInput!) {
            updateChallenge(challengeId: $challengeId, challenge: $challenge) {
                ${query}
            }
        }
    `,
    deleteChallenge: (query: string) => gql`
        mutation deleteChallenge($challengeId: String!) {
            deleteChallenge(challengeId: $challengeId) {
                ${query}
            }
        }
    `,
}
