export interface Transaction {
	id: string;
	amount: number;
	type: 'expense' | 'income';
	category: string;
	date: string;
	title?: string;
}

export type PeriodType = 'month' | 'halfyear' | 'year'

export interface DateFilterState {
	period: PeriodType
}

export interface dateFiltersItemProps {
	filterText: string;
	isActive: boolean;
	onClick: () => void
}