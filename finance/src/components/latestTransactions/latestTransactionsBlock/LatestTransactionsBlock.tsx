import { useGetTransactionsQuery } from "../../../api/apiSlice";
import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import { dateFormat } from "../../../features/transactions/utils/dateFormat";
import LatestTransactionItem from "../latestTransactionItem/LatestTransactionItem";
import "./latestTransactionsBlock.css";

const LatestTransactionsBlock = () => {
	const {
		data: transactions,
		isLoading,
		isFetching,
		isError,
		error,
	} = useGetTransactionsQuery();

	let content;

	if (isLoading) {
		content = <p>Идет загрузка транзакций...</p>;
	} else if (isError) {
		content = <p>Произошла ошибка данных</p>;
	} else {
		content = transactions?.map((transaction) => {
			return (
				<LatestTransactionItem
					key={transaction.id}
					transactionTitle={transaction.title}
					transactionCategory={transaction.category}
					transactionDate={dateFormat(transaction.date)}
					transactionAmount={amountFormat(transaction.amount)}
					transactionType={transaction.type}
				/>
			);
		});
	}

	return (
		<div className="latestTransactionsBlock__wrapper">
			<div className="latestTransactionsBlock__title">
				Последние транзакции
			</div>
			{content}
		</div>
	);
};

export default LatestTransactionsBlock;
