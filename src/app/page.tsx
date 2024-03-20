'use client';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import Team from '../../public/assets/images/team.jpg';
import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import './home.css';

export default function Home() {
  const Sloganref = useRef(null);
  const isInViewSlogan = useInView(Sloganref, { once: true });

  const TeamImageref = useRef(null);
  const isInViewTeamImage = useInView(TeamImageref, { once: true });

  return (
    <main className="w-full">
      <Header />
      <Slider />
      <div className="h-[900px] w-full bg-primary"></div>
      <section
        className="py-28 px-2 bg-white transform"
        ref={Sloganref}
        style={{
          opacity: isInViewSlogan ? 1 : 0,
          transition: 'opacity 1s ease-out',
          animation: `${isInViewSlogan ? 'fadeIn' : 'none'} 1s ease-in`,
        }}
      >
        <h1 className="text-3xl font-bold ">
          Somos las arquitectas mas picantes de todo el condado.
        </h1>
        <p className="text-lg py-3">Contratanos o hay bala</p>
      </section>
      <section
        className="w-full"
        ref={TeamImageref}
        style={{
          transform: isInViewTeamImage ? 'none' : 'translateX(-200px)',
          opacity: isInViewTeamImage ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <Image
          src={Team}
          alt="Foto de las arquitectas Fiorela Godoy y Florencia Feresin"
          className="w-fill h-full"
          priority={true}
        />
      </section>
      <div className="w-full flex justify-center items-center py-28 bg-white">
        <Link
          href={'/nosotras'}
          className="w-full flex justify-center items-center gap-4 text-lg hover:bg-primary hover:text-white transition-all duration-200"
        >
          <p>Conocenos</p>
          <FaArrowRight size={30} />
        </Link>
      </div>
    </main>
  );
}
