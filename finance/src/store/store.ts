import { configureStore } from "@reduxjs/toolkit";

import transactionsReducer, {
} from "../features/transactions/transactionsSlice";
import filtersReducer from '../features/dateFilters/dateFiltersSlice'
import toastsReducer from '../features/toast/toastSlice'

const store = configureStore({
	reducer: {
		transactions: transactionsReducer,
		filters: filtersReducer,
		toasts: toastsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
