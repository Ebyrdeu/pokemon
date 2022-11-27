import {Badge, Box, Button, Card, Group, Skeleton} from "@mantine/core";
import Image from "next/image";
import {useState} from "react";

import {NextPage} from "next";
import {trpc} from "@/utils/trpc";
import {MAX_POKEMONS} from "@/@constants";

const Pokemons: NextPage = () => {
  const rnd = Math.floor(Math.random() * MAX_POKEMONS) + 1;
  const [state, setState] = useState<number>(1);
  const {data} = trpc.pokemon.useQuery({id: state});
  const {mutate} = trpc.rating.useMutation();

  return (
      <Group sx={{height: "100vh"}} position={"center"} align={"center"}>
        <Card p="xl" radius="md" sx={{position: "relative"}}>
          <Group position={"center"}>
          <Badge sx={{width: 150}} variant="gradient" gradient={{from: "#ed6ea0", to: "#ec8c69", deg: 35}}>{data?.name}</Badge>
          </Group>
          <Box my={10} style={{width: 150, height: 150, position: "relative"}}>
            { data ? <Image width={150} height={150} alt={data?.name as string} src={data?.img}/> : <Skeleton   height={150} radius="md"/>}
          </Box>
          <Button.Group  onClick={() => setState(rnd)}>
            <Button
                variant="white"
                onClick={() =>  !data ? null : mutate({id: state, smash: data?.smash, pass: data?.pass + 1})}>Pass</Button>
            <Button
                variant="gradient"
                gradient={{from: "#ed6ea0", to: "#ec8c69", deg: 35}}
                onClick={() => !data ? null :  mutate({id: state, smash: data?.smash + 1, pass: data?.pass})}
            >Smash</Button>
          </Button.Group>
        </Card>
      </Group>
  );
};

export default Pokemons;
