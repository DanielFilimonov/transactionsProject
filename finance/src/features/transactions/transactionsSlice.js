import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const transactionsAdapter = createEntityAdapter();

const transactionsSlice = createSlice({
	name: "transactions",
	initialState: transactionsAdapter.getInitialState(),
	reducers: {
		transactionsAdded: transactionsAdapter.addOne,
		transactionsDeleted: transactionsAdapter.removeOne,
		transactionsUpdated: transactionsAdapter.updateOne,
	},
});

export const { transactionsAdded, transactionsDeleted, transactionsUpdated } =
	transactionsSlice.actions;

export default transactionsSlice.reducer;
