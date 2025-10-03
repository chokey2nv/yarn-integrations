import {
  changePasswordResponse,
  IChangePasswordRequest,
  IChangePasswordResponse,
  ILoginRequest,
  ILoginResponse,
  IResetPasswordRequest,
  IResetPasswordResponse,
  ISendOTPRequest,
  ISendOTPResponse,
  ISignUpRequest,
  ISignUpResponse,
  IVerifyTokenRequest,
  IVerifyTokenResponse,
  loginResponse,
  resetPasswordResponse,
  sendOTPResponse,
  verifyTokenResponse
} from "./types/auth.type";
import { GraphQLClient, RequestOption } from "../../client";
import { authSchemas } from "./schemas";
import { gqlQueryStringBuilder } from "../../helpers/query";


export function createAuthService(client: GraphQLClient) {

  return {
    async sendOTP(
      input: ISendOTPRequest, 
      fetchFields?: {
        root?: (keyof ISendOTPResponse)[],
      },
      option?: RequestOption
    ): Promise<ISendOTPResponse | null> {
      const res = await client.request<{ sendOTP: ISendOTPResponse }, ISendOTPRequest>(
        authSchemas.sendOTP(
          gqlQueryStringBuilder<ISendOTPResponse>(
            fetchFields?.root ?? sendOTPResponse,
          )
        ),
        input,
        option
      )
      return res.data?.sendOTP ?? null
    },
    async login(
      input: ILoginRequest, 
      fetchFields?: {
        root?: (keyof ILoginResponse)[],
      },
      option?: RequestOption
    ): Promise<ILoginResponse | null> {
      const res = await client.request<{ login: ILoginResponse }, ILoginRequest>(
        authSchemas.login(
          gqlQueryStringBuilder<ILoginResponse>(
            fetchFields?.root ?? loginResponse,
          )
        ),
        input,
        option
      )
      return res.data?.login ?? null
    },
    async signUp(
      input: ISignUpRequest, 
      fetchFields?: {
        root?: (keyof ISignUpResponse)[],
      },
      option?: RequestOption
    ): Promise<ISignUpResponse|null> {
      const res = await client.request<{ signUp: ISignUpResponse }, ISignUpRequest>(
        authSchemas.signUp(
          gqlQueryStringBuilder<ISignUpResponse>(
            fetchFields?.root ?? loginResponse,
          )
        ),
        input,
        option
      )
      return res.data?.signUp ?? null
    },
    async verifyToken(
      input: IVerifyTokenRequest, 
      fetchFields?: {
        root?: (keyof IVerifyTokenResponse)[],
      },
      option?: RequestOption
    ): Promise<IVerifyTokenResponse|null> {
      const res = await client.request<{ verifyToken: IVerifyTokenResponse }, IVerifyTokenRequest>(
        authSchemas.signUp(
          gqlQueryStringBuilder<IVerifyTokenResponse>(
            fetchFields?.root ?? verifyTokenResponse,
          )
        ),
        input,
        option
      )
      return res.data?.verifyToken ?? null
    },
    async resetPassword(
      input: IResetPasswordRequest, 
      fetchFields?: {
        root?: (keyof IResetPasswordResponse)[],
      },
      option?: RequestOption
    ): Promise<IResetPasswordResponse|null> {
      const res = await client.request<{ resetPassword: IResetPasswordResponse }, IResetPasswordRequest>(
        authSchemas.signUp(
          gqlQueryStringBuilder<IResetPasswordResponse>(
            fetchFields?.root ?? resetPasswordResponse,
          )
        ),
        input,
        option
      )
      return res.data?.resetPassword ?? null
    },
    async changePassword(
      input: IChangePasswordRequest, 
      fetchFields?: {
        root?: (keyof IChangePasswordResponse)[],
      },
      option?: RequestOption
    ): Promise<IChangePasswordResponse|null> {
      const res = await client.request<{ changePassword: IChangePasswordResponse }, IChangePasswordRequest>(
        authSchemas.signUp(
          gqlQueryStringBuilder<IChangePasswordResponse>(
            fetchFields?.root ?? changePasswordResponse,
          )
        ),
        input,
        option
      )
      return res.data?.changePassword ?? null
    }
  }
}
