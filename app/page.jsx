'use client'
import MiniBeer from "@/components/MiniBeer";
import Ed23 from "@/components/editions/23/Ed23";
import BeerHeader from "@/components/sections/BeerHeader";
import DefinitionSection from "@/components/sections/DefinitionSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
 /*  const [drinkScale, setDrinkScale] = useState(1);
  const handleScroll = () => {
    const position = window.scrollY;

    console.log(position / document.body.scrollHeight);
    const scaleBy = (position / document.body.scrollHeight)
    
    setDrinkScale(scaleBy * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); */


  return (
    <main className=" relative flex min-h-[500px] w-full flex-col items-center bg-black  gap-y-0 m-0 p-0">
      <BeerHeader />
      {/* <EventInfo/> */}
      <DefinitionSection />
      <Ed23 />
      <Footer />
      <MiniBeer />
     {/*  <div id="drink"
        style={{
          height: drinkScale + 'vh'
        }}
        className="fixed bottom-0 min-h-[2vh]  max-h-[90vh] bg-light-yellow opacity-55 w-full">

      </div> */}
    </main>
  );
}
