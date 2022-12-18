import { useState } from "react";

export default function Card(data: { html: any }) {
  const { html } = data;

  return (
    <div className="rounded-lg w-full bg-cardBackground p-4 shadow-lg">
      <div className="flex items-center justify-center">
        <div className="flex">
          <div className="">
            <div className="flex flex-col items-center justify-center">
              <div className="">{html}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
