---
name: criar-sistema
description: >
  Descobre requisitos, modela, implementa e verifica pequenos sistemas web sob medida, como CRM,
  agenda, orçamento, estoque, portal do cliente, painel administrativo, chamados e dashboards.
  Use quando o pedido envolver usuários, dados persistentes, regras de negócio, automações,
  integrações, painel ou fluxo operacional, inclusive quando o usuário invocar $criar-sistema.
---

# $criar-sistema — Sistema web sob medida

Resolver um processo real com o menor produto seguro e operável que entregue valor.

## Stack obrigatória

Ler e seguir `templates/sites/stack-padrao.md`. Em sistema novo, usar Next.js com App Router, React, TypeScript estrito, Tailwind CSS e shadcn/ui. Banco de dados, autenticação e serviços externos continuam sendo escolhas orientadas pelos requisitos. Em base existente, não migrar de stack sem aprovação.

## 1. Descoberta

Ler o briefing e observar o processo atual. Se faltar contexto, usar `$briefing-cliente`.

Definir:

- usuários e papéis;
- problema atual e fluxo desejado;
- dados de entrada, saída e histórico;
- regras de negócio e exceções;
- permissões, integrações e notificações;
- requisitos de privacidade, disponibilidade e auditoria;
- critérios de sucesso e aceite.

Distinguir requisito da primeira versão de melhoria futura. Não automatizar um processo ainda indefinido.

## 2. Especificar o MVP

Produzir um plano curto contendo:

- histórias ou fluxos principais;
- telas e estados;
- entidades, relações e regras de validação;
- matriz simples de permissões;
- integrações externas;
- critérios de aceite;
- riscos, hipóteses e itens fora do escopo.

Confirmar com o usuário qualquer decisão que mude segurança, custo recorrente ou operação.

## 3. Escolher a arquitetura

1. Inspecionar a base existente e aplicar a stack padrão apenas em projeto novo ou migração aprovada.
2. Usar Server Components por padrão, Client Components para interação e Route Handlers ou Server Actions conforme o fluxo.
3. Manter TypeScript estrito em interface, domínio, integrações e persistência; validar dados externos em runtime.
4. Só adicionar autenticação, filas, tempo real, armazenamento ou serviços externos quando o requisito justificar.
5. Criar migrações versionadas para banco de dados; nunca alterar produção manualmente como primeira opção.
6. Guardar segredos apenas em variáveis seguras e fornecer `.env.example` sem valores reais.

## 4. Implementar em cortes verticais

Construir um fluxo utilizável por vez, incluindo interface, regra, persistência e teste.

- Validar dados no servidor, não apenas na interface.
- Aplicar autorização em toda leitura e alteração protegida.
- Tratar estados vazio, carregando, erro e sucesso.
- Registrar operações sensíveis quando auditoria for necessária.
- Evitar dados pessoais em logs.
- Tornar integrações idempotentes quando houver reenvio ou webhook.
- Preservar acessibilidade e uso em telas compatíveis com o contexto.

## 5. Verificar

Executar build, lint e testes existentes. Cobrir pelo menos:

- fluxo principal e regras críticas;
- `strict: true`, ausência de `any` evitável e validação das entradas externas;
- permissões entre papéis;
- validações e erros;
- migrações em ambiente não produtivo;
- integrações simuladas ou em sandbox;
- ausência de segredos no repositório;
- recuperação ou rollback proporcional ao risco.

Não usar dados pessoais reais em desenvolvimento sem necessidade e autorização.

## 6. Entregar

Documentar execução local, arquitetura, variáveis necessárias, modelo de dados, papéis, integrações, limitações e operação básica. Listar o que pertence ao MVP e o que ficou para fases futuras.

Oferecer `$publicar-site` apenas após aprovação e checklist de segurança.

## Regras

- Não fazer migração destrutiva ou operar produção sem confirmação específica.
- Não criar conta, contratar serviço ou habilitar cobrança sem autorização.
- Não afirmar segurança absoluta; relatar verificações e riscos conhecidos.
- Em dados financeiros, médicos, jurídicos ou sensíveis, elevar o nível de revisão e limitar suposições.
