import { trpc } from "./trpc";
import { useRef } from "react";

export function useGetUsers() {
  const usersList = useRef("");
  usersList.current = trpc.getUser.getUsers.useQuery().data
    ?.users as unknown as string;

  return usersList.current;
}

export default useGetUsers;
