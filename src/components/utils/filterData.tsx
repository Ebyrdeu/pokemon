import { RowData } from "@/@types/types";
import { keys } from "@mantine/utils";

export const filterData = (data: RowData<string, number>[], search: string) => {
	const query = search.toLowerCase().trim();
	return data.filter((item) =>
		keys(data[0]).some((key) => item[key].toString().toLowerCase().includes(query)),
	);
};

