import Link from 'next/link';

export default function Home() {
  return (
    (<div className="p-8 text-center">
      <h1 className="text-3xl font-bold">GIF motors- Plataforma de Autoatendiemnto</h1>
      <p className="mt-4 text-lg">Bem-vindo! Escolha uma opção abaixo:</p>
      <div className="mt-6 space-y-4">
        <Link
          href="/cadastro-cliente"
          className="block p-4 bg-gray-200 rounded-lg shadow-md">
          Cadastrar Cliente
        </Link>
        <Link
          href="/cadastro-carro"
          className="block p-4 bg-gray-200 rounded-lg shadow-md">
          Cadastrar Carro e Descrição do Problema
        </Link>
        <Link
          href="/integrantes"
          className="block p-4 bg-gray-200 rounded-lg shadow-md">
          Integrantes do Projeto
        </Link>
        <Link href="/duvidas" className="block p-4 bg-gray-200 rounded-lg shadow-md">
          Dúvidas
        </Link>
      </div>
    </div>)
  );
}
