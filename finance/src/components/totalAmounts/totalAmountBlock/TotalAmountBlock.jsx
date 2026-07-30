

import TotalAmountItem from "../TotalAmountItem/TotalAmountItem";
import "./totalAmountBlock.css";

const TotalAmountBlock = () => {

  return (
		<div className="totalAmountBlock__wrapper">
			<TotalAmountItem
				amountTitle={"баланс за месяц "}
				amount={"42 300 руб"}
			/>
			<TotalAmountItem amountTitle={"доходы "} amount={"120 000 руб"} />
			<TotalAmountItem amountTitle={"расходы "} amount={"77 700 руб"} />
		</div>
  );
}

export default TotalAmountBlock;