import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { dealsBaseUrl } from "@/util/cheapshark-url"
import { Game } from "@/types/game";
import { DealCard } from "@/components/deal-card";

async function getData() {
  const res = await fetch(`${dealsBaseUrl}pageSize=8`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function IndexPage() {
  const data = await getData();
  return (
    <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">

      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Trending Deals
        </h1>
      </div>

      <div className="flex gap-4 flex-wrap">
        {data.map((game: Game) => (
          <DealCard {...game} />
         ))}

      </div>
      <SeeMore />

    </section>
  )
}

"use clien"
function SeeMore() {
  return <div className="flex justify-center">
    <a href="/deals/latest" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-4 rounded-full w-fit">
      See More
    </a>
  </div>;
}

