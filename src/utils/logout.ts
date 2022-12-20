import { signOut } from "next-auth/react";

async function logout() {
  await signOut({ callbackUrl: "/" });
  return;
}

export default logout;
