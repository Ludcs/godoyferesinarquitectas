'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import { AnimatePresence } from 'framer-motion';

export default function Header() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <header className="px-2 py-8">
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
    </header>
  );
}
