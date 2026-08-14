import { useEffect } from "react";
import "./transactionAddedToast.css";

interface ToastProps {
	message: string;
	onClose: () => void;
	duration?: number;
}


const TransactionAddedToast = ({
	message,
	onClose,
	duration = 2000,
}: ToastProps) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => {
			clearTimeout(timer);
		};
	}, [onClose, duration]);

	return (
		<div className="toast__wrapper">
			<p className="toast__message">{message}</p>
			<button className="toast__closeBtn" onClick={onClose}>
				×
			</button>
		</div>
	);
};

export default TransactionAddedToast;
