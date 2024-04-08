'use client'
import coral from '@/assets/coral.png';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import emblaCarouselAutoScroll from 'embla-carousel-auto-scroll';
export default function Partners() {
    const plugin = useRef(emblaCarouselAutoScroll({ speed: 1, loop: true, containScroll: false }));
    useEffect(() => {
        /*   if (plugin.current && !plugin.current.isPlaying())
              plugin.current.play() */
    }, [])
    return (
        <div className='w-full flex flex-col gap-y-16 items-center mb-20'>
            <span className='md:text-3xl lg:text-8xl text-6xl text-light-yellow font-extrabold tracking-wider drop-shadow-lg font-impact'>PARCEIROS</span>
            <Carousel
                opts={{
                    align: "center",
                    justify: "center"
                }}
                plugins={[plugin.current]}
                className="w-full"
            >
                <CarouselContent className='-ml-10'>
                    <CarouselItem className="  md:basis-1/2 lg:basis-1/3 pl-10 drop-shadow-md cursor-pointer">
                        <Image src={coral} className='lg:w-[200px] lg:h-[200px] md:w-[100px] md:h-[100px] w-[160px] h-[160px]' />
                    </CarouselItem>
                    <CarouselItem className=" md:basis-1/2 lg:basis-1/3 pl-10 drop-shadow-md cursor-pointer">
                        <Image src={coral} className='lg:w-[200px] lg:h-[200px] md:w-[100px] md:h-[100px] w-[160px] h-[160px]' />
                    </CarouselItem>
                    <CarouselItem className=" md:basis-1/2 lg:basis-1/3 pl-10 drop-shadow-md cursor-pointer">
                        <Image src={coral} className='lg:w-[200px] lg:h-[200px] md:w-[100px] md:h-[100px] w-[160px] h-[160px]' />
                    </CarouselItem>
                    <CarouselItem className=" md:basis-1/2 lg:basis-1/3 pl-10 drop-shadow-md cursor-pointer">
                        <Image src={coral} className='lg:w-[200px] lg:h-[200px] md:w-[100px] md:h-[100px] w-[160px] h-[160px]' />
                    </CarouselItem>
                    <CarouselItem className=" md:basis-1/2 lg:basis-1/3 pl-10 drop-shadow-md cursor-pointer">
                        <Image src={coral} className='lg:w-[200px] lg:h-[200px] md:w-[100px] md:h-[100px] w-[160px] h-[160px]' />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-10 drop-shadow-md cursor-pointer">
                        <Image src={coral} className='lg:w-[200px] lg:h-[200px] md:w-[100px] md:h-[100px] w-[160px] h-[160px]' />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}
