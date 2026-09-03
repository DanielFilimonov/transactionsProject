import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";
import { getDateCalculate } from "./utils/dateUtils";
import { Transaction } from "../../types/tsTypes";

const selectTransactionsIds = (state: RootState) => state.transactions.ids;

const selectTransactionsEntities = (state: RootState) =>
	state.transactions.entities;

const selectPeriod = (state: RootState) => state.filters.period;

interface IStatsResult {
	incomeAmountSum: number;
	expenseAmountSum: number;
	balanceAmount: number;
	incomeAmountTransactions: Transaction[];
	expenseAmountTransactions: Transaction[];
	expensesByCategory: Record<string, number>;
}

interface ICategoryTotal {
	category: string;
	amount: number;
}

export const getFiltredTransactions = createSelector(
	[selectTransactionsIds, selectTransactionsEntities, selectPeriod],
	(ids, entities, period) => {
		const currentDate = getDateCalculate(period);

		return ids
			.map((id) => entities[id])
			.filter(
				(transaction) =>
					transaction && new Date(transaction.date) >= currentDate,
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
					result.incomeAmountSum += transaction.amount;
				} else if (transaction.type === "expense") {
					result.expenseAmountTransactions.push(transaction);
					result.expenseAmountSum += transaction.amount;
					result.expensesByCategory[transaction.category] =
						(result.expensesByCategory[transaction.category] ?? 0) +
						transaction.amount;
				}

				result.balanceAmount =
					result.incomeAmountSum - result.expenseAmountSum;

				return result;
			},
			{
				incomeAmountSum: 0,
				expenseAmountSum: 0,
				balanceAmount: 0,
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
