"use client";

import Numbers from '@/components/editions/Numbers';
import { Pictures } from "./Pictures";

export default function Ed23() {

  return (
    <>
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
      <div className="flex flex-row gap-x-3 mt-5 lg:gap-x-4 lg:justify-around justify-between w-full drop-shadow-lg  px-10 lg:px-24">
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
     
    </>
  );
}
