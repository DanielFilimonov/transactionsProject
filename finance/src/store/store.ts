import { configureStore } from "@reduxjs/toolkit";

import transactionsReducer from "../features/transactions/transactionsSlice";
import filtersReducer from "../components/dateFilters/dateFiltersSlice";
import toastsReducer from "../components/transactionAddedToast/toastSlice";
import { apiTransactionsSlice } from "../api/apiTransactionsSlice";

const store = configureStore({
	reducer: {
		transactions: transactionsReducer,
		filters: filtersReducer,
		toasts: toastsReducer,
		[apiTransactionsSlice.reducerPath]: apiTransactionsSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiTransactionsSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
