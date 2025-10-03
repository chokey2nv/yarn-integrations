import { _IChallengeRole, IUserLite } from "./base";

export interface IChallengeRole extends _IChallengeRole {
  user?: IUserLite;
}
export interface IChallengeMember {
  userLite?: IUserLite;
}
