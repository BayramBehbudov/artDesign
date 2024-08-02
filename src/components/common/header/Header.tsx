'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import HamburgerMenu from './HamburgerMenu'
import Navbar from './Navbar'
import Sign_Shop from './Sign_Shop'

interface IHeader {}

const Header: React.FC = (): JSX.Element => {
   const [scrolled, setScrolled] = useState<boolean>(false)

   useEffect(() => {
      const handleScroll = () => {
         console.log('scrollY:', window.scrollY)

         if (window.scrollY > 200) {
            setScrolled(true)
         } else {
            setScrolled(false)
         }
      }

      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
   }, [scrolled])

   return (
      <header
         className={`left-0 top-0 w-full bg-[#212529] py-2.5 transition-transform duration-1000 ${
            scrolled ? 'fixed translate-y-full animate-fade-down animate-once' : 'translate-y-0'
         }`}
         style={{
            backgroundImage: 'linear-gradient(181.94deg, rgba(0, 0, 0, 0.9) -30.13%, rgba(79, 79, 79, 0.9) 494.14%)',
         }}
      >
         <div className="container flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
               <Image src="/Header/logo.webp" alt="headerLogo" width={70} height={70} />
               <GiHamburgerMenu size={25} className="hidden cursor-pointer sm:block" />
               <HamburgerMenu />
            </div>
            <Navbar className={'sm:hidden'} />
            <Sign_Shop />
         </div>
      </header>
   )
}

export default Header
