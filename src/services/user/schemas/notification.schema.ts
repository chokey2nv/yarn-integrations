export const notificationSchema = {

  // user notification setting 
  addUserNotificationSetting: (query: string) => `
    mutation addUserNotificationSetting($userNotificationSetting: UserNotificationSettingInput!){
      addUserNotificationSetting(userNotificationSetting: $userNotificationSetting){
        ${query}
      }
    }
  `,
  updateUserNotificationSetting: (query: string) => `
    mutation updateUserNotificationSetting($userNotificationSettingId: String!, $userNotificationSetting: UserNotificationSettingInput!){
      updateUserNotificationSetting(userNotificationSettingId: $userNotificationSettingId, userNotificationSetting: $userNotificationSetting){
        ${query}
      }
    }
  `,
  getUserNotificationSetting: (query: string) => `
    query getUserNotificationSetting($userNotificationSetting: UserNotificationSettingInput!){
      getUserNotificationSetting(userNotificationSetting: $userNotificationSetting){
        ${query}
      }
    }
  `,
  // Notification 
  getNotificationsByCategory: (query: string) => `
    query getNotificationsByCategory($notification: NotificationInput!, $categories: [String]!, $limit: Int!, $skip: Int!){
      getNotificationsByCategory(notification: $notification, categories: $categories, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  updateNotification: (query: string) => `
    mutation updateNotification($notificationId: String!, $notification: NotificationInput!){
      updateNotification(notificationId: $notificationId, notification: $notification){
        ${query}
      }
    }
  `,
  getNotificationCount: (query: string) => `
    query getNotificationCount($notification: NotificationInput!){
      getNotificationCount(notification: $notification){
        ${query}
      }
  }`,
  getNotifications: (query: string) => `
    query getNotifications($notificationIds: [String], $notification: NotificationInput!, $limit: Int!, $skip: Int!){
      getNotifications(notificationIds: $notificationIds, notification: $notification, limit: $limit, skip: $skip){
        ${query}
      }
    }
  `,
  
}