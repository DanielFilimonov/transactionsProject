import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { transactionsAdded } from "./transactionsSlice";

const TransactionsForm = () => {

  const [amount, setAmount] = useState('')
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const heandleSubmit = (e) => {
    e.preventDefault();
    dispatch(
		transactionsAdded({
			id: nanoid(),
			amount: Number(amount),
			type,
			category,
			date: new Date().toISOString().slice(0, 10),
		}),
	);
  }

  return (
		<form onSubmit={heandleSubmit}>
			<label htmlFor="amount">Cумма:</label>
			<input
				type="text"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<label htmlFor="type">Доход/Расход:</label>
			<input
				type="text"
				value={type}
				onChange={(e) => setType(e.target.value)}
			/>
			<label htmlFor="category">Категория</label>
			<input
				type="text"
				value={category}
				onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Отправить</button>
		</form>
  );
}

export default TransactionsForm;