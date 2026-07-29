import TotalAmountCategoryItem from "./TotalAmountCategoryItem"

const TotalAmountsCategoriesBlock = () => {

  return (
		<div className="TotalAmountsCategoriesBlock__ wrapper">
			<p className="TotalAmountsCategoriesBlock__title">Расходы по категориям</p>
			<TotalAmountCategoryItem
				categotyTitle={"еда"}
				categoryAmount={"26 400 руб"}
			/>
			<TotalAmountCategoryItem
				categotyTitle={"транспорт"}
				categoryAmount={"15 900 руб"}
			/>
			<TotalAmountCategoryItem
				categotyTitle={"развлечения"}
				categoryAmount={"9 600 руб"}
			/>
		</div>
  );
}

export default TotalAmountsCategoriesBlock;