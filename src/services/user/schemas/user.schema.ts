export const userSchemas = {
  getUserSuggestion: (query: string) => ` 
    query getUserSuggestion($userSuggestion: UserSuggestionInput!){
      getUserSuggestion(userSuggestion: $userSuggestion){
        ${query}
      }
    }
  `,
  getUserUserSuggestions: (query: string) => `
    query getUserUserSuggestions($userId: String!, $limit: Int!, $skip: Int!){
      getUserUserSuggestions(userId: $userId, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  syncUserSuggestion: (query: string) => `
    mutation syncUserSuggestion($userId: String!, $contacts: [String]!){
      syncUserSuggestion(userId: $userId, contacts: $contacts){
        ${query}
      }
    }
  `,
  createUserSuggestion: (query: string) => `
    mutation createUserSuggestion($userSuggestion: UserSuggestionInput!){
      createUserSuggestion(userSuggestion: $userSuggestion){
        ${query}
      }
    }
  `,
  getRankedUsers: (query: string) => `
    query getRankedUsers($rankType: String, $userId: String, $limit: Int!, $skip: Int!){
      getRankedUsers(rankType: $rankType, userId: $userId, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  getVoucherRedemptionsCount: (query: string) => `
    query getVoucherRedemptionsCount($userId: String!){
      getVoucherRedemptionsCount(userId: $userId){
        ${query}
      }
    }
  `,
  getEarningAggregate: (query: string) => `
    query getEarningAggregate($earningAggregate: EarningAggregateInput!){
      getEarningAggregate(earningAggregate: $earningAggregate){
        ${query}
      }
    }
  `,
  
  getFollows: (query: string) => `
      query getFollows($search: String, $followIds: [String], $follow: FollowInput, $limit: Int!, $skip: Int!) {
        getFollows(search: $search, followIds: $followIds, follow: $follow, limit: $limit, skip: $skip) {
              ${query}
          }
      }
  `,
  getFollowsByUser: (query: string) => `
      query getFollowsByUser($search: String, $userId: String!, $limit: Int!, $skip: Int!) {
        getFollowsByUser(search: $search, userId: $userId, limit: $limit, skip: $skip) {
          ${query}
        }
      }
  `,
  getFollowers: (query: string) => `
      query getFollowers($userId: String!, $limit: Int!, $skip: Int!) {
        getFollowers(userId: $userId, limit: $limit, skip: $skip) {
              ${query}
          }
      }
  `,
  getFollowings: (query: string) => `
      query getFollowings($userId: String!, $limit: Int!, $skip: Int!) {
        getFollowings(userId: $userId, limit: $limit, skip: $skip) {
              ${query}
          }
      }
  `,
  checkFollow: (query: string) => `
    query checkFollow($follower: String!, $followed: String!){
      checkFollow(follower: $follower, followed: $followed){
        ${query}
      }
    }
  `,
  follow: (query: string) => `
    mutation follow($followed: String!, $follower: String!){
      follow(followed: $followed, follower: $follower){
        ${query}
      }
    }
  `,
  unfollow: (query: string) => `
      mutation unfollow($followed: String!, $follower: String!){
      unfollow(followed: $followed, follower: $follower){
        ${query}
      }
    }
  `,
  getFriendsCount: (query: string) => `
      query getFriendsCount($userId: String!) {
          getFriendsCount(userId: $userId) {
              ${query}
          }
      }
  `,

  // Users 
  getUserGlobalRank: (query: string) => `
    query getUserGlobalRank($userId: String!){
      getUserGlobalRank(userId: $userId){
        ${query}
      }
  }`,
  updateCredential: (query: string) => `
    mutation updateCredential($userId: String!, $password: String!, $email: String, $phone: String){
      updateCredential(userId: $userId, password: $password, email: $email, phone: $phone){
        ${query}
      }
    }
  `,
  updateUser: (query: string) => `
    mutation updateUser($userId: String!, $user: UserInput!){
      updateUser(userId: $userId, user: $user){
        ${query}
      }
    }
  `,
  getUsers: (query: string) => `
    query getUsers($search: String, $limit: Int!, $skip: Int!, $userIds: [String], $user: UserInput){
      getUsers(search: $search, limit: $limit, skip: $skip, userIds: $userIds, user: $user){
        ${query}
      }
    }
  `,
  getUser: (query: string) => `
    query getUser($user: UserInput!){
      getUser(user: $user){
        ${query}
      }
    }
  `,
  me: (query: string) => `
    query {
      me {
        ${query}
      }
    }
  `
};
