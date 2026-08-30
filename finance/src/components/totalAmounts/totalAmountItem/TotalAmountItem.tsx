import { useGetStatsQuery } from "../../../api/apiSlice";
import { useAppSelector } from "../../../app/hooks";
import QueryState from "../../queryState/QueryState";
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

	const period = useAppSelector((state) => state.filters.period);
	const { isLoading, isError, error } = useGetStatsQuery(period);

	return (
		<div className="totalAmountItem__wrapper">
			<QueryState isLoading={isLoading} isError={isError} error={error}>
				<p className="totalAmountItem__title">{amountTitle}</p>
				<p className={`totalAmountItem__amount ${type}`}>{amount}</p>
			</QueryState>
		</div>
	);
};

export default TotalAmountItem;
