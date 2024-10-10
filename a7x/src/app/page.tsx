import Image from 'next/image';
import React from 'react';
import {FaWhatsappSquare} from 'react-icons/fa'; // Import the WhatsApp icon

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900">
      <h1 className="text-xl font-bold mb-20">ESTAMOS EM CONSTRUÇÃO</h1>
      <Image
        src="/A7 LOGO.PNG" // Replace with your image path
        alt="A7 STUDIO"
        width={350}
        height={350}
        className="object-cover"
      />
      <p className="mt-20 text-xl">CONTATO</p>
      <a href="https://wa.me/45999799513" target="_blank" rel="noopener noreferrer">
      <FaWhatsappSquare />
      </a>
    </div>
  );
}
