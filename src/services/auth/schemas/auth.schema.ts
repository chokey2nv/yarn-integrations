export const authSchemas = {
  changePassword: (query: string) => `
    mutation changePassword($userId: String!, $oldPassword: String!, $newPassword: String!) {
      changePassword(userId: $userId, oldPassword: $oldPassword, newPassword: $newPassword) {
        ${query}
      }
    }
  `,
  resetPassword: (query: string) => `
    mutation resetPassword($email: String, $phone: String, $password: String!) {
      resetPassword(email: $email, phone: $phone, password: $password) {
        ${query}
      }
    }
  `,
  verifyToken: (query: string) => `
    mutation verifyToken($email: String, $phone: String, $token: String) {
      verifyToken(email: $email, phone: $phone, token: $token) {
        ${query}
      }
    }
  `,
  sendOTP: (query: string) => `
    mutation sendOTP($email: String, $phone: String) {
      sendOTP(email: $email, phone: $phone) {
        ${query}
      }
    }
  `,
  signUp: (query: string) => `
    mutation signUp($user: UserInput!, $password: String!) {
      signUp(user: $user, password: $password) {
        ${query}
      }
    }
  `,
  login: (query: string) => `
    mutation login($email: String, $phone: String, $password: String!, $isAdmin: Boolean) {
      login(email: $email, phone: $phone, password: $password, isAdmin: $isAdmin) {
        ${query}
      }
    }
  `,
}