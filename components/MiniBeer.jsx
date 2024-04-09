'use client'
import React, { useEffect, useState } from 'react'
import minibeer from '/public/assets/logo.png'
import Image from 'next/image'
import { toast } from 'sonner'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { ChevronDown } from 'lucide-react'
import { TooltipArrow } from '@radix-ui/react-tooltip'

const MESSAGE_TIMEOUT = 3000
const MESSAGE_INTERVAL = 10000
const MESSAGE = '4 cervejas por milha, nem sabes o bem que te fazia!'
const tooltipStyle = 'font-medium text-justify max-w-[250px] rounded-lg shadow-md bg-light-yellow text-dark-brown  border border-light-yellow'
const tooltipStyle2 = 'text-justify max-w-[250px] rounded-lg shadow-md  font-medium'

export default function MiniBeer() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
          setOpen(!open);
            setTimeout(() => {
                setOpen(false);
            }, MESSAGE_TIMEOUT);
        }, MESSAGE_INTERVAL);
        return () => clearInterval(interval);
      }, []);
      
      function displayInfo() {
        toast.info('Inscrições em breve!', {
            style: {
                fontFamily: 'Montserrat',
                fontSize: '1.12rem',
                fontWeight: 'semi-bold',
                backgroundColor: "var(--light-yellow)",
                color: "var(--dark-brown)",
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
                border: '0px'
            },
            duration: 1800
        })
      }

    return (
        <div onClick={displayInfo}
            className='fixed bottom-6 right-10 animate-bounce duration-[1200] hover:bg-opacity-15 cursor-help drop-shadow-xl'>
                <TooltipProvider>
                    <Tooltip open={open} delayDuration={0}>
                        <TooltipTrigger>
                            <Image src={minibeer} alt='logo' className={`drop-shadow-md lg:w-[80px] lg:h-[80px] md:w-[50px] md:h-[50px] w-[80px] h-[80px] `} />
                        </TooltipTrigger>
                        <TooltipContent className={tooltipStyle}>
                            {MESSAGE}
                            <TooltipArrow className='fill-light-yellow' />
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
        </div>
    )
}
