import { useUserService } from "./service";

import { ApiResponse, IBadge, IEarningAggregate, IFollow, IUserNotification, IUser, IUserBadge, IUserLite, IUserRank, IUserSuggestion, IUserNotificationSetting } from "@/utils";
import { ICheckFollowRequest, ICreateUserSuggestionRequest, IFollowRequest, IGetUserBadgeCountRequest, IGetUserBadgesRequest, IGetEarningAggregateRequest, 
  IGetFollowersRequest, IGetFollowsByUserRequest, IGetFollowsRequest, IGetFriendsCountRequest, IGetGlobalRanksRequest, IGetNotificationsCountRequest, IGetNotificationsRequest, IGetUserGlobalRankRequest, IGetUserRequest, IGetUsersRequest, IGetUserSuggestionRequest, IGetUserUserSuggestionsRequest, IGetVoucherCountRequest, ISyncUserSuggestionRequest, ISyncUserSuggestionResponse, IUnfollowRequest, 
  IUpdateCredentialRequest, 
  IUpdateNotificationRequest, 
  IUpdateUserRequest, 
  IGetBadgesRequest,
  IGetBadgeRequest,
  ICreateUserBadgeRequest,
  IGetNotificationsByCategoryRequest,
  IGetUserNotificationSettingRequest,
  IUpdateUserNotificationSettingRequest,
  IAddUserNotificationSettingRequest} from "./types";
import useNotification from "@/store/notification_store";
import { useCommerce } from "../commerce/commerce";
import useUserStore from "@/store/user_store";

export function useUser() {
  const userService = useUserService();
  const notification = useNotification()
  const commerceHook = useCommerce();
  const { setLoaded, setLoginExpired, setUser, setNotificationSetting } = useUserStore();

   const handleRequest = async <T,O>(requestFn: (input: T) => Promise<ApiResponse<O>>, input: T): Promise<O|undefined> => {
      const { data, success, err } = await requestFn(input);
      if (!success) {
          console.info({ Name: requestFn.name, err })
          notification.show({
              type: "error",
              message: err?.message || "An error occurred",
          });
          console.info({ func: requestFn.name, err })
          return undefined;
      }
      return data ?? undefined
  };

  const me = async (): Promise<ApiResponse<boolean>> => {
    try {
      const { data, error } = await userService.me();
      setLoaded(true);
      if (error) {        
        throw error;
      }
      if (data?.me?.user) {
        const subs = await commerceHook.getUserActiveSubscriptions({ userId: data.me.user.id })
        const user = {...data.me.user}
        const userNotificationSetting = {...data.me.userNotificationSetting}
        if(subs && subs.length > 0){
          user.onActivePremium = "true"
        }
        if(user){
          setUser(user);
        }
        if(userNotificationSetting){
          setNotificationSetting(userNotificationSetting);
        }
        setLoginExpired(false);
        return {
          success: true,
          data: true,
        };
      }
      return {
        success: false,
        data: false,
        err: new Error("User not found")
      }
    } catch (err) {
      return {
        err: (err as Error),
        success: false
      };
    }
  };

  const getUserGlobalRank = async (input: IGetUserGlobalRankRequest): Promise<ApiResponse<IUserRank>> => {
    try {
      const { data, error } = await userService.getUserGlobalRank({
        variables: input,
        fetchPolicy: "network-only"
      });
      if (error) {
        throw error;
      }
      return { success: true, data: data?.getUserGlobalRank.userRank };
    } catch (e) {
      return { err: e as Error, success: false };
    }
  };
  const getUser = async (input: IGetUserRequest): Promise<ApiResponse<IUser>> => {
    try {
      const { data, error } = await userService.getUser({
        variables: input,
        fetchPolicy: "network-only"
      });
      if (error) {
        throw error;
      }
      return { success: true, data: data?.getUser.user };
    } catch (e) {
      return { err: e as Error, success: false };
    }
  };
  const getUsers = async (input: IGetUsersRequest): Promise<ApiResponse<IUser[]>> => {
    try {
      const { data, error } = await userService.getUsers({
        variables: input,
        fetchPolicy: "network-only"
      });
      if (error) {
        throw error;
      }
      return { success: true, data: data?.getUsers.users };
    } catch (e) {
      return { err: e as Error, success: false };
    }
  };
  const updateUser = async (input: IUpdateUserRequest): Promise<ApiResponse<IUser>> => {
    try {
        const { data, errors } = await userService.updateUser({
            variables: input
        })
        if( errors?.[0] ) throw errors[0]
        return {
            success: true,
            data: data?.updateUser.user
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const updateCredential = async (input: IUpdateCredentialRequest): Promise<ApiResponse<boolean>> => {
    try {
        const { data, errors } = await userService.updateCredential({
            variables: input
        })
        if( errors?.[0] ) throw errors[0]
        return {
            success: true,
            data: data?.updateCredential.success
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getFriendsCount = async (input: IGetFriendsCountRequest): Promise<ApiResponse<number>> => {
    try{
        const { data, error } = await userService.getFriendsCount({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getFriendsCount.count
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getFollowers = async (input: IGetFollowersRequest): Promise<ApiResponse<IFollow[]>> => {
    try{
        const { data, error } = await userService.getFollowers({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getFollowers.followers
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getFollowings = async (input: IGetFollowersRequest): Promise<ApiResponse<IFollow[]>> => {
    try{
        const { data, error } = await userService.getFollowings({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getFollowings.followers
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getFollowsByUser = async (input: IGetFollowsByUserRequest): Promise<ApiResponse<IFollow[]>> => {
    try{
        const { data, error } = await userService.getFollowsByUser({
          variables: input,
          fetchPolicy: 'network-only'
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getFollowsByUser.follows
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getFollows = async (input: IGetFollowsRequest): Promise<ApiResponse<IFollow[]>> => {
    try{
        const { data, error } = await userService.getFollows({
          variables: input,
          fetchPolicy: 'network-only'
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getFollows.follows
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const follow = async (input: IFollowRequest): Promise<ApiResponse<boolean>> => {
    try {
        const { data, errors } = await userService.follow({
            variables: input
        })
        if( errors?.[0] ) throw errors[0]
        return {
            success: true,
            data: data?.follow.success
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const unfollow = async (input: IUnfollowRequest): Promise<ApiResponse<boolean>> => {
    try {
        const { data, errors } = await userService.unfollow({
            variables: input
        })
        if( errors?.[0] ) throw errors[0]
        return {
            success: true,
            data: data?.unfollow?.success
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const checkFollow = async (input: ICheckFollowRequest): Promise<ApiResponse<boolean>> => {
    try{
        const { data, error } = await userService.checkFollow({
          variables: input
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.checkFollow.isFollowing
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getEarningAggregate = async (input: IGetEarningAggregateRequest): Promise<ApiResponse<IEarningAggregate[]>> => {
    try{
        const { data, error } = await userService.getEarningAggregate({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getEarningAggregate.earningAggregates
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getBadge = async (input: IGetBadgeRequest): Promise<ApiResponse<IBadge>> => {
    try{
        const { data, error } = await userService.getBadge({
          variables: input,
          fetchPolicy: 'network-only'
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getBadge.badge
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getBadges = async (input: IGetBadgesRequest): Promise<ApiResponse<IBadge[]>> => {
    try{
        const { data, error } = await userService.getBadges({
          variables: input,
          fetchPolicy: 'network-only'
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getBadges.badges
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getUserBadges = async (input: IGetUserBadgesRequest): Promise<ApiResponse<IUserBadge[]>> => {
    try{
        const { data, error } = await userService.getUserBadges({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getUserBadges.userBadges
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getUserBadgeCount = async (input: IGetUserBadgeCountRequest): Promise<ApiResponse<number>> => {
    try{
        const { data, error } = await userService.getUserBadgeCount({
          variables: input,
          fetchPolicy: 'network-only'
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getUserBadgeCount.count
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const createUserBadge = async (input: ICreateUserBadgeRequest): Promise<ApiResponse<IUserBadge>> => {
    try {
        const { data, errors } = await userService.createUserBadge({
            variables: input
        })
        if( errors?.[0] ) throw errors[0]
        return {
            success: true,
            data: data?.createUserBadge.userBadge
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }

  /// Vouchers
  const getVoucherRedemptionsCount = async (input: IGetVoucherCountRequest): Promise<ApiResponse<number>> => {
    try{
        const { data, error } = await userService.getVoucherRedemptionsCount({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getVoucherRedemptionsCount.count
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getRankedUsers = async (input: IGetGlobalRanksRequest): Promise<ApiResponse<IUserRank[]>> => {
    try{
        const { data, error } = await userService.getRankedUsers({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getRankedUsers.userRanks
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const addUserNotificationSetting = async (input: IAddUserNotificationSettingRequest): Promise<ApiResponse<IUserNotificationSetting>> => {
    try {
        const { data, errors } = await userService.addUserNotificationSetting({
            variables: input
        })
        if( errors?.[0] ) throw errors[0]
        return {
            success: true,
            data: data?.addUserNotificationSetting.userNotificationSetting
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const updateUserNotificationSetting = async (input: IUpdateUserNotificationSettingRequest): Promise<ApiResponse<IUserNotificationSetting>> => {
    try {
        const { data, errors } = await userService.updateUserNotificationSetting({
            variables: input
        })
        if( errors?.[0] ) throw errors[0]
        return {
            success: true,
            data: data?.updateUserNotificationSetting.userNotificationSetting
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getUserNotificationSetting = async (input: IGetUserNotificationSettingRequest): Promise<ApiResponse<IUserNotificationSetting>> => {
    try{
        const { data, error } = await userService.getUserNotificationSetting({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getUserNotificationSetting.userNotificationSetting
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getNotificationsByCategory = async (input: IGetNotificationsByCategoryRequest): Promise<ApiResponse<IUserNotification[]>> => {
    try{
        const { data, error } = await userService.getNotificationsByCategory({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getNotificationsByCategory.notifications
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getNotifications = async (input: IGetNotificationsRequest): Promise<ApiResponse<IUserNotification[]>> => {
    try{
        const { data, error } = await userService.getNotifications({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getNotifications.notifications
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getNotificationCount = async (input: IGetNotificationsCountRequest): Promise<ApiResponse<number>> => {
    try{
        const { data, error } = await userService.getNotificationCount({
          variables: input,
          fetchPolicy: 'network-only'
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getNotificationCount.count
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const updateNotification = async (input: IUpdateNotificationRequest): Promise<ApiResponse<IUserNotification>> => {
    try {
        const { data, errors } = await userService.updateNotification({
            variables: input
        })
        if( errors?.[0] ) throw errors[0]
        return {
            success: true,
            data: data?.updateNotification.notification
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const syncUserSuggestion = async (input: ISyncUserSuggestionRequest): Promise<ApiResponse<ISyncUserSuggestionResponse>> => {
    try {
        const { data, errors } = await userService.syncUserSuggestion({
            variables: input
        })
        if( errors?.[0] ) throw errors[0]
        return {
            success: true,
            data: data?.syncUserSuggestion
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const createUserSuggestion = async (input: ICreateUserSuggestionRequest): Promise<ApiResponse<IUserSuggestion>> => {
    try {
        const { data, errors } = await userService.createUserSuggestion({
            variables: input
        })
        if( errors?.[0] ) throw errors[0]
        return {
            success: true,
            data: data?.createUserSuggestion.userSuggestion
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getUserSuggestion = async (input: IGetUserSuggestionRequest): Promise<ApiResponse<IUserSuggestion>> => {
    try{
        const { data, error } = await userService.getUserSuggestion({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getUserSuggestion.userSuggestion
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  const getUserUserSuggestions = async (input: IGetUserUserSuggestionsRequest): Promise<ApiResponse<IUserLite[]>> => {
    try{
        const { data, error } = await userService.getUserUserSuggestions({
          variables: input,
          fetchPolicy: "network-only"
        })
        if(error) throw error;
        return {
            success: true, 
            data: data?.getUserUserSuggestions.userLites
        }
    }catch(e){
        return {
            err: (e as Error)
        }
    }
  }
  return {
    createUserSuggestion: (input: ICreateUserSuggestionRequest) => handleRequest(createUserSuggestion, input),
    syncUserSuggestion: (input: ISyncUserSuggestionRequest) => handleRequest(syncUserSuggestion, input),
    getUserUserSuggestions: (input: IGetUserUserSuggestionsRequest) => handleRequest(getUserUserSuggestions, input),
    getUserSuggestion: (input: IGetUserSuggestionRequest) => handleRequest(getUserSuggestion, input),

    getUserNotificationSetting: (input: IGetUserNotificationSettingRequest) => handleRequest(getUserNotificationSetting, input),
    updateUserNotificationSetting: (input: IUpdateUserNotificationSettingRequest) => handleRequest(updateUserNotificationSetting, input),
    addUserNotificationSetting: (input: IAddUserNotificationSettingRequest) => handleRequest(addUserNotificationSetting, input),

    getNotificationsByCategory: (input: IGetNotificationsByCategoryRequest) => handleRequest(getNotificationsByCategory, input),
    getNotificationCount: (input: IGetNotificationsCountRequest) => handleRequest(getNotificationCount, input),
    getNotifications: (input: IGetNotificationsRequest) => handleRequest(getNotifications, input),
    updateNotification: (input: IUpdateNotificationRequest) => handleRequest(updateNotification, input),

    getRankedUsers: (input: IGetGlobalRanksRequest) => handleRequest(getRankedUsers, input),
    getVoucherRedemptionsCount: (input: IGetVoucherCountRequest) => handleRequest(getVoucherRedemptionsCount, input),

    getBadges: (input: IGetBadgesRequest) => handleRequest(getBadges, input),
    getBadge: (input: IGetBadgeRequest) => handleRequest(getBadge, input),

    getUserBadges: (input: IGetUserBadgesRequest) => handleRequest(getUserBadges, input),
    getUserBadgeCount: (input: IGetUserBadgeCountRequest) => handleRequest(getUserBadgeCount, input),
    createUserBadge: (input: ICreateUserBadgeRequest) => handleRequest(createUserBadge, input),

    getEarningAggregate: (input: IGetEarningAggregateRequest) => handleRequest(getEarningAggregate, input),
    
    checkFollow: (input: ICheckFollowRequest) => handleRequest(checkFollow, input),
    getFriendsCount: (input: IGetFriendsCountRequest) => handleRequest(getFriendsCount, input), 
    getFollowings: (input: IGetFollowersRequest) => handleRequest(getFollowings, input), 
    getFollowers: (input: IGetFollowersRequest) => handleRequest(getFollowers, input), 
    getFollowsByUser: (input: IGetFollowsByUserRequest) => handleRequest(getFollowsByUser, input), 
    getFollows: (input: IGetFollowsRequest) => handleRequest(getFollows, input), 
    follow: (input: IFollowRequest) => handleRequest(follow, input), 
    unfollow: (input: IUnfollowRequest) => handleRequest(unfollow, input),

    updateUser: (input: IUpdateUserRequest) => handleRequest(updateUser, input),
    updateCredential: (input: IUpdateCredentialRequest) => handleRequest(updateCredential, input),
    getUserGlobalRank: (input: IGetUserGlobalRankRequest) => handleRequest(getUserGlobalRank, input),
    getUsers: (input: IGetUsersRequest) => handleRequest(getUsers, input),
    getUser: (input: IGetUserRequest) => handleRequest(getUser, input),
    // me: () => handleRequest(me, null),
    me,
  };
}
