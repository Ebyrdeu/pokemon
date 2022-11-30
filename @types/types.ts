import { ReactNode } from "react";

export interface RowData<T, U> {
	id: U;
	name: T;
	smash: U;
	pass: U;
	img: T;
}

export interface SortDataPayload {
	sortBy: keyof RowData<string, number> | null;
	reversed: boolean;
	search: string;
}

export interface ThProps {
	children: ReactNode;
	reversed: boolean;
	sorted: boolean;
	onSort: () => void;
}
