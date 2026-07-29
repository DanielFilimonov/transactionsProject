import LatestTransactionItem from "./latestTransactionItem";

const LatestTransactionsBlock = () => {
	return (
		<div className="latestTransactionsBlock__wrapper">
			<LatestTransactionItem
				transactionTitle={"Продукты"}
				transactionCategory={"Еда"}
				transactionDate={"25 июля"}
				transactionAmount={"2 400 руб"}
			/>
			<LatestTransactionItem
				transactionTitle={"Зарплата"}
				transactionCategory={"Доход "}
				transactionDate={"20 июля"}
				transactionAmount={"120 000 руб"}
			/>
			<LatestTransactionItem
				transactionTitle={"Кино"}
				transactionCategory={"Развлечения "}
				transactionDate={"18 июля"}
				transactionAmount={"1 200 руб"}
			/>
		</div>
	);
};

export default LatestTransactionsBlock;