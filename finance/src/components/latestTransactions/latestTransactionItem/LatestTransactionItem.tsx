import "./latestTransactionItem.css";

const LatestTransactionItem = ({
	transactionTitle,
	transactionCategory,
	transactionType,
	transactionDate,
	transactionAmount,
}) => {
	const transactionCategoryClass = () => {
		if (transactionType === "expense") {
			return "red";
		} else if (transactionType === "income") {
			return "green";
		}
	};

	const transactionCategorySign = () => {
		if (transactionType === "expense") {
			return "-";
		} else if (transactionType === "income") {
			return "+";
		}
	};

	return (
		<div className="latestTransactionItem__wrapper">
			<div className="latestTransactionItem__descriptions">
				<p className="latestTransactionItem__transactionTitle">
					{transactionTitle}
				</p>
				<div className="latestTransactionItem__category-date">
					{transactionCategory} · {transactionDate}
				</div>
			</div>

			<p
				className={`latestTransactionItem__transactionAmount ${transactionCategoryClass()}`}
			>
				{`${transactionCategorySign()} ${transactionAmount}`}
			</p>
		</div>
	);
};

export default LatestTransactionItem;
