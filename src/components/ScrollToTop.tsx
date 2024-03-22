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
    <div>
      {showScrollTopButtom && (
        <BsFillArrowUpSquareFill
          size={40}
          className="fixed bottom-0 right-2 z-10 opacity-40 cursor-pointer"
          onClick={scrollTop}
        />
      )}
    </div>
  );
}
