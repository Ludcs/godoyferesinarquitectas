'use client';

import '../home.css';
import 'rsuite/Timeline/styles/index.css';
import { Timeline } from 'rsuite';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Team from '../../../public/assets/images/juntas.png';
import Flo from '../../../public/assets/images/flo.png';
import Fio from '../../../public/assets/images/fio.png';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Nosotras() {
  const TopImageref = useRef(null);
  const isInViewTopImageRef = useInView(TopImageref, { once: true });

  const FloImageref = useRef(null);
  const isInViewFloImageRef = useInView(FloImageref, { once: true });

  const FioImageref = useRef(null);
  const isInViewFioImageRef = useInView(FioImageref, { once: true });

  const OurStudyref = useRef(null);
  const isInViewOurStudyRef = useInView(OurStudyref, { once: true });

  const items = [
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
  ];

  return (
    <main className="w-full">
      <Header />
      <div
        ref={TopImageref}
        style={{
          opacity: isInViewTopImageRef ? 1 : 0,
          transition: 'opacity 1s ease-out',
          animation: `${isInViewTopImageRef ? 'fadeIn' : 'none'} 0.5s ease-in`,
        }}
      >
        <Image
          src={Team}
          alt="Imagen del equipo Godoy Feresin Arquitectas"
          priority={true}
          width={500}
          height={350}
          className="grayscale w-full"
        />
      </div>
      <section
        className="py-28 px-2 flex flex-col justify-center items-start gap-8 bg-white transform text-start"
        ref={OurStudyref}
        style={{
          transform: isInViewOurStudyRef ? 'none' : 'translateX(-200px)',
          opacity: isInViewOurStudyRef ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h1 className="text-3xl font-bold px-2">
          <span className="text-5xl font-bold">_</span>
          {''}nuestro estudio
        </h1>
        <p className="text-2xl font-bold px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          molestiae minima dolores hic odit distinctio quis exercitationem modi
          illo soluta fugit impedit sapiente eius molestias culpa non voluptatum
          ad assumenda.
        </p>
        <p className="px-2 text-[#ABABAB]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          molestiae minima dolores hic odit distinctio quis exercitationem modi
          illo soluta fugit impedit sapiente eius molestias culpa non voluptatum
          ad assumenda.
        </p>
      </section>
      <section className="pb-28 px-2 flex flex-col justify-center items-start gap-8 bg-white transform text-start">
        <div
          ref={FloImageref}
          style={{
            opacity: isInViewFloImageRef ? 1 : 0,
            transition: 'opacity 1s ease-out',
            animation: `${
              isInViewFloImageRef ? 'fadeIn' : 'none'
            } 0.5s ease-in`,
          }}
        >
          <Image
            src={Flo}
            alt="Florencia Feresin Arquitecta"
            className="w-full"
            width={500}
            height={350}
          />
          <h3 className="text-lg font-bold pt-4">Florencia FERESIN</h3>
          <p className="text-[#ABABAB]">Arquitecta - CAPER 05456</p>
          <article className="text-[#ABABAB] pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit aliquam sit fuga aperiam, consequuntur totam, sint,
            repudiandae consectetur nihil blanditiis architecto consequatur! Ad
            necessitatibus accusantium porro cupiditate velit unde assumenda?
          </article>
        </div>
      </section>
      <section className="pb-28 px-2 flex flex-col justify-center items-start gap-8 bg-white transform text-start">
        <div
          ref={FioImageref}
          style={{
            opacity: isInViewFioImageRef ? 1 : 0,
            transition: 'opacity 1s ease-out',
            animation: `${
              isInViewFioImageRef ? 'fadeIn' : 'none'
            } 0.5s ease-in`,
          }}
        >
          <Image
            src={Fio}
            alt="Florencia Feresin Arquitecta"
            className="w-full"
            width={500}
            height={350}
          />
          <h3 className="text-lg font-bold pt-4">Fiorela GODOY</h3>
          <p className="text-[#ABABAB]">Arquitecta - CAPER 05456</p>
          <article className="text-[#ABABAB] pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit aliquam sit fuga aperiam, consequuntur totam, sint,
            repudiandae consectetur nihil blanditiis architecto consequatur! Ad
            necessitatibus accusantium porro cupiditate velit unde assumenda?
          </article>
        </div>
      </section>
      <div className="pb-28 px-2 flex flex-col justify-center items-start gap-8 bg-white transform text-start">
        <h1 className="text-3xl font-bold px-2">
          <span className="text-5xl font-bold">_</span>
          {''}distinciones
        </h1>
        {/* TIMELINE */}
        {/* <div className="w-full h-[700px]"></div> */}
        <Timeline className="w-full">
          <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
          <Timeline.Item>
            16:28:43 Your order to be ready for delivery
          </Timeline.Item>
          <Timeline.Item>
            16:28:45 Your parcel has been out of the library
          </Timeline.Item>
          <Timeline.Item>
            02:34:41 Send to Shanghai Hongkou Company
          </Timeline.Item>
          <Timeline.Item>15:05:29 Sending you a piece</Timeline.Item>
        </Timeline>
      </div>

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
