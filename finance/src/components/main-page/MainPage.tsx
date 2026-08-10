import { useState } from "react";

import AddTransactionBtn from "../addTransactionBtn/AddTransactionBtn";
import DateFiltersBlock from "../dateFilters/dateFiltersBlock/DateFiltersBlock";
import LatestTransactionsBlock from "../latestTransactions/latestTransactionsBlock/LatestTransactionsBlock";
import TotalAmountBlock from "../totalAmounts/totalAmountBlock/TotalAmountBlock";
import TotalAmountsCategoriesBlock from "../totalAmountsCategories/totalAmountsCategoriesBlock/TotalAmountsCategoriesBlock";

import "./mainPage.css";
import ModalForm from "../modalForm/ModalForm";

const MainPage = () => {
	const [isShowModal, setShowModal] = useState(false);

	return (
		<div className="mainPage__wrapper">
			<div className="mainPage__header">
				<DateFiltersBlock />
				<AddTransactionBtn onClick={() => setShowModal(true)} />
			</div>
			<TotalAmountBlock />
			<TotalAmountsCategoriesBlock />
			<LatestTransactionsBlock />
			{isShowModal && <ModalForm onClose={() => setShowModal(false)} />}
		</div>
	);
};

export default MainPage;
