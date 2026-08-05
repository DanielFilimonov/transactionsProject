import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";
import { getDateCalculate } from "../../features/transactions/utils/dateUtils";

const selectTransactionsIds = (state: RootState) => state.transactions.ids;

const selectTransactionsEntities = (state: RootState) =>
	state.transactions.entities;

const selectPeriod = (state: RootState) => state.filters.period;

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



export const getIncome = createSelector(
	[getFiltredTransactions],
	(transactions) => {
		return transactions
			.filter((transaction) => transaction.type === "income")
			.reduce((sum, transaction) => sum + transaction.amount, 0);
	},
);

export const getExpence = createSelector(
	[getFiltredTransactions],
	(transactions) => {
		return transactions
			.filter((transaction) => transaction.type === "expense")
			.reduce((sum, transaction) => sum + transaction.amount, 0);
	},
);

export const getBalance = createSelector(
	[getIncome, getExpence],
	(income, expence) => income - expence,
);
