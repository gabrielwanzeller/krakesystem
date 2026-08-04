---
name: briefing-cliente
description: >
  Conduz e registra um briefing comercial para sites, landing pages, lojas virtuais e sistemas,
  transformando respostas do cliente em escopo, objetivos, requisitos, conteúdo, integrações,
  restrições e próximos passos. Use quando houver cliente novo, reunião de descoberta, pedido de
  orçamento ainda vago, levantamento de requisitos ou quando o usuário invocar $briefing-cliente.
---

# $briefing-cliente — Descoberta e escopo inicial

Obter informação suficiente para propor a solução certa sem transformar a conversa em interrogatório.

## Preparação

1. Ler `_memoria/empresa.md`, `_memoria/preferencias.md` e `AGENTS.md`.
2. Se o projeto já existir, ler seu `AGENTS.md`, `briefing.md` e materiais fornecidos.
3. Aproveitar tudo que já estiver respondido e perguntar apenas o que faltar.

## Entrevista

Fazer perguntas em pequenos blocos e adaptar conforme a resposta.

### Negócio e objetivo

- O que a empresa vende e para quem?
- Qual problema essa entrega deve resolver?
- Qual ação principal o visitante ou usuário deve realizar?
- Como o resultado será medido?

### Entrega

- É site institucional, landing page, loja, portal ou sistema?
- Quais páginas, áreas ou funções são indispensáveis?
- Há exemplos de que o cliente gosta ou não gosta? Perguntar o motivo.
- Precisa de painel, login, pagamentos, agenda, WhatsApp, CRM ou outras integrações?

### Conteúdo e marca

- Já existem textos, logo, fotos, domínio e identidade visual?
- Quem fornecerá ou aprovará cada material?
- Há exigências legais, de acessibilidade, privacidade ou setor regulado?

### Operação

- Qual é o prazo real e existe uma data fixa?
- Quem decide e quem aprova?
- Quem manterá o produto depois da publicação?
- Existe orçamento ou faixa de investimento definida?

Não pressionar por orçamento se o usuário estiver apenas preparando a descoberta. Marcar como pendência.

## Consolidar

Separar claramente:

- fatos confirmados;
- hipóteses a validar;
- itens fora do escopo;
- pendências do cliente;
- riscos e dependências;
- recomendação de entrega mínima e possíveis fases futuras.

Não prometer tecnologia, prazo ou integração antes de verificar viabilidade.

## Salvar

Salvar em `clientes/<cliente>/<projeto>/briefing.md` ou no diretório indicado pelo projeto. Se a estrutura não existir, oferecer `$novo-projeto` antes de criar pastas paralelas.

Usar esta estrutura:

```markdown
# Briefing — [cliente / projeto]
Data: [AAAA-MM-DD]
Status: [rascunho | validado]

## Objetivo e resultado esperado
## Público e proposta de valor
## Escopo inicial
## Conteúdo e identidade
## Funcionalidades e integrações
## Critérios de sucesso
## Prazo, responsáveis e aprovações
## Fora do escopo
## Hipóteses, riscos e pendências
## Próximo passo recomendado
```

## Encerrar

Apresentar um resumo curto, destacar lacunas que alteram preço ou prazo e pedir validação antes de usar o briefing em `$gerar-proposta`, `$criar-site`, `$criar-landing-page` ou `$criar-sistema`.

## Regras

- Não inventar respostas nem completar requisitos silenciosamente.
- Distinguir desejo do cliente de necessidade comprovada.
- Evitar jargão técnico na conversa com o cliente.
- Registrar decisões e responsáveis de forma verificável.
