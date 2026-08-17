export type PeriodType = "month" | "halfyear" | "year";

export const isPeriodType = (value: unknown): value is PeriodType =>
	value === "month" || value === "halfyear" || value === "year";

export const getPeriodStart = (period: PeriodType): Date => {
	const now = new Date();

	switch (period) {
		case "month":
			return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
		case "halfyear":
			return new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
		case "year":
			return new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
	}
};
