import * as yup from "yup";
import { EXPENSE_CATEGORIES } from "./expenseCategories";

export const transactionSchema = yup.object({
	title: yup
		.string()
		.trim()
		.required("Введите название")
		.max(50, "Название не должно превышать 50 символов")
		.matches(
			/^[а-яА-ЯёЁa-zA-Z\s-]+$/,
			"Название должно содержать только буквы",
		),

	amount: yup
		.number()
		.typeError("Сумма должна быть числом")
		.positive("Сумма должна быть больше 0")
		.required("Введите сумму")
		.max(100_000_000, "Сумма слишком большая"),

	type: yup
		.string()
		.oneOf(["income", "expense"], "Выберите тип")
		.required("Выберите тип"),

	category: yup
		.string()
		.trim()
		.required("Введите категорию")
		.when("type", {
			is: "expense",
			then: (schema) =>
				schema.oneOf(
					EXPENSE_CATEGORIES,
					"Выберите категорию из списка",
				),
		}),
});

export type TransactionFormValues = yup.InferType<typeof transactionSchema>;
