import { dateFiltersItemProps } from "../../../types/tsTypes";
import "./DateFiltersItem.css";

const DateFiltersItem = ({
	filterText,
	isActive,
	onClick,
}: dateFiltersItemProps) => {
	return (
		<button
			className={`dateFiltersItem__wrapper ${isActive ? "active" : ""}`}
			onClick={() => onClick()}
		>
			{filterText}
		</button>
	);
};

export default DateFiltersItem;
