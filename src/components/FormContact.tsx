'use client';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function FormContact() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error('Form element is null');
      return;
    }
    console.log('formRef.current:', formRef.current);
    setLoading(true);

    emailjs
      .sendForm('service_bav6g8q', 'template_79d40kl', formRef.current, {
        publicKey: 'vXTJe7UE607g1Bn9t',
      })
      .then(
        () => {
          setLoading(false);
          console.log('SUCCESS!');
          setSuccessMessage(true);
          formRef.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage(true);
        }
      );
  };

  return (
    <form
      className="w-full flex flex-col gap-4 px-2 pb-7"
      ref={formRef}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
        <input
          type="text"
          placeholder="Nombre y Apellido"
          name="user_name"
          required
          className="p-2  border-b border-black outline-none"
          autoComplete="off"
        />

        <input
          type="email"
          placeholder="Email"
          name="user_email"
          required
          className="p-2  border-b border-black outline-none"
          autoComplete="off"
        />
      </div>

      <textarea
        placeholder="Escribinos tu consulta..."
        cols={30}
        rows={5}
        name="message"
        required
        className="p-2  border-b border-black outline-none resize-none"
        autoComplete="off"
      ></textarea>
      <div className="hidden lg:flex justify-center items-center">
        <button
          type="submit"
          className="bg-primary py-4 font-bold text-white text-lg border  border-primary hover:text-primary hover:bg-white hover:border hover:border-primary transition-all duration-200 md:w-1/2 lg:text-xl lg:w-1/3"
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
      <button
        type="submit"
        className="bg-primary py-4 font-bold text-white text-lg border  border-primary hover:text-primary hover:bg-white hover:border hover:border-primary transition-all duration-200 md:w-1/2 lg:text-xl lg:w-1/3 lg:hidden"
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
      {successMessage && (
        <span className="py-2 font-bold text-center text-green-500 text-lg">
          Tu consulta fue enviada!
        </span>
      )}
      {errorMessage && (
        <span className="py-2 font-bold text-center text-red-500 text-lg">
          Error al enviar la consulta
        </span>
      )}
    </form>
  );
}
