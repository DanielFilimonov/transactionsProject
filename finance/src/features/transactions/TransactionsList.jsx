import { useSelector } from "react-redux";

import TransactionsItem from "./transactionsItem";

const TransactionsList = () => {
 
  const ids = useSelector(state => state.transactions.ids)

  return (
    <ul>
      {ids.map((id) => 
        <TransactionsItem key={id} id={id} />)}
    </ul>
  )
}

export default TransactionsList;