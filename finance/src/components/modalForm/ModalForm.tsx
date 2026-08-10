import TransactionsForm from "../../features/transactions/transictionsForm/TransactionsForm";
import "./modalForm.css";

interface TransactionModalProps {
	onClose: () => void;
}

const ModalForm = ({ onClose }: TransactionModalProps) => {
	return (
		<div className="transactionModal__overlay" onClick={onClose}>
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
				<TransactionsForm />
			</div>
		</div>
	);
};

export default ModalForm;
