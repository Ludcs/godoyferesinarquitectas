'use client';
import '@/app/home.css';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import TresDuplexPrev from '../../../../public/assets/images/proyectos/tresDuplex/04-Tres-duplex.jpg';
import TresDuplex1 from '../../../../public/assets/images/proyectos/tresDuplex/01-Tres-duplex.jpg';
import TresDuplex2 from '../../../../public/assets/images/proyectos/tresDuplex/02-Tres-duplex.jpg';
import TresDuplex3 from '../../../../public/assets/images/proyectos/tresDuplex/03-Tres-duplex.jpg';
import TresDuplex5 from '../../../../public/assets/images/proyectos/tresDuplex/05-Tres-duplex.jpg';
import TresDuplex6 from '../../../../public/assets/images/proyectos/tresDuplex/06-Tres-duplex.jpg';
import TresDuplex7 from '../../../../public/assets/images/proyectos/tresDuplex/07-Tres-duplex.jpg';
import TresDuplex8 from '../../../../public/assets/images/proyectos/tresDuplex/08-Tres-duplex.jpg';
import TresDuplex9 from '../../../../public/assets/images/proyectos/tresDuplex/09-Tres-duplex.jpg';
import ContactFooter from '@/components/ContactFooter';

export default function TresDuplex() {
  const TopImageTresDuplexref = useRef(null);
  const isInViewTopImageTresDuplexref = useInView(TopImageTresDuplexref, {
    once: true,
  });

  const Descriptionref = useRef(null);
  const isInViewDescriptionref = useInView(Descriptionref, { once: true });

  return (
    <main className="w-full">
      <Header />
      <ScrollToTop />
      <section
        ref={TopImageTresDuplexref}
        style={{
          opacity: isInViewTopImageTresDuplexref ? 1 : 0,
          transition: 'opacity 1s ease-out',
          animation: `${
            isInViewTopImageTresDuplexref ? 'fadeIn' : 'none'
          } 0.5s ease-in`,
        }}
      >
        <Image
          src={TresDuplexPrev}
          alt="Header Image Proyecto Tres Duplex"
          className="w-full h-auto"
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
        <div className="w-full underline text-[#ABABAB] pb-6 ">
          <Link href={'/proyectos'}>Volver</Link>
        </div>
        <article>
          <div>
            <h1 className="font-bold text-3xl">Tres Duplex</h1>
            <p className="font-semibold">Residencial</p>
          </div>
          <div className="pb-6 text-[#ABABAB]">
            <p>Paraná, Entre Ríos, Argentina.</p>
            <p>Año 2023.</p>
          </div>
          <div>
            <p className="text-justify leading-relaxed ">
              A partir del relevamiento de la construcción existente, se
              plantean tres unidades funcionales en formato “dúplex”. Las mismas
              se ubican en el fondo del terreno y tienen entrada independiente
              desde un espacio de uso común abierto y semi-cubierto que consta
              de cochera, patio-jardín y galería-quincho.
              <br />
              Las búsquedas morfológicas y estéticas consideran las
              pre-existencias (vivienda y local comercial, entorno) y procuran
              narrar su función sin imponerse sobre el resto del conjunto.
              <br />
              Cada vivienda resuelve en planta baja áreas sociales y de
              servicio: estar, cocina-comedor, lavadero, baño tipo toilette y
              patio con parrilla; y en planta alta: baño completo y dos
              dormitorios con balcones. El dormitorio que mira al Norte, es
              decir al contra frente, puede ser utilizado como taller- estudio o
              bien como cuarto secundario, lo que ha sido considerado en el
              diseño de la instalación eléctrica a fin de potenciar esta
              flexibilidad de uso.
            </p>
          </div>
        </article>
      </section>
      <section className="w-full flex flex-col gap-4 pt-12 lg:gap-6 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto">
        <Image
          src={TresDuplex1}
          alt="Imagen 1 Proyecto Tres Duplex GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={TresDuplex2}
          alt="Imagen 2 Proyecto Tres Duplex GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={TresDuplex3}
          alt="Imagen 3 Proyecto Tres Duplex GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={TresDuplex5}
          alt="Imagen 5 Proyecto Tres Duplex GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={TresDuplex6}
          alt="Imagen 6 Proyecto Tres Duplex GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={TresDuplex7}
          alt="Imagen 7 Proyecto Tres Duplex GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={TresDuplex8}
          alt="Imagen 8 Proyecto Tres Duplex GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={TresDuplex9}
          alt="Imagen 9 Proyecto Tres Duplex GyF Arquitectas"
          priority={true}
          className="pb-4"
        />
      </section>
      <ContactFooter />
    </main>
  );
}
