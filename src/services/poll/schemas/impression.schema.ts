export const pollImpressionSchema = {
    getPollImpressionsCount: (query: string) => `
        query getPollImpressionsCount($pollImpression: PollImpressionInput!){
            getPollImpressionsCount(pollImpression: $pollImpression){
                ${query}
            }
        }
    `,
    getPollImpression: (query: string) => `
        query getPollImpression($pollImpression: PollImpressionInput!){
            getPollImpression(pollImpression: $pollImpression){
                ${query}
            }
        }
    `,
    deletePollImpression: (query: string) => `
        mutation deletePollImpression($pollImpressionId: String!){
           deletePollImpression(pollImpressionId: $pollImpressionId){
                ${query}
            }
        }
    `,
    createPollImpression: (query: string) => `
        mutation createPollImpression($pollImpression: PollImpressionInput!){
            createPollImpression(pollImpression: $pollImpression){
                ${query}
            }
        }
    `,
}