import { IChallenge, IChallengeMember, IPaginateRequest, IPoll, IPollOption, ISearchRequest } from "@/utils";
import { IUserLiteBluePrint } from "../user";

// Challenge Members
export type IChallengeMemberBluePrint = (keyof IChallengeMember)[]
export const challengeMemberQuery:IChallengeMemberBluePrint = [
    "challengeId", "hasApproved", "id", "challengeMemberRoleType", "userId", "userLite"
]
export interface IDeleteChallengeMemberRequest {
    challengeMemberId: string
}
export type IDeleteChallengeMemberResponse = IDeleteChallengeMemberRequest;


export interface IGetChallengeMembersCountRequest {
    challengeMember?: Partial<IChallengeMember>;
}
export interface IGetChallengeMembersCountResponse {
    count: number;
}
export interface IGetChallengeMembersRequest extends IPaginateRequest {
    challengeMember?: Partial<IChallengeMember>;
    challengeMemberIds?: string[]
}
export interface IGetChallengeMembersResponse {
    challengeMembers: IChallengeMember[]
}
export interface IGetChallengeMembersResponseBluePrint extends Omit<IGetChallengeMemberResponseBluePrint, "challengeMember">{
    challengeMembers: IChallengeMemberBluePrint;
}
export interface IGetChallengeMemberRequest {
    challengeMember: Partial<IChallengeMember>
}
export interface IGetChallengeMemberResponse {
    challengeMember?: IChallengeMember
}
export interface IGetChallengeMemberResponseBluePrint {
    challengeMember: IChallengeMemberBluePrint;
    userLite: IUserLiteBluePrint
}

// Challenges
export type IChallengeBluePrint = (keyof IChallenge)[]

export const challengeQuery:IChallengeBluePrint = [
    "id", "title", "description", "coins", "isSystem", "challengeTiming",
    "challengeType", "privacyType", "participantCount", "joinedCount", 
    "minStake", "startDate", "endDate", "creatorId"
]
export interface IDeleteChallengeRequest {
    challengeId: string
}
export interface IDeleteChallengeResponse {
    challengeId: string;
}

export interface IUpdateChallengeRequest {
    challengeId: string;
    challenge: Partial<IChallenge>;
}
export interface IUpdateChallengeResponse {
    challenge: IChallenge;
}
export type IUpdateChallengeResponseBluePrint = IGetChallengeResponseBluePrint;

export interface ICreateChallengeRequest {
    challenge: Partial<IChallenge>;
    poll: Partial<IPoll>;
    pollOptions: Partial<IPollOption>[];
    creator: Partial<IChallengeMember>;
    reviewerIds: string[]
}
export interface ICreateChallengeResponse {
    challenge?: IChallenge;
}
export type ICreateChallengeResponseBluePrint = IGetChallengeResponseBluePrint


export interface IGetChallengesCountRequest {
    challenge: Partial<IChallenge>;
}
export interface IGetChallengesCountResponse {
    count: number
}
export interface IGetUserChallengesRequest extends IPaginateRequest {
    userId: string;
}
export type IGetUserChallengesResponse = IGetChallengesResponse
export type IGetUserChallengesResponseBluePrint = IGetChallengesResponseBluePrint

export interface IGetChallengesRequest extends ISearchRequest, IPaginateRequest {
    challenge?: Partial<IChallenge>;
    challengeIds?: string[]
}
export interface IGetChallengesResponse {
    challenges: IChallenge[]
}
export interface IGetChallengesResponseBluePrint {
    challenges: IChallengeBluePrint
}
export interface IGetChallengeRequest {
    challenge: Partial<IChallenge>
}
export interface IGetChallengeResponse {
    challenge?: IChallenge
}
export interface IGetChallengeResponseBluePrint {
    challenge?: IChallengeBluePrint
}