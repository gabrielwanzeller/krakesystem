---
name: criar-site
description: >
  Planeja, projeta, implementa e verifica sites profissionais responsivos, incluindo arquitetura,
  conteúdo, identidade visual, SEO técnico, formulários, analytics e preparação para publicação.
  Use para criar ou reconstruir site institucional, portfólio, blog, catálogo ou presença digital
  multipágina, a partir de briefing ou pedido do usuário, inclusive ao invocar $criar-site.
---

# $criar-site — Site profissional completo

Entregar um site funcional e verificável, alinhado ao negócio e pronto para evoluir.

## Stack obrigatória

Ler e seguir `templates/sites/stack-padrao.md`. Em projeto novo, usar Next.js com App Router, React, TypeScript estrito, Tailwind CSS e shadcn/ui. Em projeto existente com outra stack, preservá-la e propor migração separadamente; não migrar silenciosamente.

## 1. Entender antes de construir

1. Ler o briefing e o contexto do projeto. Se estiver insuficiente, usar `$briefing-cliente`.
2. Identificar objetivo principal, público, ação desejada, páginas, conteúdo disponível, identidade, prazo e integrações.
3. Inspecionar a base existente antes de aplicar o padrão ou propor troca de tecnologia.
4. Confirmar decisões que mudem materialmente custo, operação ou escopo. Fazer suposições pequenas e registrá-las.

## 2. Definir o plano do site

Preparar uma síntese com:

- mapa de páginas;
- jornada principal e chamadas para ação;
- seções e conteúdo necessário por página;
- requisitos funcionais e integrações;
- arquitetura dentro da stack padrão e hospedagem, aproveitando a configuração existente;
- critérios de aceite.

Priorizar site estático quando o conteúdo e as integrações não exigirem backend. Não adicionar CMS, autenticação ou banco sem necessidade.

## 3. Projetar

1. Ler `identidade/design-guide.md` e os materiais do cliente.
2. Criar hierarquia visual, tipografia, cores, componentes e estados consistentes.
3. Projetar primeiro para telas pequenas e adaptar para desktop.
4. Evitar visual genérico: usar a personalidade, imagens e conteúdo real da marca.
5. Usar imagens licenciadas, fornecidas ou geradas com autorização; não copiar ativos de concorrentes.

## 4. Implementar

- Preservar a arquitetura e os padrões do projeto quando forem adequados.
- Usar App Router, Server Components por padrão e Client Components apenas onde houver interatividade real.
- Manter `strict: true`, props tipadas e evitar `any`.
- Usar Tailwind e componentes shadcn/ui necessários, adaptados à identidade do cliente.
- Criar HTML semântico, navegação por teclado, foco visível, contraste e textos alternativos.
- Otimizar imagens, fontes e carregamento; evitar dependências sem benefício claro.
- Implementar títulos, descrições, canonical, Open Graph, sitemap e robots quando aplicáveis.
- Validar formulários no cliente e no servidor; proteger segredos em variáveis de ambiente.
- Configurar eventos de conversão somente quando solicitado e documentar o que foi medido.
- Não incluir textos falsos, números inventados, depoimentos fictícios ou links sem destino na entrega final.

## 5. Verificar

Executar as verificações disponíveis no projeto:

1. instalação, build, lint e testes;
2. TypeScript estrito, fronteiras entre Server e Client Components e ausência de `any` evitável;
3. navegação, formulários e links;
4. visual em celular, tablet e desktop;
5. acessibilidade básica;
6. metadados, indexação e compartilhamento;
7. ausência de segredos e erros no console.

Corrigir problemas encontrados e repetir a verificação proporcionalmente ao risco. Se algo não puder ser testado, informar exatamente o que ficou pendente.

## 6. Entregar

Registrar no projeto:

- o que foi criado;
- como executar localmente;
- variáveis e serviços necessários, sem incluir segredos;
- decisões e limitações;
- checklist de publicação.

Oferecer `$publicar-site` depois que o usuário aprovar a versão revisada.

## Regras

- Não publicar, comprar domínio ou criar serviço pago sem autorização.
- Não substituir conteúdo aprovado sem sinalizar.
- Não declarar o site concluído enquanto build ou fluxo principal estiver quebrado.
- Tratar alterações em projeto existente como evolução, preservando mudanças do usuário.
