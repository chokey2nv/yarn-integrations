import { gql } from "@apollo/client";

export const schema = {
    // Subscription 
    getUserActiveSubscriptions: (query: string) => gql`
        query getUserActiveSubscriptions($userId: String!){
            getUserActiveSubscriptions(userId: $userId){
                ${query}
            }
        }
    `,
    getSubscription: (query: string) => gql`
        query getSubscription($subscription: SubscriptionInput!){
            getSubscription(subscription: $subscription){
                ${query}
            }
        }
    `,
    deleteSubscription: (query: string) => gql`
        mutation deleteSubscription($subscriptionId: String!){
            deleteSubscription(subscriptionId: $subscriptionId){
                ${query}
            }
        }
    `,
    createSubscription: (query: string) => gql`
        mutation createSubscription($subscription: SubscriptionInput!){
            createSubscription(subscription: $subscription){
                ${query}
            }
        }
    `,
    // SubPackage 
    getSubPackages: (query: string) => gql`
        query getSubPackages($search: String, $subPackageIds: [String], $subPackage: SubPackageInput, $limit: Int!, $skip: Int!){
            getSubPackages(search: $search, subPackageIds: $subPackageIds, subPackage: $subPackage, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
    // Voucher Redemption
    createVoucherRedemption: (query: string) => gql`
        mutation createVoucherRedemption($voucherRedemption: VoucherRedemptionInput!) {
            createVoucherRedemption(voucherRedemption: $voucherRedemption) {
                ${query}
            }
        }
    `,
    getVoucherRedemption: (query: string) => gql`
        query getVoucherRedemption($voucherRedemption: VoucherRedemptionInput!) {
            getVoucherRedemption(voucherRedemption: $voucherRedemption) {
                ${query}
            }
        }
    `,
    getVoucherRedemptions: (query: string) => gql`
        query getVoucherRedemptions($search: String, $voucherRedemptionIds: [String], $voucherRedemption: VoucherRedemptionInput, $limit: Int!, $skip: Int!) {
            getVoucherRedemptions(voucherRedemptionIds: $voucherRedemptionIds, voucherRedemption: $voucherRedemption, search: $search, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,

    // Voucher
    updateVoucher: (query: string) => gql`
        mutation updateVoucher($voucherId: String!, $voucher: VoucherInput!) {
            updateVoucher(voucherId: $voucherId, voucher: $voucher) {
                ${query}
            }
        }
    `,
    getVouchers: (query: string) => gql`
        query getVouchers($voucher: VoucherInput, $voucherIds: [String], $search: String, $limit: Int!, $skip: Int!) {
            getVouchers(voucher: $voucher, voucherIds: $voucherIds, search: $search, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    getVoucher: (query: string) => gql`
        query getVoucher($voucher: VoucherInput!) {
            getVoucher(voucher: $voucher) {
                ${query}
            }
        }
    `,
    // Transaction 
    getUserTxSummariesByCategory: (query: string) => gql`
        query getUserTxSummariesByCategory($userId: String!){
            getUserTxSummariesByCategory(userId: $userId){
                ${query}
            }
        }
    `,
    createTransaction: (query: string) => gql`
        mutation createTransaction($transaction: TransactionInput!) {
            createTransaction(transaction: $transaction) {
                ${query}
            }
        }
    `,
    getTransaction: (query: string) => gql`
        query getTransaction($transaction: TransactionInput!) {
            getTransaction(transaction: $transaction) {
                ${query}
            }
        }
    `,
    getUserTransactionsByTypes: (query: string) => gql`
        query getUserTransactionsByTypes($userId: String!, $transactionTypes: [TransactionTypesInputEnum]!, $limit: Int!, $skip: Int!) {
            getUserTransactionsByTypes(userId: $userId, transactionTypes: $transactionTypes, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    getUserTransactions: (query: string) => gql`
        query getUserTransactions($userId: String!, $limit: Int!, $skip: Int!) {
            getUserTransactions(userId: $userId, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    getTransactions: (query: string) => gql`
        query getTransactions($transaction: TransactionInput, $transactionIds: [String], $search: String, $limit: Int!, $skip: Int!) {
            getTransactions(transaction: $transaction, transactionIds: $transactionIds, search: $search, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    deleteTransaction: (query: string) => gql`
        mutation deleteTransaction($transactionId: String!) {
            deleteTransaction(transactionId: $transactionId) {
                ${query}
            }
        }
    `,
}
