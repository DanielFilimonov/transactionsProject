import { useGetStatsQuery } from "../../../api/apiSlice";
import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import TotalAmountItem from "../totalAmountItem/TotalAmountItem";
import "./totalAmountBlock.css";

const TotalAmountBlock = () => {
	const period = useAppSelector((state) => state.filters.period);

	const { data: stats } = useGetStatsQuery(period);

	const { balanceAmount, incomeAmountSum, expenseAmountSum } = stats ?? {};

	const hasInvalidAmount =
		(typeof balanceAmount !== "number" && undefined) ||
		(typeof incomeAmountSum !== "number" && undefined) ||
		(typeof expenseAmountSum !== "number" && undefined);

	return (
		<div className="totalAmountBlock__wrapper">
			<TotalAmountItem
				amountTitle={"Баланс за период "}
				amount={amountFormat(stats?.balanceAmount ?? 0)}
				type={"balance"}
			/>
			<TotalAmountItem
				amountTitle={"Доходы "}
				amount={amountFormat(stats?.incomeAmountSum ?? 0)}
				type={"income"}
			/>
			<TotalAmountItem
				amountTitle={"Расходы "}
				amount={amountFormat(stats?.expenseAmountSum ?? 0)}
				type={"expense"}
			/>
			{hasInvalidAmount  && <p>Неправильный формат данных</p>}
		</div>
	);
};

export default TotalAmountBlock;
