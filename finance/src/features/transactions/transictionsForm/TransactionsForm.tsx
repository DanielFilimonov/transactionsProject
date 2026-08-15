import { nanoid } from "@reduxjs/toolkit";
import { transactionsAdded } from "../transactionsSlice";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../app/hooks";
import {
	transactionSchema,
	type TransactionFormValues,
} from "./formValidation";
import { yupResolver } from "@hookform/resolvers/yup";

import './transictionsForm.css'
import { INCOME_CATEGORY } from "./incomeCategories";
import { EXPENSE_CATEGORIES } from "./expenseCategories";
import { toastAdded } from "../../../components/transactionAddedToast/toastSlice";

interface TransactionsFormProps {
	onSuccess?: () => void;
}

const TransactionsForm = ({ onSuccess }: TransactionsFormProps) => {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<TransactionFormValues>({
		resolver: yupResolver(transactionSchema),
	});

const selectedType = watch("type");

const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
	const value = e.target.value;
	if (value === "income") {
		setValue("category", INCOME_CATEGORY);
	} else {
		setValue("category", "");
	}
};

	const onSubmit = (data: TransactionFormValues) => {
		dispatch(
			transactionsAdded({
				id: nanoid(),
				amount: Number(data.amount),
				type: data.type,
				title: data.title,
				category: data.category,
				date: new Date().toISOString(),
			}),
		);
		dispatch(
			toastAdded({
				id: nanoid(),
				message: "Транзакция успешно добавлена",
			}),
		);
		reset();
		onSuccess?.();
	};

	return (
		<form className="transactionsForm" onSubmit={handleSubmit(onSubmit)}>
			<div className="transactionsForm__field">
				<label htmlFor="title">Название</label>
				<input id="title" {...register("title")} />
				{errors.title && (
					<p className="transactionsForm__error">
						{errors.title.message}
					</p>
				)}
			</div>

			<div className="transactionsForm__field">
				<label htmlFor="amount">Сумма</label>
				<input id="amount" type="number" {...register("amount")} />
				{errors.amount && (
					<p className="transactionsForm__error">
						{errors.amount.message}
					</p>
				)}
			</div>

			<div className="transactionsForm__field">
				<label htmlFor="type">Доход/Расход</label>
				<select
					id="type"
					{...register("type", { onChange: handleTypeChange })}
				>
					<option value="">Выберите тип</option>
					<option value="income">Доход</option>
					<option value="expense">Расход</option>
				</select>
				{errors.type && (
					<p className="transactionsForm__error">
						{errors.type.message}
					</p>
				)}
			</div>

			{selectedType === "expense" && (
				<div className="transactionsForm__field">
					<label htmlFor="category">Категория</label>
					<select id="category" {...register("category")}>
						<option value="">Выберите категорию</option>
						{EXPENSE_CATEGORIES.map((cat) => (
							<option key={cat} value={cat}>
								{cat}
							</option>
						))}
					</select>
					{errors.category && (
						<p className="transactionsForm__error">
							{errors.category.message}
						</p>
					)}
				</div>
			)}

			<button type="submit" className="transactionsForm__submit">
				Добавить транзакцию
			</button>
		</form>
	);
};

export default TransactionsForm;
