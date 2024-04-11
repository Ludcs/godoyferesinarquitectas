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
        className="py-14 flex flex-col justify-center items-start gap-8 bg-white transform text-start"
        ref={ContactRef}
        style={{
          transform: isInViewContactRef ? 'none' : 'translateX(-200px)',
          opacity: isInViewContactRef ? 1 : 0,
          transition: 'all .5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h1 className="text-3xl font-bold px-2">
          <span className="text-5xl font-bold">_</span>
          {''}contacto
        </h1>
      </section>
      <FormContact />
      <MapLocation />
    </main>
  );
}
