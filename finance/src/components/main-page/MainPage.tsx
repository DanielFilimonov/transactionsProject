import AddTransactionBtn from "../addTransactionBtn/AddTransactionBtn";
import DateFiltersBlock from "../dateFilters/dateFiltersBlock/DateFiltersBlock";
import LatestTransactionsBlock from "../latestTransactions/latestTransactionsBlock/LatestTransactionsBlock";
import TotalAmountBlock from "../totalAmounts/totalAmountBlock/TotalAmountBlock";
import TotalAmountsCategoriesBlock from "../totalAmountsCategories/totalAmountsCategoriesBlock/TotalAmountsCategoriesBlock";


import "./mainPage.css";

const MainPage = () => {
	return (
		<div className="mainPage__wrapper">
			<div className="mainPage__header">
				<DateFiltersBlock />
				<AddTransactionBtn />
			</div>
				<TotalAmountBlock />
				<TotalAmountsCategoriesBlock />
				<LatestTransactionsBlock />
		</div>
	);
};

export default MainPage;
