import { BooleanLiteral } from "./setup";

export type IVoucherStatus = "active" | "expired" | "suspended"

export interface _IVoucherRedemption {
  id: string;
  voucherId: string;
  userId: string;
  redemptionCode: string;
  isRedeemed: BooleanLiteral
  createdAt: string;
}
export interface IVoucher {
  id: string;
  merchant: string;
  logo: string;
  title: string;
  description?: string;
  quantityCreated: number; // new
  balance: number; // new
  redemptionCost: number; // coins
  expiryDate: string;
  voucherStatus: IVoucherStatus;
  createdAt?: string;
  redemptionInstructions?: string;
  // removed redemptionCode
}