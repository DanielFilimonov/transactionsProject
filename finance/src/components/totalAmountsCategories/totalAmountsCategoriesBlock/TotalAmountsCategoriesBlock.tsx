import { useAppSelector } from "../../../app/hooks";
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
				categoryAmount={category.amount}
			/>
		);
	})

  return (
		<div className="totalAmountsCategoriesBlock__6wrapper">
			<p className="TotalAmountsCategoriesBlock__title">
				Расходы по категориям
			</p>
			{categoryRender}
		</div>
  );
}

export default TotalAmountsCategoriesBlock;