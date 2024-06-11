'use client';
import '@/app/home.css';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import CasaTavoPrev from '../../../../public/assets/images/proyectos/casaTavo/01-Tavo.jpg';
import CasaTavo1 from '../../../../public/assets/images/proyectos/casaTavo/02-Tavo.jpg';
import CasaTavo2 from '../../../../public/assets/images/proyectos/casaTavo/03-Tavo.jpg';
import CasaTavo3 from '../../../../public/assets/images/proyectos/casaTavo/04-Tavo.jpg';
import CasaTavo4 from '../../../../public/assets/images/proyectos/casaTavo/05-Tavo.jpg';
import CasaTavo5 from '../../../../public/assets/images/proyectos/casaTavo/06-Tavo.jpg';
import CasaTavo6 from '../../../../public/assets/images/proyectos/casaTavo/07-Tavo.jpg';
import CasaTavo7 from '../../../../public/assets/images/proyectos/casaTavo/08-Tavo.jpg';
import CasaTavo8 from '../../../../public/assets/images/proyectos/casaTavo/09-Tavo.jpg';
import CasaTavo9 from '../../../../public/assets/images/proyectos/casaTavo/10-Tavo.jpg';
import CasaTavo10 from '../../../../public/assets/images/proyectos/casaTavo/11-Tavo.jpg';
import CasaTavo11 from '../../../../public/assets/images/proyectos/casaTavo/12-Tavo.jpg';
import CasaTavo12 from '../../../../public/assets/images/proyectos/casaTavo/13-Tavo.jpg';
import CasaTavo13 from '../../../../public/assets/images/proyectos/casaTavo/14-Tavo.jpg';
import CasaTavo14 from '../../../../public/assets/images/proyectos/casaTavo/15-Tavo.jpg';
import CasaTavo15 from '../../../../public/assets/images/proyectos/casaTavo/16-Tavo.jpg';
import CasaTavo16 from '../../../../public/assets/images/proyectos/casaTavo/17-Tavo.jpg';
import ContactFooter from '@/components/ContactFooter';

export default function CasaTavo() {
  const TopImageCasaTavoref = useRef(null);
  const isInViewTopImageCasaTavoref = useInView(TopImageCasaTavoref, {
    once: true,
  });

  const Descriptionref = useRef(null);
  const isInViewDescriptionref = useInView(Descriptionref, { once: true });

  return (
    <main className="w-full">
      <Header />
      <ScrollToTop />
      <section
        ref={TopImageCasaTavoref}
        style={{
          opacity: isInViewTopImageCasaTavoref ? 1 : 0,
          transition: 'opacity 1s ease-out',
          animation: `${
            isInViewTopImageCasaTavoref ? 'fadeIn' : 'none'
          } 0.5s ease-in`,
        }}
      >
        <Image
          src={CasaTavoPrev}
          alt="Header Image Proyecto La Soñada"
          className="w-full h-auto"
          priority={true}
        />
      </section>
      <section
        className="w-full px-2 pt-12 flex flex-col md:text-lg lg:px-4 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto"
        ref={Descriptionref}
        style={{
          transform: isInViewDescriptionref ? 'none' : 'translateX(-100%)',
          opacity: isInViewDescriptionref ? 1 : 0,
          transition: 'all 1s ease',
        }}
      >
        <div className="w-full underline text-[#ABABAB] pb-6">
          <Link href={'/proyectos'}>Volver</Link>
        </div>
        <article>
          <div>
            <h1 className="font-bold text-3xl">La Soñada</h1>
            <p className="font-semibold">Residencial</p>
          </div>
          <div className="pb-6 text-[#ABABAB]">
            <p>Paraná, Entre Ríos, Argentina.</p>
            <p>Año 2021 - 2022.</p>
            <br className="md:hidden" />
            <p>
              1° etapa: Arq. Godoy Fiorella, Arq. Galli Marianela y Arq. Feresin
              Florencia
            </p>
            <p>
              2° etapa: Arq. Galli Marianela, Arq. Rossetto Piero y Arq. Feresin
              Florencia
            </p>
          </div>
          <div>
            <p className="text-justify leading-relaxed">
              “La Soñada” es una adaptación del modelo “Bicentenaria” del plan
              Procrear. La planta baja presenta estar-comedor con cocina
              integrada, baño, dormitorio y cochera pasante semicubierta. El
              proyecto contempla la ampliación en planta alta y la reconversión
              de usos: el dormitorio de planta baja podría funcionar como taller
              con acceso independiente. La ubicación en el lote prioriza las
              orientaciones Norte y Este para mejorar las condiciones de
              habitabilidad.
            </p>
          </div>
        </article>
      </section>
      <section className="w-full flex flex-col gap-4 pt-12 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto">
        <Image
          src={CasaTavo1}
          alt="Imagen 1 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo2}
          alt="Imagen 2 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo3}
          alt="Imagen 3 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo4}
          alt="Imagen 5 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo5}
          alt="Imagen 6 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo6}
          alt="Imagen 7 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo7}
          alt="Imagen 8 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo8}
          alt="Imagen 9 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo9}
          alt="Imagen 9 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo10}
          alt="Imagen 9 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo11}
          alt="Imagen 9 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo12}
          alt="Imagen 9 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo13}
          alt="Imagen 9 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo14}
          alt="Imagen 9 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo15}
          alt="Imagen 9 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={CasaTavo16}
          alt="Imagen 9 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto mb-4 2xl:mb-0"
        />
      </section>
      <ContactFooter />
    </main>
  );
}
