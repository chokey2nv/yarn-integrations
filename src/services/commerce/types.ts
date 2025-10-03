import { ITransaction, IPaginateRequest, ISearchRequest, IVoucher, IVoucherRedemption, ISubPackage, ISubscription, ITransactionType, ITxSummary } from "@/utils";



// Subscription
export type ISubscriptionBluePrint = (keyof ISubscription)[]
export const subscriptionQuery:ISubscriptionBluePrint = [
    "autoRenew", "endDate", "id", "subPackageId", "startDate", "subPackage", 
    "userId"
]
export interface IDeleteSubscriptionRequest {
    subscriptionId: string;
}
export type IDeleteSubscriptionResponse = IDeleteSubscriptionRequest
export interface IGetUserActiveSubscriptionsRequest {
    userId: string;
}
export interface IGetUserActiveSubscriptionsResponse {
    subscriptions: ISubscription[];
}
export interface IGetUserActiveSubscriptionsResponseBluePrint extends Omit<IGetSubscriptionResponseBluePrint, "subscription">{
    subscriptions: ISubscriptionBluePrint
}
export type ICreateSubscriptionRequest = IGetSubscriptionRequest
export type ICreateSubscriptionResponse = IGetSubscriptionResponse;
export type ICreateSubscriptionResponseBluePrint = IGetSubscriptionResponseBluePrint;
export interface IGetSubscriptionRequest {
    subscription: Partial<ISubscription>;
}
export interface IGetSubscriptionResponse {
    subscription: ISubscription;
}
export interface IGetSubscriptionResponseBluePrint {
    subscription: ISubscriptionBluePrint
    subPackage: ISubPackageBluePrint
}

// SubPackage 
export type ISubPackageBluePrint = (keyof ISubPackage)[];
export const subPackageQuery:ISubPackageBluePrint = [
    "id", "name", "price", "recommended", "subPackageDuration", "subPackageStatus", "coins"
]
export interface IGetSubPackagesRequest extends ISearchRequest, IPaginateRequest{
    subPackage?: Partial<ISubPackage>
    subPackageIds?: string[];
}
export interface IGetSubPackagesResponse {
    subPackages: ISubPackage[];
}
export interface IGetSubPackagesResponseBluePrint {
    subPackages: ISubPackageBluePrint
}

export type IVoucherRedemptionBluePrint = (keyof IVoucherRedemption)[]
export const voucherRedemptionQuery:IVoucherRedemptionBluePrint = [
    "createdAt", "id", "isRedeemed", "redemptionCode", "userId", "voucherId"
]


export interface IGetVoucherRedemptionRequest {
    voucherRedemption: Partial<IVoucherRedemption>
}
export interface IGetVoucherRedemptionResponse{
    voucherRedemption: IVoucherRedemption
}
export interface IGetVoucherRedemptionResponseBluePrint {
    voucherRedemption: IVoucherRedemptionBluePrint
}
export interface IGetVoucherRedemptionsRequest extends ISearchRequest, IPaginateRequest {
    voucherRedemption?: Partial<IVoucherRedemption>;
    voucherRedemptionIds?: string[];
}
export interface IGetVoucherRedemptionsResponse {
    voucherRedemptions: IVoucherRedemption[]
}
export interface IGetVoucherRedemptionsResponseBluePrint {
    voucherRedemptions: IVoucherRedemptionBluePrint
}
export interface ICreateVoucherRedemptionRequest {
    voucherRedemption: Partial<IVoucherRedemption>
}
export interface ICreateVoucherRedemptionResponse {
    voucherRedemption: IVoucherRedemption;
}
export interface ICreateVoucherRedemptionResponseBluePrint {
    voucherRedemption: IVoucherRedemptionBluePrint
}

export type IVoucherBluePrint = (keyof IVoucher)[]
export const voucherQuery:IVoucherBluePrint = [
    "description", "expiryDate", "id", "logo", "merchant",
    "quantityCreated", "redemptionCost", "title", "voucherStatus"
]
export interface IUpdateVoucherRequest {
    voucherId: string;
    voucher: Partial<IVoucher>
}
export type IUpdateVoucherResponse = IGetVoucherResponse;
export type IUpdateVoucherResponseBluePrint = IGetVoucherResponseBluePrint;

export interface IGetVouchersRequest extends ISearchRequest, IPaginateRequest {
    voucher?: Partial<IVoucher>;
    voucherIds?: string[];
}
export interface IGetVouchersResponse {
    vouchers: IVoucher[]
}
export interface IGetVouchersResponseBluePrint {
    vouchers: IVoucherBluePrint
}
export interface IGetVoucherRequest {
    voucher: Partial<IVoucher>
}
export interface IGetVoucherResponse {
    voucher: IVoucher
}
export interface IGetVoucherResponseBluePrint {
    voucher: IVoucherBluePrint
}


export type ITransactionBluePrint = (keyof ITransaction)[]

export const transactionQuery:ITransactionBluePrint = [
    "amount", "description", "id", "toId", "fromId", "transactionType", "createdAt"
]
export type ITxSummaryBluePrint = (keyof ITxSummary)[]
export const txSummaryQuery:ITxSummaryBluePrint = [
    "category", "totalAmount", "transactionCount"
]

export interface IGetUserTxSummariesByCategoryRequest {
    userId: string;
}
export interface IGetUserTxSummariesByCategoryResponse {
    txSummaries: ITxSummary[];
}
export interface IGetUserTxSummariesByCategoryResponseBluePrint {
    txSummaries: ITxSummaryBluePrint;
}
export interface IGetUserTransactionsByTypesRequest extends IGetUserTransactionsRequest {
    transactionTypes: ITransactionType[]
}
export type IGetUserTransactionsByTypesResponse = IGetUserTransactionsResponse;
export type IGetUserTransactionsByTypesResponseBluePrint = IGetUserTransactionsResponseBluePrint;

export interface IGetUserTransactionsRequest extends IPaginateRequest {
    userId: string;
}
export type IGetUserTransactionsResponse = IGetTransactionsResponse
export type IGetUserTransactionsResponseBluePrint = IGetTransactionsResponseBluePrint
export interface IDeleteTransactionRequest {
    transactionId: string
}
export interface IDeleteTransactionResponse {
    transactionId: string;
}

export interface IUpdateTransactionRequest {
    transactionId: string;
    transaction: Partial<ITransaction>;
}
export interface IUpdateTransactionResponse {
    transaction: ITransaction;
}
export type IUpdateTransactionResponseBluePrint = IGetTransactionResponseBluePrint;

export interface ICreateTransactionRequest {
    transaction: Partial<ITransaction>;
}
export interface ICreateTransactionResponse {
    transaction?: ITransaction;
}
export type ICreateTransactionResponseBluePrint = IGetTransactionResponseBluePrint
export interface IGetTransactionsRequest extends ISearchRequest, IPaginateRequest {
    transaction?: Partial<ITransaction>;
    transactionIds?: string[]
}
export interface IGetTransactionsResponse {
    transactions: ITransaction[]
}
export interface IGetTransactionsResponseBluePrint {
    transactions: ITransactionBluePrint
}
export interface IGetPopularTransactionsRequest extends IPaginateRequest {

}
export interface IGetTransactionRequest {
    transaction: Partial<ITransaction>
}
export interface IGetTransactionResponse {
    transaction?: ITransaction
}
export interface IGetTransactionResponseBluePrint {
    transaction?: ITransactionBluePrint
}