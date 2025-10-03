
export interface IUserBadge {
  id: string;
  badgeId: string;
  userId: string;
  createdAt: string;
  badge?: IBadge;
}

export type IBadgeTriggers = "signUp" | "correctPrediction" | "incorrectPrediction" | "activeDiscussion" | "inviteFriend" | "considerPrediction" | "createPoll" | "unlockedLevel" | "unlockedAllBadges"
export interface IBadge {
  id: string;
  coinReward: number;
  congratsMessage: string;
  count: number;
  createdAt: string;
  description: string;
  icon: any;
  status: "active" | "inactive";
  title: string;
  trigger: IBadgeTriggers;
}