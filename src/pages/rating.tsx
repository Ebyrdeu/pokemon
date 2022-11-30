import { ChangeEvent, useState } from "react";
import { Badge, ScrollArea, Table, Text, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { trpc } from "@/utils/trpc.hoc";
import Image from "next/image";
import { RowData } from "@/@types/types";
import { sortData } from "@/src/components/utils";
import Th from "@/components/Th";

const Rating = () => {

	const [search, setSearch] = useState<string>("");
	const [sortedData, setSortedData] = useState<RowData<string, number>[] | null> (null);
	const [sortBy, setSortBy] = useState<keyof RowData<string, number> | null>(null);
	const [reverseSortDirection, setReverseSortDirection] = useState<boolean>(false);

	const { data } = trpc.pokemons.useQuery(undefined, {
		refetchInterval: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		cacheTime: 0,
		onSuccess: (data: RowData<string, number>[]) => setSortedData(data),
	});


	if (!data) return;

	const setSorting = (field: keyof RowData<string, number>) => {
		const reversed = field === sortBy ? !reverseSortDirection : false;
		setReverseSortDirection(reversed);
		setSortBy(field);
		setSortedData(sortData(data, { sortBy: field, reversed, search }));
	};

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget;
		setSearch(value);
		setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
	};

	const rows = sortedData?.map(({ name, img, id, smash, pass }) => (
		<tr key={name}>
			<td>
				<Image width={50} height={50}
				       src={img}
				       alt={name}/>
			</td>
			<td>
				<Badge sx={{ width: 55 }} variant="gradient" gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}>#{id}</Badge>
			</td>
			<td>{name.toUpperCase().replace(/-/g, " ")}</td>
			<td>{smash}</td>
			<td>{pass}</td>
		</tr>
	));

	const filteredData = rows === undefined ? null : rows.length > 0 ? rows : (<tr>
		<td colSpan={Object.keys(data[0]).length}>
			<Text weight={500} align="center">
				Nothing found
			</Text>
		</td>
	</tr>);

	return (
		<ScrollArea sx={{ height: "100vh" }}>
			<TextInput
				placeholder="Search by any field"
				mb="md"
				icon={<IconSearch size={14} stroke={1.5}/>}
				value={search}
				onChange={handleSearchChange}
			/>
			<Table
				horizontalSpacing="md"
				verticalSpacing="xs"
				sx={{ tableLayout: "fixed", minWidth: 700 }}
			>
				<thead>
				<tr>
					<Th
						sorted={sortBy === "img"}
						reversed={reverseSortDirection}
						onSort={() => setSorting("img")}
					>
						Image
					</Th>
					<Th
						sorted={sortBy === "id"}
						reversed={reverseSortDirection}
						onSort={() => setSorting("id")}
					>
						ID
					</Th>
					<Th
						sorted={sortBy === "name"}
						reversed={reverseSortDirection}
						onSort={() => setSorting("name")}
					>
						Name
					</Th>
					<Th
						sorted={sortBy === "smash"}
						reversed={reverseSortDirection}
						onSort={() => setSorting("smash")}
					>
						Smash
					</Th>
					<Th
						sorted={sortBy === "pass"}
						reversed={reverseSortDirection}
						onSort={() => setSorting("pass")}
					>
						Pass
					</Th>
				</tr>
				</thead>
				<tbody>
				{filteredData}
				</tbody>
			</Table>
		</ScrollArea>
	);
};

export default Rating;
