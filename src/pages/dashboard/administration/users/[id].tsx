import type { NextPage } from "next";
import { trpc } from "../../../../utils/trpc";
import Card from "../../../../components/Card";
import { useRouter } from "next/router";

const UserPage: NextPage = () => {

    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    const user = trpc.getUser.getUsersQuery.useQuery(id as string)
      .data?.user;

if (user) {
  return (
    <div className="flex h-screen w-full bg-primary p-8">
      <Card
        html={
          <div className="">
            <h1 className="text-2xl font-bold">
              {user.name}&apos;s Profile Page
            </h1>
            <p>{user.email}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.role}</p>
            <p>{user.image}</p>
            <p>{user.id}</p>
          </div>
        }
      />
    </div>
  );
}
  
}

export default UserPage;