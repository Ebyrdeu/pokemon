import { z } from "zod";
import { procedure, router } from "../trpc.server";
import { prisma } from "@/server/utils";

export const pokemonRouter = router({
	pokemon: procedure.input(z.object({ id: z.number() })).query(async ({ input }) => await prisma.pokemons.findUnique({ where: { id: input.id } })),
	pokemons: procedure.query(async () => await prisma.pokemons.findMany()),
});

