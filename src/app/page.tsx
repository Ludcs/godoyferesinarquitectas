"use client";
import "./home.css";
import ImageServices from "../../public/assets/images/imageDemo-services.jpg";
import Slider from "@/components/Slider";
import ScrollToTop from "@/components/ScrollToTop";
import Team from "../../public/assets/images/juntas.png";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = () => setIsTablet(mediaQuery.matches);

    handleMediaChange();

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const Sloganref = useRef(null);
  const isInViewSlogan = useInView(Sloganref, { once: true });

  const TeamImageref = useRef(null);
  const isInViewTeamImage = useInView(TeamImageref, { once: true });

  const PhraseServicesTabletRef = useRef(null);
  const isInViewPhraseServicesTablet = useInView(PhraseServicesTabletRef, {
    once: true,
  });

  const PhraseServicesref = useRef(null);
  const isInViewPhraseServices = useInView(PhraseServicesref, { once: true });

  const ImageServicesref = useRef(null);
  const isInViewImageServices = useInView(ImageServicesref, { once: true });

  return (
    <main className="w-full">
      <ScrollToTop />
      <Slider />
      <section
        className="py-28 px-2 bg-white transform text-start xl:px-12 2xl:px-0  2xl:max-w-7xl 2xl:m-auto"
        ref={Sloganref}
        style={{
          opacity: isInViewSlogan ? 1 : 0,
          transition: "opacity 1s ease-out",
          animation: `${isInViewSlogan ? "fadeIn" : "none"} 0.5s ease-in`,
        }}
      >
        <h1 className="text-3xl font-bold px-2 xl:text-4xl xl:px-0 2xl:px-0">
          <span className="text-5xl font-bold">_</span>
          desde nuestro estudio de arquitectura independiente proyectamos y
          materializamos espacios.
        </h1>
        <p className="text-justify text-md py-5 font-bold px-2 md:font-normal md:text-lg xl:px-0 2xl:px-0">
          Trabajamos estrechamente con nuestros clientes para atender y resolver
          sus necesidades, expectativas y deseos. Brindamos un servicio
          profesional y humano, en compromiso con nuestra sociedad, y
          perseguimos el diseño creativo para la configuración e identidad de
          los espacios.
        </p>
      </section>

      <section
        className="w-full 2xl:px-0 2xl:max-w-7xl 2xl:m-auto"
        ref={TeamImageref}
        style={{
          transform: isInViewTeamImage ? "none" : "translateX(-200px)",
          opacity: isInViewTeamImage ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
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
          href={"/nosotras"}
          className="w-full py-2 flex justify-center items-center gap-4 text-lg hover:bg-primary hover:text-white transition-all duration-200 lg:w-1/2"
        >
          <p className="md:text-2xl md:font-semiboldbold 2xl:text-3xl">
            Quienes somos?
          </p>
          <FaArrowRight size={30} />
        </Link>
      </div>
      <section className="w-full overflow-x-hidden md:grid md:grid-cols-2 md:grid-auto-rows-[1fr] 2xl:px-0 2xl:max-w-7xl 2xl:m-auto">
        <div
          ref={PhraseServicesTabletRef}
          style={{
            opacity: isInViewPhraseServicesTablet ? 1 : 0,
            transform:
              isTablet || isInViewPhraseServicesTablet
                ? "none"
                : "translateX(-100%)",
            transition: isTablet ? "all 1s ease" : "none",
            animation:
              isTablet && isInViewPhraseServicesTablet
                ? "fadeInLeft 1s ease-in"
                : "none",
          }}
          className="w-full py-28 bg-primary lg:flex lg:flex-col lg:items-center lg:justify-center"
        >
          <div
            ref={PhraseServicesref}
            style={{
              opacity: isInViewPhraseServices ? 1 : 0,
              transition: "opacity 1s ease-out",
              animation: isInViewPhraseServices ? "fadeIn 1s ease-in" : "none",
            }}
            className={`${
              isTablet
                ? "h-full flex flex-col justify-center items-center"
                : "none"
            }`}
          >
            <p className="text-2xl font-bold px-2 text-center md:text-2xl lg:text-3xl lg:px-4">
              “La arquitectura refleja, materializa y hace eternas ideas e
              imágenes de la vida ideal. Los edificios y las ciudades nos
              permiten estructurar, entender y recordar el flujo informe de la
              realidad y, en última instancia, reconocer y recordar quiénes
              somos.”
            </p>
            <p className="px-2 pt-2 italic text-center md:text-lg md:font-thin lg:text-lg lg:px-4">
              -JUHANI PALLASMAA-
            </p>
            <Link
              href={"/servicios"}
              className="w-full mt-10 py-2 flex justify-center items-center gap-4 text-lg hover:bg-white hover:text-primary transition-all duration-200 lg:mt-14"
            >
              <p className="md:text-2xl md:font-semiboldbold 2xl:text-3xl">
                Nuestros servicios
              </p>
              <FaArrowRight size={30} />
            </Link>
          </div>
        </div>
        <div
          className="w-full"
          ref={ImageServicesref}
          style={{
            opacity: isInViewImageServices ? 1 : 0,
            transform:
              isTablet || isInViewImageServices ? "none" : "translateX(100%)",
            transition: isTablet ? "all 1s ease" : "opacity 1s ease-out",
            animation:
              isTablet && isInViewImageServices
                ? "fadeInRight 1s ease-in"
                : isInViewImageServices
                ? "fadeIn 0.5s ease-in"
                : "none",
          }}
        >
          <Image
            src={ImageServices}
            alt="Imagen para la seccion de servicios"
            className="w-full md:h-full md:object-cover"
            priority={true}
          />
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}
