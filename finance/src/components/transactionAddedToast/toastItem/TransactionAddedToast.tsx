import { useEffect } from "react";
import "./transactionAddedToast.css";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { toastRemoved } from "../../../features/toast/toastSlice";

interface ToastProps {
	id: string;
}

const TransactionAddedToast = ({ id }: ToastProps) => {

		const toast = useAppSelector((state) => state.toasts.entities[id]);
		const dispatch = useAppDispatch();

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(toastRemoved(id));
		}, 10000);

		return () => clearTimeout(timer);
	}, [id, dispatch]);

	if (!toast) return null;

	return (
		<div className="toast__wrapper">
			<p className="toast__message">{toast.message}</p>
			<button
				className="toast__closeBtn"
				onClick={() => dispatch(toastRemoved(id))}
			>
				×
			</button>
		</div>
	);
};

export default TransactionAddedToast;
