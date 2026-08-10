import "./addTransactionBtn.css";

interface IAddTransactionBtnProps {
	onClick: () => void;
}

const AddTransactionBtn = ({ onClick }: IAddTransactionBtnProps) => {
	return <button className="addTransactionBtn" onClick={onClick}>+ Добавить транзакцию</button>;
};

export default AddTransactionBtn;
