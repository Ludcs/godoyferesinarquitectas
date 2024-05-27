'use client';
import '@/app/globals.css';
import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function ContactFooter() {
  const ContactContainer = useRef(null);
  const isInViewContactContainer = useInView(ContactContainer, { once: true });

  return (
    <section className="w-full py-14 flex flex-col justify-center items-center text-center bg-[#F3F3F3]">
      <div
        ref={ContactContainer}
        style={{
          opacity: ContactContainer ? 1 : 0,
          animation: `${
            isInViewContactContainer ? 'zoomIn' : 'none'
          } 0.5s ease-in`,
        }}
        className="flex flex-col"
      >
        <p className="text-3xl font-bold">Tenes un proyecto en mente?</p>
        <div className="mt-10 mb-10">
          <Link
            href={'/contacto'}
            className="text-lg px-5 py-2 border border-solid border-black hover:bg-black hover:text-white transition-all duration-200"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
}
