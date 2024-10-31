import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold">Plataforma de Autoatendimento</h1>
      <p className="mt-4 text-lg">Bem-vindo! Escolha uma opção abaixo:</p>
      <div className="mt-6 space-y-4">
        <Link href="/cadastro-cliente">
          <a className="block p-4 bg-gray-200 rounded-lg shadow-md">Cadastrar Cliente</a>
        </Link>
        <Link href="/cadastro-carro">
          <a className="block p-4 bg-gray-200 rounded-lg shadow-md">Cadastrar Carro e Descrição do Problema</a>
        </Link>
        <Link href="/integrantes">
          <a className="block p-4 bg-gray-200 rounded-lg shadow-md">Integrantes do Projeto</a>
        </Link>
        <Link href="/duvidas">
          <a className="block p-4 bg-gray-200 rounded-lg shadow-md">Dúvidas</a>
        </Link>
      </div>
    </div>
  );
}
