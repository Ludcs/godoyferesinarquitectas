'use client';
import './home.css';
import ImageServices from '../../public/assets/images/imageDemo-services.jpg';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import ScrollToTop from '@/components/ScrollToTop';
import Team from '../../public/assets/images/juntas.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';

export default function Home() {
  const Sloganref = useRef(null);
  const isInViewSlogan = useInView(Sloganref, { once: true });

  const TeamImageref = useRef(null);
  const isInViewTeamImage = useInView(TeamImageref, { once: true });

  const PhraseServicesref = useRef(null);
  const inInViewPhraseServices = useInView(PhraseServicesref, { once: true });

  const ImageServicesref = useRef(null);
  const inInViewImageServices = useInView(ImageServicesref, { once: true });

  return (
    <main className="w-full">
      <ScrollToTop />
      <Header />
      <Slider />
      <section
        className="py-28 px-2 bg-white transform text-start"
        ref={Sloganref}
        style={{
          opacity: isInViewSlogan ? 1 : 0,
          transition: 'opacity 1s ease-out',
          animation: `${isInViewSlogan ? 'fadeIn' : 'none'} 0.5s ease-in`,
        }}
      >
        <h1 className="text-3xl font-bold px-2">
          <span className="text-5xl font-bold">_</span>
          {''}somos las arquitectas mas picantes de todo el condado.
        </h1>
        <p className="text-md py-5 uppercase font-bold px-2">
          Contratanos o hay bala
        </p>
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
          className="w-full py-2 flex justify-center items-center gap-4 text-lg hover:bg-primary hover:text-white transition-all duration-200"
        >
          <p>Quienes somos?</p>
          <FaArrowRight size={30} />
        </Link>
      </div>
      <section className="w-full">
        <div className="w-full py-28 bg-primary">
          <div
            ref={PhraseServicesref}
            style={{
              opacity: inInViewPhraseServices ? 1 : 0,
              transition: 'opacity 1s ease-out',
              animation: `${
                inInViewPhraseServices ? 'fadeIn' : 'none'
              } 1s ease-in`,
            }}
          >
            <p className="text-3xl font-bold px-2">
              <span className="text-5xl font-bold">_</span>
              {''}aca va a ir una frase inspiradora y ganadora, toda bien
              profunda.
            </p>
            <p className="pt-10 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              sint placeat tempora, necessitatibus natus ad maxime.
            </p>
            <Link
              href={'/servicios'}
              className="w-full mt-10 py-2 flex justify-center items-center gap-4 text-lg hover:bg-white hover:text-primary transition-all duration-200"
            >
              <p>Nuestros servicios</p>
              <FaArrowRight size={30} />
            </Link>
          </div>
        </div>
        {/* TODO: solucionar translateX(200px) rompe el ancho total de la web, para translateX(-200px) si funciona */}
        <div
          className="w-full"
          ref={ImageServicesref}
          style={{
            opacity: inInViewImageServices ? 1 : 0,
            transition: 'all 1s ease',
            animation: `${
              inInViewImageServices ? 'fadeInRight' : 'none'
            } 1s ease-in`,
          }}
        >
          <Image
            src={ImageServices}
            alt="Imagen para la seccion de servicios"
            priority={true}
            width={500}
            height={350}
          />
        </div>
      </section>
      <section className="w-full py-14 flex flex-col justify-center items-center text-center bg-[#F3F3F3]">
        <p className="text-3xl font-bold px-2">Tenes un proyecto en mente?</p>
        <Link
          href={'/contacto'}
          className="mt-10 mb-10 text-lg px-5 py-2 border border-solid border-black hover:bg-black hover:text-white transition-all duration-200"
        >
          Contactanos
        </Link>
      </section>
    </main>
  );
}
