// src/Components/header/index.tsx

import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-4">
            <h1>Portfólio Acadêmico</h1>
            <nav className="flex gap-4 justify-center">
                <Link href="/" legacyBehavior>
                    <a>Início</a>
                </Link>
                <Link href="/integrantes" legacyBehavior>
                    <a>Integrantes</a>
                </Link>
                <Link href="/trabalhos" legacyBehavior>
                    <a>Trabalhos</a>
                </Link>
            </nav>
        </header>
    );
}
