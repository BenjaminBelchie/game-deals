import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { dealsUrl } from "@/util/cheapshark-url"
import { Game } from "@/types/game";

async function getData() {
  const res = await fetch(dealsUrl);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
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
          Latest Deals
        </h1>
      </div>

      <div className="flex gap-4 flex-wrap">
        {data.map((game: Game) => (
          <div className="max-w-xs bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a
              href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
              target="_blank"
              rel="noreferrer">
                <img className="rounded-t-lg" src={game.thumb} alt="" style={{height:"250px", width:"100%", objectFit:"cover"}} />
            </a>
            <div className="p-5 flex flex-col justify-between"> 
              <div className=" flex flex-col ">
                <a 
                 href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
                 target="_blank"
                 rel="noreferrer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{game.title}</h5>
                </a>
              </div>
              <div className="mt-3 flex items-start flex-col">
                <span className="text-sm font-semibold">was</span><span className="font-bold text-xl  line-through">${game.normalPrice}</span><span className="text-sm font-semibold"></span>
                <span className="text-sm font-semibold">now</span>
                <div className="flex items-center justify-center">
                    <span className="font-bold text-xl text-[hsl(125,56%,39%)]">${game.salePrice}</span>
                    &nbsp;
                    <span className="h-5 px-2 py-1 leading-none bg-green-300 text-green-900 rounded-full font-semibold uppercase tracking-wide text-xs">-{Math.round(parseInt(game.savings))}%</span>
                </div>
              </div>
                <div className="flex mt-4">
                  <a
                      href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({ size: "sm" })}>
                      Get Deal
                      <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
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

