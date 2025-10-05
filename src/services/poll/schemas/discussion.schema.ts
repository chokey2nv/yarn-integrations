export const pollDiscussionSchema = {
    getPollDiscussionsCount: (query: string) => `
        query getPollDiscussionsCount($pollDiscussion: PollDiscussionInput!){
            getPollDiscussionsCount(pollDiscussion: $pollDiscussion){
                ${query}
            }
        }
    `,
    getPollDiscussion: (query: string) => `
        query getPollDiscussion($pollDiscussion: PollDiscussionInput!){
            getPollDiscussion(pollDiscussion: $pollDiscussion){
                ${query}
            }
        }
    `,
    getPollDiscussions: (query: string) => `
        query getPollDiscussions($search: String, $pollDiscussionIds: [String], $pollDiscussion: PollDiscussionInput, $limit: Int!, $skip: Int!){
            getPollDiscussions(search: $search, pollDiscussionIds: $pollDiscussionIds, pollDiscussion: $pollDiscussion, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
    createPollDiscussion: (query: string) => `
        mutation createPollDiscussion($pollDiscussion: PollDiscussionInput!){
            createPollDiscussion(pollDiscussion: $pollDiscussion){
                ${query}
            }
        }
    `,
    updatePollDiscussion: (query: string) => `
        mutation updatePollDiscussion($pollDiscussionId: String!, $pollDiscussion: PollDiscussionInput!){
            updatePollDiscussion(pollDiscussionId: $pollDiscussionId, pollDiscussion: $pollDiscussion){
                ${query}
            }
        }
    `,
    deletePollDiscussion: (query: string) => `
        mutation deletePollDiscussion($pollDiscussionId: String!){
            deletePollDiscussion(pollDiscussionId: $pollDiscussionId){
                ${query}
            }
        }
    `,

    // discussion impression 

    getPollDiscussionImpressionsCount: (query: string) => `
        query getPollDiscussionImpressionsCount($pollDiscussionImpression: PollDiscussionImpressionInput){
            getPollDiscussionImpressionsCount(pollDiscussionImpression: $pollDiscussionImpression){
                ${query}
            }
        }
    `,
    getPollDiscussionImpression: (query: string) => `
        query getPollDiscussionImpression($pollDiscussionImpression: PollDiscussionImpressionInput!){
            getPollDiscussionImpression(pollDiscussionImpression: $pollDiscussionImpression){
                ${query}
            }
        }
    `,
    updatePollDiscussionImpression: (query: string) => `
        mutation updatePollDiscussionImpression($pollDiscussionImpressionId: String!, $pollDiscussionImpression: PollDiscussionImpressionInput!){
            updatePollDiscussionImpression(pollDiscussionImpressionId: $pollDiscussionImpressionId, pollDiscussionImpression: $pollDiscussionImpression){
                ${query}
            }
        }
    `,
    createPollDiscussionImpression: (query: string) => `
        mutation createPollDiscussionImpression($pollDiscussionImpression: PollDiscussionImpressionInput!){
            createPollDiscussionImpression(pollDiscussionImpression: $pollDiscussionImpression){
                ${query}
            }
        }
    `,
}