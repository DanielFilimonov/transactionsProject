const LatestTransactionItem = ({
	transactionTitle,
	transactionCategory,
	transactionDate,
	transactionAmount,
}) => {
  return (
		<div className="latestTransactionItem__wrapper">
			<p className="latestTransactionItem__transactionTitle">
				{transactionTitle}
			</p>
			<p className="latestTransactionItem__transactionCategory">
				{transactionCategory}
			</p>
			<p className="latestTransactionItem__transactionDate">
				{transactionDate}
			</p>
			<p className="latestTransactionItem__transactionAmount">
				{transactionAmount}
			</p>
		</div>
  );
};

export default LatestTransactionItem;