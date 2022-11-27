import {z} from "zod";
import {procedure, router} from "../trpc";
import {prisma} from "@/server/utils";

export const ratingRouter = router({
  rating: procedure.input(
      z.object({
        id: z.number(),
        smash: z.number(),
        pass: z.number(),
      }),
  ).mutation(async ({input}) => await prisma.pokemons.updateMany({
    where: {
      id: input.id,
    },
    data: {
      smash: input.smash,
      pass: input.pass,
    },
  })),
});

