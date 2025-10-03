import { BooleanLiteral } from "./setup";

export type IUserActionID = "profile"|"reactivate"|"suspend"

export interface IUsersStat {
  totalUsers: number;
  activeUsers: number;
  suspendedUsers: number;
  newUsers: number;
  activeCommunities: number;
}


export interface IReportStat {
  totalReports: number;
  pendingReviews: number;
  resolvedReports: number;
  suspendedUsers: number;
}
export type IUserStatusID = "active" | "suspended";
export interface IUser extends IUserRaw {
  id: string;
  createdAt: string;
  onActivePremium: BooleanLiteral;
  subscriptionId?: string | undefined;
  unlockedBadges: string[]
  earning: number;
  isDeleted?: BooleanLiteral;
  userLevel: number;
  contactHash?: string;
  userStatus?: IUserStatusID;
}
export interface IUserSuggestion {
  id: string;
  userAId: string;
  userBId: string;
  createdAt: string;
}
export interface IUserNotificationSetting {
  id: string;
  userId: string;
  allowedNotifications: IUserNotificationType[];
}
export type IUserNotificationTypeCategory = "polls" | "connection" | "general"
export type IUserNotificationType = "challengeInvite"|"challengeEnd"|"followed"|"pollReward"|"gainedBadge"|"pollComment"|"pollVote"|"pollImpression"|"pollEnd"|"newPoll"
export type INotificationStatus = "read"|"unread"
export interface IUserNotification {
  id: string;
  userId: string;
  notificationData: string;
  notificationType: IUserNotificationType;
  notificationStatus: INotificationStatus;
  createdAt: string;
}

export interface IUserLite {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  coinBalance: number;
  totalEarning: number;
  phone?: string;
}
export interface IUserRaw extends Omit<IUserLite, "id"> {
  email?: string;
  country?: string;
  localState?: string;
  hideRanking?: BooleanLiteral;
  tags?: string[]
}
export type IRankTypes = "global"|"local"|"friends"
export type IRank = Record<IRankTypes, {isUp: boolean; position: number}>
export interface IUserRank {
  // ranks?: IRank
  // position?: number;
  // direction?: "up" | "down";
  // userId: string;
  userLite: IUserLite;
  rank: number;
  totalEarning: number;
}

export interface IFollow {
  id: string;
  userAId: string;
  userBId: string;
  aFollowB?: BooleanLiteral;
  bFollowA?: BooleanLiteral;
  userA?: IUserLite;
  userB?: IUserLite;
}