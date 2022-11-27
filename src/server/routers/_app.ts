import {merge} from "../trpc";
import {helloRouter} from "@/server/routers/hello";
import {pokemonRouter} from "@/server/routers/pokemon";
import {ratingRouter} from "@/server/routers/rating";

export const appRouter = merge(helloRouter, pokemonRouter, ratingRouter);
// export type definition of API
export type AppRouter = typeof appRouter;
