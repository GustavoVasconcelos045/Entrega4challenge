// src/Components/header/index.tsx

import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-4">
            <h1>GIF motors</h1>
            <nav className="flex gap-4 justify-center">
                <Link href="/" legacyBehavior>
                    <a>Início</a>
                </Link>
                <Link href="/integrantes" legacyBehavior>
                    <a>Integrantes</a>
                </Link>
                <Link href="/duvidas" legacyBehavior>
                    <a>Dúvidas</a>
                </Link>
            </nav>
        </header>
    );
}
