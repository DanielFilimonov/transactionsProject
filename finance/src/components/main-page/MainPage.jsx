import AddTransactionBtn from "../addTransactionBtn/AddTransactionBtn";
import DateFiltersBlock from "../dateFilters/dateFiltersBlock";
import LatestTransactionsBlock from "../latestTransactions/latestTransactionsBlock";
import TotalAmountBlock from "../totalAmounts/TotalAmountBlock";
import TotalAmountsCategoriesBlock from "../totalAmountsCategories/TotalAmountsCategoriesBlock";


const MainPage = () => { 

  return (
		<div className="mainPage__wrapper">
			<div className="mainPage__header">
				<DateFiltersBlock />
				<AddTransactionBtn/>
			</div>
			<div className="mainPage__total-amount">
				<TotalAmountBlock />
			</div>
			<div className="mainPage__total-amount-category">
				<TotalAmountsCategoriesBlock />
			</div>
			<div className="mainPage__last-transactions">
				<LatestTransactionsBlock />
			</div>
		</div>
  );
}

export default MainPage;