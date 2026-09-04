import "./TotalAmountItem.css";

interface ITotalAmountItemProps {
	amountTitle: string;
	amount: string;
	className?: string;
}

const TotalAmountItem = ({
	amountTitle,
	amount,
	className,
}: ITotalAmountItemProps) => {
	return (
		<div className="totalAmountItem__wrapper">
			<p className="totalAmountItem__title">{amountTitle}</p>
			<p className={`totalAmountItem__amount ${className}`}>{amount}</p>
		</div>
	);
};

export default TotalAmountItem;
