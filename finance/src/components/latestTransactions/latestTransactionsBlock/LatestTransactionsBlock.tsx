import { useGetTransactionsQuery } from "../../../api/apiSlice";
import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import { dateFormat } from "../../../features/transactions/utils/dateFormat";
import QueryState from "../../common/queryState/QueryState";
import LatestTransactionItem from "../latestTransactionItem/LatestTransactionItem";
import "./latestTransactionsBlock.css";

const LatestTransactionsBlock = () => {
	const period = useAppSelector((state) => state.filters.period);

	const {
		data: transactions,
		isLoading,
		isError,
		error,
	} = useGetTransactionsQuery(period);

	return (
		<div className="latestTransactionsBlock__wrapper">
			<div className="latestTransactionsBlock__title">
				Последние транзакции
			</div>
			<div className="latestTransactionsBlock__list">
				<QueryState
					isLoading={isLoading}
					isError={isError}
					error={error}
				>
					{transactions?.map((transaction) => (
						<LatestTransactionItem
							key={transaction.id}
							transactionTitle={transaction.title}
							transactionCategory={transaction.category}
							transactionDate={dateFormat(transaction.date)}
							transactionAmount={amountFormat(transaction.amount)}
							transactionType={transaction.type}
						/>
					))}
				</QueryState>
			</div>
		</div>
	);
};

export default LatestTransactionsBlock;
