export interface IReportsStat {
  totalReports: number;
  pendingReports: number;
  resolvedReports: number;
  suspendedReports: number;
}

export type IReportType = "poll" | "community" | "challenge" | "user"
export type IReportStatus = "pending" | "resolved" | "suspended" | "dismissed";
export interface _IReport {
  id: string;
  reason: string;
  reporterId: string;
  userComment?: string;
  reportType: IReportType;
  reportStatus: IReportStatus;
  createdAt: string;
  updatedAt: string;
  resolvedAt: string;
  reportCode: string;
  
  userId?: string;
  communityId?: string;
  challengeId?: string;
  pollId?: string;
}