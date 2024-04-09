'use client';

import FormContact from '@/components/FormContact';
import Header from '@/components/Header';
import MapLocation from '@/components/MapLocation';

export default function Contacto() {
  return (
    <main className="w-full">
      <Header />
      <FormContact />
      {/* <div className="h-12"></div> */}
      <MapLocation />
      {/* <div className="h-12"></div> */}
    </main>
  );
}
