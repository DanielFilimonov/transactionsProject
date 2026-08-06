import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import { getStats } from "../statsSelectors";
import TotalAmountItem from "../TotalAmountItem/TotalAmountItem";
import "./totalAmountBlock.css";

const TotalAmountBlock = () => {
	const stats = useAppSelector(getStats);

	return (
		<div className="totalAmountBlock__wrapper">
			<TotalAmountItem
				amountTitle={"Баланс за период "}
				amount={amountFormat(stats.balanceAmount)}
			/>
			<TotalAmountItem
				amountTitle={"Доходы "}
				amount={amountFormat(stats.incomeAmountSum)}
			/>
			<TotalAmountItem
				amountTitle={"расходы "}
				amount={amountFormat(stats.expenseAmountSum)}
			/>
		</div>
	);
};

export default TotalAmountBlock;
