import DateFiltersItem from "../DateFiltersItem/DateFiltersItem";

import "./dateFiltersBlock.css";

const DateFiltersBlock = () => {
	return (
		<div className="dateFiltersBlock__wrapper">
			<DateFiltersItem filterText={"Месяц"} />
			<DateFiltersItem filterText={"Полгода"} />
			<DateFiltersItem filterText={"Год"} />
		</div>
	);
};

export default DateFiltersBlock;
