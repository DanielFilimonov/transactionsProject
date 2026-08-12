import "./totalAmountCategoryItem.css";

interface TotalAmountCategoryItemProps {
	categoryCategory: string;
	categoryAmount: string;
	percentage: number;
}

const TotalAmountCategoryItem = ({
	categoryCategory,
	categoryAmount,
	percentage,
}: TotalAmountCategoryItemProps) => {
	return (
		<div className="totalAmountCategoryItem__wrapper">
			<p className="totalAmountCategoryItem__title">{categoryCategory}</p>
			<div className="totalAmountCategoryItem__track">
				<div
					className="totalAmountCategoryItem__fill"
					style={{ width: `${percentage}%` }}
				/>
			</div>
			<p className="totalAmountCategoryItem__amount">{categoryAmount}</p>
		</div>
	);
};

export default TotalAmountCategoryItem;