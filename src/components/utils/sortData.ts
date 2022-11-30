import { RowData, SortDataPayload } from "@/@types/types";
import { filterData } from "@/components/utils/filterData";

export const sortData = (data: RowData<string, number>[], payload: SortDataPayload) => {

	const { sortBy } = payload;

	if (!sortBy) {
		return filterData(data, payload.search);
	}

	return filterData(
		[...data].sort((a: any, b: any) => {
			if (payload.reversed) {
				if (typeof b[sortBy] === "string") return b[sortBy].localeCompare(a[sortBy].toString());
				return a[sortBy] - b[sortBy];
			}

			if (typeof b[sortBy] === "string") return a[sortBy].localeCompare(b[sortBy].toString());
			return b[sortBy] - a[sortBy];
		}),
		payload.search,
	);
};
