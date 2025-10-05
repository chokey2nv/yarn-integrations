export const pollVoteSchema = {
    getPollVotesCount: (query: string) => `
        query getPollVotesCount($pollVote: PollVoteInput!){
            getPollVotesCount(pollVote: $pollVote){
                ${query}
            }
        }
    `,
    getPollVote: (query: string) => `
        query getPollVote($pollVote: PollVoteInput!){
            getPollVote(pollVote: $pollVote){
                ${query}
            }
        }
    `,
    getPollVotes: (query: string) => `
        query getPollVotes($search: String, $pollVoteIds: [String], $pollVote: PollVoteInput, $limit: Int!, $skip: Int!){
            getPollVotes(search: $search, pollVoteIds: $pollVoteIds, pollVote: $pollVote, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
   deletePollVote: (query: string) => `
        mutation deletePollVote($pollId: String!){
           deletePollVote(pollId: $pollId){
                ${query}
            }
        }
    `,
    createPollVote: (query: string) => `
        mutation createPollVote($pollVote: PollVoteInput!){
            createPollVote(pollVote: $pollVote){
                ${query}
            }
        }
    `
}