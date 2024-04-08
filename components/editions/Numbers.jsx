import React from 'react'
import CountUp from "react-countup";

export default function Numbers(props) {

    const { value, text, animationDuration, prefix } = props

    return (
        <div className="flex flex-col flex-wrap items-center lg:w-[30%]  ">
            <span className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide font-impact ">
                <CountUp
                    end={value}
                    duration={animationDuration ?? 2.4} //secs
                    enableScrollSpy
                    scrollSpyDelay={0}
                    prefix={prefix ?? ""}
                />
            </span>
            <span className="text-xs tracking-wide  text-center text-light-yellow lg:text-2xl">
                {text}
            </span>
        </div>
    )
}
