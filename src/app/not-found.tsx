"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [countDown, setCountDown] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countDown === 0) {
      router.push("/");
    }

    return () => clearInterval(interval);
  }, [countDown, router]);

  return (
    <main className="w-full 2xl:px-0 overflow-x-hidden">
      <div className="h-[600px] bg-[#f3f3f3] flex flex-col justify-center items-center gap-6 2xl:gap-10">
        <h1 className="text-2xl text-center font-bold 2xl:text-3xl">
          No pudimos localizar el contenido que estás buscando.
        </h1>
        <p className="text-lg 2xl:text-xl">
          Redirigiendo al Inicio en {countDown}...
        </p>
      </div>
    </main>
  );
}
