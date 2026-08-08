import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import { getStats } from "../statsSelectors";
import TotalAmountItem from "../totalAmountItem/TotalAmountItem";
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
				className={'green'}
			/>
			<TotalAmountItem
				amountTitle={"Расходы "}
				amount={amountFormat(stats.expenseAmountSum)}
				className={'red'}
			/>
		</div>
	);
};

export default TotalAmountBlock;
