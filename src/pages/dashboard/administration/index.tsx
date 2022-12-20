import { signOut } from "next-auth/react";
import { requireAuth } from "../../../utils/requireAuth";
import type { NextPage } from "next";
import type { Session } from "next-auth";
import type { Context } from "../../../server/trpc/context";
import Menu from "../../../components/Menu";
import Card from "../../../components/Card";

import { trpc } from "../../../utils/trpc";

const AdminPage: NextPage = () => {
  const { data: user } = trpc.getUser.getUser.useQuery();

  if (!user) {
    return null;
  }

  const loggedInUser = user.user;

  const id = loggedInUser?.id;
  const name = loggedInUser?.name;
  const email = loggedInUser?.email;
  const image = loggedInUser?.image;
  const role = loggedInUser?.role;

  if (role !== "admin") {
    return (
      <div className="flex h-screen w-full bg-primary p-8">
        <Card
          html={
            <div className="">
              <p>You do not have permission to view this page</p>
            </div>
          }
        />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col bg-primary p-8">
      <Card
        html={
          <div className="flex h-full w-full justify-between p-10">
            <div className="fixed top-12 right-12 ">
              <button type="button" onClick={() => {
                window.history.back();
              }} className=""><span>{'<-' + ' Back'}</span></button>
            </div>
            
            <div className="flex h-full flex-col justify-between">
              <h1 className="text-center text-3xl font-light">
                Administration
              </h1>
              <Menu
                height="h-full"
                width="w-full"
                link1="/dashboard/administration/users"
                link2="/dashboard/teacher"
                link3="/dashboard/student"
                link4="/dashboard/teacher"
                link5="/dashboard/teacher"
                title1="Users"
                title2="10-Codes"
                title3="AOPs"
                title4="Record Search"
                title5="CAD Settings"
              />
              <button type="button" onClick={() => signOut()}>
                Sign Out
              </button>
            </div>
            <div className="ml-14 w-full rounded-md border-2 border-border border-opacity-40 bg-cardBackground shadow-xl">
              <p>
                Hello {name}
                <br />
                <br />
                Here is some user info:
                <br />
                <br />
                id: {id}
                <br />
                email: {email}
                <br />
                profile pic: {image}
                <br />
                role: {role}
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export async function getServerSideProps(context: Context) {
  return requireAuth(context, (session: Session) => {
    return {
      props: { session },
    };
  });
}

export default AdminPage;
