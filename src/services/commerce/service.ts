import { gqlQueryStringBuilder } from "@/utils"
import { useLazyQuery, useMutation } from "@apollo/client"
import { transactionQuery, ICreateTransactionRequest, ICreateTransactionResponse, ICreateTransactionResponseBluePrint, IDeleteTransactionRequest, IDeleteTransactionResponse, IGetTransactionRequest, IGetTransactionResponse, IGetTransactionResponseBluePrint, IGetTransactionsRequest, IGetTransactionsResponse, IGetTransactionsResponseBluePrint, IUpdateTransactionRequest, IUpdateTransactionResponse, IUpdateTransactionResponseBluePrint, IGetVouchersResponse, IGetVouchersResponseBluePrint, IGetVouchersRequest, voucherQuery, IGetVoucherResponse, IGetVoucherRequest, IGetVoucherResponseBluePrint, IUpdateVoucherResponse, IUpdateVoucherResponseBluePrint, IUpdateVoucherRequest, ICreateVoucherRedemptionResponse, ICreateVoucherRedemptionRequest, ICreateVoucherRedemptionResponseBluePrint, voucherRedemptionQuery, IGetVoucherRedemptionsResponse, IGetVoucherRedemptionsResponseBluePrint, IGetVoucherRedemptionsRequest, IGetVoucherRedemptionResponse, IGetVoucherRedemptionResponseBluePrint, IGetVoucherRedemptionRequest, IGetSubPackagesResponse, IGetSubPackagesResponseBluePrint, IGetSubPackagesRequest, subPackageQuery, IGetSubscriptionResponse, IGetSubscriptionResponseBluePrint, IGetSubscriptionRequest, subscriptionQuery, IGetUserActiveSubscriptionsResponse, IGetUserActiveSubscriptionsResponseBluePrint, IGetUserActiveSubscriptionsRequest, ICreateSubscriptionResponse, ICreateSubscriptionResponseBluePrint, ICreateSubscriptionRequest, IDeleteSubscriptionResponse, IDeleteSubscriptionRequest, IGetUserTransactionsResponse, IGetUserTransactionsResponseBluePrint, IGetUserTransactionsRequest, IGetUserTransactionsByTypesResponse, IGetUserTransactionsByTypesResponseBluePrint, IGetUserTransactionsByTypesRequest, IGetUserTxSummariesByCategoryResponse, IGetUserTxSummariesByCategoryRequest, IGetUserTxSummariesByCategoryResponseBluePrint, txSummaryQuery } from "./types"
import { schema } from "./schema"
import { IGetPollImpressionRequest } from "../poll/types"

export const useTransactionService = () => {

    const [createTransaction] = useMutation<{ createTransaction: ICreateTransactionResponse }, ICreateTransactionRequest>(
        schema.createTransaction(
            gqlQueryStringBuilder<ICreateTransactionResponse, ICreateTransactionResponseBluePrint>(
                ["transaction"], {
                    transaction: transactionQuery,
                }
            )
        )
    )
    const [deleteTransaction] = useMutation<{ deleteTransaction: IDeleteTransactionResponse }, IDeleteTransactionRequest>(
        schema.deleteTransaction(
            gqlQueryStringBuilder<IDeleteTransactionResponse>(
                ["transactionId"]
            )
        )
    )
    const [getUserTxSummariesByCategory] = useLazyQuery<{ getUserTxSummariesByCategory: IGetUserTxSummariesByCategoryResponse }, IGetUserTxSummariesByCategoryRequest>(
        schema.getUserTxSummariesByCategory(
            gqlQueryStringBuilder<IGetUserTxSummariesByCategoryResponse, IGetUserTxSummariesByCategoryResponseBluePrint>(
                ["txSummaries"], {
                    txSummaries: txSummaryQuery,
                }
            )
        )
    )
    const [getTransaction] = useLazyQuery<{ getTransaction: IGetTransactionResponse }, IGetTransactionRequest>(
        schema.getTransaction(
            gqlQueryStringBuilder<IGetTransactionResponse, IGetTransactionResponseBluePrint>(
                ["transaction"], {
                    transaction: transactionQuery
                }
            )
        )
    )
    const [getTransactions] = useLazyQuery<{ getTransactions: IGetTransactionsResponse }, IGetTransactionsRequest>(
        schema.getTransactions(
            gqlQueryStringBuilder<IGetTransactionsResponse, IGetTransactionsResponseBluePrint>(
                ["transactions"], {
                    transactions: transactionQuery
                }
            )
        )
    )
    const [getUserTransactions] = useLazyQuery<{ getUserTransactions: IGetUserTransactionsResponse }, IGetUserTransactionsRequest>(
        schema.getUserTransactions(
            gqlQueryStringBuilder<IGetUserTransactionsResponse, IGetUserTransactionsResponseBluePrint>(
                ["transactions"], {
                    transactions: transactionQuery
                }
            )
        )
    )
    const [getUserTransactionsByTypes] = useLazyQuery<{ getUserTransactionsByTypes: IGetUserTransactionsByTypesResponse }, IGetUserTransactionsByTypesRequest>(
        schema.getUserTransactionsByTypes(
            gqlQueryStringBuilder<IGetUserTransactionsByTypesResponse, IGetUserTransactionsByTypesResponseBluePrint>(
                ["transactions"], {
                    transactions: transactionQuery
                }
            )
        )
    )
    const [getVouchers] = useLazyQuery<{ getVouchers: IGetVouchersResponse }, IGetVouchersRequest>(
        schema.getVouchers(
            gqlQueryStringBuilder<IGetVouchersResponse, IGetVouchersResponseBluePrint>(
                ["vouchers"], {
                    vouchers: voucherQuery
                }
            )
        )
    )
    const [getVoucher] = useLazyQuery<{ getVoucher: IGetVoucherResponse }, IGetVoucherRequest>(
        schema.getVoucher(
            gqlQueryStringBuilder<IGetVoucherResponse, IGetVoucherResponseBluePrint>(
                ["voucher"], {
                    voucher: voucherQuery
                }
            )
        )
    )
    const [updateVoucher] = useMutation<{ updateVoucher: IUpdateVoucherResponse }, IUpdateVoucherRequest>(
        schema.updateVoucher(
            gqlQueryStringBuilder<IUpdateVoucherResponse, IUpdateVoucherResponseBluePrint>(
                ["voucher"], {
                    voucher: voucherQuery
                }
            )
        )
    )
    const [createVoucherRedemption] = useMutation<{ createVoucherRedemption: ICreateVoucherRedemptionResponse }, ICreateVoucherRedemptionRequest>(
        schema.createVoucherRedemption(
            gqlQueryStringBuilder<ICreateVoucherRedemptionResponse, ICreateVoucherRedemptionResponseBluePrint>(
                ["voucherRedemption"], {
                    voucherRedemption: voucherRedemptionQuery
                }
            )
        )
    )
    const [getVoucherRedemptions] = useLazyQuery<{ getVoucherRedemptions: IGetVoucherRedemptionsResponse }, IGetVoucherRedemptionsRequest>(
        schema.getVoucherRedemptions(
            gqlQueryStringBuilder<IGetVoucherRedemptionsResponse, IGetVoucherRedemptionsResponseBluePrint>(
                ["voucherRedemptions"], {
                    voucherRedemptions: voucherRedemptionQuery
                }
            )
        )
    )
    const [getVoucherRedemption] = useLazyQuery<{ getVoucherRedemption: IGetVoucherRedemptionResponse }, IGetVoucherRedemptionRequest>(
        schema.getVoucherRedemption(
            gqlQueryStringBuilder<IGetVoucherRedemptionResponse, IGetVoucherRedemptionResponseBluePrint>(
                ["voucherRedemption"], {
                    voucherRedemption: voucherRedemptionQuery
                }
            )
        )
    )
    // SubPackage
    const [getSubPackages] = useLazyQuery<{ getSubPackages: IGetSubPackagesResponse }, IGetSubPackagesRequest>(
        schema.getSubPackages(
            gqlQueryStringBuilder<IGetSubPackagesResponse, IGetSubPackagesResponseBluePrint>(
                ["subPackages"], {
                    subPackages: subPackageQuery
                }
            )
        )
    )

    // Subscription
    const [getSubscription] = useLazyQuery<{ getSubscription: IGetSubscriptionResponse }, IGetSubscriptionRequest>(
        schema.getSubscription(
            gqlQueryStringBuilder<IGetSubscriptionResponse, IGetSubscriptionResponseBluePrint>(
                ["subscription"], {
                    subscription: subscriptionQuery,
                    subPackage: subPackageQuery,
                }
            )
        )
    )
    const [getUserActiveSubscriptions] = useLazyQuery<{ getUserActiveSubscriptions: IGetUserActiveSubscriptionsResponse }, IGetUserActiveSubscriptionsRequest>(
        schema.getUserActiveSubscriptions(
            gqlQueryStringBuilder<IGetUserActiveSubscriptionsResponse, IGetUserActiveSubscriptionsResponseBluePrint>(
                ["subscriptions"], {
                    subscriptions: subscriptionQuery,
                    subPackage: subPackageQuery,
                }
            )
        )
    )
    const [createSubscription] = useMutation<{ createSubscription: ICreateSubscriptionResponse }, ICreateSubscriptionRequest>(
        schema.createSubscription(
            gqlQueryStringBuilder<ICreateSubscriptionResponse, ICreateSubscriptionResponseBluePrint>(
                ["subscription"], {
                    subscription: subscriptionQuery,
                    subPackage: subPackageQuery,
                }
            )
        )
    )
    const [deleteSubscription] = useMutation<{ deleteSubscription: IDeleteSubscriptionResponse }, IDeleteSubscriptionRequest>(
        schema.deleteSubscription(
            gqlQueryStringBuilder<IDeleteSubscriptionResponse>(
                ["subscriptionId"]
            )
        )
    )
    return {
        getSubscription, getUserActiveSubscriptions, createSubscription, deleteSubscription,
        getSubPackages,
        createVoucherRedemption, getVoucherRedemption, getVoucherRedemptions,
        getVouchers, getVoucher, updateVoucher,
        getTransaction, getTransactions, getUserTransactions, getUserTransactionsByTypes,
        createTransaction, deleteTransaction, getUserTxSummariesByCategory,
    }
}