'use client';

import Image from 'next/image';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import MarkerUbi from '../../public/assets/logos-png/market-map.png';
import { useState } from 'react';

export default function MapLocation() {
  //const [showInfo, setshowInfo] = useState(false);

  return (
    <div className="h-[600px]">
      <Map
        height={600}
        defaultCenter={[-31.72671037047572, -60.49073468241136]}
        defaultZoom={15}
        minZoom={6}
        metaWheelZoom={true}
      >
        <Marker width={50} anchor={[-31.72671037047572, -60.49073468241136]}>
          <Image
            src={MarkerUbi}
            width={50}
            height={60}
            alt="Marker de localizacion para el estudio de Godoy Feresin Arquitectas"
          />
        </Marker>
        <ZoomControl />
      </Map>
    </div>
  );
}
