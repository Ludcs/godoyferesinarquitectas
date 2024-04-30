'use client';

import '../home.css';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Team from '../../../public/assets/images/juntas.png';
import Flo from '../../../public/assets/images/flo.png';
import Fio from '../../../public/assets/images/fio.png';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Timeline from '@/components/Timeline';
import ScrollToTop from '@/components/ScrollToTop';

export default function Nosotras() {
  const TopImageref = useRef(null);
  const isInViewTopImageRef = useInView(TopImageref, { once: true });

  const FloImageref = useRef(null);
  const isInViewFloImageRef = useInView(FloImageref, { once: true });

  const FioImageref = useRef(null);
  const isInViewFioImageRef = useInView(FioImageref, { once: true });

  const OurStudyref = useRef(null);
  const isInViewOurStudyRef = useInView(OurStudyref, { once: true });

  const Mentionsref = useRef(null);
  const isInViewMentionsRef = useInView(Mentionsref, { once: true });

  // const items = [
  //   {
  //     title: 'May 1940',
  //     cardTitle: 'Dunkirk',
  //     url: 'http://www.history.com',
  //     cardSubtitle:
  //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //     cardDetailedText:
  //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //   },
  //   {
  //     title: 'May 1940',
  //     cardTitle: 'Dunkirk',
  //     url: 'http://www.history.com',
  //     cardSubtitle:
  //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //     cardDetailedText:
  //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //   },
  // ];

  return (
    <main className="w-full">
      <ScrollToTop />
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
          className="grayscale w-full object-cover"
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
          Colegas y amigas. Trabajamos en equipo desde hace años y en diferentes
          experiencias académicas, sociales y laborales. Hemos logrado una forma
          de trabajo operativa y resolutiva.
        </p>
        <p className="px-2 text-[#ABABAB]">
          Nuestro compromiso es acompañar, asistir, escuchar y respetar los
          deseos de nuestros clientes. También nos interesa el desarrollo
          profesional por lo que seguimos formándonos, estudiando y abrazando
          nuevos desafíos.
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
            className="w-full object-cover"
            priority={true}
          />
          <h3 className="text-lg font-bold pt-4">Florencia FERESIN</h3>
          <p className="text-[#ABABAB]">Arquitecta</p>
          <article className="text-[#ABABAB] pt-4">
            Arquitecta por la Universidad Nacional del Litoral, Santa Fe. Ha
            participado en Cursos de Acción, Investigación y Desarrollo (CAI+D)
            de UNL titulado “Observatorio Urbanístico del área metropolitana
            Santa Fe-Paraná”. Investigadora becada en Programa de Cientibeca de
            UNL, siendo autora del trabajo “Movilidad de personas con
            discapacidad. La construcción de la inclusividad urbana en Santa Fe
            - Paraná. Estrategias de diseño universal aplicables a diversos
            espacios”. Además desarrolla su profesión en la Dirección de Diseño
            Urbano y Arquitectónico de la Municipalidad de Paraná.
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
            className="w-full object-cover"
            priority={true}
          />
          <h3 className="text-lg font-bold pt-4">Fiorela GODOY</h3>
          <p className="text-[#ABABAB]">Arquitecta</p>
          <article className="text-[#ABABAB] pt-4">
            Arquitecta por la Universidad Nacional del Litoral, Santa Fe,
            Argentina. Ha participado en diferentes Cursos de Acción,
            Investigación y Desarrollo (CAI+D) de UNL. En la actualidad integra
            el equipo del CAI+D “Espacios innovativos para la educación técnica
            no formal en la Ciudad de Santa Fe.” Es autora del trabajo “Paisajes
            rurales como construcción cultural educativa: su influencia en la
            configuración espacial de las Escuelas de Familia Agrícola de
            Corrientes” (2016), y del artículo publicado en Revista Polis (2021)
            “Bibliotecas populares para la construcción de sentidos.
            Arquitectura móvil como posibilitante.” En 2023 realizó un seminario
            de postgrado en Arquitectura para la educación dictado en FADU y
            actualmente realiza pasantías docentes en la cátedra Taller vertical
            raíces, Proyecto Arquitectónico 1 y 2 en Fadu, UNL.
          </article>
        </div>
      </section>
      <div
        className="pb-28 px-2 flex flex-col justify-center items-start gap-8 bg-white transform text-start"
        ref={Mentionsref}
        style={{
          transform: isInViewMentionsRef ? 'none' : 'translateX(-200px)',
          opacity: isInViewMentionsRef ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h1 className="text-3xl font-bold px-2">
          <span className="text-5xl font-bold">_</span>
          {''}menciones
        </h1>
        <div className="w-full ml-1">
          <Timeline />
        </div>
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
