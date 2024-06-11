'use client';

import FormContact from '@/components/FormContact';
import Header from '@/components/Header';
import MapLocation from '@/components/MapLocation';
import ScrollToTop from '@/components/ScrollToTop';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contacto() {
  const ContactRef = useRef(null);
  const isInViewContactRef = useInView(ContactRef, { once: true });

  return (
    <main className="w-full">
      <ScrollToTop />
      <Header />
      <section
        className="py-14 flex flex-col justify-center items-start gap-8 bg-white transform text-start overflow-x-hidden xl:px-12 2xl:px-0 2xl:max-w-7xl 2xl:m-auto"
        ref={ContactRef}
        style={{
          opacity: isInViewContactRef ? 1 : 0,
          transform: isInViewContactRef ? 'none' : 'translateX(-100%)',
          transition: 'all 1s ease',
        }}
      >
        <h1 className="text-3xl font-bold px-2 2xl:text-4xl 2xl:px-0">
          <span className="text-5xl font-bold">_</span>
          {''}contacto
        </h1>
      </section>
      <section className="xl:px-12 2xl:px-0 2xl:max-w-7xl 2xl:m-auto">
        <FormContact />
        <div className="xl:pb-7">
          <MapLocation />
        </div>
      </section>
    </main>
  );
}
