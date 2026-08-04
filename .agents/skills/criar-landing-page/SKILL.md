---
name: criar-landing-page
description: >
  Planeja, escreve, implementa e verifica landing pages focadas em uma oferta e uma conversão,
  com mensagem, prova, objeções, CTA, formulário, rastreamento e responsividade. Use para páginas
  de campanha, captura, lançamento, evento, serviço ou produto, especialmente após anúncio ou
  briefing comercial, inclusive quando o usuário invocar $criar-landing-page.
---

# $criar-landing-page — Página de conversão

Construir uma página com uma oferta, um público e uma ação principal claramente definidos.

## Stack obrigatória

Ler e seguir `templates/sites/stack-padrao.md`. Em projeto novo, usar Next.js com App Router, React, TypeScript estrito, Tailwind CSS e shadcn/ui. Em projeto existente com outra stack, preservar a base e não migrar sem autorização.

## 1. Definir a conversão

Ler o briefing e confirmar:

- oferta e público específico;
- origem provável do tráfego;
- ação principal: formulário, WhatsApp, compra, agenda ou cadastro;
- benefício central e diferenciais comprováveis;
- objeções, provas disponíveis e restrições;
- destino dos leads e eventos que precisam ser medidos.

Se essas respostas não existirem, usar `$briefing-cliente`. Não inventar prova social ou urgência.

## 2. Planejar a mensagem

Criar a estrutura mínima necessária, escolhendo apenas seções úteis:

1. promessa clara e CTA inicial;
2. problema ou contexto;
3. solução e benefícios;
4. como funciona;
5. provas reais;
6. objeções ou perguntas frequentes;
7. oferta e CTA final;
8. informações legais e privacidade quando houver coleta de dados.

Manter uma ação principal. CTAs secundários não devem competir com ela.

## 3. Implementar

- Aplicar a stack padrão em projeto novo e aproveitar a stack existente quando já consolidada.
- Usar Server Component para o conteúdo estático e limitar Client Components ao formulário, analytics e interações necessárias.
- Usar Tailwind e shadcn/ui com identidade própria, sem aparência genérica de template.
- Aplicar `identidade/design-guide.md` e conteúdo específico da campanha.
- Garantir carregamento rápido, leitura móvel e CTA visível sem excesso de elementos.
- Implementar formulário acessível, validação, estados de envio, sucesso e erro.
- Não expor chaves no navegador. Integrar o destino do lead apenas com credenciais e autorização adequadas.
- Configurar metadados e impedir indexação somente quando a estratégia exigir.
- Adicionar analytics e pixels apenas com IDs fornecidos e consentimento aplicável.

## 4. Verificar

Testar:

- build e erros no console;
- TypeScript estrito e separação intencional entre Server e Client Components;
- layout nos principais tamanhos de tela;
- CTA, telefone, WhatsApp e formulário;
- mensagens de erro e confirmação;
- eventos de conversão em modo de teste;
- velocidade, acessibilidade e conteúdo sem placeholders.

## 5. Entregar

Informar o que foi criado, qual conversão foi configurada, onde os leads chegam, quais eventos existem e o que falta para publicar. Após revisão e aprovação, oferecer `$publicar-site`.

## Regras

- Não prometer taxas de conversão ou resultados financeiros.
- Não usar contadores, vagas limitadas ou depoimentos falsos.
- Não enviar leads reais durante testes sem avisar.
- Não publicar nem ativar campanhas sem autorização explícita.
