import { gql } from "@apollo/client";


export const schema = {

  getUserSuggestion: (query: string) => gql` 
    query getUserSuggestion($userSuggestion: UserSuggestionInput!){
      getUserSuggestion(userSuggestion: $userSuggestion){
        ${query}
      }
    }
  `,
  getUserUserSuggestions: (query: string) => gql`
    query getUserUserSuggestions($userId: String!, $limit: Int!, $skip: Int!){
      getUserUserSuggestions(userId: $userId, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  syncUserSuggestion: (query: string) => gql`
    mutation syncUserSuggestion($userId: String!, $contacts: [String]!){
      syncUserSuggestion(userId: $userId, contacts: $contacts){
        ${query}
      }
    }
  `,
  createUserSuggestion: (query: string) => gql`
    mutation createUserSuggestion($userSuggestion: UserSuggestionInput!){
      createUserSuggestion(userSuggestion: $userSuggestion){
        ${query}
      }
    }
  `,
  // user notification setting 
  addUserNotificationSetting: (query: string) => gql`
    mutation addUserNotificationSetting($userNotificationSetting: UserNotificationSettingInput!){
      addUserNotificationSetting(userNotificationSetting: $userNotificationSetting){
        ${query}
      }
    }
  `,
  updateUserNotificationSetting: (query: string) => gql`
    mutation updateUserNotificationSetting($userNotificationSettingId: String!, $userNotificationSetting: UserNotificationSettingInput!){
      updateUserNotificationSetting(userNotificationSettingId: $userNotificationSettingId, userNotificationSetting: $userNotificationSetting){
        ${query}
      }
    }
  `,
  getUserNotificationSetting: (query: string) => gql`
    query getUserNotificationSetting($userNotificationSetting: UserNotificationSettingInput!){
      getUserNotificationSetting(userNotificationSetting: $userNotificationSetting){
        ${query}
      }
    }
  `,
  // Notification 
  getNotificationsByCategory: (query: string) => gql`
    query getNotificationsByCategory($notification: NotificationInput!, $categories: [String]!, $limit: Int!, $skip: Int!){
      getNotificationsByCategory(notification: $notification, categories: $categories, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  updateNotification: (query: string) => gql`
    mutation updateNotification($notificationId: String!, $notification: NotificationInput!){
      updateNotification(notificationId: $notificationId, notification: $notification){
        ${query}
      }
    }
  `,
  getNotificationCount: (query: string) => gql`
    query getNotificationCount($notification: NotificationInput!){
      getNotificationCount(notification: $notification){
        ${query}
      }
  }`,
  getNotifications: (query: string) => gql`
    query getNotifications($notificationIds: [String], $notification: NotificationInput!, $limit: Int!, $skip: Int!){
      getNotifications(notificationIds: $notificationIds, notification: $notification, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  getRankedUsers: (query: string) => gql`
    query getRankedUsers($rankType: String, $userId: String, $limit: Int!, $skip: Int!){
      getRankedUsers(rankType: $rankType, userId: $userId, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  getVoucherRedemptionsCount: (query: string) => gql`
    query getVoucherRedemptionsCount($userId: String!){
      getVoucherRedemptionsCount(userId: $userId){
        ${query}
      }
    }
  `,
  getBadge: (query: string) => gql`
    query getBadge($badge: BadgeInput!){
      getBadge(badge: $badge){
        ${query}
      }
    }
  `,
  getBadges: (query: string) => gql`
    query getBadges($badgeIds: [String], $badge: BadgeInput, $limit: Int!, $skip: Int!){
      getBadges(badgeIds: $badgeIds, badge: $badge, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  getUserBadges: (query: string) => gql`
    query getUserBadges($userBadgeIds: [String], $userBadge: UserBadgeInput, $limit: Int!, $skip: Int!){
      getUserBadges(userBadgeIds: $userBadgeIds, userBadge: $userBadge, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  getUserBadgeCount: (query: string) => gql`
    query getUserBadgeCount($userId: String!){
      getUserBadgeCount(userId: $userId){
        ${query}
      }
    }
  `,
  createUserBadge: (query: string) => gql`
    mutation createUserBadge($userBadge: UserBadgeInput!){
      createUserBadge(userBadge: $userBadge){
        ${query}
      }
    }
  `,
  getEarningAggregate: (query: string) => gql`
    query getEarningAggregate($earningAggregate: EarningAggregateInput!){
      getEarningAggregate(earningAggregate: $earningAggregate){
        ${query}
      }
    }
  `,
  
  getFollows: (query: string) => gql`
      query getFollows($search: String, $followIds: [String], $follow: FollowInput, $limit: Int!, $skip: Int!) {
        getFollows(search: $search, followIds: $followIds, follow: $follow, limit: $limit, skip: $skip) {
              ${query}
          }
      }
  `,
  getFollowsByUser: (query: string) => gql`
      query getFollowsByUser($search: String, $userId: String!, $limit: Int!, $skip: Int!) {
        getFollowsByUser(search: $search, userId: $userId, limit: $limit, skip: $skip) {
          ${query}
        }
      }
  `,
  getFollowers: (query: string) => gql`
      query getFollowers($userId: String!, $limit: Int!, $skip: Int!) {
        getFollowers(userId: $userId, limit: $limit, skip: $skip) {
              ${query}
          }
      }
  `,
  getFollowings: (query: string) => gql`
      query getFollowings($userId: String!, $limit: Int!, $skip: Int!) {
        getFollowings(userId: $userId, limit: $limit, skip: $skip) {
              ${query}
          }
      }
  `,
  checkFollow: (query: string) => gql`
    query checkFollow($follower: String!, $followed: String!){
      checkFollow(follower: $follower, followed: $followed){
        ${query}
      }
    }
  `,
  follow: (query: string) => gql`
    mutation follow($followed: String!, $follower: String!){
      follow(followed: $followed, follower: $follower){
        ${query}
      }
    }
  `,
  unfollow: (query: string) => gql`
      mutation unfollow($followed: String!, $follower: String!){
      unfollow(followed: $followed, follower: $follower){
        ${query}
      }
    }
  `,
  getFriendsCount: gql`
      query getFriendsCount($userId: String!) {
          getFriendsCount(userId: $userId) {
              count
          }
      }
  `,

  // Users 
  getUserGlobalRank: (query: string) => gql`
    query getUserGlobalRank($userId: String!){
      getUserGlobalRank(userId: $userId){
        ${query}
      }
  }`,
  updateCredential: (query: string) => gql`
    mutation updateCredential($userId: String!, $password: String!, $email: String, $phone: String){
      updateCredential(userId: $userId, password: $password, email: $email, phone: $phone){
        ${query}
      }
    }
  `,
  updateUser: (query: string) => gql`
    mutation updateUser($userId: String!, $user: UserInput!){
      updateUser(userId: $userId, user: $user){
        ${query}
      }
    }
  `,
  getUsers: (query: string) => gql`
    query getUsers($search: String, $limit: Int!, $skip: Int!, $userIds: [String], $user: UserInput){
      getUsers(search: $search, limit: $limit, skip: $skip, userIds: $userIds, user: $user){
        ${query}
      }
    }
  `,
  getUser: (query: string) => gql`
    query getUser($user: UserInput!){
      getUser(user: $user){
        ${query}
      }
    }
  `,
  me: (query: string) => gql`
    query {
      me {
        ${query}
      }
    }
  `
};
