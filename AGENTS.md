# Krake Digital — sistema operacional do negócio

## O que é este workspace

Operação da Krake Digital, empresa de uma pessoa especializada em criar sites profissionais para pequenas empresas e prestadores de serviços. Aqui são organizadas a prospecção, análise de empresas, propostas, criação de sites, marketing e evolução do negócio.

## Contexto obrigatório

No início de cada tarefa, ler quando forem relevantes:

1. `_memoria/empresa.md` — negócio, público e entregas
2. `_memoria/preferencias.md` — tom de voz e estilo
3. `_memoria/estrategia.md` — fase e prioridades
4. `identidade/design-guide.md` — identidade visual para qualquer entrega visual

Usar o contexto naturalmente, sem listar os arquivos lidos.

## Estrutura de pastas

- `_memoria/` — contexto permanente do negócio
- `identidade/` — cores, fontes, logos e padrão visual
- `marketing/` — conteúdo, SEO e campanhas
- `clientes/` — materiais e projetos de clientes
- `projetos/` — projetos internos, incluindo o site da Krake Digital
- `saidas/` — análises, abordagens, emails e documentos pontuais
- `dados/` — arquivos usados em análises
- `scripts/` — utilitários do sistema
- `tarefas.md` — trabalho em andamento

## Quem somos

A Krake Digital é operada por Gabriel, em Brasília. Criamos sites modernos e estratégicos que valorizam a marca dos clientes e ajudam a transformar visitantes em clientes.

O público inicial são pequenas empresas e prestadores de serviços de Brasília sem site ou com um site antigo que não transmite profissionalismo.

## Posicionamento

**Sites profissionais para sua empresa crescer.**

Criamos sites modernos e estratégicos que valorizam sua marca e ajudam a transformar visitantes em clientes.

## Tom de voz

Simples, próximo e profissional. Explicar sem jargão, orientar sem pressionar e demonstrar o benefício para o cliente antes dos detalhes técnicos.

Evitar formalidade excessiva, agressividade, termos técnicos desnecessários, promessas exageradas e aparência de vendedor insistente.

## Stack padrão para sites e sistemas

Em projetos web novos, usar:

- Next.js com App Router
- React
- TypeScript com `strict: true`
- Tailwind CSS
- shadcn/ui

Seguir `templates/sites/stack-padrao.md`. Preservar outra stack em projetos existentes e só migrar ou abrir exceção com justificativa e aprovação.

## Fluxo de trabalho

Antes de executar uma tarefa, verificar se existe uma skill relevante em `.agents/skills/` e seguir suas instruções. Para novos clientes e projetos, manter briefing, proposta, arquivos e decisões na pasta correspondente.

O site da própria Krake Digital é um projeto interno e deve ficar em `projetos/krake-digital/`.

## Aprendizado do sistema

Gabriel está usando a criação do site da Krake Digital para aprender o sistema. Ao executar cada etapa, explicar de forma curta o objetivo da skill, o que ela produziu e como o mesmo processo será usado com futuros clientes.

## Manutenção de contexto

Quando o usuário corrigir uma informação permanente, oferecer salvá-la no arquivo adequado:

- Negócio, cliente, serviço ou equipe → `_memoria/empresa.md`
- Tom, estilo e preferências → `_memoria/preferencias.md`
- Prioridades, metas e foco → `_memoria/estrategia.md`
- Cores, fontes e aplicações da marca → `identidade/design-guide.md`
- Regras operacionais → `AGENTS.md`

Não inventar dados. Quando uma informação ainda não estiver definida, registrar como decisão pendente.

## Criação de skills

Quando uma tarefa repetível ainda não tiver skill, sugerir transformá-la em skill depois que o processo tiver sido executado e validado na prática. Skills locais ficam em `.agents/skills/<nome>/` e devem seguir as orientações da skill nativa de criação de skills do Codex.

## Ferramentas conectadas

- [ ] Google Ads
- [ ] Google Analytics
- [ ] Google Search Console
- [ ] Google Business Profile
- [ ] GitHub
- [ ] Vercel
