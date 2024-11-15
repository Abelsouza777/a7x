import Image from 'next/image';
import React from 'react';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/whatsapp'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex items-center">
          <div className="logo">
            <Image src="/A7 LOGO.PNG" alt="Logo" width={40} height={40} />
          </div>
        </div>
      </header>

      {/* Banner */}
      <section className="w-full">
        <div className="relative">
          <Image
            src="/banner.png"
            alt="Banner"
            className="hidden md:block w-full h-auto"
            width={1920}
            height={600}
          />
          <Image
            src="/BANNER1.png"
            alt="Banner"
            className="block md:hidden w-full h-auto"
            width={768}
            height={400}
          />
        </div>
      </section>

      {/* Duas Colunas de Texto (Seção 3 e 4) */}
      <section className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">DESENVOLVIMENTO DE SITES PROFISSIONAIS</h2>
          <p>
            Nosso objetivo é conectar você aos seus clientes de forma eficiente.
          </p>
          <ul className="list-disc list-inside mt-4 text-justify">
      <li>Armazenamento em nuvem escalável;</li>
      <li>Backend com APIs eficientes e seguras;</li>
      <li>Frontend especializado em cativar e vender.</li>
    </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">TECNOLOGIAS</h2>
          <p>
            Temos como ferramentas linguagens atualizadas e com o foco na sua imagem e segurança.          </p>
        </div>
      </section>

      <section className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4"></h2>
          <p>
            
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">ENTRE EM CONTATO</h2>
           
      <SocialIcon
        url="https://wa.me/45999799513"
        target="_blank"
        rel="noopener noreferrer"
        network="whatsapp"
      />
        </div>
      </section>
    </div>
  );
}
