'use client';

import { useState, useEffect } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

export default function ScrollToTop() {
  const [showScrollTopButtom, setShowScrollTopButtom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        setShowScrollTopButtom(true);
      } else {
        setShowScrollTopButtom(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-[-8px] right-2 z-10 opacity-40 rounded rounded-t-md bg-[#4F575F] text-white cursor-pointer">
      {showScrollTopButtom && (
        <BsFillArrowUpSquareFill size={40} onClick={scrollTop} />
      )}
    </div>
  );
}
