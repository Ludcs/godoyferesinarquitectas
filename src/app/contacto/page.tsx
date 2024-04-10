'use client';

import FormContact from '@/components/FormContact';
import Header from '@/components/Header';
import MapLocation from '@/components/MapLocation';

export default function Contacto() {
  return (
    <main className="w-full">
      <Header />
      <div className="h-12"></div>
      <FormContact />
      <MapLocation />
      {/* <div className="h-12"></div> */}
    </main>
  );
}
