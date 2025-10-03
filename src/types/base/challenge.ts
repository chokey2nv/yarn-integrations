import { BooleanLiteral } from "./setup";

export interface IChallengeRaw {
  challengeType: IChallengeType;
  challengeStatus: IChallengeStatus;
  privacyType: IChallengePrivacy;
  title: string;
  description: string;
  coins: number;
  isSystem?: BooleanLiteral;
  isFeatured?: BooleanLiteral;
  challengeTiming?: "weekly"|"monthly"
  // roles: IChallengeRole[]
  participantCount: number;
  joinedCount: number;
  startDate: string;
  endDate: string;
  creatorId: string;
  minStake: number;
  // rewardPool: number; // new
  // isCumulativeStakeReward: BooleanLiteral; // new
}
export type IChallengeType = "open"|"head2head"
export type IChallengePrivacy = "public"|"private"
export type IChallengeStatus = "active"|"suspended"
export interface IChallengeJoin {
  id: string;
  challengeId: string;
  participantIds: string[];
  stake: number;
  createdAt: string;
}

export type IChallengeRoleType = "creator"|"reviewer"|"participant"
export interface _IChallengeRole {
  userId: string;
  role: IChallengeRoleType;
  hasAccepted?: boolean;
}
export interface _IChallengeMember {
  id: string;
  challengeId: string;
  userId: string;
  challengeMemberRoleType: IChallengeRoleType;
  hasApproved?: BooleanLiteral;
  stake?: number;
}

export interface IChallenge extends IChallengeRaw {
  id: string;
}