import { useSelector } from "react-redux";

const TransactionsItem = ({id}) => {
  const transaction = useSelector(state => state.transactions.entities[id])

  return (
		<li>
			{transaction.category} {transaction.amount} {transaction.type}
		</li>
  );
}

export default TransactionsItem;