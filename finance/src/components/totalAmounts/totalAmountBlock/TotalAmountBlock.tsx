import { useGetStatsQuery } from "../../../api/apiSlice";
import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import { IQueryState } from "../../queryState/QueryState";
import TotalAmountItem from "../totalAmountItem/TotalAmountItem";
import "./totalAmountBlock.css";

const TotalAmountBlock = () => {
	const period = useAppSelector((state) => state.filters.period);

	const { data: stats, isLoading, isError, error } = useGetStatsQuery(period);

	const { balanceAmount, incomeAmountSum, expenseAmountSum } = stats ?? {};

const isDataEmpty =
	!isLoading &&
	!isError &&
	(typeof balanceAmount !== "number" ||
		typeof incomeAmountSum !== "number" ||
		typeof expenseAmountSum !== "number");

	  const status: IQueryState = {
			isLoading,
			isError,
			error,
			isDataEmpty,
		};
	
	return (
		<div className="totalAmountBlock__wrapper">
			<TotalAmountItem
				amountTitle={"Баланс"}
				amount={amountFormat(stats?.balanceAmount)}
				type={"balance"}
				status={status}
			/>
			<TotalAmountItem
				amountTitle={"Доходы"}
				amount={amountFormat(stats?.incomeAmountSum)}
				type={"income"}
				status={status}
			/>
			<TotalAmountItem
				amountTitle={"Расходы"}
				amount={amountFormat(stats?.expenseAmountSum)}
				type={"expense"}
				status={status}
			/>
		</div>
	);
};

export default TotalAmountBlock;
