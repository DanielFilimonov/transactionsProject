import { PeriodType } from "../../tsTypes";

export const getDateCalculate = (period: PeriodType) => {
	const ourDate = new Date();

	switch (period) {
		case "month":
			return new Date(
				ourDate.getFullYear(),
				ourDate.getMonth() - 1,
				ourDate.getDate(),
			);
		case "halfyear":
			return new Date(
				ourDate.getFullYear(),
				ourDate.getMonth() - 6,
				ourDate.getDate(),
			);
		case "year":
			return new Date(
				ourDate.getFullYear() - 1,
				ourDate.getMonth(),
				ourDate.getDate(),
			);
	}
};
