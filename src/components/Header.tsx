'use client';
import Logo from '../../public/assets/logos-png/rectangle-black2.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
//import HamburgerButton from './HamburgerButton';

export default function Header() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const pathname = usePathname();

  // const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = document.querySelector('header');
  //     const headerRect = header?.getBoundingClientRect();
  //     if (headerRect && headerRect?.top <= 94 && window.scrollY > 0) {
  //       setIsHeaderFixed(true);
  //     } else {
  //       setIsHeaderFixed(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  //bg-white fixed top-0 shadow-md z-20
  //fixed top-0 left-0 z-50 shadow-md
  //const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div
      className={`w-full px-2 py-8 bg-white sticky top-0 z-50 shadow-[0_12px_12px_-12px_rgba(0,0,0,0.1)] lg:px-4 xl:px-12`}
    >
      <div className="w-full flex justify-between items-center 2xl:max-w-7xl 2xl:m-auto">
        <Link href={'/'}>
          <Image
            src={Logo}
            alt="Logo Godoy Feresin Arquitectas"
            className="min-w-64 lg:w-72"
            width={500}
            height={64}
            priority={true}
          />
        </Link>
        {/* <HamburgerButton /> */}
        <div className="w-full flex justify-end items-center lg:hidden">
          <FaBars
            size={30}
            className="cursor-pointer"
            onClick={() => setOpenSideBar(true)}
          />
        </div>
        <nav className="hidden lg:flex flex-row items-center justify-center gap-8 list-none uppercase font-bold">
          <Link
            href={'/'}
            className={`${
              pathname === '/'
                ? 'py-2 border-b-2 border-solid border-black'
                : 'py-2 border-b-2 border-transparent hover:border-b-2 hover:border-solid hover:border-black'
            }`}
          >
            Home
          </Link>
          <Link
            href={'/nosotras'}
            className={`${
              pathname === '/nosotras'
                ? 'py-2 border-b-2 border-solid border-black'
                : 'py-2 border-b-2 border-transparent hover:border-b-2 hover:border-solid hover:border-black'
            }`}
          >
            Nosotras
          </Link>
          <Link
            href={'/proyectos'}
            className={`${
              pathname === '/proyectos'
                ? 'py-2 border-b-2 border-solid border-black'
                : 'py-2 border-b-2 border-transparent hover:border-b-2 hover:border-solid hover:border-black'
            }`}
          >
            Proyectos
          </Link>
          <Link
            href={'/servicios'}
            className={`${
              pathname === '/servicios'
                ? 'py-2 border-b-2 border-solid border-black'
                : 'py-2 border-b-2 border-transparent hover:border-b-2 hover:border-solid hover:border-black'
            }`}
          >
            Servicios
          </Link>
          <Link
            href={'/contacto'}
            className={`${
              pathname === '/contacto'
                ? 'py-2 border-b-2 border-solid border-black'
                : 'py-2 border-b-2 border-transparent hover:border-b-2 hover:border-solid hover:border-black'
            }`}
          >
            Contacto
          </Link>
        </nav>
      </div>
      <AnimatePresence>
        {openSideBar && <Sidebar setOpenSideBar={setOpenSideBar} />}
      </AnimatePresence>
    </div>
  );
}
