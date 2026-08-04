---
name: gerar-proposta
description: >
  Cria propostas comerciais personalizadas para sites, landing pages, lojas, manutenção e sistemas,
  com problema, solução, escopo, etapas, responsabilidades, investimento, condições e próximos passos.
  Use quando houver briefing validado, pedido de orçamento, apresentação comercial, renovação de
  serviço ou quando o usuário invocar $gerar-proposta.
---

# $gerar-proposta — Proposta comercial

Transformar o briefing em uma oferta clara, vendável e sem promessas ambíguas.

## Insumos

1. Ler o briefing, arquivos do projeto, `_memoria/empresa.md`, `_memoria/preferencias.md` e `identidade/design-guide.md`.
2. Confirmar apenas o que faltar e afetar escopo, prazo ou preço:
   - entrega e resultado esperado;
   - itens incluídos e excluídos;
   - prazo e marcos;
   - preço, forma de pagamento e validade;
   - manutenção, hospedagem e serviços de terceiros.
3. Nunca inventar preço, desconto, prazo, garantia, depoimento ou resultado.

## Estruturar a oferta

Escrever para o cliente, não como documento técnico interno:

1. Contexto entendido e problema.
2. Solução recomendada e benefício.
3. Escopo detalhado por entrega.
4. Processo e etapas de aprovação.
5. Prazo estimado e dependências.
6. Investimento e condições.
7. O que o cliente precisa fornecer.
8. Itens não incluídos.
9. Suporte, manutenção e custos recorrentes.
10. Validade e aceite.

Quando fizer sentido, oferecer até três opções sem criar falsa complexidade:

- **Essencial:** resolve o objetivo principal.
- **Recomendada:** inclui o que aumenta resultado ou reduz risco.
- **Evolução:** inclui automações ou crescimento posterior.

Explicar a diferença em resultado e responsabilidade, não apenas em quantidade de itens.

## Formato

Criar primeiro uma versão em Markdown para revisão. Depois da aprovação, gerar o formato pedido pelo usuário, como PDF, DOCX ou página HTML, usando a skill apropriada quando disponível.

Salvar em `clientes/<cliente>/<projeto>/propostas/proposta-<AAAA-MM-DD>.md`, respeitando a estrutura existente.

## Qualidade comercial

- Usar linguagem concreta e escaneável.
- Relacionar cada entrega a uma necessidade do briefing.
- Definir limites de revisões, aprovações e mudanças de escopo.
- Separar custos próprios de domínio, hospedagem, APIs e ferramentas de terceiros.
- Tratar estimativas como estimativas quando ainda houver incerteza.
- Incluir recorrência opcional quando existir valor real: hospedagem, manutenção, conteúdo, SEO ou suporte.

## Entrega

Mostrar um resumo com valor, prazo, escopo e principais exclusões. Pedir aprovação antes de converter para documento final ou enviar a terceiros.

## Regras

- Não enviar proposta, email ou mensagem sem autorização explícita.
- Não usar pressão artificial, escassez falsa ou promessas de faturamento.
- Não ocultar dependências que possam gerar custo ou atraso.
- Não executar o projeto apenas porque a proposta foi gerada; aguardar aceite.
