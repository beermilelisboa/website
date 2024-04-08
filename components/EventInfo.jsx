import React from 'react'

export default function EventInfo() {
    return (
        <div className='flex flex-row justify-around bg-beer-pattern bg-cover bg-fixed w-full'>
            <div className='text-dark-yellow lg:text-5xl text-center text-3xl drop-shadow-lg bg-white/90 font-semibold px-5 py-3'>
                <span className='drop-shadow-sm text-center'>
                    10 Agosto 2024
               </span>
            </div>
            <div className='text-light-yellow lg:text-5xl text-center rounded-r-md text-3xl drop-shadow-lg bg-white/100 font-semibold px-5 py-3'>
                <span className='drop-shadow-sm text-center'>
                    Lisboa
                </span>
            </div>

        </div>
    )
}
