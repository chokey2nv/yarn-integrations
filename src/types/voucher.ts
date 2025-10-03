import { _IVoucherRedemption, IUserLite } from "./base";

export interface IVoucherRedemption extends _IVoucherRedemption{
  userLite?: IUserLite;
}