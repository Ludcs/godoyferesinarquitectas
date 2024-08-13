"use client";
import "@/app/home.css";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import QuinchoPrev from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho1.jpg";
import Quincho2 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho2.jpg";
import Quincho3 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho3.jpg";
import Quincho4 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho4.jpg";
import Quincho5 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho5.jpg";
import Quincho6 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho6.jpg";
import Quincho7 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho7.jpg";
import Quincho8 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho8.jpg";
import Quincho9 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho9.jpg";
import Quincho10 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho10.jpg";
import Quincho11 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho11.jpg";
import Quincho12 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho12.jpg";
import Quincho13 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho13.jpg";
import Quincho14 from "../../../../public/assets/images/proyectos/quinchoLaSoñada/quincho14.jpg";
import ContactFooter from "@/components/ContactFooter";

export default function QuinchoLaSonada() {
  const TopImageQuinchoref = useRef(null);
  const isInViewTopImageQuinchoref = useInView(TopImageQuinchoref, {
    once: true,
  });

  const Descriptionref = useRef(null);
  const isInViewDescriptionref = useInView(Descriptionref, { once: true });

  return (
    <main className="w-full">
      <ScrollToTop />
      <section
        ref={TopImageQuinchoref}
        style={{
          opacity: isInViewTopImageQuinchoref ? 1 : 0,
          transition: "opacity 1s ease-out",
          animation: `${
            isInViewTopImageQuinchoref ? "fadeIn" : "none"
          } 0.5s ease-in`,
        }}
      >
        <Image
          src={QuinchoPrev}
          alt="Header Image Proyecto Quincho para La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
      </section>
      <section
        className="w-full px-2 pt-12 flex flex-col md:text-lg lg:px-4 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto"
        ref={Descriptionref}
        style={{
          transform: isInViewDescriptionref ? "none" : "translateX(-100%)",
          opacity: isInViewDescriptionref ? 1 : 0,
          transition: "all 1s ease",
        }}
      >
        <div className="w-full underline text-[#ABABAB] pb-6 ">
          <Link href={"/proyectos"}>Volver</Link>
        </div>
        <article>
          <div>
            <h1 className="font-bold text-3xl">Quincho para “La Soñada”</h1>
            <p className="font-semibold">Residencial</p>
          </div>
          <div className="pb-6 text-[#ABABAB]">
            <p>Paraná, Entre Ríos, Argentina.</p>
            <p>Año 2024.</p>
            <p>Arq. Godoy Fiorella y Arq. Feresin Florencia</p>
          </div>
          <div>
            <p className="text-justify leading-relaxed ">
              El proyecto se posa sobre la medianera Oeste en relación a la
              preexistencia de la parrilla y del espacio de guardado. Una
              pérgola metálica actúa de nexo con la casa, conformando un patio
              interno con vegetación. Se buscó dar jerarquía al agua, a través
              de la cadena pluvial aportando dinamismo al paisaje, brindando una
              sensación de calma y relajación. Además, se definió un sector de
              fogón, agregando el elemento fuego al paisaje. A partir de todos
              los elementos mencionados, la presencia del agua, el verde, el
              fuego, la piedra, se intenta configurar un espacio
              abierto/semicubierto de calidad estética y funcional; a la vez que
              diferenciado del resto de la vivienda como un sitio más vinculado
              a la naturaleza o la vida al aire libre.
            </p>
          </div>
        </article>
      </section>
      <section className="w-full flex flex-col gap-4 pt-12 lg:gap-6 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto">
        <Image
          src={Quincho2}
          alt="Imagen 2 Proyecto Quincho para La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={Quincho3}
          alt="Imagen 3 Proyecto Quincho para La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={Quincho4}
          alt="Imagen 4 Proyecto Quincho para La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={Quincho5}
          alt="Imagen 5 Proyecto Quincho para La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={Quincho6}
          alt="Imagen 6 Proyecto Quincho para La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={Quincho7}
          alt="Imagen 7 Proyecto Quincho para La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={Quincho8}
          alt="Imagen 8 Proyecto Quincho para La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={Quincho9}
          alt="Imagen 9 Proyecto Quincho para La Soñada GyF Arquitectas"
          priority={true}
          className="w-full h-auto"
        />
        <Image
          src={Quincho10}
          alt="Imagen 10 Proyecto Quincho para La Soñada GyF Arquitectas"
          priority={true}
          className="w-full h-auto"
        />
        <Image
          src={Quincho11}
          alt="Imagen 11 Proyecto Quincho para La Soñada GyF Arquitectas"
          priority={true}
          className="w-full h-auto"
        />
        <Image
          src={Quincho12}
          alt="Imagen 12 Proyecto Quincho para La Soñada GyF Arquitectas"
          priority={true}
          className="w-full h-auto"
        />
        <Image
          src={Quincho13}
          alt="Imagen 13 Proyecto Quincho para La Soñada GyF Arquitectas"
          priority={true}
          className="w-full h-auto"
        />
        <Image
          src={Quincho14}
          alt="Imagen 14 Proyecto Quincho para La Soñada GyF Arquitectas"
          priority={true}
          className="pb-4 2xl:pb-0"
        />
      </section>
      <ContactFooter />
    </main>
  );
}
