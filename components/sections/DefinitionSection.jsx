import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function DefinitionSection() {
    return (
        <section className={`${montserrat.className} flex flex-col w-full px-10 lg:px-24 bg-beer-pattern bg-cover bg-fixed `} >
             <div className="flex flex-col gap-y-3 lg:flex-row items-center justify-center sm:gap-x-4 py-16 lg:justify-center ">
                <div className="h-full lg:text-start text-center text-5xl lg:text-7xl xl:text-8xl font-bold text-dark-brown lg:w-[55%] xl:w-[40%] w-full lg:mx-auto lg:self-center">
                    <span className="whitespace-pre-line font-medium font-impact lg:tracking-wide drop-shadow-lg">
                        O QUE É A BEER MILE?
                    </span>
                </div>
                <div className="lg:ml-4 mt-5 lg:self-center lg:mt-0 flex flex-col gap-y-3 tracking-tight lg:tracking-normal text-justify text-lg lg:text-xl xl:text-2xl font-semibold text-dark-brown lg:mx-[5%] lg:w-[40%] lg:gap-y-9 drop-shadow-sm">
                    <p>
                        Uma <b>Beer Mile</b> é uma prova de carácter desportivo e
                        recreativo que combina a cervesadasdja e a cerveja.
                    </p>
                    <p>
                        <i>
                            Consiste em realizar 4 voltas à pista, bebendo uma cerveja antes de
                            cada volta, no total de 4 cervejas.
                        </i>
                    </p>
                    <p>
                        <i>
                            Vence quem chegar primeiro ao final!
                        </i>
                    </p>
                </div>
            </div> 
        </section>
    );
}
