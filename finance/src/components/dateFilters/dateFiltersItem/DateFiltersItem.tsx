import { dateFiltersItemProps } from "../../../features/tsTypes";
import "./dateFiltersItem.css";

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
