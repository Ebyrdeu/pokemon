import type {NextPage} from "next";
import {trpc} from "@/utils/trpc";



const Home: NextPage = () => {

  const pokemon = trpc.pokemon.useQuery({id: 1});
  if (!pokemon.data?.status) {
    return <div>Loading...</div>;
  }
  return (
      <div>
        <p>{pokemon.data?.data.name}</p>
      </div>
  );
};

export default Home;
