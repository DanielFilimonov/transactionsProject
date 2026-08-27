import { getErrorMessage } from "../../../api/apiError";
import { useGetStatsQuery } from "../../../api/apiSlice";
import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
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
	const amountClassName = (className: string) =>
		statusText ? undefined : className;

	return (
		<div className="totalAmountBlock__wrapper">
			<TotalAmountItem
				amountTitle={"Баланс за период "}
				amount={displayAmount(stats?.balanceAmount ?? 0)}
			/>
			<TotalAmountItem
				amountTitle={"Доходы "}
				amount={displayAmount(stats?.incomeAmountSum ?? 0)}
				className={amountClassName("green")}
			/>
			<TotalAmountItem
				amountTitle={"Расходы "}
				amount={displayAmount(stats?.expenseAmountSum ?? 0)}
				className={amountClassName("red")}
			/>
		</div>
	);
};

export default TotalAmountBlock;
