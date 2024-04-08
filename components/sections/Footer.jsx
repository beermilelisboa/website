'use client'
import logo from '@/assets/logo-alt.png'
import { ArrowUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {

    function scrollToTop(e) {
        scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className='flex flex-col  gap-y-10 pt-10 pb-2 justify-center items-center mt-auto w-full bg-light-brown'>
            <div className='flex lg:flex-row flex-col lg:w-3/4 lg:justify-around justify-between '>
                <div className='flex flex-col text-dark-yellow drop-shadow-md lg:text-5xl text-2xl tracking-wide font-bold lg'>
                    <span>TEM ALGUMA QUESTÃO?</span>
                    <span>ENVIE-NOS UM EMAIL!</span>
                    <a className='text-white text-lg font-light underline tracking-normal' href="mailto:geral@beermilelisboa.pt">geral@beermilelisboa.pt</a>
                </div>
                <div className='flex flex-row lg:flex-col lg:justify-between drop-shadow-xl self-center lg:gap-y-3 gap-y-2'>
                    <SocialIcon target="_blank" url='https://instagram.pt/beermile_lx' network='instagram' bgColor='transparent' className='lg:scale-[2]'/>
                    <SocialIcon target="_blank" url='https://youtu.be/NszMuk7G-wc' network='youtube' bgColor='transparent' className='lg:scale-[2]'/>
                </div>
            </div>
            <div className='flex relative flex-row justify-center items-center w-full'>
                <ArrowUp onClick={scrollToTop} className='w-12 h-12 p-2 cursor-pointer transition ease-in duration-100 hover:bg-dark-yellow hover:text-dark-brown text-dark-yellow absolute left-[2%] bg-dark-brown rounded-full' />
                <Image src={logo} width={30} height={30} alt='logo' className='mr-2' />
                <span className=''>&copy; 2024 Beer Mile Lisboa</span>
            </div>
        </footer>
    )
}
