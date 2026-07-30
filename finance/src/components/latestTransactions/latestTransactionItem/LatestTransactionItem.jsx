import "./latestTransactionItem.css";

const LatestTransactionItem = ({
	transactionTitle,
	transactionCategory,
	transactionDate,
	transactionAmount,
}) => {
	return (
		<div className="latestTransactionItem__wrapper">
			<div className="latestTransactionItem__descriptions">
				<p className="latestTransactionItem__transactionTitle">
					{transactionTitle}
				</p>
				<div className="latestTransactionItem__category-date">
					<p className="latestTransactionItem__transactionCategory">
						{transactionCategory}
					</p>
					<p className="latestTransactionItem__transactionDate">
						{transactionDate}
					</p>
				</div>
			</div>

			<p className="latestTransactionItem__transactionAmount">
				{transactionAmount}
			</p>
		</div>
	);
};

export default LatestTransactionItem;
