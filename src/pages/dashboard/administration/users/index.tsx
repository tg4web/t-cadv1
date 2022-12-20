import { signOut } from "next-auth/react";
import { requireAuth } from "../../../../utils/requireAuth";
import type { NextPage } from "next";
import type { Session } from "next-auth";
import type { Context } from "../../../../server/trpc/context";
import Menu from "../../../../components/Menu";
import Card from "../../../../components/Card";
import { useEffect } from "react";
import useGetUsers from "../../../../utils/getUsers";
import type { User } from "@prisma/client";
import IsAdmin from "../../../../utils/isAdmin";
import { useRouter } from "next/router";

const AdminPage: NextPage = () => {
  const dbUsers = useGetUsers();

  useEffect(() => {
    if (dbUsers) {
      const table = document.getElementById("tbody");
      const thead = document.getElementById("thead");
      if (table === null || thead === null) {
        return;
      }
      table.innerHTML = "";
      thead.innerHTML = "";

      for (const header of Object.keys(dbUsers[0]!)) {
        const td = document.createElement("td");
        td.innerHTML = header.toLocaleUpperCase();
        td.className = "text-center border-r border-b border-border ";
        thead?.appendChild(td);
      }
      for (const user of dbUsers as unknown as User[]) {
        const tr = document.createElement("tr");
        const del = document.createElement("button");
        for (const value of Object.values([
          user.email,
          user.name,
          user.username,
          user.image,
        ])) {
          const td = document.createElement("td");
          const id = document.createElement("td");
          td.innerHTML = value as any;
          td.className =
            "text-center break-all border-border border-b border-r border-opacity-40 w-52 max-w-52 min-w-52";
          del.className =
            "p-1 m-1 w-fit rounded-md bg-secondary text-xs text-white";
          id.className = "hidden";
          id.innerText = user.id;
          del.innerText = "Profile";
          del.onclick = () => {
            window.location.href = `/dashboard/administration/users/${user.id}`;
          };
          tr.appendChild(td);
          tr.appendChild(del);
        }
        table?.appendChild(tr);
      }
    }
  }, [dbUsers]);

  if (!IsAdmin) {
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
              <button type="button" className="">
                <span>{"<-" + " Back"}</span>
              </button>
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
            <div className="ml-14 flex w-full flex-col items-center justify-center rounded-md border-2 border-border border-opacity-40 bg-cardBackground shadow-xl">
              <div className="rounded-md border-2 border-border border-opacity-40">
                <table className="max-w-3xl">
                  <thead className=" w-full text-2xl" id="thead"></thead>
                  <tbody className="w-full" id="tbody"></tbody>
                </table>
              </div>
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
