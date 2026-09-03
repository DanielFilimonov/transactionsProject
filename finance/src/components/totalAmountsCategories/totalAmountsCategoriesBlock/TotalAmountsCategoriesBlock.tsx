import { useGetStatsQuery } from "../../../api/apiSlice";
import { useAppSelector } from "../../../app/hooks";
import { amountFormat } from "../../../features/transactions/utils/amountFormat";
import QueryState from "../../common/queryState/QueryState";
import TotalAmountCategoryItem from "../totalAmountCategoryItem/TotalAmountCategoryItem";

import "./totalAmountsCategoriesBlock.css";

const TotalAmountsCategoriesBlock = () => {
	const period = useAppSelector((state) => state.filters.period);
	const { data: stats, isLoading, isError, error } = useGetStatsQuery(period);

	const categoryList = Object.entries(stats?.expensesByCategory ?? {})
		.map(([category, amount]) => ({ category, amount }))
		.sort((a, b) => b.amount - a.amount);

	const totalExpenses = stats?.expenseAmountSum

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
			<QueryState isLoading={isLoading} isError={isError} error={error}>
				<div className="totalAmountsCategoriesBlock__category-wrapper">
					{categoryRender}
				</div>
			</QueryState>
		</div>
	);
};

export default TotalAmountsCategoriesBlock;
