/* eslint-disable @next/next/no-img-element */
"use client"
import { Game } from "@/types/game"
import { dealLinkBaseUrl } from "@/util/cheapshark-url";
import { useEffect, useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import Color, { useColor } from 'color-thief-react';

type Props = {
    deals: Game[],
}



const DealsCarousel = (props: Props) => {
    const deals = props.deals;
    const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random()*deals.length));

    const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? deals.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
    const isLastSlide = currentIndex === deals.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    };
      
    return(
            <div className='group relative h-[500px] w-[330px] px-4 lg:h-[650px] lg:w-[750px]'>

                <a href={`${dealLinkBaseUrl}${deals[currentIndex].dealID}`} target="_blank" rel="noreferrer">
                <div
                    style={{ backgroundImage: `url(${deals[currentIndex].thumb})`}}
                    className='h-full w-full rounded-2xl bg-white/30 bg-cover bg-center bg-no-repeat backdrop-blur-sm duration-500'>

                    </div>
                </a>
                {/* Left Arrow */}
                <div className='absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>
    )
};

export default DealsCarousel;