import { z } from 'zod';
import { procedure, router } from '../trpc';
export const helloRouter = router({
  greeting: procedure
  .input(
      z.object({
        text: z.string(),
      }),
  )
  .query(({ input }) => {
    return {
      greeting: `hello ${input.text}`,
    };
  }),
});

