'use client'
import logo from '/public/assets/logo-alt.png'
import { ArrowUp, ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {

    function scrollToTop(e) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        
    }

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
            if (currentPosition > scrollTop) {
                // downscroll code
                setScrolling(false);
            } else {
                // upscroll code
                setScrolling(true);
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }
        console.log(scrolling, scrollTop);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <footer className='flex flex-col  gap-y-10 pt-10 pb-2 justify-center items-center mt-auto w-full bg-light-brown'>
            <div className='flex lg:flex-row flex-col lg:w-3/4 lg:justify-around justify-between '>
                <div className='flex flex-col text-dark-yellow drop-shadow-md lg:text-5xl text-2xl tracking-wide font-bold lg'>
                    <span>TEM ALGUMA QUESTÃO?</span>
                    <span>ENVIE-NOS UM EMAIL!</span>
                    <a className='text-white text-lg font-light underline tracking-normal' href="mailto:geral@beermilelisboa.pt">geral@beermilelisboa.pt</a>
                    <Link target='_blank' href={'assets/regulamento.pdf'} className='text-white underline flex flex-row items-center gap-x-2 text-base font-light tracking-normal' >
                        Regulamento
                        <ExternalLinkIcon className='w-5 h-5 inline-block' />
                    </Link>

                </div>
                <div className='flex flex-row lg:flex-col lg:justify-between drop-shadow-xl self-center lg:gap-y-3 gap-y-2'>
                    <SocialIcon target="_blank" url='https://instagram.pt/beermile_lx' network='instagram' bgColor='transparent' className='lg:scale-[2]' />
                    <SocialIcon target="_blank" url='https://youtu.be/NszMuk7G-wc' network='youtube' bgColor='transparent' className='lg:scale-[2]' />
                </div>
            </div>
            <div className='flex relative flex-row justify-center items-center w-full'>
                <ArrowUp
                    style={{
                        opacity: `${scrollTop > 0 ? 100 : 0}`,
                    }}
                    onClick={scrollToTop} className=' w-12 h-12 p-2 cursor-pointer transition-all ease-in duration-100 hover:bg-dark-yellow hover:text-dark-brown text-dark-yellow fixed bottom-8 left-10 bg-dark-brown shadow-xl rounded-full' />
                <Image src={logo} width={30} height={30} alt='logo' className='mr-2 drop-shadow-lg' />
                <span className='drop-shadow-lg'>&copy; 2024 Beer Mile Lisboa</span>
            </div>
        </footer>
    )
}
