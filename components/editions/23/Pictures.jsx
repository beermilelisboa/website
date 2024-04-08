import { images } from "@/assets/images";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import EmblaCarousel from "./carousel/EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true, align: "center" }
const SLIDES = Object.keys(images)
const SLIDE_COUNT = SLIDES.length



export const Pictures = (props) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />

};
