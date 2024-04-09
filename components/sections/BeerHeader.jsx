'use client'
import banner_foam from '/public/assets/banner-foam.png'
import banner from '/public/assets/banner.png'
import { CalendarRangeIcon, MapPinnedIcon } from 'lucide-react'
import Image from 'next/image'
export default function BeerHeader() {
    /* px-10 lg:px-24 */

    function infoCard(icon, text, onClick) {
        return <div
            style={{
                cursor: onClick ? 'pointer' : 'default',
            }}
            onClick={onClick} className='lg:text-2xl xl:text-3xl lg:w-1/2 mx-10 lg:max-w-sm xl:max-w-lg text-xl cursor-pointer flex flex-col items-center pt-4 border-b-8 border-b-light-brown drop-shadow-xl bg-light-yellow  text-light-brown hover:bg-light-brown hover:text-light-yellow hover:border-b-light-yellow rounded-xl font-semibold transition-all duration-150 ease-in '>
            {icon}
            <span className='text-center  font-semibold max-w-md my-auto px-7 py-10' >{text}</span>
        </div>
    }

    return (
        <section className='flex flex-col h-full w-full items-center pb-10 bg-beer-pattern bg-cover bg-fixed' >
            <div className='bg-white w-full h-16' />
            <Image src={banner_foam} className='-translate-y-1 self-center' alt='foam' />
            <Image src={banner} className='sm:w-[50%] w-[74%] drop-shadow-md' alt='banner' />
            <div className='flex lg:flex-row flex-col gap-5 mt-10 justify-evenly lg:w-full self-center'>
                {infoCard(<CalendarRangeIcon className='w-10 h-10 lg:w-16 lg:h-16  hover:stroke-light-yellow ' />, "10 AGOSTO 2024")}
                {infoCard(<MapPinnedIcon className='w-10 h-10 lg:w-16 lg:h-16  hover:stroke-light-yellow' />, 'COMPLEXO DESPORTIVO REAL SPORT CLUBE', () => { window.open('https://maps.app.goo.gl/du2kUsyZnL1eLycy5', '_blank') })}
            </div>
        </section>
    )
}
