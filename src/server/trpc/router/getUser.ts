import { router, publicProcedure, protectedProcedure} from "../trpc";
import { z } from "zod";

export const getUserRouter = router({
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx;
    const id = session?.user?.id;
    const DbUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return { user: DbUser };
  }),
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx;
    const DbUsers = await prisma.user.findMany({
      orderBy: {
        emailVerified: "desc",
      },
      select: {
        name: true,
        email: true,
        username: true,
        image: true,
        id: true,
        role: true,
        accepted: true,
      },
      
    })
    return { users: DbUsers };
  }),
  getUsersQuery: protectedProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const { prisma, session } = ctx;
    const id = input;
    const User = await prisma.user.findUnique({
      where: {
        id: id,
      }})
    return { user: User };
  }),
      
});
  