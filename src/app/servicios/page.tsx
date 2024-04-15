'use client';

import '../../app/home.css';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import Header from '@/components/Header';
import ServicesTopImg from '../../../public/assets/images/services_top_img.jpg';
import Image from 'next/image';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';

export default function Servicios() {
  const TopImageref = useRef(null);
  const isInViewTopImageRef = useInView(TopImageref, { once: true });

  const ServiceRef = useRef(null);
  const isInViewServiceRef = useInView(ServiceRef, { once: true });

  const Service1Ref = useRef(null);
  const isInViewService1Ref = useInView(Service1Ref, { once: true });

  const Service2Ref = useRef(null);
  const isInViewService2Ref = useInView(Service2Ref, { once: true });

  const Service3Ref = useRef(null);
  const isInViewService3Ref = useInView(Service3Ref, { once: true });

  const Service4Ref = useRef(null);
  const isInViewService4Ref = useInView(Service4Ref, { once: true });

  const Service5Ref = useRef(null);
  const isInViewService5Ref = useInView(Service5Ref, { once: true });

  const Service6Ref = useRef(null);
  const isInViewService6Ref = useInView(Service6Ref, { once: true });

  const Service7Ref = useRef(null);
  const isInViewService7Ref = useInView(Service7Ref, { once: true });

  const Service8Ref = useRef(null);
  const isInViewService8Ref = useInView(Service8Ref, { once: true });

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
          src={ServicesTopImg}
          alt="Imagen del equipo Godoy Feresin Arquitectas"
          priority={true}
          className="w-full object-cover"
        />
      </div>
      <section
        className="py-28 px-2 flex flex-col justify-center items-start gap-8 bg-white transform text-start"
        ref={ServiceRef}
        style={{
          transform: isInViewServiceRef ? 'none' : 'translateX(-200px)',
          opacity: isInViewServiceRef ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h1 className="text-3xl font-bold px-2">
          <span className="text-5xl font-bold">_</span>
          {''}nuestros servicios
        </h1>
        <p className="text-2xl font-bold px-2">
          Diseñamos, planificamos y construimos proyectos arquitectónicos
          creativos. Te asesoramos en el proceso y trabajamos de manera conjunta
          los espacios.
        </p>
        <p className="px-2 text-[#ABABAB]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          molestiae minima dolores hic odit distinctio quis exercitationem modi
          illo soluta fugit impedit sapiente eius molestias culpa non voluptatum
          ad assumenda.
        </p>
      </section>
      <div
        ref={Service1Ref}
        style={{
          opacity: isInViewService1Ref ? 1 : 0,
          transition: 'all 1s ease',
          animation: `${
            isInViewService1Ref ? 'fadeInRight' : 'none'
          } 1s ease-in`,
        }}
        className="px-4 pb-28 flex flex-col gap-2 w-full"
      >
        <p className="text-2xl font-bold">Relevamiento</p>
        <p>
          Implica la actualización de la información técnica de un bien inmueble
          para su presentación en ente municipal. El procedimiento consta de la
          medición del sitio, su posterior digitalización y los trámites
          municipales correspondientes. Permite dejar en regla su edificación
          ante organismos municipales evitando multas, mejora el precio del
          valor del m2 construido.
        </p>
      </div>
      <div
        ref={Service2Ref}
        style={{
          transform: isInViewService2Ref ? 'none' : 'translateX(-200px)',
          opacity: isInViewService2Ref ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        className="px-4 pb-28 flex flex-col gap-2 w-full"
      >
        <p className="text-2xl font-bold">Asesoramiento</p>
        <p>
          Corresponde a un asesoramiento técnico de una cuestión puntual que
          requiera conocimiento específico técnico propio. Puede incluir
          asesoramiento en la elección del sitio, conceptos de diseño,
          consideraciones de sostenibilidad, reglamentaciones locales, y también
          ser un recurso para resolver preguntas y problemas durante la
          construcción. Consta de una consulta y la elaboración de un informe.
        </p>
      </div>
      <div
        ref={Service3Ref}
        style={{
          opacity: isInViewService3Ref ? 1 : 0,
          transition: 'all 1s ease',
          animation: `${
            isInViewService3Ref ? 'fadeInRight' : 'none'
          } 1s ease-in`,
        }}
        className="px-4 pb-28 flex flex-col gap-2 w-full"
      >
        <p className="text-2xl font-bold">Anteproyecto</p>
        <p>
          El anteproyecto es la fase inicial donde se exploran ideas y se
          definen las necesidades del cliente. Incluye la conceptualización de
          la idea, análisis del sitio y posibles soluciones preliminares.
          También puede abordar aspectos como la viabilidad del proyecto y las
          restricciones legales y normativas.
        </p>
      </div>
      <div
        ref={Service4Ref}
        style={{
          transform: isInViewService4Ref ? 'none' : 'translateX(-200px)',
          opacity: isInViewService4Ref ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        className="px-4 pb-28 flex flex-col gap-2 w-full"
      >
        <p className="text-2xl font-bold">Proyecto de obra nueva</p>
        <p>
          Es la etapa donde, sobre la base del anteproyecto, se ejecuta la
          documentación técnica que define con precisión el carácter de la obra
          para permitir su construcción. El proyecto arquitectónico es la fase
          donde se desarrollan los detalles y planos necesarios para la
          construcción. Incluye la definición completa de la estructura,
          distribución espacial, materiales, detalles constructivos y
          especificaciones técnicas. Este documento sirve como guía para
          contratistas y constructores. Incluye legajo de obra y presentaciones
          municipales.
        </p>
      </div>
      <div
        ref={Service5Ref}
        style={{
          opacity: isInViewService5Ref ? 1 : 0,
          transition: 'all 1s ease',
          animation: `${
            isInViewService5Ref ? 'fadeInRight' : 'none'
          } 1s ease-in`,
        }}
        className="px-4 pb-28 flex flex-col gap-2 w-full"
      >
        <p className="text-2xl font-bold">Proyecto de ampliación</p>
        <p>
          Se entiende como la proyección de toda construcción que signifique una
          nueva superficie edificada, estructural y/o funcionalmente dependiente
          de otra ya existente.
        </p>
      </div>
      <div
        ref={Service6Ref}
        style={{
          transform: isInViewService6Ref ? 'none' : 'translateX(-200px)',
          opacity: isInViewService6Ref ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        className="px-4 pb-28 flex flex-col gap-2 w-full"
      >
        <p className="text-2xl font-bold">Proyecto de reforma</p>
        <p>
          Refiere a la proyección de la reforma de superficies existentes
          edificadas.
        </p>
      </div>
      <div
        ref={Service7Ref}
        style={{
          opacity: isInViewService7Ref ? 1 : 0,
          transition: 'all 1s ease',
          animation: `${
            isInViewService7Ref ? 'fadeInRight' : 'none'
          } 1s ease-in`,
        }}
        className="px-4 pb-28 flex flex-col gap-2 w-full"
      >
        <p className="text-2xl font-bold">Proyecto de desarrollo urbanístico</p>
        <p>
          Se entiende por la planificación mediante el proyecto parcial o
          sectorial de un área determinada, dentro de un conglomerado
          poblacional o ciudad. Puede referir al desarrollo de loteos,
          mejoramiento de urbanizaciones como a intervención de microescala en
          lugares públicos y/o abiertos.
        </p>
      </div>
      <div
        ref={Service8Ref}
        style={{
          transform: isInViewService8Ref ? 'none' : 'translateX(-200px)',
          opacity: isInViewService8Ref ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        className="px-4 pb-28 flex flex-col gap-2 w-full"
      >
        <p className="text-2xl font-bold">Interiorismo</p>
        <p>
          El diseño de interiores se centra en la estética y funcionalidad del
          espacio interior. Incluye la selección de terminaciones, mobiliario,
          iluminación y detalles decorativos.
        </p>
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
