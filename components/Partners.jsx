'use client'
import coral from '/public/assets/coral.png';
import bel from '/public/assets/bel.png';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import emblaCarouselAutoScroll from 'embla-carousel-auto-scroll';
import Link from 'next/link';
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
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-10 drop-shadow-md mx-auto cursor-pointer">
                        <Link href={"https://www.cervejacoral.com/"} target='_blank'>
                            <Image src={coral} className='lg:w-[200px] lg:h-[200px] md:w-[100px] md:h-[100px] w-[160px] h-[160px] mx-auto' />
                        </Link>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-10 drop-shadow-md mx-auto cursor-pointer">
                        <Link href={"https://www.osbelenenses.com/"} target='_blank'>
                            <Image src={bel} className='lg:w-[160px] lg:h-[200px] md:w-[60px] md:h-[100px] w-[120px] h-[160px] mx-auto' />
                        </Link>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}
