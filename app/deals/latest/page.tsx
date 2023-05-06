import { DealCard } from "@/components/deal-card";
import { Game } from "@/types/game";
import { dealsBaseUrl } from "@/util/cheapshark-url";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



async function getData() {
    const res = await fetch(dealsBaseUrl);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }



export default async function LatestDealsPage() {
    const deals = await getData();

    // const genres = [
    //     {name: "Action", value: "action",},
    //     {name: "Adventure", value: "adventure",},
    //     {name: "FPS & Shooter", value: "shooter",},
    //     {name: "RPG", value: "rpg",},
    //     {name: "Simulator", value: "simulator",},
    //     {name: "Indie", value: "indie",},
    //     {name: "Casual", value: "casual",},
    //     {name: "MMO", value: "mmo",},
    //     {name: "Sports", value: "sports",},
    //     {name: "Arcade", value: "arcade",},
    //     {name: "Strategy", value: "strategy",},
    //     {name: "Racing", value: "racing",},
    //     {name: "Fighting", value: "fighting",},
    //     {name: "Economy", value: "economy",},
    //   ]

    return(
        <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl">
                Latest Offers
                </h1>
            </div>

            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <Input type="search" className="block w-full p-4 h-14 pl-10" placeholder="Search Games"/>
                    {/* <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required /> */}
                    <button type="submit" className="absolute right-2.5 bottom-2.5 bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
                
            {/* <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {genres.map((genre) => (
                            <SelectItem value={genre.value}>{genre.name}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select> */}

            <div className="flex gap-4 flex-wrap">
                {deals.map((game: Game) => (
                    <DealCard {...game} />
                ))}
            </div>
        </section>
    )
}