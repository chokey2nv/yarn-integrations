import { ApiResponse, ISubPackage, ISubscription, ITransaction, ITxSummary, IVoucher, IVoucherRedemption } from "@/utils"
import { ICreateTransactionRequest, IDeleteTransactionRequest, IGetTransactionRequest, IGetTransactionsRequest, IGetPopularTransactionsRequest, IGetVoucherRequest, IGetVouchersRequest, IUpdateVoucherRequest, ICreateVoucherRedemptionRequest, IGetVoucherRedemptionsRequest, IGetVoucherRedemptionRequest, IGetSubPackagesRequest, IGetSubscriptionRequest, IGetUserActiveSubscriptionsRequest, ICreateSubscriptionRequest, IDeleteSubscriptionRequest, IGetUserTransactionsRequest, IGetUserTransactionsByTypesRequest, IGetUserTxSummariesByCategoryRequest } from "./types"
import { useTransactionService } from "./service"
import useNotification from "@/store/notification_store"
import useUserStore from "@/store/user_store"

export const useCommerce = () => {
    const transactionService = useTransactionService()
    const notification = useNotification()
    const { setUserPremium } = useUserStore();

    const handleRequest = async <T,O>(requestFn: (input: T) => Promise<ApiResponse<O>>, input: T): Promise<O|undefined> => {
        try {
            const { data, success, err } = await requestFn(input);
            if (!success) {
                notification.show({
                    type: "error",
                    message: err?.message || "An error occurred",
                });
                return undefined;
            }
            return data ?? undefined
        }catch(e){
            console.log(requestFn.name)
            notification.show({
                type: "error",
                message: (e as Error)?.message || "Fetch error",
            });
        }
    };
    const createTransaction = async (input: ICreateTransactionRequest): Promise<ApiResponse<ITransaction>> => {
        try {
            const { data, errors } = await transactionService.createTransaction({
                variables: input
            })
            if(errors?.[0]) throw errors[0]
            return {
                success: true,
                data: data?.createTransaction.transaction
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const deleteTransaction = async (input: IDeleteTransactionRequest): Promise<ApiResponse<string>> => {
        try {
            const { data, errors } = await transactionService.deleteTransaction({
                variables: input
            })
            if( errors?.[0] ) throw errors[0]
            return {
                success: true,
                data: data?.deleteTransaction.transactionId
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getTransactions = async (input: IGetTransactionsRequest): Promise<ApiResponse<ITransaction[]>> => {
        try {
            const { data, error } = await transactionService.getTransactions({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error
            return {
                data: data?.getTransactions.transactions,
                success: true,
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getUserTransactions = async (input: IGetUserTransactionsRequest): Promise<ApiResponse<ITransaction[]>> => {
        try {
            const { data, error } = await transactionService.getUserTransactions({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error
            return {
                data: data?.getUserTransactions.transactions,
                success: true,
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getUserTxSummariesByCategory = async (input: IGetUserTxSummariesByCategoryRequest): Promise<ApiResponse<ITxSummary[]>> => {
        try {
            const { data, error } = await transactionService.getUserTxSummariesByCategory({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error
            return {
                data: data?.getUserTxSummariesByCategory.txSummaries,
                success: true,
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getUserTransactionsByTypes = async (input: IGetUserTransactionsByTypesRequest): Promise<ApiResponse<ITransaction[]>> => {
        try {
            const { data, error } = await transactionService.getUserTransactionsByTypes({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error
            return {
                data: data?.getUserTransactionsByTypes.transactions,
                success: true,
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }

    const getTransaction = async (input: IGetTransactionRequest): Promise<ApiResponse<ITransaction>> => {
        try{
            const { data, error } = await transactionService.getTransaction({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getTransaction.transaction
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getVoucher = async (input: IGetVoucherRequest): Promise<ApiResponse<IVoucher>> => {
        try{
            const { data, error } = await transactionService.getVoucher({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getVoucher.voucher
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getVouchers = async (input: IGetVouchersRequest): Promise<ApiResponse<IVoucher[]>> => {
        try{
            const { data, error } = await transactionService.getVouchers({
                variables: input,
                fetchPolicy: "network-only"
            })
            if(error) throw error;
            return {
                success: true, 
                data: data?.getVouchers.vouchers
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const updateVoucher = async (input: IUpdateVoucherRequest): Promise<ApiResponse<IVoucher>> => {
        try {
            const { data, errors } = await transactionService.updateVoucher({
                variables: input
            })
            if( errors?.[0] ) throw errors[0]
            return {
                success: true,
                data: data?.updateVoucher.voucher
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const createVoucherRedemption = async (input: ICreateVoucherRedemptionRequest): Promise<ApiResponse<IVoucherRedemption>> => {
        try {
            const { data, errors } = await transactionService.createVoucherRedemption({
                variables: input
            })
            if( errors?.[0] ) throw errors[0]
            return {
                success: true,
                data: data?.createVoucherRedemption.voucherRedemption
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getVoucherRedemptions = async (input: IGetVoucherRedemptionsRequest): Promise<ApiResponse<IVoucherRedemption[]>> => {
        try {
            const { data, error } = await transactionService.getVoucherRedemptions({
                variables: input,
                fetchPolicy: "network-only"
            })
            if( error ) throw error
            return {
                success: true,
                data: data?.getVoucherRedemptions.voucherRedemptions
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getVoucherRedemption = async (input: IGetVoucherRedemptionRequest): Promise<ApiResponse<IVoucherRedemption>> => {
        try {
            const { data, error } = await transactionService.getVoucherRedemption({
                variables: input,
                fetchPolicy: "network-only"
            })
            if( error ) throw error
            return {
                success: true,
                data: data?.getVoucherRedemption.voucherRedemption
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getSubPackages = async (input: IGetSubPackagesRequest): Promise<ApiResponse<ISubPackage[]>> => {
        try {
            const { data, error } = await transactionService.getSubPackages({
                variables: input,
                fetchPolicy: "network-only"
            })
            if( error ) throw error
            return {
                success: true,
                data: data?.getSubPackages.subPackages
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getSubscription = async (input: IGetSubscriptionRequest): Promise<ApiResponse<ISubscription>> => {
        try {
            const { data, error } = await transactionService.getSubscription({
                variables: input,
                fetchPolicy: "network-only"
            })
            if( error ) throw error
            return {
                success: true,
                data: data?.getSubscription.subscription
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const getUserActiveSubscriptions = async (input: IGetUserActiveSubscriptionsRequest): Promise<ApiResponse<ISubscription[]>> => {
        try {
            const { data, error } = await transactionService.getUserActiveSubscriptions({
                variables: input,
                fetchPolicy: "network-only"
            })
            if( error ) throw error
            return {
                success: true,
                data: data?.getUserActiveSubscriptions.subscriptions
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const createSubscription = async (input: ICreateSubscriptionRequest): Promise<ApiResponse<ISubscription>> => {
        try {
            const { data, errors } = await transactionService.createSubscription({
                variables: input
            })
            if( errors?.[0] ) throw errors[0]
            setUserPremium("true")
            return {
                success: true,
                data: data?.createSubscription.subscription
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    const deleteSubscription = async (input: IDeleteSubscriptionRequest): Promise<ApiResponse<string>> => {
        try {
            const { data, errors } = await transactionService.deleteSubscription({
                variables: input
            })
            if( errors?.[0] ) throw errors[0]
            setUserPremium("false")
            return {
                success: true,
                data: data?.deleteSubscription.subscriptionId
            }
        }catch(e){
            return {
                err: (e as Error)
            }
        }
    }
    return {


        getUserActiveSubscriptions: (input: IGetUserActiveSubscriptionsRequest) => handleRequest(getUserActiveSubscriptions, input),
        getSubscription: (input: IGetSubscriptionRequest) => handleRequest(getSubscription, input),
        createSubscription: (input: ICreateSubscriptionRequest) => handleRequest(createSubscription, input),
        deleteSubscription: (input: IDeleteSubscriptionRequest) => handleRequest(deleteSubscription, input),

        getSubPackages: (input: IGetSubPackagesRequest) => handleRequest(getSubPackages, input),


        getVoucherRedemption: (input: IGetVoucherRedemptionRequest) => handleRequest(getVoucherRedemption, input),
        getVoucherRedemptions: (input: IGetVoucherRedemptionsRequest) => handleRequest(getVoucherRedemptions, input),
        createVoucherRedemption: (input: ICreateVoucherRedemptionRequest) => handleRequest(createVoucherRedemption, input),

        getVouchers: (input: IGetVouchersRequest) => handleRequest(getVouchers, input), 
        getVoucher: (input: IGetVoucherRequest) => handleRequest(getVoucher, input), 
        updateVoucher: (input: IUpdateVoucherRequest) => handleRequest(updateVoucher, input), 

        createTransaction: (input: ICreateTransactionRequest) => handleRequest(createTransaction, input), 
        deleteTransaction: (input: IDeleteTransactionRequest) => handleRequest(deleteTransaction, input),
        getTransactions: (input: IGetTransactionsRequest) => handleRequest(getTransactions, input),
        getUserTransactions: (input: IGetUserTransactionsRequest) => handleRequest(getUserTransactions, input),
        getUserTransactionsByTypes: (input: IGetUserTransactionsByTypesRequest) => handleRequest(getUserTransactionsByTypes, input),
        getUserTxSummariesByCategory: (input: IGetUserTxSummariesByCategoryRequest) => handleRequest(getUserTxSummariesByCategory, input),
        getTransaction: (input: IGetTransactionRequest) => handleRequest(getTransaction, input),
    }
}