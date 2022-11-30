import { merge } from "../trpc.server";
import { pokemonRouter } from "@/server/routers/pokemon";
import { ratingRouter } from "@/server/routers/rating";


export const appRouter = merge(pokemonRouter, ratingRouter);
// export type definition of API
export type AppRouter = typeof appRouter;
