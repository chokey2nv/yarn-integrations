import { _IDiscussion, _IPoll, _IPollVote, IUserLite } from "./base";

export interface IPoll extends _IPoll {
  owner: IUserLite;
  pollDiscussions?: IDiscussion[]
}
export interface IPollVote extends _IPollVote{
  userLite?: IUserLite
}
export interface IDiscussion extends _IDiscussion{
  userLite?: IUserLite;
}
export interface IPollsResponse {
  polls: IPoll[],
  count: number;
}