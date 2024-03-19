'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaXmark } from 'react-icons/fa6';
import { Dispatch, SetStateAction } from 'react';

interface MobileNavLinkProps {
  title: string;
  href: string;
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
}

interface SidebarProps {
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
}

const sidebarLinks = [
  { title: 'Home', href: '/' },
  { title: 'Nosotras', href: '/nosotras' },
  { title: 'Proyectos', href: '/proyectos' },
  { title: 'Servicios', href: '/servicios' },
  { title: 'Contacto', href: '/contacto' },
];

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

export default function Sidebar({ setOpenSideBar }: SidebarProps) {
  return (
    //Motion div 1:
    <motion.div
      className="w-full h-screen fixed left-0 top-0 origin-top font-bold bg-primary"
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex flex-col h-full px-2 py-8">
        <div className="flex justify-between items-center">
          <Link href={'/'} onClick={() => setOpenSideBar(false)}>
            <Image
              src={'/assets/logos-png/rectangle-black.png'}
              alt="Logo Godoy Feresin Arquitectas"
              width={500}
              height={64}
              priority={true}
            />
          </Link>
          <div className="w-full flex justify-end items-center">
            <FaXmark
              size={30}
              className="cursor-pointer"
              onClick={() => setOpenSideBar(false)}
            />
          </div>
        </div>
        {/* Motion div 2: */}
        <motion.div
          className="flex flex-col h-full justify-center items-center gap-5 font-thin"
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
        >
          {sidebarLinks.map((el, index) => (
            <div key={index} className="overflow-hidden">
              <MobileNavLink
                key={index}
                title={el.title}
                href={el.href}
                setOpenSideBar={setOpenSideBar}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

const mobileLinkVars = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  title,
  href,
  setOpenSideBar,
}) => {
  return (
    //Motion div 1:
    <motion.div className="text-5xl uppercase" variants={mobileLinkVars}>
      <Link href={href} onClick={() => setOpenSideBar(false)}>
        {title}
      </Link>
    </motion.div>
  );
};
