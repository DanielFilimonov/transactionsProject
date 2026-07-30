import './TotalAmountItem.css'

const TotalAmountItem = ({ amountTitle, amount }) => {

  return (
		<div className="totalAmountItem__wrapper">
			<p className="totalAmountItem__title">{amountTitle}</p>
			<p className="totalAmountItem__amount">{amount}</p>
		</div>
  );
}

export default TotalAmountItem;