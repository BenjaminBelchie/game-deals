import { Game } from "@/types/game";
import { Store } from "@/types/store";
import { dealLinkBaseUrl } from "@/util/cheapshark-url";
import {
    Tv2,
  } from "lucide-react"

type Props = {
    deals: Game[];
    stores: Store[];
}

export default function HighlightedDeals(props: Props){
    const deals = props.deals;
    const stores = props.stores;
    return(
        <div className="flex flex-col">
          {deals.map((deal) => (
            <a href={`${dealLinkBaseUrl}${deal.dealID}`} target="_blank" rel="noreferrer" className=" my-1 flex flex-col items-start rounded-lg border border-gray-200 bg-white p-8 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row md:p-0 md:items-center">
              <div style={{backgroundImage: `url(${deal.thumb})`}} className="h-[125px] w-[270px] rounded-lg bg-cover bg-center duration-500 lg:m-3 md:w-[150px]"/>
              <div className="flex flex-col leading-normal lg:p-4">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{deal.title}</h5>
                  <div className="flex gap-2">
                    <Tv2 size={18} className="mt-1" />
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{stores.find(store => store.storeID === deal.storeID )?.storeName }</p>
                </div>
                <div className="flex">
                    <span className="font-bold text-xl text-[hsl(125,56%,39%)]">{deal.salePrice === "0.00" ? "Free" : `$${deal.salePrice}`}</span>
                    &nbsp;
                    <span className="h-5 px-2 py-1 leading-none bg-green-300 text-green-900 rounded-full font-semibold uppercase tracking-wide text-xs">-{Math.round(parseInt(deal.savings))}%</span>
                </div>
              </div>
          </a>
          ))}
        </div>
    )
}