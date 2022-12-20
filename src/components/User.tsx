import { getSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

export async function CheckUser() {
  async function getActiveSession() {
    const session = await getSession();

    if (!session) {
      return;
    }
    const currentSessionUser = session.user;

    return currentSessionUser as object;
  }

  const account = await getActiveSession();

  console.log(account?.id);

  const id = account?.id;

  const user = trpc.getUser.getUser.useQuery({ id });

  return user;
}

export default CheckUser;
