"use client";

import feedback from '@/assets/comments.json';
import FadeInContent from '@/components/FadeInContent';
import Numbers from '@/components/editions/Numbers';
import Partners from '@/components/Partners';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pictures } from "./Pictures";
import { FAQ } from '@/components/FAQ';

export default function Ed23() {

  return (
    <section className="flex h-full max-w-full flex-col py-16  gap-y-10 bg-beer-pattern-alt bg-cover bg-fixed ">
      <div className="flex flex-col drop-shadow-md px-10  lg:px-24">
        <span className="text-4xl font-medium tracking-wider lg:text-5xl">
          <i>EDIÇÃO</i>
        </span>
        <div className="flex gap-x-2 text-5xl tracking-wide text-light-yellow sm:text-6xl lg:text-8xl">
          <span className="whitespace-nowrap font-medium font-impact ">
            BEER MILE
          </span>
          <i>&apos;23</i>
        </div>
      </div>
      <div className="flex flex-row gap-x-3 lg:gap-x-4 lg:justify-around justify-between w-full drop-shadow-lg  px-10 lg:px-24">
        <Numbers
          value={80}
          text={'PARTICIPANTES'}
          prefix='+'
          duration={1.7}
        />
        <Numbers
          value={400}
          text={'CERVEJAS BEBIDAS'}
          prefix='+'
          duration={2}
        />
        <Numbers
          value={6}
          text={'MILES CONCLUIDAS'}
          duration={2.5}
        />
      </div>
      <div className='w-full my-10'>
        <Pictures />
      </div>
      <div className='gap-8  grid grid-cols-1 lg:grid-cols-3  px-10  lg:px-24'>
        {feedback.map((comment, index) => {
          return (
            <FadeInContent key={index}>
              <Card className={`px-5 h-fit border-[0] shadow-xl  rounded-3xl bg-slate-900/55 backdrop-blur-md`}>
                <CardHeader>
                  <CardTitle className='text-3xl font-medium'>
                    {comment.name}
                  </CardTitle>
                  <CardDescription className='font-medium text-light-yellow'>
                    {comment.country}
                  </CardDescription>
                </CardHeader>
                <CardContent className='font-light text-white'>
                  {'"' + comment.feedback + '"'}
                </CardContent>
              </Card>
            </FadeInContent>
          )
        })}
      </div>
      <Partners />
      <FAQ />
    </section>
  );
}
