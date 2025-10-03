import { IBadge, IUserRaw } from "../../../types";
import { badgeQuery, IBadgeNestedFields } from "../../user";

export interface IChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
  userId: string;
}
export interface IChangePasswordResponse {
  success: boolean;
}
export const changePasswordResponse:(keyof IChangePasswordResponse)[] = ["success"];
export interface IResetPasswordRequest extends ILoginRequest {}
export interface IResetPasswordResponse {
  success: boolean;
}
export const resetPasswordResponse:(keyof IResetPasswordResponse)[] = ["success"];
export interface IVerifyTokenRequest extends ISendOTPRequest {
  token: string;
}
export interface IVerifyTokenResponse {
  otpVerifiedToken: string;
}
export const verifyTokenResponse:(keyof IVerifyTokenResponse)[] = ["otpVerifiedToken"];
export interface ISendOTPRequest {
  phone?: string;
  email?: string;
}
export interface ISendOTPResponse {
  otp: string;
  success: boolean;
}
export const sendOTPResponse:(keyof ISendOTPResponse)[] = ["otp", "success"];
export interface ISignUpRequest {
  user: IUserRaw;
  password: string;
}
export interface ILoginRequest {
  phone?: string;
  email?: string;
  password: string;
}
export interface ILoginResponse {
  accessToken: string;
  userId: string;
}
export const loginResponse:(keyof ILoginResponse)[] = ["accessToken", "userId"];
export type ISignUpResponse = ILoginResponse & {
  badge?: IBadge;
}
export const signUpResponse:(keyof ISignUpResponse)[] = ["accessToken", "userId", "badge"];
export type ISignUpResultBluePrint = (keyof ISignUpResponse)[];
export interface ISignUpResponseNestedFields {
  badge: IBadgeNestedFields;
}
export const signUpResponseNestedFields:ISignUpResponseNestedFields = {
  badge: badgeQuery
}