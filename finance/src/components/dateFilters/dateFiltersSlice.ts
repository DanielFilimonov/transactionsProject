import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { DateFilterState, PeriodType } from "../../features/tsTypes";

const initialState: DateFilterState = {
	period: "month",
};

const dateFiltersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		periodChanged: (state, action: PayloadAction<PeriodType>) => {
			state.period = action.payload;
		},
	},
});

export const { periodChanged } = dateFiltersSlice.actions;
export default dateFiltersSlice.reducer;
