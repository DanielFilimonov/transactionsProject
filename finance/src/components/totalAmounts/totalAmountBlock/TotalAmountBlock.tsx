import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import { getBalance, getExpence, getIncome } from "../statsSelectors";
import TotalAmountItem from "../TotalAmountItem/TotalAmountItem";
import "./totalAmountBlock.css";

const TotalAmountBlock = () => {
	const balance = useAppSelector(getBalance);
	const income = useAppSelector(getIncome);
	const expence = useAppSelector(getExpence);

	return (
		<div className="totalAmountBlock__wrapper">
			<TotalAmountItem
				amountTitle={"Баланс за период "}
				amount={amountFormat(balance)}
			/>
			<TotalAmountItem
				amountTitle={"Доходы "}
				amount={amountFormat(income)}
			/>
			<TotalAmountItem
				amountTitle={"расходы "}
				amount={amountFormat(expence)}
			/>
		</div>
	);
};

export default TotalAmountBlock;
