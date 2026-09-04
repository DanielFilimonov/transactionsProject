import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import DateFiltersItem from "../dateFiltersItem/DateFiltersItem";
import { periodChanged } from "../../../features/dateFilters/dateFiltersSlice";

import "./DateFiltersBlock.css";

const DateFiltersBlock = () => {

	const activeFilter = useAppSelector(state => state.filters.period)

	const dispatch = useAppDispatch()

	return (
		<div className="dateFiltersBlock__wrapper">
			<DateFiltersItem
				filterText={"Месяц"}
				isActive={activeFilter === "month"}
				onClick={() => dispatch(periodChanged("month"))}
			/>
			<DateFiltersItem
				filterText={"Полгода"}
				isActive={activeFilter === "halfyear"}
				onClick={() => dispatch(periodChanged("halfyear"))}
			/>
			<DateFiltersItem
				filterText={"Год"}
				isActive={activeFilter === "year"}
				onClick={() => dispatch(periodChanged("year"))}
			/>
		</div>
	);
};

export default DateFiltersBlock;
