'use client';
import Header from '@/components/Header';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Slider />
      <section className="py-28 px-2 bg-primary">
        <h1 className="text-2xl font-bold">
          Somos las arquitectas mas picantes de todo el condado 😎
        </h1>
        <p className="py-3">Contratanos o hay bala</p>
      </section>
    </main>
  );
}
