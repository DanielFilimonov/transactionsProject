import { useState } from "react";

import AddTransactionBtn from "../addTransactionBtn/AddTransactionBtn";
import DateFiltersBlock from "../dateFilters/dateFiltersBlock/DateFiltersBlock";
import LatestTransactionsBlock from "../latestTransactions/latestTransactionsBlock/LatestTransactionsBlock";
import TotalAmountBlock from "../totalAmounts/totalAmountBlock/TotalAmountBlock";
import TotalAmountsCategoriesBlock from "../totalAmountsCategories/totalAmountsCategoriesBlock/TotalAmountsCategoriesBlock";

import "./mainPage.css";
import ModalForm from "../modalForm/ModalForm";
import TransactionAddedToast from "../transactionAddedToast/transactionAddedToast";

const MainPage = () => {
	const [isShowModal, setShowModal] = useState(false);
	const [isToastVisible, setIsToastVisible] = useState(false);
	const handleTransactionSuccess = () => {
		setShowModal(false);
		setIsToastVisible(true);
	};
	return (
		<div className="mainPage__wrapper">
			<div className="mainPage__header">
				<DateFiltersBlock />
				<AddTransactionBtn onClick={() => setShowModal(true)} />
			</div>
			<TotalAmountBlock />
			<TotalAmountsCategoriesBlock />
			<LatestTransactionsBlock />
			{isShowModal && (
				<ModalForm
					onClose={() => setShowModal(false)}
					onTransactionSuccess={handleTransactionSuccess}
				/>
			)}
			{isToastVisible && (
				<TransactionAddedToast
					message="Транзакция успешно добавлена"
					onClose={() => setIsToastVisible(false)}
				/>
			)}
		</div>
	);
};

export default MainPage;
