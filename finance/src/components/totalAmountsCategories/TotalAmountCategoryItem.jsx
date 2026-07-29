const TotalAmountCategoryItem = ({categotyTitle, categoryAmount}) => {

  return (
		<div className="totalAmountCategoryItem__wrapper">
			<p className="totalAmountCategoryItem__title">{categotyTitle}</p>
			<div className="totalAmountCategoryItem__count-bar">Ползунок счетчик</div>
			<p className="totalAmountCategoryItem__amount">{categoryAmount}</p>
		</div>
  );
}

export default TotalAmountCategoryItem;