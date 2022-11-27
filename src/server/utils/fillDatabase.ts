import {prisma} from "@/server/utils/prisma.db";

export const fillDatabase = async () => {

  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(res => res.json());

  const pokemonsWithImages = pokemons.results.map((pokemon: {id: number, name: string, img: string}, index : number) => ({
    id: index + 1,
    name: pokemon.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index +
    1}.png`,
  }));

  await prisma.pokemons.createMany({data: pokemonsWithImages});
};
