"use client";
import emblaCarouselAutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import EmblaCarousel from "./PicCarousel";
/* import coral from "/public/assets/Coral.png";
import uap from "/public/assets/UAP.png";
import zecarteiro from "/public/assets/zecarteiro.png";
 */

const imagesSrcs = [
    "assets/UAP.png",
    "assets/zecarteiro.png",
]
export default function Partners() {
  const plugin = useRef(
    emblaCarouselAutoScroll({
      playOnInit: true,
      delay: 10,
      speed: 1,
      stopOnInteraction: false,
    }),
  );



  return (
    <div className="mb-20 flex w-full flex-col items-center gap-y-16">
      <span className="font-impact text-6xl font-extrabold tracking-wider text-light-yellow drop-shadow-lg md:text-3xl lg:text-8xl">
        PARCEIROS
      </span>
      <EmblaCarousel images={imagesSrcs}/>
    </div>
  );
}
