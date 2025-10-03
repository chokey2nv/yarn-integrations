import { _IChatMessageRaw, _ICommunityMember, IUserLite } from "./base";

export interface ICommunityMember extends _ICommunityMember {
  user?: IUserLite;
}
export interface IChatMessageRaw extends _IChatMessageRaw{
  userLite?: IUserLite;
}
export interface IChatMessage extends IChatMessageRaw {
  id: string
}