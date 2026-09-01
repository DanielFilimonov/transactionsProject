import QueryState, { IQueryState } from "../../queryState/QueryState";
import "./totalAmountItem.css";

type TTransactionsType = "expense" | "income" | "balance";

interface ITotalAmountItemProps {
	amountTitle: string;
	amount: string;
	type: TTransactionsType;
	status: IQueryState;
}

const TotalAmountItem = ({
	amountTitle,
	amount,
	type,
	status
}: ITotalAmountItemProps) => {

	return (
		<div className="totalAmountItem__wrapper">
			<QueryState {...status}>
				<p className="totalAmountItem__title">{amountTitle}</p>
				<p className={`totalAmountItem__amount ${type}`}>{amount}</p>
			</QueryState>
		</div>
	);
};

export default TotalAmountItem;
