# Stack padrão para projetos web

Usar este padrão em sites, landing pages e sistemas novos. Em projeto existente, preservar a stack atual salvo pedido explícito de migração.

## Tecnologias obrigatórias

- **Next.js:** App Router em `app/` ou `src/app/`; não iniciar projeto novo com Pages Router.
- **React:** preferir Server Components; adicionar `"use client"` somente quando houver estado, efeito, evento ou API exclusiva do navegador.
- **TypeScript:** manter `strict: true`; não usar `any` para contornar erros. Preferir `unknown`, tipos explícitos e validação nas fronteiras.
- **Tailwind CSS:** usar tokens e utilitários; manter estilos globais apenas para reset, tema e regras realmente globais.
- **shadcn/ui:** usar como base de componentes acessíveis e editáveis; adaptar ao design do cliente, sem deixar aparência padrão de template.

## Inicialização de projeto novo

Usar o gerenciador já adotado pelo workspace. Sem preferência existente, usar `pnpm`.

```bash
pnpm create next-app@latest <nome> --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd <nome>
pnpm dlx shadcn@latest init
```

Executar de forma interativa quando o CLI pedir decisões visuais. Revisar o que será criado antes de aceitar mudanças em projeto existente.

Depois da criação, confirmar em `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Adicionar componentes shadcn/ui somente quando forem necessários:

```bash
pnpm dlx shadcn@latest add button
```

Não instalar uma coleção inteira antecipadamente.

## Estrutura recomendada

```text
src/
├── app/                 rotas, layouts, loading, error e handlers
├── components/
│   ├── ui/              componentes gerenciados pelo shadcn/ui
│   └── shared/          componentes reutilizáveis do produto
├── features/            fluxos e regras agrupados por domínio
├── lib/                 integrações, utilitários e configuração
├── hooks/               hooks realmente compartilhados
└── types/               tipos compartilhados quando necessários
```

Colocar código perto do lugar onde é usado. Não criar pasta vazia nem abstração para uso único.

## Convenções de implementação

- Usar Server Components por padrão e buscar dados no servidor quando possível.
- Usar Route Handlers ou Server Actions conforme o fluxo, validando entrada e autorização no servidor.
- Nunca importar segredo em Client Component nem expor variável sem prefixo público intencional.
- Usar `next/image`, `next/font`, Metadata API e `next/link` quando aplicáveis.
- Criar `loading.tsx`, `error.tsx` e `not-found.tsx` nos fluxos que precisarem desses estados.
- Manter componentes pequenos, com props tipadas e sem duplicar variantes já atendidas pelo shadcn/ui.
- Centralizar tokens visuais em CSS variables compatíveis com Tailwind e shadcn/ui.
- Não alterar arquivos em `components/ui/` sem motivo; compor em `components/shared/` ou `features/` quando possível.

## Critérios mínimos de aceite

- `tsconfig.json` contém `strict: true`.
- Não há Pages Router em projeto novo.
- Build, lint e testes disponíveis passam.
- Não há `any` evitável, segredo versionado ou erro de console.
- Interface funciona por teclado e nos tamanhos móveis e desktop relevantes.
- Server e Client Components estão separados de forma intencional.
- Apenas componentes shadcn/ui realmente usados foram adicionados.
- Metadados, formulários, estados de erro e carregamento foram verificados.
