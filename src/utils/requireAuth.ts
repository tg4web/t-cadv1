import { getSession } from "next-auth/react";
import type { Context } from "../server/trpc/context";

export async function requireAuth(context: Context, cb: CallableFunction) {
  
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return cb({ session });
}
