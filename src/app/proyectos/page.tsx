import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import Link from "next/link";
import TresDuplexPrev from "../../../public/assets/images/proyectos/tresDuplex/04-Tres-duplex.jpg";
import CasaTavoPrev from "../../../public/assets/images/proyectos/casaTavo/01-Tavo.jpg";
import AmpliacionVillaguayPrev from "../../../public/assets/images/proyectos/ampliacionVillaguay/01-Villaguay.jpg";
import QuinchoPrev from "../../../public/assets/images/proyectos/quinchoLaSoñada/quincho1.jpg";
import ContactFooter from "@/components/ContactFooter";

export default function Proyectos() {
  return (
    <main className="w-full">
      {/* <Header /> */}
      <ScrollToTop />

      <section className="w-full px-2 py-12 flex flex-col gap-2 md:gap-4 lg:px-4 lg:gap-6 2xl:py-0 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto">
        <div className="h-auto relative">
          <Link href={"/proyectos/tresDuplex"}>
            <Image
              src={TresDuplexPrev}
              alt="Preview Proyecto Tres Duplex"
              className="w-full h-auto brightness-50 transition-all duration-200 ease-in hover:brightness-100"
            />
            <div className="pl-2 pb-2 text-white absolute z-[2] bottom-0 left-0">
              <h2 className="text-white font-bold text-2xl">Tres Duplex</h2>
              <p>Paraná, Entre Ríos, Argentina.</p>
            </div>
          </Link>
        </div>
        <div className="h-auto relative">
          <Link href={"/proyectos/casaTavo"}>
            <Image
              src={CasaTavoPrev}
              alt="Preview Proyecto Casa Tavo"
              className="w-full h-auto brightness-50 transition-all duration-200 ease-in hover:brightness-100"
            />
            <div className="pl-2 pb-2 text-white absolute z-[2] bottom-0 left-0">
              <h2 className="text-white font-bold text-2xl">La Soñada</h2>
              <p>Paraná, Entre Ríos, Argentina.</p>
            </div>
          </Link>
        </div>
        <div className="h-auto relative">
          <Link href={"/proyectos/ampliacionVillaguay"}>
            <Image
              src={AmpliacionVillaguayPrev}
              alt="Preview Proyecto Ampliación Laura"
              className="w-full h-auto brightness-50 transition-all duration-200 ease-in hover:brightness-100"
            />
            <div className="pl-2 pb-2 text-white absolute z-[2] bottom-0 left-0">
              <h2 className="text-white font-bold text-2xl">
                Ampliación Villaguay
              </h2>
              <p>Villaguay, Entre Ríos, Argentina.</p>
            </div>
          </Link>
        </div>
        <div className="h-auto relative">
          <Link href={"/proyectos/quinchoLaSonada"}>
            <Image
              src={QuinchoPrev}
              alt="Preview Proyecto Ampliación Laura"
              className="w-full h-auto brightness-50 transition-all duration-200 ease-in hover:brightness-100"
            />
            <div className="pl-2 pb-2 text-white absolute z-[2] bottom-0 left-0">
              <h2 className="text-white font-bold text-2xl">
                Quincho para “La Soñada”
              </h2>
              <p>Paraná, Entre Ríos, Argentina.</p>
            </div>
          </Link>
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}
