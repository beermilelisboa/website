import { images } from "@/assets/images";

import EmblaCarousel from "./carousel/EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true, align: "center" }
const SLIDES = Object.keys(images)



export const Pictures = (props) => {

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />

};
