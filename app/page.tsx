import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { dealLinkBaseUrl, dealsBaseUrl } from "@/util/cheapshark-url"
import { Game } from "@/types/game";
import { DealCard } from "@/components/deal-card";
import Carousel from "@/components/carousel";
import HighlightedDeals from "@/components/highlighted-deals";

async function getFeaturedDeals() {
  const res = await fetch(dealsBaseUrl);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

async function getHighlightedDeals() {
  const res = await fetch(`${dealsBaseUrl}pageSize=4`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function IndexPage() {
  const data: Game[] = await getFeaturedDeals();
  const highlightedDeals: Game[] = await getHighlightedDeals();

  return (
    <section className="container flex flex-col items-start justify-start gap-6 pb-8 pt-6 md:py-10">

      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Trending Deals
        </h1>
      </div>

      <div className="my-4 flex w-full flex-col justify-center py-3 md:flex-row md:justify-between">
        <Carousel deals={data}/>
        <HighlightedDeals deals={highlightedDeals}/>
      </div>

      <div className="flex w-full items-center justify-center">
        <a href="/deals/latest" className="w-fit rounded-full bg-primary px-4 py-2 font-bold text-primary-foreground hover:bg-primary/90">
          See More
        </a>
      </div>
    </section>
  )
}

