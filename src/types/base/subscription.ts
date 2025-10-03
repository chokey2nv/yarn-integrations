import { BooleanLiteral } from "./setup";

export interface ISubscription {
  id: string;
  userId: string;
  startDate: string;
  endDate: string;
  subPackageId: string;
  subPackage?: ISubPackage;
  autoRenew?: BooleanLiteral;
}
export type ISubPackageDuration = "months"|"years"
export interface ISubPackage {
  id: string;
  name: string;
  subPackageDuration: ISubPackageDuration;
  price: number;
  recommended?: BooleanLiteral;
  subPackageStatus: 'active' | 'inactive'
  coins: number;
}
export interface IDiscussionImpression {
  id: string;
  pollId: string;
  discussionId: string;
  userId: string;
  isLoved?: BooleanLiteral;
  isLiked?: BooleanLiteral;
}