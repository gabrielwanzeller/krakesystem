import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade | Krake Digital",
  description: "Política de privacidade do site da Krake Digital.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#02021E] py-16 text-white">
      <article className="container-site max-w-3xl">
        <Link className="focus-ring rounded text-sm text-[#EBF400] hover:underline" href="/">← Voltar para o site</Link>
        <h1 className="mt-10 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Política de Privacidade</h1>
        <p className="mt-4 text-white/50">Última atualização: 3 de agosto de 2026.</p>

        <div className="mt-12 space-y-10 leading-8 text-white/65">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. Responsável pelo site</h2>
            <p className="mt-3">Este site é mantido por Gabriel Wanzeller, CNPJ 55.461.568/0001-00, responsável pela marca Krake Digital.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">2. Contato pelo WhatsApp</h2>
            <p className="mt-3">Ao escolher conversar pelo WhatsApp, você será direcionado para um serviço externo e decidirá quais informações deseja compartilhar. Esses dados serão utilizados para responder sua solicitação, entender seu projeto e preparar uma possível proposta comercial.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">3. Dados de navegação</h2>
            <p className="mt-3">Ferramentas de análise e publicidade ainda não estão ativas. Caso sejam adicionadas, esta política será atualizada e os mecanismos de consentimento aplicáveis serão apresentados antes da coleta não essencial.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">4. Compartilhamento e proteção</h2>
            <p className="mt-3">Não comercializamos dados pessoais. Informações poderão ser processadas por fornecedores necessários ao atendimento e à operação do site, sempre de acordo com a finalidade informada e a legislação aplicável.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">5. Seus direitos</h2>
            <p className="mt-3">Você pode solicitar informações, correção ou exclusão dos dados compartilhados durante o atendimento. Enquanto o e-mail oficial não é definido, a solicitação pode ser feita pelo WhatsApp (61) 98449-4617.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
