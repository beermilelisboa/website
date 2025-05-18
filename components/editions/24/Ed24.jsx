import React from "react";
import Numbers from "../Numbers";

export default function Ed24() {
  return (
    <>
      <div className="flex flex-col px-10 drop-shadow-md  lg:px-24">
        <span className="text-4xl font-medium tracking-wider lg:text-5xl">
          <i>EDIÇÃO</i>
        </span>
        <div className="flex gap-x-2 text-5xl tracking-wide text-light-yellow sm:text-6xl lg:text-8xl">
          <span className="whitespace-nowrap font-impact font-medium ">
            BEER MILE
          </span>
          <i>&apos;24</i>
        </div>
      </div>
      <div className="flex w-full flex-row justify-between mt-5 gap-x-3 px-10 drop-shadow-lg lg:justify-around  lg:gap-x-4 lg:px-24">
        <Numbers value={140} text={"PARTICIPANTES"} prefix="+" duration={1.7} />
        <Numbers
          value={560}
          text={"CERVEJAS BEBIDAS"}
          prefix="+"
          duration={2}
        />
        <Numbers value={8} text={"MILES CONCLUIDAS"} duration={2.5} />
      </div>
      <div className="my-10 w-full">
        <iframe
          className="mx-auto h-[400px] md:h-[800px] w-[90%]"
          src="https://www.youtube.com/embed/WXmvzcfg4FA?list=PLQKcT4Vu1avEq0BvTsS0bDBPcbhNNjl9O"
          title="Beer Mile Lisboa 2024"
          frameBorder="0"
          controls="0"
          allow="autoplay; gyroscope"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
