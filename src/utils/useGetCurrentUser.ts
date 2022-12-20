import type { User } from '@prisma/client';
import { useRef } from 'react';
import { useGetUsers } from './getUsers';



const useGetCurrentUser = () => {

    const userslist2 = useRef<any>(null);
    const users2 = useGetUsers();
    if (users2) {
      userslist2.current = users2;
      const currentUser2 = userslist2.current.find(findUser);
      function findUser(user: User) {
        return user === user;
      }
      return currentUser2;
    }
    return users2
}

export default useGetCurrentUser;