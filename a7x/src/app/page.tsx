import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900">
      <h1 className="text-xl font-bold mb-20">ESTAMOS EM CONSTRUÇÃO</h1>
      <Image
        src="/A7 LOGO.PNG" // Substitua por seu caminho da imagem
        alt="A7 STUDIO"
        width={350}
        height={350}
        className="object-cover"
      />
      <p className="mt-20 text-xl">ENTRE EM CONTATO (45) 99979-9513</p>
    </div>
  );
}
