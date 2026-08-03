import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "../tsTypes";

const transactionsAdapter = createEntityAdapter<Transaction>();

const fakeInitialState: Transaction[] = [
	{
		id: "1",
		amount: 500,
		type: "expense",
		category: "Еда",
		title: "Продукты",
		date: new Date().toISOString(),
	},
	{
		id: "2",
		amount: 120000,
		type: "income",
		category: "Зарплата",
		title: "доход",
		date: new Date().toISOString(),
	},
	{
		id: "3",
		amount: 1200,
		type: "expense",
		category: "Развлечения",
		title: "Кино",
		date: new Date().toISOString(),
	},
	{
		id: "4",
		amount: 3400,
		type: "expense",
		category: "Транспорт",
		title: "Такси",
		date: new Date().toISOString(),
	},
];

const transactionsSlice = createSlice({
	name: "transactions",
	initialState: transactionsAdapter.getInitialState({}, fakeInitialState),
	reducers: {
		transactionsAdded: transactionsAdapter.addOne,
		transactionsDeleted: transactionsAdapter.removeOne,
		transactionsUpdated: transactionsAdapter.updateOne,
	},
});

export const { transactionsAdded, transactionsDeleted, transactionsUpdated } =
	transactionsSlice.actions;

export default transactionsSlice.reducer;
