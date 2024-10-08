"use client";
import "../../app/home.css";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import ServicesTopImg from "../../../public/assets/images/services_top_img.jpg";
import Services1 from "../../../public/assets/images/services1.jpg";
import Services2 from "../../../public/assets/images/services2.jpg";
import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";
import ContactFooter from "@/components/ContactFooter";

export default function Servicios() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaChange = () => setIsDesktop(mediaQuery.matches);

    handleMediaChange();

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

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

  const MidleImageref1 = useRef(null);
  const isInViewMidleImage1Ref = useInView(MidleImageref1, { once: true });

  const MidleImageref2 = useRef(null);
  const isInViewMidleImage2Ref = useInView(MidleImageref2, { once: true });

  const Service4Ref = useRef(null);
  const isInViewService4Ref = useInView(Service4Ref, { once: true });

  const Service5Ref = useRef(null);
  const isInViewService5Ref = useInView(Service5Ref, { once: true });

  const Service6Ref = useRef(null);
  const isInViewService6Ref = useInView(Service6Ref, { once: true });

  return (
    <main className="w-full">
      <ScrollToTop />
      <div
        ref={TopImageref}
        style={{
          opacity: isInViewTopImageRef ? 1 : 0,
          transition: "opacity 1s ease-out",
          animation: `${isInViewTopImageRef ? "fadeIn" : "none"} 0.5s ease-in`,
        }}
        className="2xl:max-w-7xl 2xl:m-auto"
      >
        <Image
          src={ServicesTopImg}
          alt="Imagen del equipo Godoy Feresin Arquitectas"
          className="w-full h-auto"
          priority={true}
        />
      </div>
      <section
        className="py-28 px-2 flex flex-col justify-center items-start gap-8 bg-white transform text-start lg:px-4 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto"
        ref={ServiceRef}
        style={{
          opacity: isInViewServiceRef ? 1 : 0,
          transform: isInViewServiceRef ? "none" : "translateX(-100%)",
          transition: "all 1s ease",
        }}
      >
        <h1 className="text-3xl font-bold px-2 2xl:text-4xl">
          <span className="text-5xl font-bold">_</span>
          {""}nuestros servicios
        </h1>
        <p className="text-2xl font-bold px-2 2xl:text-3xl">
          Diseñamos, planificamos y construimos proyectos arquitectónicos
          creativos. Te asesoramos en el proceso y trabajamos de manera conjunta
          los espacios.
        </p>
        <p className="px-2 text-[#ABABAB] md:font-normal md:text-lg 2xl:text-xl">
          Como profesionales de la Arquitectura realizamos diferentes tareas y
          podemos ayudarte a diseñar, planificar y construir tu inmueble. Te
          asesoramos sobre regularizaciones municipales, patologías o fallas
          constructivas en los edificios y hasta desarrollar un plan urbano.
          <br className="md:hidden" />
          Estos son los servicios que ofrecemos:
        </p>
      </section>
      <div className="flex flex-col gap-2 w-full h-auto overflow-x-hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:px-4 lg:text-justify 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto">
        <div
          ref={Service1Ref}
          style={{
            opacity: isInViewService1Ref ? 1 : 0,
            transition: isDesktop ? "opacity 1s ease-out" : "all 1s ease",
            transform: isInViewService1Ref ? "none" : "translateX(100%)",
          }}
          className="px-4 pb-28 flex flex-col gap-2 w-full md:pb-14 lg:px-0"
        >
          <p className="text-2xl font-bold">Relevamiento y Regularización</p>
          <p className="md:text-lg">
            Actualiza la planimetría declarada de tu bien inmueble, permitiendo
            dejar en regla tu edificación ante organismos municipales evitando
            multas y mejorando el precio del valor del m2 construido.
          </p>
        </div>
        <div
          ref={Service2Ref}
          style={{
            opacity: isInViewService2Ref ? 1 : 0,
            transform: isInViewService2Ref ? "none" : "translateX(-100%)",
            transition: isDesktop ? "opacity 1s ease-out" : "all 1s ease",
          }}
          className="px-4 pb-28 flex flex-col gap-2 w-full md:pb-14 lg:px-0"
        >
          <p className="text-2xl font-bold">Asesoramiento</p>
          <p className="md:text-lg">
            Resolvemos situaciones puntuales que requieran un conocimiento
            técnico específico como ser la elección de un lote, conocer las
            reglamentaciones locales, identificar problemas constructivos y sus
            posibles soluciones. También puede ser útil para resolver preguntas
            y problemas durante la construcción.
          </p>
        </div>
      </div>
      <div
        className="pb-28 flex flex-col gap-2 w-full md:pb-14 2xl:max-w-7xl 2xl:mx-auto"
        ref={MidleImageref1}
        style={{
          opacity: isInViewMidleImage1Ref ? 1 : 0,
          transition: "opacity 1s ease-out",
          animation: `${isInViewMidleImage1Ref ? "fadeIn" : "none"} 1s ease-in`,
        }}
      >
        <Image
          src={Services1}
          alt="Foto de planos para la seccion de servicios"
          priority={true}
          className="w-fill h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full lg:grid lg:grid-cols-2 lg:gap-8 h-auto overflow-x-hidden lg:px-4 lg:text-justify 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto">
        <div
          ref={Service3Ref}
          style={{
            opacity: isInViewService3Ref ? 1 : 0,
            transform: isInViewService3Ref ? "none" : "translateX(100%)",
            transition: isDesktop ? "opacity 1s ease-out" : "all 1s ease",
          }}
          className="px-4 pb-28 flex flex-col gap-2 w-full md:pb-14 lg:px-0"
        >
          <p className="text-2xl font-bold">Anteproyecto</p>
          <p className="md:text-lg">
            Exploramos ideas y definimos las necesidades del cliente.
            Conceptualizamos la idea y analizamos el sitio.
          </p>
        </div>
        <div
          ref={Service4Ref}
          style={{
            opacity: isInViewService4Ref ? 1 : 0,
            transform: isInViewService4Ref ? "none" : "translateX(-100%)",
            transition: isDesktop ? "opacity 1s ease-out" : "all 1s ease",
          }}
          className="px-4 pb-28 flex flex-col gap-2 w-full md:pb-14 lg:px-0"
        >
          <p className="text-2xl font-bold">
            Proyecto de obra nueva / Ampliación / Reforma
          </p>
          <p className="md:text-lg">
            En base al anteproyecto, ejecutamos la documentación técnica que
            define con precisión el carácter de la obra para permitir su
            construcción. Desarrollamos detalles y planos necesarios para la
            construcción, incluyendo la estructura, distribución espacial,
            materiales, instalaciones, detalles constructivos y especificaciones
            técnicas.
          </p>
        </div>
      </div>
      <div
        className="pb-28 flex flex-col gap-2 w-full md:pb-14 2xl:max-w-7xl 2xl:mx-auto"
        ref={MidleImageref2}
        style={{
          opacity: isInViewMidleImage2Ref ? 1 : 0,
          transition: "opacity 1s ease-out",
          animation: `${isInViewMidleImage2Ref ? "fadeIn" : "none"} 1s ease-in`,
        }}
      >
        <Image
          src={Services2}
          alt="Foto de planos para la seccion de servicios"
          priority={true}
          className="w-fill h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full lg:grid lg:grid-cols-2 lg:gap-8 h-auto overflow-x-hidden lg:px-4 lg:text-justify 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto">
        <div
          ref={Service5Ref}
          style={{
            opacity: isInViewService5Ref ? 1 : 0,
            transform: isInViewService5Ref ? "none" : "translateX(100%)",
            transition: isDesktop ? "opacity 1s ease-out" : "all 1s ease",
          }}
          className="px-4 pb-28 flex flex-col gap-2 w-full lg:px-0 md:pb-14"
        >
          <p className="text-2xl font-bold">
            Proyecto de Desarrollo Urbanístico
          </p>
          <p className="md:text-lg">
            Planificamos un área dentro de un conglomerado poblacional o ciudad.
            Definimos el desarrollo de loteos, mejoramiento de urbanizaciones, e
            intervenimos creando espacios abiertos.
          </p>
        </div>
        <div
          ref={Service6Ref}
          style={{
            opacity: isInViewService6Ref ? 1 : 0,
            transform: isInViewService6Ref ? "none" : "translateX(-100%)",
            transition: isDesktop ? "opacity 1s ease-out" : "all 1s ease",
          }}
          className="px-4 pb-28 flex flex-col gap-2 w-full lg:px-0 md:pb-14"
        >
          <p className="text-2xl font-bold">Interiorismo</p>
          <p className="md:text-lg">
            Nos centramos en la estética y funcionalidad del espacio interior.
            En interiores definimos las terminaciones, el mobiliario, la
            iluminación y los detalles decorativos.
          </p>
        </div>
      </div>
      <ContactFooter />
    </main>
  );
}
