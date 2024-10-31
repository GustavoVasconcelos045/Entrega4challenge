// src/Components/header/index.tsx

import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-4 h-[20vh]">
            <h1 className="text-5xl font-bold mb-4">GIF Motors</h1>
            <nav className="flex gap-4 justify-center">
                <Link href="/" legacyBehavior>
                    <a className="text-2xl font-bold mb-4">Início</a>
                </Link>
                <Link href="/integrantes" legacyBehavior>
                    <a className="text-2xl font-bold mb-4">Integrantes</a>
                </Link>
                <Link href="/duvidas" legacyBehavior>
                    <a className="text-2xl font-bold mb-4">Dúvidas</a>
                </Link>
            </nav>
        </header>
    );
}
