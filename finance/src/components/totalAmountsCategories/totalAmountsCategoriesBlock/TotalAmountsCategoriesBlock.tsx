import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import { getExpensesCategoriesToArr } from "../../../features/transactions/statsSelectors";
import TotalAmountCategoryItem from "../totalAmountCategoryItem/TotalAmountCategoryItem";

import "./totalAmountsCategoriesBlock.css";

const TotalAmountsCategoriesBlock = () => {
	const categoryList = useAppSelector(getExpensesCategoriesToArr);

	const totalExpenses = categoryList.reduce(
		(sum, category) => sum + category.amount,
		0,
	);

	const categoryRender = categoryList.map((category) => {
		const percentage =
			totalExpenses > 0 ? (category.amount / totalExpenses) * 100 : 0;
		return (
			<TotalAmountCategoryItem
				key={category.category}
				categoryCategory={category.category}
				categoryAmount={amountFormat(category.amount)}
				percentage={percentage}
			/>
		);
	});

	return (
		<div className="totalAmountsCategoriesBlock__wrapper">
			<div className="totalAmountsCategoriesBlock__title">
				Расходы по категориям
			</div>
			<div className="totalAmountsCategoriesBlock__category-wrapper">
				{categoryRender}
			</div>
		</div>
	);
};

export default TotalAmountsCategoriesBlock;
