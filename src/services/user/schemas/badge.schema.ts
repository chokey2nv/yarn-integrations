export const badgeSchema = {

  getBadge: (query: string) => `
    query getBadge($badge: BadgeInput!){
      getBadge(badge: $badge){
        ${query}
      }
    }
  `,
  getBadges: (query: string) => `
    query getBadges($badgeIds: [String], $badge: BadgeInput, $limit: Int!, $skip: Int!){
      getBadges(badgeIds: $badgeIds, badge: $badge, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  getUserBadges: (query: string) => `
    query getUserBadges($userBadgeIds: [String], $userBadge: UserBadgeInput, $limit: Int!, $skip: Int!){
      getUserBadges(userBadgeIds: $userBadgeIds, userBadge: $userBadge, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  getUserBadgeCount: (query: string) => `
    query getUserBadgeCount($userId: String!){
      getUserBadgeCount(userId: $userId){
        ${query}
      }
    }
  `,
  createUserBadge: (query: string) => `
    mutation createUserBadge($userBadge: UserBadgeInput!){
      createUserBadge(userBadge: $userBadge){
        ${query}
      }
    }
  `,
  
}