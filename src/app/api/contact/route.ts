import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nomeCompleto, email, telefone, empresa, tipoServico, comoConheceu, mensagem, consentimentoLGPD } = body;

    // Validação básica
    if (!nomeCompleto || !email || !telefone || !tipoServico || !mensagem || !consentimentoLGPD) {
      return NextResponse.json(
        { message: "Todos os campos obrigatórios devem ser preenchidos." },
        { status: 400 }
      );
    }

    // Simulação de envio de e-mail (substituir pela lógica real em produção)
    console.log("--- Nova Mensagem do Site JACI ---");
    console.log(`Nome: ${nomeCompleto}`);
    console.log(`Email: ${email}`);
    console.log(`Telefone: ${telefone}`);
    if (empresa) console.log(`Empresa: ${empresa}`);
    console.log(`Serviço de Interesse: ${tipoServico}`);
    if (comoConheceu) console.log(`Como Conheceu: ${comoConheceu}`);
    console.log(`Mensagem: ${mensagem}`);
    console.log("-----------------------------------");

    // Por enquanto, apenas retornamos sucesso para simulação
    return NextResponse.json(
      { message: "Mensagem enviada com sucesso! (Simulação)" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar mensagem:", error);
    return NextResponse.json(
      { message: "Erro ao enviar mensagem. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
