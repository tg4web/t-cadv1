import { router } from "../trpc";
import { authRouter } from "./auth";
import { getUserRouter } from "./getUser";

export const appRouter = router({
  auth: authRouter,
  getUser: getUserRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
