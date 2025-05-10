"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const EmblaCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      
    },
    [AutoScroll({ playOnInit: true , stopOnInteraction: false})],
  );


  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-[80%] shrink-0 sm:w-[33%]">
            <div className="relative mr-10 aspect-[4/3] w-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className=" object-contain mx-auto px-10"
                sizes="(max-width: 768px) 80vw, 33vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
