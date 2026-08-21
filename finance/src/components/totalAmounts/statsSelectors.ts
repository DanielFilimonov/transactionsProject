import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { getDateCalculate } from "../../features/transactions/utils/dateUtils";
import { Transaction } from "../../features/tsTypes";
import { apiTransactionsSlice } from "../../api/apiSlice";

const selectTransactionsResult =
	apiTransactionsSlice.endpoints.getTransactions.select();

const selectTransactions = createSelector(
	selectTransactionsResult,
	(result) => result.data ?? [],
);

const selectPeriod = (state: RootState) => state.filters.period;

interface IStatsResult {
	incomeAmountTransactions: Transaction[];
	expenseAmountTransactions: Transaction[];
	expensesByCategory: Record<string, number>;
}

interface ICategoryTotal {
	category: string;
	amount: number;
}

export const getFiltredTransactions = createSelector(
	[selectTransactions, selectPeriod],
	(transactions, period) => {
		const currentDate = getDateCalculate(period);

		return transactions.filter(
			(transaction) => new Date(transaction.date) >= currentDate,
		);
	},
);

export const getStats = createSelector(
	[getFiltredTransactions],
	(transactions): IStatsResult => {
		return transactions.reduce<IStatsResult>(
			(result, transaction) => {
				if (transaction.type === "income") {
					result.incomeAmountTransactions.push(transaction);
				} else if (transaction.type === "expense") {
					result.expenseAmountTransactions.push(transaction);
					result.expensesByCategory[transaction.category] =
						(result.expensesByCategory[transaction.category] ?? 0) +
						transaction.amount;
				}

				return result;
			},
			{
				incomeAmountTransactions: [],
				expenseAmountTransactions: [],
				expensesByCategory: {},
			},
		);
	},
);

export const getExpensesCategoriesToArr = createSelector(
	[getStats],
	(stats): ICategoryTotal[] => {
		return Object.entries(stats.expensesByCategory)
			.map(([category, amount]) => ({ category, amount }))
			.sort((a, b) => b.amount - a.amount);
	},
);
