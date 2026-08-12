import { getCategoryIcon } from "../../../features/transactions/categoryIcons";
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

	const Icon = getCategoryIcon(transactionCategory);

	return (
		<div className="latestTransactionItem__wrapper">
			<div className="latestTransactionItem__left">
				<div className="latestTransactionItem__icon">
					<Icon size={18} stroke={1.5} />
				</div>
				<div className="latestTransactionItem__descriptions">
					<p className="latestTransactionItem__transactionTitle">
						{transactionTitle}
					</p>
					<div className="latestTransactionItem__category-date">
						{transactionCategory} · {transactionDate}
					</div>
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
