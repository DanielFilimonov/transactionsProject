import { getErrorMessage } from "../../../api/apiError";
import { useGetStatsQuery } from "../../../api/apiSlice";
import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import QueryState from "../../queryState/QueryState";
import TotalAmountItem from "../totalAmountItem/TotalAmountItem";
import "./totalAmountBlock.css";

const TotalAmountBlock = () => {
	const period = useAppSelector((state) => state.filters.period);

	const { data: stats, isLoading, isError, error } = useGetStatsQuery(period);


	const statusText = isLoading
		? "Загрузка..."
		: isError
			? getErrorMessage(error)
			: null;

	const displayAmount = (value: number) => statusText ?? amountFormat(value);

	return (
		<div className="totalAmountBlock__wrapper">
			<QueryState isLoading={isLoading} isError={isError} error={error}>
				<TotalAmountItem
					amountTitle={"Баланс за период "}
					amount={displayAmount(stats?.balanceAmount ?? 0)}
					type={"balance"}
				/>
			</QueryState>

			<QueryState isLoading={isLoading} isError={isError} error={error}>
				<TotalAmountItem
					amountTitle={"Доходы "}
					amount={displayAmount(stats?.incomeAmountSum ?? 0)}
					type={"income"}
				/>
			</QueryState>

			<QueryState isLoading={isLoading} isError={isError} error={error}>
				<TotalAmountItem
					amountTitle={"Расходы "}
					amount={displayAmount(stats?.expenseAmountSum ?? 0)}
					type={"expense"}
				/>
			</QueryState>
		</div>
	);
};

export default TotalAmountBlock;
