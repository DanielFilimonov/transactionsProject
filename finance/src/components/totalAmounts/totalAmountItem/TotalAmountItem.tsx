import "./totalAmountItem.css";

type TTransactionsType = "expense" | "income" | "balance";

interface ITotalAmountItemProps {
	amountTitle: string;
	amount: string;
	type: TTransactionsType;
}

const TotalAmountItem = ({
	amountTitle,
	amount,
	type,
}: ITotalAmountItemProps) => {
	return (
		<div className="totalAmountItem__wrapper">
			<p className="totalAmountItem__title">{amountTitle}</p>
			<p className={`totalAmountItem__amount ${type}`}>{amount}</p>
		</div>
	);
};

export default TotalAmountItem;
