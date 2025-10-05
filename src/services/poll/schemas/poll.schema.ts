export const pollSchema = {
    endPoll: (query: string) => `
        mutation endPoll($pollId: String!){
            endPoll(pollId: $pollId){
                ${query}
            }
        }
    `,
    createPoll: (query: string) => `
        mutation createPoll($poll: PollInput!, $pollOptions: [PollOptionInput]!) {
            createPoll(poll: $poll, pollOptions: $pollOptions) {
                ${query}
            }
        }
    `,
    updatePoll: (query: string) => `
        mutation updatePoll($pollId: String!, $poll: PollInput!) {
            updatePoll(pollId: $pollId, poll: $poll) {
                ${query}
            }
        }
    `,
    deletePoll: (query: string) => `
        mutation deletePoll($pollId: String!) {
            deletePoll(pollId: $pollId) {
                ${query}
            }
        }
    `,
    getPoll: (query: string) => `
        query getPoll($poll: PollInput!) {
            getPoll(poll: $poll) {
                ${query}
            }
        }
    `,
    getPolls: (query: string) => `
        query getPolls($search: String, $limit: Int, $skip: Int, $pollIds: [String], $poll: PollInput) {
            getPolls(search: $search, limit: $limit, skip: $skip, pollIds: $pollIds, poll: $poll) {
                ${query}
            }
        }
    `,
    getPollsByCategories: (query: string) => `
        query getPollsByCategories($categories: [String]!, $limit: Int!, $skip: Int!){
            getPollsByCategories(categories: $categories, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
    getPopularPolls: (query: string) => `
        query getPopularPolls($limit: Int!, $skip: Int!){
            getPopularPolls(limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
    getTrendingPolls: (query: string) => `
        query getTrendingPolls($limit: Int!, $skip: Int!){
            getTrendingPolls(limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
    getSuggestedPolls: (query: string) => `
        query getSuggestedPolls($userId: String!, $limit: Int!, $skip: Int!){
            getSuggestedPolls(userId: $userId, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `
}