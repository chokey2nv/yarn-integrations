import { useLazyQuery, useMutation } from "@apollo/client";
import {
  IGetUserRequest,
  IGetUserResponse,
  IGetUserResponseBluePrint,
  IGetUsersRequest,
  IGetUsersResponse,
  IGetUsersResponseBluePrint,
  IMeResponse,
  IMeResponseBluePrint,
  userQuery,
  IGetFollowersResponse,
  IGetFollowersRequest,
  IGetFollowersResponseBluePrint,
  userLiteQuery,
  IFollowRequest,
  IFollowResponse,
  IUnfollowResponse,
  IUnfollowRequest,
  ICheckFollowRequest,
  ICheckFollowResponse,
  IGetUserBadgesRequest,
  IGetEarningAggregateRequest,
  IGetEarningAggregateResponse,
  IGetEarningAggregateResponseBluePrint,
  earningAggregateQuery,
  IGetVoucherCountResponse,
  IGetVoucherCountRequest,
  IGetGlobalRanksResponse,
  IGetGlobalRanksRequest,
  IGetUserBadgeCountResponse,
  IGetUserBadgeCountRequest,
  IUpdateUserResponse,
  IUpdateUserRequest,
  IUpdateUserResponseBluePrint,
  IUpdateCredentialResponse,
  IUpdateCredentialRequest,
  IGetNotificationsResponseBluePrint,
  IGetNotificationsResponse,
  IGetNotificationsRequest,
  notificationQuery,
  IGetNotificationsCountResponse,
  IGetNotificationsCountRequest,
  IUpdateNotificationResponse,
  IUpdateNotificationRequest,
  IUpdateNotificationResponseBluePrint,
  IGetFriendsCountResponse,
  IGetFriendsCountRequest,
  IGetUserBadgesResponse,
  IGetUserBadgesResponseBluePrint,
  userBadgeQuery,
  IGetUserGlobalRankResponse,
  IGetUserGlobalRankRequest,
  userRankQuery,
  IGetUserGlobalRankResponseBluePrint,
  IGetFollowsByUserResponse,
  IGetFollowsByUserRequest,
  IGetFollowsResponse,
  IGetFollowsRequest,
  IGetFollowsByUserResponseBluePrint,
  followQuery,
  IGetUserSuggestionResponse,
  IGetUserSuggestionRequest,
  IGetUserSuggestionResponseBluePrint,
  userSuggestionQuery,
  ICreateUserSuggestionRequest,
  ICreateUserSuggestionResponse,
  ICreateUserSuggestionResponseBluePrint,
  ISyncUserSuggestionResponse,
  ISyncUserSuggestionRequest,
  IGetUserUserSuggestionsRequest,
  IGetUserUserSuggestionsResponse,
  IGetUserUserSuggestionsResponseBluePrint,
  IGetFollowingsResponseBluePrint,
  IGetGlobalRanksResponseBluePrint,
  IGetBadgeRequest,
  IGetBadgeResponse,
  IGetBadgeResponseBluePrint,
  badgeQuery,
  IGetBadgesResponse,
  IGetBadgesResponseBluePrint,
  IGetBadgesRequest,
  ICreateUserBadgeResponse,
  ICreateUserBadgeRequest,
  ICreateUserBadgeResponseBluePrint,
  IGetNotificationsByCategoryResponse,
  IGetNotificationsByCategoryRequest,
  userNotificationSettingQuery,
  IGetUserNotificationSettingResponse,
  IGetUserNotificationSettingResponseBluePrint,
  IGetUserNotificationSettingRequest,
  IUpdateUserNotificationSettingResponse,
  IUpdateUserNotificationSettingResponseBluePrint,
  IUpdateUserNotificationSettingRequest,
  IAddUserNotificationSettingResponse,
  IAddUserNotificationSettingRequest,
  IAddUserNotificationSettingResponseBluePrint
} from "./types";
import {  schema } from "./schemas/user.schema";
import { gqlQueryStringBuilder } from "@/utils/funcs";

export function creat() {
  const [me] = useLazyQuery<{ me: IMeResponse }>(
    schema.me(
      gqlQueryStringBuilder<IMeResponse, IMeResponseBluePrint>(
        ["user", "userNotificationSetting"], {
          user: userQuery,
          userNotificationSetting: userNotificationSettingQuery
        }
      )
    )
  );
  const [getUserGlobalRank] = useLazyQuery<{getUserGlobalRank: IGetUserGlobalRankResponse}, IGetUserGlobalRankRequest>(
    schema.getUserGlobalRank(gqlQueryStringBuilder<IGetUserGlobalRankResponse, IGetUserGlobalRankResponseBluePrint>(
      ["userRank"], {
        userRank: userRankQuery,
        userLite: userLiteQuery,
      }
    ))
  )

  // User
  const [getUser] = useLazyQuery<{getUser: IGetUserResponse}, IGetUserRequest>(
    schema.getUser(gqlQueryStringBuilder<IGetUserResponse, IGetUserResponseBluePrint>(
      ["user"], {
        user: userQuery,
      }
    ))
  )
  const [getUsers] = useLazyQuery<{ getUsers: IGetUsersResponse }, IGetUsersRequest>(
    schema.getUsers(
      gqlQueryStringBuilder<IGetUsersResponse, IGetUsersResponseBluePrint>(
        ["users"], {users: userQuery}
      )
    )
  );
  const [updateUser] = useMutation<{ updateUser: IUpdateUserResponse }, IUpdateUserRequest>(
    schema.updateUser(
      gqlQueryStringBuilder<IUpdateUserResponse, IUpdateUserResponseBluePrint>(
        ["user"], {
          user: userQuery,
        }
      )
    )
  )
  const [updateCredential] = useMutation<{ updateCredential: IUpdateCredentialResponse }, IUpdateCredentialRequest>(
    schema.updateCredential(
      gqlQueryStringBuilder<IUpdateCredentialResponse>(
        ["success"], 
      )
    )
  )

  const [getFollowers] = useLazyQuery<{ getFollowers: IGetFollowersResponse }, IGetFollowersRequest>(
      schema.getFollowers(
          gqlQueryStringBuilder<IGetFollowersResponse, IGetFollowersResponseBluePrint>(
              ["followers"], {
                followers: followQuery,
                userA: userLiteQuery,
                userB: userLiteQuery,
              }
          )
      )
  )
  const [getFollowings] = useLazyQuery<{ getFollowings: IGetFollowersResponse }, IGetFollowersRequest>(
      schema.getFollowings(
          gqlQueryStringBuilder<IGetFollowersResponse, IGetFollowingsResponseBluePrint>(
              ["followings"], {
                followings: followQuery,
                userA: userLiteQuery,
                userB: userLiteQuery,
              }
          )
      )
  )
  const [getFollowsByUser] = useLazyQuery<{ getFollowsByUser: IGetFollowsByUserResponse }, IGetFollowsByUserRequest>(
      schema.getFollowsByUser(
          gqlQueryStringBuilder<IGetFollowsByUserResponse, IGetFollowsByUserResponseBluePrint>(
              ["follows"], {
                follows: followQuery,
                userA: userLiteQuery,
                userB: userLiteQuery,
              }
          )
      )
  )

  // remove this if not used
  const [getFollows] = useLazyQuery<{ getFollows: IGetFollowsResponse }, IGetFollowsRequest>(
      schema.getFollows(
          gqlQueryStringBuilder<IGetFollowsResponse, IGetFollowsByUserResponseBluePrint>(
              ["follows"], {
                follows: followQuery,
                userA: userLiteQuery,
                userB: userLiteQuery,
              }
          )
      )
  )
  const [getFriendsCount] = useLazyQuery<{ getFriendsCount: IGetFriendsCountResponse }, IGetFriendsCountRequest>(
      schema.getFriendsCount
  )
  const [follow] = useMutation<{ follow: IFollowResponse }, IFollowRequest>(
    schema.follow(gqlQueryStringBuilder<IFollowResponse>(
      ["success"]
    ))
  )
  const [unfollow] = useMutation<{ unfollow: IUnfollowResponse }, IUnfollowRequest>(
    schema.unfollow(gqlQueryStringBuilder<IUnfollowResponse>(["success"]))
  )
  const [checkFollow] = useLazyQuery<{ checkFollow: ICheckFollowResponse }, ICheckFollowRequest>(
    schema.checkFollow(gqlQueryStringBuilder<ICheckFollowResponse>(
      ["isFollowing"]
    ))
  )
  const [getBadge] = useLazyQuery<{ getBadge: IGetBadgeResponse }, IGetBadgeRequest>(
    schema.getBadge(gqlQueryStringBuilder<IGetBadgeResponse, IGetBadgeResponseBluePrint>(
      ["badge"], {
        badge: badgeQuery
      }
    ))
  )
  const [getBadges] = useLazyQuery<{ getBadges: IGetBadgesResponse }, IGetBadgesRequest>(
    schema.getBadges(gqlQueryStringBuilder<IGetBadgesResponse, IGetBadgesResponseBluePrint>(
      ["badges"], {
        badges: badgeQuery
      }
    ))
  )
  const [getUserBadges] = useLazyQuery<{ getUserBadges: IGetUserBadgesResponse }, IGetUserBadgesRequest>(
    schema.getUserBadges(gqlQueryStringBuilder<IGetUserBadgesResponse, IGetUserBadgesResponseBluePrint>(
      ["userBadges"], {
        userBadges: userBadgeQuery,
        badge: badgeQuery
      }
    ))
  )
  const [getUserBadgeCount] = useLazyQuery<{ getUserBadgeCount: IGetUserBadgeCountResponse }, IGetUserBadgeCountRequest>(
    schema.getUserBadgeCount(gqlQueryStringBuilder<IGetUserBadgeCountResponse>(
      ["count"]
    ))
  )
  const [createUserBadge] = useMutation<{ createUserBadge: ICreateUserBadgeResponse }, ICreateUserBadgeRequest>(
    schema.createUserBadge(gqlQueryStringBuilder<ICreateUserBadgeResponse, ICreateUserBadgeResponseBluePrint>(
      ["userBadge"], {
        userBadge: userBadgeQuery,
        badge: badgeQuery,
      }
    ))
  )
  const [getEarningAggregate] = useLazyQuery<{ getEarningAggregate: IGetEarningAggregateResponse }, IGetEarningAggregateRequest>(
    schema.getEarningAggregate(gqlQueryStringBuilder<IGetEarningAggregateResponse, IGetEarningAggregateResponseBluePrint>(
      ["earningAggregates"], {
        earningAggregates: earningAggregateQuery
      }
    ))
  )
  const [getVoucherRedemptionsCount] = useLazyQuery<{ getVoucherRedemptionsCount: IGetVoucherCountResponse }, IGetVoucherCountRequest>(
    schema.getVoucherRedemptionsCount(gqlQueryStringBuilder<IGetVoucherCountResponse>(
      ["count"]
    ))
  )
  const [getRankedUsers] = useLazyQuery<{ getRankedUsers: IGetGlobalRanksResponse }, IGetGlobalRanksRequest>(
    schema.getRankedUsers(gqlQueryStringBuilder<IGetGlobalRanksResponse, IGetGlobalRanksResponseBluePrint>(
      ["userRanks"], {
        userRanks: userRankQuery,
        userLite: userLiteQuery,
      }
    ))
  )
  const [addUserNotificationSetting] = useMutation<{ addUserNotificationSetting: IAddUserNotificationSettingResponse }, IAddUserNotificationSettingRequest>(
    schema.addUserNotificationSetting(gqlQueryStringBuilder<IAddUserNotificationSettingResponse, IAddUserNotificationSettingResponseBluePrint>(
      ["userNotificationSetting"], {
        userNotificationSetting: userNotificationSettingQuery
      }
    ))
  )
  const [updateUserNotificationSetting] = useMutation<{ updateUserNotificationSetting: IUpdateUserNotificationSettingResponse }, IUpdateUserNotificationSettingRequest>(
    schema.updateUserNotificationSetting(gqlQueryStringBuilder<IUpdateUserNotificationSettingResponse, IUpdateUserNotificationSettingResponseBluePrint>(
      ["userNotificationSetting"], {
        userNotificationSetting: userNotificationSettingQuery
      }
    ))
  )
  const [getUserNotificationSetting] = useLazyQuery<{ getUserNotificationSetting: IGetUserNotificationSettingResponse }, IGetUserNotificationSettingRequest>(
    schema.getUserNotificationSetting(gqlQueryStringBuilder<IGetUserNotificationSettingResponse, IGetUserNotificationSettingResponseBluePrint>(
      ["userNotificationSetting"], {
        userNotificationSetting: userNotificationSettingQuery
      }
    ))
  )
  const [getNotificationsByCategory] = useLazyQuery<{ getNotificationsByCategory: IGetNotificationsByCategoryResponse }, IGetNotificationsByCategoryRequest>(
    schema.getNotificationsByCategory(gqlQueryStringBuilder<IGetNotificationsByCategoryResponse, IGetNotificationsResponseBluePrint>(
      ["notifications"], {
        notifications: notificationQuery
      }
    ))
  )
  const [getNotifications] = useLazyQuery<{ getNotifications: IGetNotificationsResponse }, IGetNotificationsRequest>(
    schema.getNotifications(gqlQueryStringBuilder<IGetNotificationsResponse, IGetNotificationsResponseBluePrint>(
      ["notifications"], {
        notifications: notificationQuery
      }
    ))
  )
  const [getNotificationCount] = useLazyQuery<{ getNotificationCount: IGetNotificationsCountResponse }, IGetNotificationsCountRequest>(
    schema.getNotificationCount(gqlQueryStringBuilder<IGetNotificationsCountResponse>(
      ["count"], 
    ))
  )
  const [updateNotification] = useMutation<{ updateNotification: IUpdateNotificationResponse }, IUpdateNotificationRequest>(
    schema.updateNotification(gqlQueryStringBuilder<IUpdateNotificationResponse, IUpdateNotificationResponseBluePrint>(
      ["notification"], {
        notification: notificationQuery
      }
    ))
  )
  const [getUserSuggestion] = useLazyQuery<{ getUserSuggestion: IGetUserSuggestionResponse }, IGetUserSuggestionRequest>(
    schema.getUserSuggestion(gqlQueryStringBuilder<IGetUserSuggestionResponse, IGetUserSuggestionResponseBluePrint>(
      ["userSuggestion"], {
        userSuggestion: userSuggestionQuery
      }
    ))
  )
  const [getUserUserSuggestions] = useLazyQuery<{ getUserUserSuggestions: IGetUserUserSuggestionsResponse }, IGetUserUserSuggestionsRequest>(
    schema.getUserUserSuggestions(gqlQueryStringBuilder<IGetUserUserSuggestionsResponse, IGetUserUserSuggestionsResponseBluePrint>(
      ["userLites"], {
        userLites: userLiteQuery
      }
    ))
  )
  const [createUserSuggestion] = useMutation<{ createUserSuggestion: ICreateUserSuggestionResponse }, ICreateUserSuggestionRequest>(
    schema.createUserSuggestion(gqlQueryStringBuilder<ICreateUserSuggestionResponse, ICreateUserSuggestionResponseBluePrint>(
      ["userSuggestion"], {
        userSuggestion: userSuggestionQuery
      }
    ))
  )
  const [syncUserSuggestion] = useMutation<{ syncUserSuggestion: ISyncUserSuggestionResponse }, ISyncUserSuggestionRequest>(
    schema.syncUserSuggestion(gqlQueryStringBuilder<ISyncUserSuggestionResponse>(
      ["totalSuggestions", "userId"]
    ))
  )


  return {
    syncUserSuggestion, getUserUserSuggestions, getUserSuggestion, createUserSuggestion,
    addUserNotificationSetting, updateUserNotificationSetting, getUserNotificationSetting,
    getNotificationsByCategory, getNotifications, updateNotification, getNotificationCount,
    getVoucherRedemptionsCount, getRankedUsers, 
    getBadge, getBadges,
    getUserBadges, getUserBadgeCount, createUserBadge, getEarningAggregate,
    checkFollow, getFollowers, getFollowsByUser, getFollows, getFollowings,
    getFriendsCount, follow, unfollow,
    getUserGlobalRank,
    getUser, getUsers, updateCredential, me,  updateUser,
  };
}
