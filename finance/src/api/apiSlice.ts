import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PeriodType, Transaction } from "../features/tsTypes";

type TNewTransaction = Omit<Transaction, 'id'>

interface IStatsResponse{
	incomeAmountSum: number;
	expenseAmountSum: number;
	balanceAmount: number;
	expensesByCategory: Record<string, number>;
}


export const apiTransactionsSlice = createApi({
	reducerPath: "api",
	tagTypes: ["Transactions", 'Stats'],
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
	endpoints: (builder) => ({
		getTransactions: builder.query<Transaction[], PeriodType>({
			query: (period) => ({
				url: "/transactions",
				params: { period },
			}),
			providesTags: ["Transactions"],
		}),
		addTransaction: builder.mutation<Transaction, TNewTransaction>({
      query: (newTransaction) => ({
        url:'/transactions',
        method: "POST",
        body: newTransaction,
      }),
      invalidatesTags: ['Transactions', "Stats"]
		}),
		getStats: builder.query<IStatsResponse, PeriodType>({
			query: (period) => ({
				url: '/stats',
				params: {period},
			}),
			providesTags: ['Stats']
		})
	}),
});

export const { useGetTransactionsQuery, useAddTransactionMutation, useGetStatsQuery } = apiTransactionsSlice;