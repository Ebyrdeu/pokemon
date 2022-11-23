import {merge} from "../trpc";
import {helloRouter} from "@/server/routers/hello";
import {pokemonRouter} from "@/server/routers/pokemon";

export const appRouter = merge(helloRouter, pokemonRouter);
// export type definition of API
export type AppRouter = typeof appRouter;
