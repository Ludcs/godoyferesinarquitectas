'use client';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function FormContact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="w-full flex flex-col gap-4 p-2"
    >
      {/* <label htmlFor="name_input">Nombre y Apellido</label> */}
      <input
        type="text"
        id="name_input"
        name="user_name"
        placeholder="Nombre y Apellido"
        className="p-2  border-b border-black outline-none"
      />

      {/* <label htmlFor="email_input">Email</label> */}
      <input
        type="email"
        id="email_input"
        name="user_email"
        placeholder="Email"
        className="p-2  border-b border-black outline-none"
      />

      {/* <label htmlFor="phone_input">Telefono</label> */}
      <input
        type="number"
        id="phone_input"
        name="user_phone"
        placeholder="Telefono"
        className="p-2  border-b border-black outline-none"
      />

      {/* <label htmlFor="message_input">Escribinos tu consulta</label> */}
      <textarea
        name="user_message"
        id="message_input"
        placeholder="Escribinos tu consulta..."
        cols={30}
        rows={5}
        className="p-2  border-b border-black outline-none resize-none"
      ></textarea>
      <button
        type="submit"
        className="bg-primary py-4 font-bold text-white text-lg border  border-primary hover:text-primary hover:bg-white hover:border hover:border-primary transition-all ease-in-out"
      >
        Enviar
      </button>
    </form>
  );
}
