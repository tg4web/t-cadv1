import {signOut, useSession, getSession } from "next-auth/react"
import { requireAuth } from "../../utils/requireAuth";
import type { NextPage } from "next";
import type { Session } from "next-auth";
import type { Context } from "../../server/trpc/context";
import Card from "../../components/Card";
import Menu from "../../components/Menu";
import Link from "next/link";

const DashboardSelect: NextPage = () => {

  return (
    <div className="flex h-screen w-full bg-primary">
      <div className="m-auto">
        <Card
          html={
            <div className="flex h-full w-full flex-col items-center justify-center p-8">
              <div className="pb-14">
                <h1 className="text-center text-3xl font-light">
                  What role would you like to <br /> access?
                </h1>
              </div>
              <Menu
                link1="/dashboard/civilian"
                link2="/dashboard/law-enforcement"
                link3="/dashboard/fire-rescue"
                link4="/dashboard/communications"
                link5="/dashboard/administration"
                title1="Civilian"
                title2="Law Enforcement"
                title3="Fire and EMS"
                title4="Communications"
                title5="Administration"
              />
            </div>
          }
        />
      </div>
    </div>
  );

}

export async function getServerSideProps(context: Context) {
  return requireAuth(context, ( session : Session) => {
    return {
      props: { session }
    }
  });
}

export default DashboardSelect