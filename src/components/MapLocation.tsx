'use client';

import Image from 'next/image';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import RedondoCoral from '../../public/assets/logos-png/redondo-coral.png';
import { useState } from 'react';

export default function MapLocation() {
  //const [showInfo, setshowInfo] = useState(false);

  return (
    <Map
      height={500}
      defaultCenter={[-31.726512111070388, -60.49061190310807]}
      defaultZoom={15}
      minZoom={6}
    >
      <Marker width={50} anchor={[-31.726512111070388, -60.49061190310807]}>
        {/* <Image
          src={RedondoCoral}
          width={50}
          height={60}
          alt="Marker de localizacion para el estudio de Godoy Feresin Arquitectas"
        /> */}
      </Marker>
      <ZoomControl />
    </Map>
  );
}
