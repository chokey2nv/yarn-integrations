import { IBadge, IEarningAggregate, IFollow, IUser, IUserBadge, IUserLite, IUserNotification, IUserNotificationSetting, IUserRank, IUserSuggestion, IVoucherRedemption } from "../../types";

export type IUserSuggestionFields = (keyof IUserSuggestion)[];
export const userSuggestionQuery:IUserSuggestionFields = [
  "id", "createdAt", "userAId", "userBId"
]
export type IUserNotificationFields = (keyof IUserNotification)[]
export const notificationQuery:IUserNotificationFields = [
  "createdAt", "id", "userId", "notificationData", "notificationStatus", "notificationType"
]
export type IFollowFields = (keyof IFollow)[]
export const followQuery:IFollowFields = [
    "aFollowB", "bFollowA", "id", "userA", "userAId", "userB", "userBId"
]
export type IUserLiteFields = (keyof IUserLite)[]
export const userLiteQuery:IUserLiteFields = [
  "avatar", "coinBalance", "id", "name", "username"
]
export type IEarningAggregateFields = (keyof IEarningAggregate)[]
export const earningAggregateQuery:IEarningAggregateFields = [
  "catShortname", "categoryName", "coins", "userId"
]
export type IUserRankFields = (keyof IUserRank)[]
export const userRankQuery:IUserRankFields = [
  // "direction", "position", "userId"
  "userLite", "rank", "totalEarning"
]
export type IBadgeFields = (keyof IBadge)[]
export const badgeQuery:IBadgeFields = [
  "coinReward", "congratsMessage", "count", "createdAt", "description", "icon", "id", "status", "title", "trigger"
]
export type IUserBadgeFields = (keyof IUserBadge)[]
export const userBadgeQuery:IUserBadgeFields = [
  "badgeId", "createdAt", "id", "userId", "badge"
]
export type IUserFields = (keyof IUser)[]
export const userQuery:IUserFields = [
  "avatar", "coinBalance", "country", "createdAt", 
  "earning", "earning", "email", "hideRanking", "id", "isDeleted", 
  "name", "onActivePremium", "phone", "localState", "subscriptionId", 
  "tags", "totalEarning", "unlockedBadges", "username", "userLevel", "contactHash"
]

export type IUserNotificationSettingFields = (keyof IUserNotificationSetting)[]
export const userNotificationSettingQuery: IUserNotificationSettingFields = [
  "allowedNotifications", "id", "userId",
]
export type IVoucherRedemptionFields = (keyof IVoucherRedemption)[]
export const voucherRedemptionQuery:IVoucherRedemptionFields = [
    "createdAt", "id", "isRedeemed", "redemptionCode", "userId", "voucherId"
]