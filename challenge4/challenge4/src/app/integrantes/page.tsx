import React from 'react';
import Image from 'next/image';

const participantes = [
  {
    nome: 'Felipe - RM558916',
    foto: '/image/felipe.png', 
    github: 'https://github.com/FelipeSants08', 
    githubIcon: '/image/github-icon.png', 
  },
  {
    nome: 'Gustavo - RM558463',
    foto: '/image/gustavo.png',
    github: 'https://github.com/GustavoVasconcelos045', 
    githubIcon: '/image/github-icon.png',
  },
  {
    nome: 'Igor - RM558532',
    foto: '/image/igor.png', 
    github: 'https://github.com/Igorfelicori', 
    githubIcon: '/image/github-icon.png', 
  },
];

const Participantes = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Participantes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {participantes.map((integrante, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">
            <Image
              src={integrante.foto}
              alt={integrante.nome}
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{integrante.nome}</h2>
            <a
              href={integrante.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Image
                src={integrante.githubIcon}
                alt="GitHub"
                width={24} // Largura do ícone
                height={24} // Altura do ícone
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Participantes;
