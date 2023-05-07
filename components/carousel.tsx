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
            <div className='group relative h-[500px] w-[330px] px-4 lg:h-[635px] lg:w-[750px]'>

                <a href={`${dealLinkBaseUrl}${deals[currentIndex].dealID}`} target="_blank" rel="noreferrer">
                <div
                    style={{ backgroundImage: `url(${deals[currentIndex].thumb})`}}
                    className='w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat duration-500 backdrop-blur-sm bg-white/30'>

                    </div>
                </a>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>
    )
};

export default DealsCarousel;