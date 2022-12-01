import type { NextPage } from "next";
import { MAX_POKEMONS } from "@/@constants";
import React, { useState } from "react";
import { trpc } from "@/utils/trpc.hoc";
import { ActionIcon, Anchor, Badge, Box, Button, Card, Group, Skeleton } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub, IconMedal } from "@tabler/icons";

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
		<Group sx={{ height: "100vh", }} position={"center"} align={"center"}>
			<Group sx={{flexDirection: 'column'}}>
					<Link style={{ textDecoration: "none", color: "white" }} href={"/rating"}>
						<ActionIcon variant="outline" >
							<IconMedal size={18} />
						</ActionIcon>
					</Link>
				<Anchor href={'https://github.com/Ebyrdeu/pokemon'} target={'_blank'}>
					<ActionIcon variant="outline" >
						<IconBrandGithub size={18} />
					</ActionIcon>
				</Anchor>
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
