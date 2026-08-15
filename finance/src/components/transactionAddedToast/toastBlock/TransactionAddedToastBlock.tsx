import { useAppSelector } from "../../../app/hooks";
import TransactionAddedToast from "../toastItem/TransactionAddedToast";
import './TransactionAddedToastBlock.css'

const TransactionAddedToastBlock = () => {
	const toastIds = useAppSelector((state) => state.toasts.ids);

	return (
		<div className="toastContainer__wrapper">
			{toastIds.map((id) => (
				<TransactionAddedToast key={id} id={id} />
			))}
		</div>
	);
};

export default TransactionAddedToastBlock;
