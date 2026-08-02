export interface Transaction {
	id: string;
	amount: number;
	type: string;
	category: string;
	date: string;
	title?: string;
}
