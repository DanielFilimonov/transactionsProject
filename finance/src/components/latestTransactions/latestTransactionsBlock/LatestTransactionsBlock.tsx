import { useAppSelector } from "../../../app/hooks";
import LatestTransactionItem from "../latestTransactionItem/LatestTransactionItem";
import "./latestTransactionsBlock.css";

const LatestTransactionsBlock = () => {
	const transactionsId = useAppSelector((state) => state.transactions.ids);
	const transactionsEntities = useAppSelector((state) => state.transactions.entities);

	const transactionItemRender = transactionsId.map(id => {
		const transiction = transactionsEntities[id]
		return (
			<LatestTransactionItem
				transactionTitle={transiction.title}
				transactionCategory={transiction.category}
				transactionDate={transiction.date}
				transactionAmount={`${transiction.amount} руб`}
			/>
		);
	})

	console.log(transactionsId);

	return (
		<div className="latestTransactionsBlock__wrapper">
			{transactionItemRender}
		</div>
	);
};

export default LatestTransactionsBlock;
