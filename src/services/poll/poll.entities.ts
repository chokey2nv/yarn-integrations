import { IDiscussion, IDiscussionImpression, IPoll, IPollImpression, IPollOption, IPollStat, IPollVote, IReport } from "../../types";

export type IReportFields = (keyof IReport)[];
export const reportQuery: IReportFields = [
    "challengeId", "communityId", "createdAt", "id", "pollId", "reason", "resolvedAt",
    "reportStatus", "reportType", "updatedAt", "userId", "userComment", "userLite", 
    "reporterId", "reportCode", 
]
export type IPollFields = (keyof IPoll)[]
export const pollQuery:IPollFields = [
    "category", "createdAt", "description", "id", "title",
    "pollDiscussionIds", "pollDiscussions", "description", "createdAt",
    "image", "multipleAnswer", "pollOptions", "owner", "ownerId", 
    "question", "reward", "pollStatus", "tag", "title",
    "isChallenge", "challengeId", "start", "end"
]
export type IPollStatsFields = (keyof IPollStat)[]
export const pollStatsQuery:IPollStatsFields = [
    "discussionCount", "negativeImpression", "positiveImpressions", "totalVotes"
]
export type IPollOptionFields = (keyof IPollOption)[]
export const pollOptionQuery:IPollOptionFields = [
    "id", "image", "percentage", "text", "votes"
]
export type IPollDiscussionImpressionFields = (keyof IDiscussionImpression)[];
export const pollDiscussionImpressionQuery:IPollDiscussionImpressionFields = [
    "discussionId", "id", "isLiked", "isLoved", "pollId", "userId"
]
export type IPollDiscussionFields = (keyof IDiscussion)[];
export const pollDiscussionQuery:IPollDiscussionFields = [
    "createdAt", "id", "isRoot", "likes", "repliedToId", "pollId", "replyIds", "text",
    "userLite", "userId"
]
export type IPollImpressionFields = (keyof IPollImpression)[]
export const pollImpressionQuery: IPollImpressionFields = [
    "createdAt", "id", "pollImpressionOption", "pollId", "userId"
]
export type IPollVoteFields = (keyof IPollVote)[]
export const pollVoteQuery: IPollVoteFields = [
    "createdAt", "id", "pollId", "userId", "userLite", "optionId"
]