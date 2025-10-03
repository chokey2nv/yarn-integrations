import { _IReport, IChallenge, ICommunity, IUserLite } from "./base";
import { IPoll } from "./poll";

export interface IReport extends _IReport{
  community?: ICommunity;
  challenge?: IChallenge;
  poll?: IPoll;

  userLite?: IUserLite;
}