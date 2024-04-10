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
      ref={formRef}
      onSubmit={sendEmail}
      className="w-full flex flex-col gap-4 p-2"
    >
      <input
        type="text"
        placeholder="Nombre y Apellido"
        name="user_name"
        required
        className="p-2  border-b border-black outline-none"
      />

      <input
        type="email"
        placeholder="Email"
        name="user_email"
        required
        className="p-2  border-b border-black outline-none"
      />

      <textarea
        placeholder="Escribinos tu consulta..."
        cols={30}
        rows={5}
        name="message"
        required
        className="p-2  border-b border-black outline-none resize-none"
      ></textarea>

      <button
        type="submit"
        className="bg-primary py-4 font-bold text-white text-lg border  border-primary hover:text-primary hover:bg-white hover:border hover:border-primary transition-all ease-in-out"
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