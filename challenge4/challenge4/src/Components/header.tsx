
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-200 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">AutoAtendimento</h1>
                <nav className="space-x-4">
                    <Link href="/">Início</Link>
                    <Link href="/cliente">Cadastro de Cliente</Link>
                    <Link href="/carro">Cadastro de Carro</Link>
                    <Link href="/integrantes">Integrantes</Link>
                    <Link href="/duvidas">Dúvidas</Link>
                </nav>
            </div>
        </header>
    );
}
