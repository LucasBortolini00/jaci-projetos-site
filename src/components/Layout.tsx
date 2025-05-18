import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Aplicando classes para header fixo/sticky e z-index alto */}
      <header className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/images/jaci_logo.png" alt="JACI Projetos e Construções Logo" width={150} height={50} />
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors duration-200">Home</Link></li>
              <li><Link href="/sobre" className="hover:text-cyan-400 transition-colors duration-200">Sobre Nós</Link></li>
              <li><Link href="/servicos" className="hover:text-cyan-400 transition-colors duration-200">Serviços</Link></li>
              <li><Link href="/portfolio" className="hover:text-cyan-400 transition-colors duration-200">Portfólio</Link></li>
              <li><Link href="/diferenciais" className="hover:text-cyan-400 transition-colors duration-200">Diferenciais</Link></li>
              <li><Link href="/blog" className="hover:text-cyan-400 transition-colors duration-200">Blog</Link></li>
              <li><Link href="/contato" className="hover:text-cyan-400 transition-colors duration-200">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 min-h-screen">
        {children}
      </main>

      <footer className="bg-gray-700 text-white p-4 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} JACI Projetos e Construções. Todos os direitos reservados.</p>
        {/* Adicionar links para política de privacidade, termos de uso, etc. */}
      </footer>
    </>
  );
};

export default Layout;
