import { gql } from "@apollo/client";
import { G } from "react-native-svg";

export const schema = {
    // Report 

    createReport: (query: string) => gql`
        mutation createReport($report: ReportInput!){
            createReport(report: $report){
                ${query}
            }
        }
    `,
    /////////////////////
    // Poll Discussion Impression
    /////////////////////
    getPollDiscussionImpressionsCount: (query: string) => gql`
        query getPollDiscussionImpressionsCount($pollDiscussionImpression: PollDiscussionImpressionInput){
            getPollDiscussionImpressionsCount(pollDiscussionImpression: $pollDiscussionImpression){
                ${query}
            }
        }
    `,
    getPollDiscussionImpression: (query: string) => gql`
        query getPollDiscussionImpression($pollDiscussionImpression: PollDiscussionImpressionInput!){
            getPollDiscussionImpression(pollDiscussionImpression: $pollDiscussionImpression){
                ${query}
            }
        }
    `,
    updatePollDiscussionImpression: (query: string) => gql`
        mutation updatePollDiscussionImpression($pollDiscussionImpressionId: String!, $pollDiscussionImpression: PollDiscussionImpressionInput!){
            updatePollDiscussionImpression(pollDiscussionImpressionId: $pollDiscussionImpressionId, pollDiscussionImpression: $pollDiscussionImpression){
                ${query}
            }
        }
    `,
    createPollDiscussionImpression: (query: string) => gql`
        mutation createPollDiscussionImpression($pollDiscussionImpression: PollDiscussionImpressionInput!){
            createPollDiscussionImpression(pollDiscussionImpression: $pollDiscussionImpression){
                ${query}
            }
        }
    `,
    /////////////////////
    // Poll Discussion
    /////////////////////
    getPollDiscussionsCount: (query: string) => gql`
        query getPollDiscussionsCount($pollDiscussion: PollDiscussionInput!){
            getPollDiscussionsCount(pollDiscussion: $pollDiscussion){
                ${query}
            }
        }
    `,
    getPollDiscussion: (query: string) => gql`
        query getPollDiscussion($pollDiscussion: PollDiscussionInput!){
            getPollDiscussion(pollDiscussion: $pollDiscussion){
                ${query}
            }
        }
    `,
    getPollDiscussions: (query: string) => gql`
        query getPollDiscussions($search: String, $pollDiscussionIds: [String], $pollDiscussion: PollDiscussionInput, $limit: Int!, $skip: Int!){
            getPollDiscussions(search: $search, pollDiscussionIds: $pollDiscussionIds, pollDiscussion: $pollDiscussion, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
    createPollDiscussion: (query: string) => gql`
        mutation createPollDiscussion($pollDiscussion: PollDiscussionInput!){
            createPollDiscussion(pollDiscussion: $pollDiscussion){
                ${query}
            }
        }
    `,
    updatePollDiscussion: (query: string) => gql`
        mutation updatePollDiscussion($pollDiscussionId: String!, $pollDiscussion: PollDiscussionInput!){
            updatePollDiscussion(pollDiscussionId: $pollDiscussionId, pollDiscussion: $pollDiscussion){
                ${query}
            }
        }
    `,
    deletePollDiscussion: gql`
        mutation deletePollDiscussion($pollDiscussionId: String!){
            deletePollDiscussion(pollDiscussionId: $pollDiscussionId){
                pollDiscussionId
            }
        }
    `,
    /////////////////////
    // Poll Impression
    /////////////////////
    getPollImpressionsCount: (query: string) => gql`
        query getPollImpressionsCount($pollImpression: PollImpressionInput!){
            getPollImpressionsCount(pollImpression: $pollImpression){
                ${query}
            }
        }
    `,
    getPollImpression: (query: string) => gql`
        query getPollImpression($pollImpression: PollImpressionInput!){
            getPollImpression(pollImpression: $pollImpression){
                ${query}
            }
        }
    `,
    deletePollImpression: (query: string) => gql`
        mutation deletePollImpression($pollImpressionId: String!){
           deletePollImpression(pollImpressionId: $pollImpressionId){
                ${query}
            }
        }
    `,
    createPollImpression: (query: string) => gql`
        mutation createPollImpression($pollImpression: PollImpressionInput!){
            createPollImpression(pollImpression: $pollImpression){
                ${query}
            }
        }
    `,
    ///////////////////
    // poll votes
    ///////////////////
    getPollVotesCount: (query: string) => gql`
        query getPollVotesCount($pollVote: PollVoteInput!){
            getPollVotesCount(pollVote: $pollVote){
                ${query}
            }
        }
    `,
    getPollVote: (query: string) => gql`
        query getPollVote($pollVote: PollVoteInput!){
            getPollVote(pollVote: $pollVote){
                ${query}
            }
        }
    `,
    getPollVotes: (query: string) => gql`
        query getPollVotes($search: String, $pollVoteIds: [String], $pollVote: PollVoteInput, $limit: Int!, $skip: Int!){
            getPollVotes(search: $search, pollVoteIds: $pollVoteIds, pollVote: $pollVote, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
   deletePollVote: (query: string) => gql`
        mutation deletePollVote($pollId: String!){
           deletePollVote(pollId: $pollId){
                ${query}
            }
        }
    `,
    createPollVote: (query: string) => gql`
        mutation createPollVote($pollVote: PollVoteInput!){
            createPollVote(pollVote: $pollVote){
                ${query}
            }
        }
    `,
    // polls 
    endPoll: (query: string) => gql`
        mutation endPoll($pollId: String!){
            endPoll(pollId: $pollId){
                ${query}
            }
        }
    `,
    createPoll: (query: string) => gql`
        mutation createPoll($poll: PollInput!, $pollOptions: [PollOptionInput]!) {
            createPoll(poll: $poll, pollOptions: $pollOptions) {
                ${query}
            }
        }
    `,
    updatePoll: (query: string) => gql`
        mutation updatePoll($pollId: String!, $poll: PollInput!) {
            updatePoll(pollId: $pollId, poll: $poll) {
                ${query}
            }
        }
    `,
    deletePoll: (query: string) => gql`
        mutation deletePoll($pollId: String!) {
            deletePoll(pollId: $pollId) {
                ${query}
            }
        }
    `,
    getPoll: (query: string) => gql`
        query getPoll($poll: PollInput!) {
            getPoll(poll: $poll) {
                ${query}
            }
        }
    `,
    getPolls: (query: string) => gql`
        query getPolls($search: String, $limit: Int, $skip: Int, $pollIds: [String], $poll: PollInput) {
            getPolls(search: $search, limit: $limit, skip: $skip, pollIds: $pollIds, poll: $poll) {
                ${query}
            }
        }
    `,
    getPollsByCategories: (query: string) => gql`
        query getPollsByCategories($categories: [String]!, $limit: Int!, $skip: Int!){
            getPollsByCategories(categories: $categories, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
    getPopularPolls: (query: string) => gql`
        query getPopularPolls($limit: Int!, $skip: Int!){
            getPopularPolls(limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
    getTrendingPolls: (query: string) => gql`
        query getTrendingPolls($limit: Int!, $skip: Int!){
            getTrendingPolls(limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
    getSuggestedPolls: (query: string) => gql`
        query getSuggestedPolls($userId: String!, $limit: Int!, $skip: Int!){
            getSuggestedPolls(userId: $userId, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `
};