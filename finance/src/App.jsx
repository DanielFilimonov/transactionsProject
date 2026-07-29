import MainPage from "./components/main-page/MainPage";
import TransactionsForm from "./features/transactions/TransactionsForm";
import TransactionsList from "./features/transactions/transactionsList";

const App = () => {
  return (
		<div>
			<MainPage />
			<TransactionsForm />
			<TransactionsList />
		</div>
  );
 
}

export default App;
