
import './globals.css';
import Header from '@/Components/header';
import Footer from '../Components/footer';

export const metadata = {
    title: 'AutoAtendimento',
    description: 'Plataforma de autoatendimento para clientes',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />
                <main className="container mx-auto px-4 py-8">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
