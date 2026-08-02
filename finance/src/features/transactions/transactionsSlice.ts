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
		date: "2026-07-25",
	},
	{
		id: "2",
		amount: 120000,
		type: "income",
		category: "Зарплата",
		title: "доход",
		date: "2026-07-20",
	},
	{
		id: "3",
		amount: 1200,
		type: "expense",
		category: "Развлечения",
		title: "Кино",
		date: "2026-07-18",
	},
	{
		id: "4",
		amount: 3400,
		type: "expense",
		category: "Транспорт",
		title: "Такси",
		date: "2026-07-15",
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
