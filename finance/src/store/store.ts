import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer, {
} from "../features/transactions/transactionsSlice";
import filtersReducer from '../components/dateFilters/dateFiltersSlice'

const store = configureStore({
	reducer: {
		transactions: transactionsReducer,
		filters: filtersReducer
	 },
	
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
