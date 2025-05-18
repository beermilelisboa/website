"use client";

import feedback from "@/assets/comments.json";
import Ed23 from "@/components/editions/23/Ed23";
import Ed24 from "@/components/editions/24/Ed24";
import FadeInContent from "@/components/FadeInContent";
import { FAQ } from "@/components/FAQ";
import MiniBeer from "@/components/MiniBeer";
import Partners from "@/components/Partners";
import BeerHeader from "@/components/sections/BeerHeader";
import DefinitionSection from "@/components/sections/DefinitionSection";
import Footer from "@/components/sections/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <main className=" relative m-0 flex min-h-[500px] w-full flex-col items-center  gap-y-0 bg-black p-0">
        <BeerHeader />
        <DefinitionSection />
        <section className="flex h-full max-w-full flex-col gap-y-10  bg-beer-pattern-alt bg-cover bg-fixed py-16 ">
          <FadeInContent>
            <Ed24 />
          </FadeInContent>

          <FadeInContent>
            <Ed23 />
          </FadeInContent>
          <div className="grid  grid-cols-1 gap-8 px-10  lg:grid-cols-3  lg:px-24">
            {feedback.map((comment, index) => {
              return (
                <FadeInContent key={index}>
                  <Card
                    className={`h-fit select-none rounded-3xl border-[0] bg-slate-900/55 px-5 shadow-xl backdrop-blur-md transition-all duration-150 ease-in hover:bg-light-brown  hover:bg-opacity-55 hover:font-medium last:hover:font-medium`}
                  >
                    <CardHeader>
                      <CardTitle className="text-3xl font-medium">
                        {comment.name}
                      </CardTitle>
                      <CardDescription className="font-medium text-light-yellow">
                        {comment.country}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="font-light  text-white">
                      {'"' + comment.feedback + '"'}
                    </CardContent>
                  </Card>
                </FadeInContent>
              );
            })}
          </div>
          <Partners />
          <FAQ />
        </section>
        <Footer />
        <MiniBeer />
      </main>
    </>
  );
}
