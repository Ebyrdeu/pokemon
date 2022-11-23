import { z } from 'zod';
import { procedure, router } from '../trpc';
import {wrapSuccess} from "@/server/utils";
export const pokemonRouter = router({
  pokemon: procedure
  .input(
      z.object({
        id: z.number(),
      }),
  )
  .query(async ({ input }) => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.id}/`)
        .then(pok => pok.json() as Promise<Pokemon>)
    return wrapSuccess(pokemon)
  }),
});

