"use client";

import { AddLinkForm } from "@/components/addLinkForm/addLinkForm";
import { Clock } from "@/components/clock/Clock";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [linkList, setLinkList] = useState(["https://ui.shadcn.com/themes"]);
  return (
    <main className="p-24 mx-auto max-w-5xl space-y-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Today
        </h1>
        <Clock />
      </div>
      <section className="">
        <AddLinkForm linkList={linkList} setLinkList={setLinkList} />
      </section>
      <section>
        <div className="rounded-xl border bg-card text-card-foreground shadow mt-12 p-4 space-y-4">
          <h3 className="font-semibold">Zen</h3>
          <div className="space-y-4">
            {linkList.map(link => (
              <div key={link} className="border-b last:border-0 pb-3 last:pb-0">
                <SavedLinkRow link={link} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const SavedLinkRow = ({ link }: { link: string }) => (
  <div className="flex">
    <Link
      href="https://ui.shadcn.com/"
      target="_blank"
      className="text-blue-500 hover:underline"
    >
      {link}
    </Link>
  </div>
);
