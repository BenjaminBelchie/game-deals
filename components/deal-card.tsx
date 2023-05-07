import { Game } from "@/types/game";
import { buttonVariants } from "./ui/button";
import { dealLinkBaseUrl } from "@/util/cheapshark-url";

export function DealCard(game: Game){
    return(
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
                 href={`${dealLinkBaseUrl}${game.dealID}`}
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
    )
}