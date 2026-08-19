import { useGetTransactionsQuery } from "../../../api/apiTransactionsSlice";
import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import { dateFormat } from "../../../features/transactions/utils/dateFormat";
import LatestTransactionItem from "../latestTransactionItem/LatestTransactionItem";
import "./latestTransactionsBlock.css";

const LatestTransactionsBlock = () => {

	const { data: transactions } = useGetTransactionsQuery('')
	
	console.log( transactions)

	const transactionsId = useAppSelector((state) => state.transactions.ids);
	const transactionsEntities = useAppSelector((state) => state.transactions.entities);

	const transactionItemRender = transactionsId.map(id => {
		const transiction = transactionsEntities[id]
		return (
			<LatestTransactionItem
				key={id}
				transactionTitle={transiction.title}
				transactionCategory={transiction.category}
				transactionDate={dateFormat(transiction.date)}
				transactionAmount={amountFormat(transiction.amount)}
				transactionType={transiction.type}
			/>
		);
	})

	return (
		<div className="latestTransactionsBlock__wrapper">
			<p className="latestTransactionsBlock__title">
				Последние транзакции
			</p>
			{transactionItemRender}
		</div>
	);
};

export default LatestTransactionsBlock;
