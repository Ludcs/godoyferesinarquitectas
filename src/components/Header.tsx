'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import { AnimatePresence } from 'framer-motion';
//import HamburgerButton from './HamburgerButton';

export default function Header() {
  const [openSideBar, setOpenSideBar] = useState(false);
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
    <div className={`w-full px-2 py-8 bg-white sticky top-0 z-50 shadow-md`}>
      <div className="flex justify-between items-center">
        <Link href={'/'}>
          <Image
            src={'/assets/logos-png/rectangle-black.png'}
            alt="Logo Godoy Feresin Arquitectas"
            width={500}
            height={64}
            priority={true}
          />
        </Link>
        {/* <HamburgerButton /> */}
        <div className="w-full flex justify-end items-center">
          <FaBars
            size={30}
            className="cursor-pointer"
            onClick={() => setOpenSideBar(true)}
          />
        </div>
      </div>
      <AnimatePresence>
        {openSideBar && <Sidebar setOpenSideBar={setOpenSideBar} />}
      </AnimatePresence>
    </div>
  );
}
