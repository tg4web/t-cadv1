import { router, publicProcedure } from "../trpc";

export const getUserRouter = router({
  getUser: publicProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx;
    const id = session?.user?.id;
    const DbUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return { user: DbUser };
  }),
  getUsers: publicProcedure.query(async ({ ctx }) => {
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
      },
    });

    return { users: DbUsers };
  }),
});
