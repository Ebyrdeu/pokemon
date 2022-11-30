import { z } from "zod";
import { procedure, router } from "../trpc.server";
import { prisma } from "@/server/utils";

export const ratingRouter = router({
	rating: procedure.input(
		z.object({
			id: z.number(),
			rate: z.union([z.literal('smash'), z.literal('pass')])
		}),
	).mutation(async ({ input }) => await prisma.pokemons.updateMany({
		where: {
			id: input.id,
		},
		data: {
			...(input.rate === 'smash' && {
				smash: {
					increment: 1
				}
			}),
			...(input.rate === 'pass' && {
				pass: {
					increment: 1
				}
			})
		}
	})),
});

