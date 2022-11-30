import type { NextPage } from "next";
import { MAX_POKEMONS } from "@/@constants";
import { useState } from "react";
import { trpc } from "@/utils/trpc.hoc";
import { Badge, Box, Button, Card, Group, Skeleton } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
	const rnd = Math.floor(Math.random() * MAX_POKEMONS) + 1;
	const [pokemonId, setPokemonId] = useState<number>(rnd);

	// data
	const { data } = trpc.pokemon.useQuery({ id: pokemonId }, {
		refetchOnWindowFocus: false,
		refetchInterval: false,
		refetchOnMount: false,
	});
	const { mutate } = trpc.rating.useMutation({
		onSuccess: () => setPokemonId(rnd),
	});

	const handleSmash = () => !data ? null : mutate({ id: pokemonId, rate: "smash" });
	const handlePass = () => !data ? null : mutate({ id: pokemonId, rate: "pass" });

	return (
		<Group sx={{ height: "100vh", flexDirection: "column" }} position={"center"} align={"center"}>
			<Group position={"center"}>
				<Badge sx={{ width: 150 }} variant="gradient" gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}>
					<Link style={{ textDecoration: "none", color: "white" }} href={"/rating"}>Rating</Link>
				</Badge>
			</Group>
			<Card p="xl" radius="md" sx={{ position: "relative" }}>
				<Group position={"center"}>
					<Badge sx={{ width: 150 }} variant="gradient" gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}>{data?.name}</Badge>
				</Group>
				<Box my={10} style={{ width: 150, height: 150, position: "relative" }}>
					{data ? <Image width={150} height={150} alt={data?.name as string} src={data?.img}/> : <Skeleton height={150} radius="md"/>}
				</Box>
				<Button.Group>
					<Button
						sx={{ flexGrow: 1 }}
						variant="white"
						onClick={() => handlePass()}>Pass</Button>
					<Button
						variant="gradient"
						gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
						onClick={() => handleSmash()}>Smash</Button>
				</Button.Group>
			</Card>
		</Group>
	);
};

export default Home;
