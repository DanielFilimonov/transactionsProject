import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import { getExpensesCategoriesToArr } from "../../totalAmounts/statsSelectors";
import TotalAmountCategoryItem from "../totalAmountCategoryItem/TotalAmountCategoryItem";

import "./totalAmountsCategoriesBlock.css";

const TotalAmountsCategoriesBlock = () => {

	const categoryList = useAppSelector(getExpensesCategoriesToArr)

	const categoryRender = categoryList.map(category => {
		return (
			<TotalAmountCategoryItem
				key={category.category}
				categoryCategory={category.category}
				categoryAmount={amountFormat(category.amount)}
			/>
		);
	})

  return (
		<div className="totalAmountsCategoriesBlock__wrapper">
			<p className="totalAmountsCategoriesBlock__title">
				Расходы по категориям
			</p>
			<p className="totalAmountsCategoriesBlock__category-wrapper">
				{categoryRender}
			</p>
		</div>
  );
}

export default TotalAmountsCategoriesBlock;