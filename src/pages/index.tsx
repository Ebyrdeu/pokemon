import type {NextPage} from "next";
import {trpc} from "@/utils/trpc";
import {useState} from "react";
import {Button, Text} from "@mantine/core";



const Home: NextPage = () => {
  const [state, setState] = useState(1)
  const pokemon = trpc.pokemon.useQuery({id: state});
  if (!pokemon.data?.status) {
    return <div>Loading...</div>;
  }
  return (
      <div>
        <Button onClick={() => setState(prevState => prevState + 1)}>New Pokemon</Button>
        <Text fz={'xl'}>{pokemon.data?.data.name}</Text>
      </div>
  );
};

export default Home;
