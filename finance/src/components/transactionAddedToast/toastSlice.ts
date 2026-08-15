import {
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit";
import { ToastNotification } from "../../features/tsTypes";


const toastsAdapter = createEntityAdapter<ToastNotification>();

const toastsSlice = createSlice({
	name: "toasts",
	initialState: toastsAdapter.getInitialState(),
	reducers: {
		toastAdded: toastsAdapter.addOne,
		toastRemoved: toastsAdapter.removeOne,
	},
});

export const { toastAdded, toastRemoved } = toastsSlice.actions;
export default toastsSlice.reducer;
