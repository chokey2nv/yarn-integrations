import { BooleanLiteral } from "./setup";
export type IPollStatus = "open" | "closed" // | "mine"




export interface ITxSummary {
  category: string;
  totalAmount: number;
  transactionCount: number;
}


// challenge


// vouchers

export type ITransactionType = "withdrawal" | "stake" | "transfer" | "refund" | "stake_reward" | "deposit"|"subscription"

export interface ITransaction {
  id: string;
  description?: string;
  amount?: number;
  transactionType: ITransactionType
  toId?: string;
  fromId?: string;
  createdAt: string;
}

export type ICategoryShortName = "sport"
  | "education"
  | "gaming"
  | "politics"
  | "entertainment"
  | "lifestyle"
  | "health_fitness"
  | "technology"
  | "business_finance"

export interface Tag {
  id: string;
  label: string;
}
export type CategoryID = "politics"|"sports"|"entertainment"|"health"|"education"|"science"|"arts"|
"business"|"lifestyle"|"technology"|"gaming"|"education"
export interface Category {
  id: CategoryID;
  shortname: ICategoryShortName;
  title: string;
  tags: Tag[];
}
export interface IEarningAggregate {
  catShortname: ICategoryShortName;
  userId: string;
  coins: number;
  categoryName?: string;
}
export interface IEarning {
  id: string;
  catShortname: ICategoryShortName;
  userId: string;
  pollId: string;
  coins: number;
  categoryName?: string;
}

export interface IDiscussionRaw {
  pollId: string;
  text: string;
  isRoot?: BooleanLiteral
  repliedToId?: string;
}
export interface _IDiscussion extends IDiscussionRaw{
  id: string;
  createdAt: string;
  replyIds?: string[];
  userId: string;
  likes: number;
}

export interface IPollOption {
  id: string;
  text: string;
  votes?: number;
  percentage?: number;
  image?: any;
}
export interface IPollRaw {
  title: string;
  description?: string;
  image?: string;
  category?: string
  pollStatus: IPollStatus
  question: string;
  pollOptions: IPollOption[];
  multipleAnswer?: BooleanLiteral;
  tag?: string;
  start: string;
  end: string;
  reward?: number;
  isChallenge: BooleanLiteral;
  challengeId?: string;
  isCommunity: BooleanLiteral;
  isSystem: BooleanLiteral;
  communityId?: string;
}
export interface IPollImpression {
  id: string;
  pollImpressionOption: IPollImpressionOption;
  userId: string;
  pollId: string;
  createdAt: string;
}
export type IPollImpressionOption = "like" | "dislike";
export interface IPollStat {
  totalVotes: number;
  discussionCount: number;
  positiveImpressions: number;
  negativeImpression: number;
}
export interface _IPoll extends IPollRaw {
  id: string;
  createdAt: string;
  ownerId: string;
  pollDiscussionIds?: string[]
  coinBalance: number; // new
}
export interface _IPollVote {
  id: string;
  pollId: string;
  optionId: string;
  userId: string;
  createdAt: string;
}
