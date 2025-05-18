import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Componentes de Seção (poderiam ser movidos para arquivos separados depois)
const HeroSection = () => (
  <section className="text-center py-12 md:py-20 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">JACI Projetos e Construções: Maximizando Seu Investimento em Galpões e Empreendimentos Imobiliários.</h1>
    <p className="text-xl md:text-2xl mb-8">Transformamos seus projetos em realidade com expertise em aprovações, economia inteligente e qualidade que gera resultados.</p>
    {/* Imagem de Destaque Principal - Placeholder */}
    <div className="w-full max-w-4xl mx-auto h-64 md:h-96 bg-gray-300 my-8 rounded-lg shadow-xl flex items-center justify-center">
      <p className="text-gray-500">[Imagem de Destaque Principal: Galpão Moderno ou Projeto Impactante]</p>
    </div>
    <div className="space-x-4">
      <Link href="/contato" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg text-lg shadow-md transition duration-300">
        Solicite um Orçamento
      </Link>
      <Link href="/portfolio" className="bg-transparent hover:bg-white text-white hover:text-cyan-600 font-bold py-3 px-6 rounded-lg border-2 border-white text-lg shadow-md transition duration-300">
        Nossos Projetos
      </Link>
    </div>
  </section>
);

const DiferenciaisHome = () => (
  <section className="py-12 md:py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Aprovações Descomplicadas</h3>
          <p className="text-gray-700">Navegamos pela burocracia para você. Agilidade e conhecimento técnico para aprovar seu projeto sem dores de cabeça.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Economia Inteligente</h3>
          <p className="text-gray-700">Nosso gerenciamento otimizado garante que seu investimento renda mais, sem comprometer a qualidade final da obra.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Qualidade que Constrói Confiança</h3>
          <p className="text-gray-700">Compromisso com os mais altos padrões em cada detalhe, do projeto à entrega.</p>
        </div>
      </div>
    </div>
  </section>
);

const ServicosHome = () => (
  <section className="py-12 md:py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Nossos Serviços Especializados</h2>
      <p className="text-lg text-gray-600 mb-10">Construímos mais do que edificações, construímos oportunidades para o seu negócio.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Serviço 1 */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h4 className="text-xl font-semibold mb-2 text-cyan-700">Construção de Galpões</h4>
          <p className="text-gray-700 mb-4">Soluções personalizadas para investidores, locação ou uso próprio. Maximize o potencial do seu terreno.</p>
        </div>
        {/* Serviço 2 */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h4 className="text-xl font-semibold mb-2 text-cyan-700">Regularização e Aprovações</h4>
          <p className="text-gray-700 mb-4">Especialistas em desdobro, unificação de lotes e aprovação de projetos junto às prefeituras.</p>
        </div>
        {/* Serviço 3 */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h4 className="text-xl font-semibold mb-2 text-cyan-700">Edificações Comerciais e Prédios</h4>
          <p className="text-gray-700 mb-4">Projetos verticais e comerciais com foco na rentabilidade e valorização do seu investimento.</p>
        </div>
      </div>
      <Link href="/servicos" className="mt-10 inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300">
        Descubra Todos os Nossos Serviços
      </Link>
    </div>
  </section>
);

const PortfolioHome = () => (
  <section className="py-12 md:py-16 bg-gray-100">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Projetos que Falam por Nós</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Projeto 1 - Placeholder */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center"><p className="text-gray-500">[Imagem do Projeto 1 - Galpão Industrial]</p></div>
          <div className="p-6">
            <h4 className="text-xl font-semibold mb-2 text-cyan-700">Galpão Logístico XYZ</h4>
            <p className="text-gray-700">Construção de galpão de X m² para otimização logística, entregue no prazo e com economia de Y% no orçamento inicial.</p>
          </div>
        </div>
        {/* Projeto 2 - Placeholder */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center"><p className="text-gray-500">[Imagem do Projeto 2 - Aprovação de Loteamento]</p></div>
          <div className="p-6">
            <h4 className="text-xl font-semibold mb-2 text-cyan-700">Aprovação Loteamento ABC</h4>
            <p className="text-gray-700">Processo de desdobro e aprovação de X lotes comerciais, concluído em tempo recorde.</p>
          </div>
        </div>
      </div>
      <Link href="/portfolio" className="mt-10 inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300">
        Veja Mais Obras Realizadas
      </Link>
    </div>
  </section>
);

const CtaFinalHome = () => (
  <section className="py-12 md:py-20 bg-cyan-700 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Pronto para Dar o Próximo Passo no Seu Empreendimento?</h2>
      <p className="text-xl mb-8">Fale com nossos especialistas e descubra como a JACI pode transformar seu projeto em um investimento de sucesso.</p>
      <Link href="/contato" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300">
        Entre em Contato Agora
      </Link>
      {/* Ícone WhatsApp - Adicionar depois com biblioteca de ícones ou SVG */}
    </div>
  </section>
);


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DiferenciaisHome />
      <ServicosHome />
      <PortfolioHome />
      <CtaFinalHome />
    </>
  );
}
