import { createEntityAdapter, createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "../../types/tsTypes";

const transactionsAdapter = createEntityAdapter<Transaction>();

const fakeInitialState: Transaction[] = [
	{
		id: nanoid(),
		amount: 500,
		type: "expense",
		category: "Еда",
		title: "Продукты",
		date: new Date().toISOString(),
	},
	{
		id: nanoid(),
		amount: 120000,
		type: "income",
		category: "Зарплата",
		title: "доход",
		date: new Date().toISOString(),
	},
	{
		id: nanoid(),
		amount: 1200,
		type: "expense",
		category: "Развлечения",
		title: "Кино",
		date: new Date().toISOString(),
	},
	{
		id: nanoid(),
		amount: 3400,
		type: "expense",
		category: "Транспорт",
		title: "Такси",
		date: new Date().toISOString(),
	},
	{
		id: nanoid(),
		amount: 500,
		type: "expense",
		category: "Еда",
		title: "Продукты",
		date: "2026-01-05T11:27:18.429Z",
	},
	{
		id: nanoid(),
		amount: 1000,
		type: "income",
		category: "подработка",
		title: "доход",
		date: "2026-02-05T11:27:18.429Z",
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
