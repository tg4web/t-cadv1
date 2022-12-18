import { signOut, useSession, getSession } from "next-auth/react";
import { requireAuth } from "../../utils/requireAuth";
import type { NextPage } from "next";
import type { Session } from "next-auth";
import type { Context } from "../../server/trpc/context";
import Menu from "../../components/Menu";
import Link from "next/link";
import Card from "../../components/Card";

const AdminPage: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-primary p-8">
      <Card
        html={
          <div className="m-auto flex h-full flex-col items-center justify-center">
            <h1 className="mb-16 text-center text-3xl font-light">
              What role would you like to <br /> access?
            </h1>
            <Menu
              link1="/dashboard/admin"
              link2="/dashboard/teacher"
              link3="/dashboard/student"
              link4="/dashboard/teacher"
              link5="/dashboard/student"
              title1="Users"
              title2="10-Codes"
              title3="AOPs"
              title4="Record Search"
              title5="CAD Settings"
            />
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
