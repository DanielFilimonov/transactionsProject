import { useEffect } from "react";
import TransactionsForm from "../../features/transactions/transictionsForm/TransactionsForm";
import "./modalForm.css";

interface TransactionModalProps {
	onClose: () => void;
	onTransactionSuccess: () => void;
}

const ModalForm = ({
	onClose,
	onTransactionSuccess,
}: TransactionModalProps) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	const handleOverlayMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className="transactionModal__overlay"
			onMouseDown={handleOverlayMouseUp}
		>
			<div
				className="transactionModal__content"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					className="transactionModal__closeBtn"
					onClick={onClose}
				>
					×
				</button>
				<TransactionsForm onSuccess={onTransactionSuccess} />
			</div>
		</div>
	);
};

export default ModalForm;
