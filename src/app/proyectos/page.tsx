import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import Image from 'next/image';
import Link from 'next/link';
import TresDuplexPrev from '../../../public/assets/images/proyectos/tresDuplex/04-Tres-duplex.jpg';
import CasaTavoPrev from '../../../public/assets/images/proyectos/casaTavo/01-Tavo.jpg';

export default function Proyectos() {
  return (
    <main className="w-full">
      <Header />
      <ScrollToTop />
      <section className="w-full px-2 py-12 flex flex-col gap-2">
        <div className="bg-red-200 w-full h-80 relative">
          <Link href={'/proyectos/tresDuplex'}>
            <Image
              src={TresDuplexPrev}
              alt="Preview Proyecto Tres Duplex"
              className="w-fill h-full brightness-50 transition-all duration-200 ease-in hover:brightness-100"
              priority={true}
            />
            <div className="pl-2 pb-2 text-white absolute z-[2] bottom-0 left-0">
              <h2 className="text-white font-bold text-2xl">Tres Duplex</h2>
              <p>Paraná, Entre Ríos, Argentina.</p>
            </div>
          </Link>
        </div>
        <div className="bg-red-200 h-80 relative">
          <Link href={'/proyectos/casaTavo'}>
            <Image
              src={CasaTavoPrev}
              alt="Preview Proyecto Casa Tavo"
              className="w-fill h-full brightness-50 transition-all duration-200 ease-in hover:brightness-100"
              priority={true}
            />
            <div className="pl-2 pb-2 text-white absolute z-[2] bottom-0 left-0">
              <h2 className="text-white font-bold text-2xl">La Soñada</h2>
              <p>Paraná, Entre Ríos, Argentina.</p>
            </div>
          </Link>
        </div>
        <div className="bg-red-200 h-80 relative">
          <Link href={'/proyectos/ampliacionLaura'}>
            <Image
              src={TresDuplexPrev}
              alt="Preview Proyecto Ampliación Laura"
              className="w-fill h-full brightness-50 transition-all duration-200 ease-in hover:brightness-100"
              priority={true}
            />
            <div className="pl-2 pb-2 text-white absolute z-[2] bottom-0 left-0">
              <h2 className="text-white font-bold text-2xl">
                Ampliación Laura
              </h2>
              <p>Villaguay, Entre Ríos, Argentina.</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
