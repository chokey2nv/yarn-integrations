import {
  IGetUserRequest,
  IGetUserResponse,
  IGetUsersRequest,
  IGetUsersResponse,
  IMeResponse,
  IGetFollowersResponse,
  IGetFollowersRequest,
  IFollowRequest,
  IFollowResponse,
  IUnfollowResponse,
  IUnfollowRequest,
  ICheckFollowRequest,
  ICheckFollowResponse,
  IUpdateUserResponse,
  IUpdateUserRequest,
  IUpdateCredentialResponse,
  IUpdateCredentialRequest,
  IGetFriendsCountResponse,
  IGetFriendsCountRequest,
  IGetUserGlobalRankResponse,
  IGetUserGlobalRankRequest,
  IGetFollowsByUserResponse,
  IGetFollowsByUserRequest,
  IGetFollowsResponse,
  IGetFollowsRequest,
  IMeResponseNestedFields,
  meResponseNestedFields,
  IGetUserGlobalRankResponseNestedFields,
  getUserGlobalRankResponseNestedFields,
  IGetUserResponseNestedFields,
  getUserResponseNestedFields,
  getUserResponse,
  IGetUsersResponseNestedFields,
  getUsersResponse,
  getUsersResponseNestedFields,
  IUpdateUserResponseNestedFields,
  updateUserResponse,
  updateUserResponseNestedFields,
  updateCredentialResponse,
  IGetFollowersResponseNestedFields,
  meResponse,
  getUserGlobalRankResponse,
  getFollowersResponse,
  IGetFollowsByUserResponseNestedFields,
  getFollowsByUserResponse,
  getFollowersResponseNestedFields,
  getFollowsByUserResponseNestedFields,
  IGetFollowsResponseNestedFields,
  getFollowsResponse,
  getFollowsResponseNestedFields,
  getFriendsCountResponse,
  followResponse,
  unfollowResponse,
  checkFollowResponse,
  IGetRankedUsersRequest,
  IGetRankedUsersResponse,
  IGetRankedUsersResponseNestedFields,
  getRankedUsersResponse,
  getRankedUsersResponseNestedFields,
  IGetUserSuggestionRequest,
  IGetUserSuggestionResponse,
  IGetUserSuggestionResponseNestedFields,
  getUserSuggestionResponse,
  getUserSuggestionResponseNestedFields,
  IGetUserUserSuggestionsRequest,
  IGetUserUserSuggestionsResponse,
  IGetUserUserSuggestionsResponseNestedFields,
  getUserUserSuggestionsResponse,
  getUserUserSuggestionsResponseNestedFields,
  ICreateUserSuggestionRequest,
  ICreateUserSuggestionResponse,
  ICreateUserSuggestionResponseNestedFields,
  createUserSuggestionResponse,
  createUserSuggestionResponseNestedFields,
  ISyncUserSuggestionRequest,
  ISyncUserSuggestionResponse,
  syncUserSuggestionResponse
} from "./types";
import {  userSchemas } from "./schemas/user.schema";
import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";

export function createUserService(client: GraphQLClient) {

  return {
    
    async me(
      fetchFields?: {
        root?: (keyof IMeResponse)[],
        nestedFields?: IMeResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IMeResponse | null> {
      const res = await client.request<{ me: IMeResponse }>(
        userSchemas.me(
          gqlQueryStringBuilder<IMeResponse, IMeResponseNestedFields>(
            fetchFields?.root ?? meResponse,
            fetchFields?.nestedFields ?? meResponseNestedFields
          )
        ),
        null,
        option
      )
      return res.data?.me ?? null
    },
    async getUserGlobalRank(
      input: IGetUserGlobalRankRequest,
      fetchFields?: {
        root?: (keyof IGetUserGlobalRankResponse)[],
        nestedFields?: IGetUserGlobalRankResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IGetUserGlobalRankResponse | null> {
      const res = await client.request<{ getUserGlobalRank: IGetUserGlobalRankResponse }, IGetUserGlobalRankRequest>(
        userSchemas.getUserGlobalRank(
          gqlQueryStringBuilder<IGetUserGlobalRankResponse, IGetUserGlobalRankResponseNestedFields>(
            fetchFields?.root ?? getUserGlobalRankResponse,
            fetchFields?.nestedFields ?? getUserGlobalRankResponseNestedFields
          )
        ),
        input,
        option
      )
      return res.data?.getUserGlobalRank ?? null
    },
    async getUser(
      input: IGetUserRequest,
      fetchFields?: {
        root?: (keyof IGetUserResponse)[],
        nestedFields?: IGetUserResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IGetUserResponse | null> {
      const res = await client.request<{ getUser: IGetUserResponse }, IGetUserRequest>(
        userSchemas.getUser(
          gqlQueryStringBuilder<IGetUserResponse, IGetUserResponseNestedFields>(
            fetchFields?.root ?? getUserResponse,
            fetchFields?.nestedFields ?? getUserResponseNestedFields
          )
        ),
        input,
        option
      )
      return res.data?.getUser ?? null
    },
    async getUsers(
      input: IGetUsersRequest,
      fetchFields?: {
        root?: (keyof IGetUsersResponse)[],
        nestedFields?: IGetUsersResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IGetUsersResponse | null> {
      const res = await client.request<{ getUsers: IGetUsersResponse }, IGetUsersRequest>(
        userSchemas.getUsers(
          gqlQueryStringBuilder<IGetUsersResponse, IGetUsersResponseNestedFields>(
            fetchFields?.root ?? getUsersResponse,
            fetchFields?.nestedFields ?? getUsersResponseNestedFields
          )
        ),
        input,
        option
      )
      return res.data?.getUsers ?? null
    },
    async updateUser(
      input: IUpdateUserRequest,
      fetchFields?: {
        root?: (keyof IUpdateUserResponse)[],
        nestedFields?: IUpdateUserResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IUpdateUserResponse | null> {
      const res = await client.request<{ updateUser: IUpdateUserResponse }, IUpdateUserRequest>(
        userSchemas.updateUser(
          gqlQueryStringBuilder<IUpdateUserResponse, IUpdateUserResponseNestedFields>(
            fetchFields?.root ?? updateUserResponse,
            fetchFields?.nestedFields ?? updateUserResponseNestedFields
          )
        ),
        input,
        option
      )
      return res.data?.updateUser ?? null
    },
    async updateCredential(
      input: IUpdateCredentialRequest,
      fetchFields?: {
        root?: (keyof IUpdateCredentialResponse)[],
      },
      option?: RequestOption
    ): Promise<IUpdateCredentialResponse | null> {
      const res = await client.request<{ updateCredential: IUpdateCredentialResponse }, IUpdateCredentialRequest>(
        userSchemas.updateCredential(
          gqlQueryStringBuilder<IUpdateCredentialResponse>(
            fetchFields?.root ?? updateCredentialResponse,
          )
        ),
        input,
        option
      )
      return res.data?.updateCredential ?? null
    },
    async getFollowers(
      input: IGetFollowersRequest,
      fetchFields?: {
        root?: (keyof IGetFollowersResponse)[],
        nestedFields?: IGetFollowersResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IGetFollowersResponse | null> {
      const res = await client.request<{ getFollowers: IGetFollowersResponse }, IGetFollowersRequest>(
        userSchemas.getFollowers(
          gqlQueryStringBuilder<IGetFollowersResponse, IGetFollowersResponseNestedFields>(
            fetchFields?.root ?? getFollowersResponse,
            fetchFields?.nestedFields ?? getFollowersResponseNestedFields
          )
        ),
        input,
        option
      )
      return res.data?.getFollowers ?? null
    },
    async getFollowsByUser(
      input: IGetFollowsByUserRequest,
      fetchFields?: {
        root?: (keyof IGetFollowsByUserResponse)[],
        nestedFields?: IGetFollowsByUserResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IGetFollowsByUserResponse | null> {
      const res = await client.request<{ getFollowsByUser: IGetFollowsByUserResponse }, IGetFollowsByUserRequest>(
        userSchemas.getFollowsByUser(
          gqlQueryStringBuilder<IGetFollowsByUserResponse, IGetFollowsByUserResponseNestedFields>(
            fetchFields?.root ?? getFollowsByUserResponse,
            fetchFields?.nestedFields ?? getFollowsByUserResponseNestedFields
          )
        ),
        input,
        option
      )
      return res.data?.getFollowsByUser ?? null
    },
    /* async getFollowings(
      input: IGetFollowingsRequest,
      fetchFields?: {
        root?: (keyof IGetFollowingsResponse)[],
        nestedFields?: IGetFollowingsResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IGetFollowingsResponse | null> {
      const res = await client.request<{ getFollowings: IGetFollowingsResponse }, IGetFollowingsRequest>(
        userSchemas.getFollowings(
          gqlQueryStringBuilder<IGetFollowingsResponse, IGetFollowingsResponseNestedFields>(
            fetchFields?.root ?? getFollowingsResponse,
          )
        ),
        input,
        option
      )
      return res.data?.getFollowings ?? null
    }, */
    async getFollows(
      input: IGetFollowsRequest,
      fetchFields?: {
        root?: (keyof IGetFollowsResponse)[],
        nestedFields?: IGetFollowsResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IGetFollowsResponse | null> {
      const res = await client.request<{ getFollows: IGetFollowsResponse }, IGetFollowsRequest>(
        userSchemas.getFollows(
          gqlQueryStringBuilder<IGetFollowsResponse, IGetFollowsResponseNestedFields>(
            fetchFields?.root ?? getFollowsResponse,
            fetchFields?.nestedFields ?? getFollowsResponseNestedFields
          )
        ),
        input,
        option
      )
      return res.data?.getFollows ?? null
    },
    async getFriendsCount(
      input: IGetFriendsCountRequest,
      fetchFields?: {
        root?: (keyof IGetFriendsCountResponse)[],
      },
      option?: RequestOption
    ): Promise<IGetFriendsCountResponse | null> {
      const res = await client.request<{ getFriendsCount: IGetFriendsCountResponse }, IGetFriendsCountRequest>(
        userSchemas.getFriendsCount(
          gqlQueryStringBuilder<IGetFriendsCountResponse>(
            fetchFields?.root ?? getFriendsCountResponse,
          )
        ),
        input,
        option
      )
      return res.data?.getFriendsCount ?? null
    },

    async follow(
      input: IFollowRequest,
      fetchFields?: {
        root?: (keyof IFollowResponse)[],
      },
      option?: RequestOption
    ): Promise<IFollowResponse | null> {
      const res = await client.request<{ follow: IFollowResponse }, IFollowRequest>(
        userSchemas.follow(
          gqlQueryStringBuilder<IFollowResponse>(
            fetchFields?.root ?? followResponse,
          )
        ),
        input,
        option
      )
      return res.data?.follow ?? null
    },
    async unfollow(
      input: IUnfollowRequest,
      fetchFields?: {
        root?: (keyof IUnfollowResponse)[],
      },
      option?: RequestOption
    ): Promise<IUnfollowResponse | null> {
      const res = await client.request<{ unfollow: IUnfollowResponse }, IUnfollowRequest>(
        userSchemas.unfollow(
          gqlQueryStringBuilder<IUnfollowResponse>(
            fetchFields?.root ?? unfollowResponse,
          )
        ),
        input,
        option
      )
      return res.data?.unfollow ?? null
    },
    async checkFollow(
      input: ICheckFollowRequest,
      fetchFields?: {
        root?: (keyof ICheckFollowResponse)[],
      },
      option?: RequestOption
    ): Promise<ICheckFollowResponse | null> {
      const res = await client.request<{ checkFollow: ICheckFollowResponse }, ICheckFollowRequest>(
        userSchemas.checkFollow(
          gqlQueryStringBuilder<ICheckFollowResponse>(
            fetchFields?.root ?? checkFollowResponse,
          )
        ),
        input,
        option
      )
      return res.data?.checkFollow ?? null
    },
    async getRankedUsers(
      input: IGetRankedUsersRequest,
      fetchFields?: {
        root?: (keyof IGetRankedUsersResponse)[],
        nestedFields?: IGetRankedUsersResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IGetRankedUsersResponse | null> {
      const res = await client.request<{ getRankedUsers: IGetRankedUsersResponse }, IGetRankedUsersRequest>(
        userSchemas.getRankedUsers(
          gqlQueryStringBuilder<IGetRankedUsersResponse, IGetRankedUsersResponseNestedFields>(
            fetchFields?.root ?? getRankedUsersResponse,
            fetchFields?.nestedFields ?? getRankedUsersResponseNestedFields
          )
        ),
        input,
        option
      )
      return res.data?.getRankedUsers ?? null
    },
    async getUserSuggestion(
      input: IGetUserSuggestionRequest,
      fetchFields?: {
        root?: (keyof IGetUserSuggestionResponse)[],
        nestedFields?: IGetUserSuggestionResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IGetUserSuggestionResponse | null> {
      const res = await client.request<{ getUserSuggestion: IGetUserSuggestionResponse }, IGetUserSuggestionRequest>(
        userSchemas.getUserSuggestion(
          gqlQueryStringBuilder<IGetUserSuggestionResponse, IGetUserSuggestionResponseNestedFields>(
            fetchFields?.root ?? getUserSuggestionResponse,
            fetchFields?.nestedFields ?? getUserSuggestionResponseNestedFields
          )
        ),
        input,
        option
      )
      return res.data?.getUserSuggestion ?? null
    },
    async getUserUserSuggestions(
      input: IGetUserUserSuggestionsRequest,
      fetchFields?: {
        root?: (keyof IGetUserUserSuggestionsResponse)[],
        nestedFields?: IGetUserUserSuggestionsResponseNestedFields
      },
      option?: RequestOption
    ): Promise<IGetUserUserSuggestionsResponse | null> {
      const res = await client.request<{ getUserUserSuggestions: IGetUserUserSuggestionsResponse }, IGetUserUserSuggestionsRequest>(
        userSchemas.getUserUserSuggestions(
          gqlQueryStringBuilder<IGetUserUserSuggestionsResponse, IGetUserUserSuggestionsResponseNestedFields>(
            fetchFields?.root ?? getUserUserSuggestionsResponse,
            fetchFields?.nestedFields ?? getUserUserSuggestionsResponseNestedFields
          )
        ),
        input,
        option
      )
      return res.data?.getUserUserSuggestions ?? null
    },
    async createUserSuggestion(
      input: ICreateUserSuggestionRequest,
      fetchFields?: {
        root?: (keyof ICreateUserSuggestionResponse)[],
        nestedFields?: ICreateUserSuggestionResponseNestedFields
      },
      option?: RequestOption
    ): Promise<ICreateUserSuggestionResponse | null> {
      const res = await client.request<{ createUserSuggestion: ICreateUserSuggestionResponse }, ICreateUserSuggestionRequest>(
        userSchemas.createUserSuggestion(
          gqlQueryStringBuilder<ICreateUserSuggestionResponse, ICreateUserSuggestionResponseNestedFields>(
            fetchFields?.root ?? createUserSuggestionResponse,
            fetchFields?.nestedFields ?? createUserSuggestionResponseNestedFields
          )
        ),
        input,
        option
      )
      return res.data?.createUserSuggestion ?? null
    },
    async syncUserSuggestion(
      input: ISyncUserSuggestionRequest,
      fetchFields?: {
        root?: (keyof ISyncUserSuggestionResponse)[],
      },
      option?: RequestOption
    ): Promise<ISyncUserSuggestionResponse | null> {
      const res = await client.request<{ syncUserSuggestion: ISyncUserSuggestionResponse }, ISyncUserSuggestionRequest>(
        userSchemas.syncUserSuggestion(
          gqlQueryStringBuilder<ISyncUserSuggestionResponse>(
            fetchFields?.root ?? syncUserSuggestionResponse,
          )
        ),
        input,
        option
      )
      return res.data?.syncUserSuggestion ?? null
    },
  }
}