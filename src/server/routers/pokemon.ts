import {z} from "zod";
import {procedure, router} from "../trpc";
import {prisma} from "@/server/utils";

export const pokemonRouter = router({
  pokemon: procedure.input(z.object({id: z.number()})).
      query(async ({input}) => await prisma.pokemons.findUnique({where: {id: input.id}})),
});

