"use client";
import "@/app/home.css";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CasaTavoPrev from "../../../../public/assets/images/proyectos/casaTavo/01-Tavo.jpg";
import CasaTavo1 from "../../../../public/assets/images/proyectos/casaTavo/02-Tavo.jpg";
import CasaTavo2 from "../../../../public/assets/images/proyectos/casaTavo/03-Tavo.jpg";
import CasaTavo3 from "../../../../public/assets/images/proyectos/casaTavo/04-Tavo.jpg";
import CasaTavo4 from "../../../../public/assets/images/proyectos/casaTavo/05-Tavo.jpg";
import VillaguayTop from "../../../../public/assets/images/proyectos/ampliacionVillaguay/01-Villaguay.jpg";
import Villaguay2 from "../../../../public/assets/images/proyectos/ampliacionVillaguay/02-Villaguay.jpg";
import Villaguay3 from "../../../../public/assets/images/proyectos/ampliacionVillaguay/03-Villaguay.jpg";
import Villaguay4 from "../../../../public/assets/images/proyectos/ampliacionVillaguay/04-Villaguay.jpg";
import ContactFooter from "@/components/ContactFooter";

export default function AmpliacionVillaguay() {
  const TopImageVillaguayref = useRef(null);
  const isInViewTopImageVillaguayref = useInView(TopImageVillaguayref, {
    once: true,
  });

  const Descriptionref = useRef(null);
  const isInViewDescriptionref = useInView(Descriptionref, { once: true });

  return (
    <main className="w-full">
      {/* <Header /> */}
      <ScrollToTop />
      <section
        ref={TopImageVillaguayref}
        style={{
          opacity: isInViewTopImageVillaguayref ? 1 : 0,
          transition: "opacity 1s ease-out",
          animation: `${
            isInViewTopImageVillaguayref ? "fadeIn" : "none"
          } 0.5s ease-in`,
        }}
      >
        <Image
          src={VillaguayTop}
          alt="Header Image Proyecto La Soñada"
          className="w-full h-auto"
          priority={true}
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
        <div className="w-full underline text-[#ABABAB] pb-6">
          <Link href={"/proyectos"}>Volver</Link>
        </div>
        <article>
          <div>
            <h1 className="font-bold text-3xl">Ampliación Casa Villaguay</h1>
            <p className="font-semibold">Residencial</p>
          </div>
          <div className="pb-6 text-[#ABABAB]">
            <p>Villaguay, Entre Ríos.</p>
            <p>Año 2023.</p>
            <br className="md:hidden" />
            <p>Arq. Godoy Fiorella y Arq. Feresin Florencia</p>
          </div>
          <div>
            <p className="text-justify leading-relaxed">
              A partir del relevamiento de la construcción existente, se
              proyecta la ampliación de la vivienda en planta alta sobre el
              garaje. Para esto, se propone en planta baja reconvertir el
              dormitorio en estudio, como espacio de acceso al primer piso y
              como área de trabajo con mayor intimidad que donde funciona
              actualmente. Se agrega un nuevo vínculo entre cocina y estudio, y
              se le da mayor intimidad al baño colocando una puerta tipo
              granero. La escalera liviana conduce a un palier desde donde se
              accede al baño (con antebaño y ventilación al sur) y a los dos
              dormitorios dispuestos al Este y al Oeste. Ambos poseen balcón: el
              del frente ocupa la losa existente en el ingreso y el de atrás
              crece hacia el Sur en voladizo. Al Norte, se plantean ventanas y
              ladrillos de vidrio que favorecen la iluminación y ventilación
              natural en el sector de circulación. Además, a fin de que el lote
              siga admitiendo el guardado de dos vehículos, se proyecta una
              pérgola metálica que pueda resguardar uno de ellos y de lugar
              también a otras apropiaciones cuando esté disponible. Se procura
              una lectura de contraste entre lo preexistente y lo nuevo, una
              arquitectura blanca, sutil, que se posa sobre aquello que la
              precede sin renegar de su condición de presente. El pasado la
              contiene y la recibe, ella se muestra auténtica simbolizando un
              nuevo comienzo.
            </p>
          </div>
        </article>
      </section>
      <section className="w-full flex flex-col gap-4 pt-12 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto">
        <Image
          src={VillaguayTop}
          alt="Imagen 1 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={Villaguay2}
          alt="Imagen 2 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={Villaguay3}
          alt="Imagen 3 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
        <Image
          src={Villaguay4}
          alt="Imagen 5 Proyecto La Soñada GyF Arquitectas"
          className="w-full h-auto"
        />
      </section>
      <ContactFooter />
    </main>
  );
}
