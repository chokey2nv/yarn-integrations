import { BooleanLiteral } from "./setup";

export type ICommunityStatusID = "active" | "suspended";
export type ICommunityType = "public" | "private";
export interface ICommunity extends ICommunityRaw{
  memberCount: number;
  id: string;
  statistics?: ICommunityStat;
  communityStatus?: ICommunityStatusID;
  communityType?: ICommunityType;
  multipleAdmins?: BooleanLiteral;
}
export type CommunitySideMenuItem = "welcome"|"rules"|"chats"|"polls"|"voice"
export interface ICommunityRaw {
  name: string;
  description: string;
  coverImage?: string;
  logo?: string;
  banner?: string;
  categories: string[];
  levelRequired: number;
}
export interface ICommunityStat {
  coinEarned: number;
  badgeCount: number;
  ranking: number;
}
export interface _IChatMessageRaw {
  communityId: string;
  channelId: string;
  userId: string;

  message: string;
  createdAt: string;
  isAdmin?: BooleanLiteral;
  images?: string[];
  replyToMessageId?: string;
  chatType: "rule" | "welcome" | "chat"
  // replyToMessage?: IChatMessage;
}

export interface ICommunityInvite {
  id: string;
  communityId: string;
  userId: string;
  createAt: string;
}
export interface _ICommunityMember {
  id: string;
  communityId: string;
  userId: string;
  isAdmin: string;
  createdAt: string;
  community?: ICommunity;
}