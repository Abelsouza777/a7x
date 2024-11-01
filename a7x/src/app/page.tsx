import Image from 'next/image';
import React from 'react';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/whatsapp'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-xl font-bold mb-20">SEU NEGÓCIO VENDENDO MAIS!</h1>
      <div className="m-4 grid gap-4 sm:grid-cols-2">
  <div className="min-h-[100px] rounded-lg bg-teal-100 shadow p-4">
    <p>Desenvolvimento de sites</p>
    <p>Hospedagem em nuvem</p>
    <p>Banco de dados Postgresql</p>
    <p>Imagens com equipamento profissional</p>
  </div>
  <div className="min-h-[100px] rounded-lg bg-teal-200 shadow p-4 flex flex-col items-center">
    <p>12 ANOS DE EXPERIENCIA EM NEGÓCIOS BEM SUCEDIDOS</p>
    <Image
        src="/A7 LOGO.PNG" // Replace with your image path
        alt="A7 STUDIO"
        width={350}
        height={350}
        className="object-cover"
      />
  </div>
</div>
      <p className="mt-20 text-xl">ENTRE EM CONTATO</p>
      <SocialIcon
        url="https://wa.me/45999799513"
        target="_blank"
        rel="noopener noreferrer"
        network="whatsapp"
      />
    </div>
  );
}
