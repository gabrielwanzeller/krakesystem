---
name: publicar-site
description: >
  Prepara, verifica e publica sites, landing pages e sistemas em provedores como Vercel, Netlify,
  Cloudflare Pages ou na hospedagem já configurada, incluindo build, variáveis, domínio, HTTPS e
  verificação pós-deploy. Use quando o usuário pedir deploy, publicação, colocar no ar, configurar
  domínio, gerar preview ou invocar $publicar-site; exige confirmação antes de afetar produção.
---

# $publicar-site — Publicação segura

Publicar com evidência, possibilidade de recuperação e confirmação explícita para produção.

## 1. Descobrir o ambiente

Inspecionar sem alterar:

- stack, comandos de build e diretório de saída;
- conformidade com `templates/sites/stack-padrao.md` quando o projeto usar a stack padrão;
- repositório, branch e estado das mudanças;
- configuração de hospedagem já existente;
- variáveis necessárias e sua origem;
- domínio, DNS e ambiente alvo;
- processo atual de preview, produção e rollback.

Se existir `.openai/hosting.json`, seguir obrigatoriamente a skill de Sites para hospedagem.

## 2. Pré-publicação

1. Confirmar que não há segredos versionados.
2. Rodar build, lint e testes relevantes.
3. Confirmar `strict: true`, App Router e componentes Client apenas quando necessários nos projetos padronizados.
4. Testar localmente o fluxo principal, links e formulários.
5. Verificar responsividade, metadados, favicon, robots e sitemap quando aplicáveis.
6. Conferir variáveis por nome, sem exibir valores sensíveis.
7. Identificar migrações, webhooks, redirects e tarefas que possam afetar dados.

Parar diante de falha crítica. Não contornar teste quebrado apenas para publicar.

## 3. Escolher o tipo de publicação

- **Preview:** preferir para revisão inicial e mudanças relevantes.
- **Produção:** exigir aprovação explícita depois de mostrar alvo, branch, mudanças e riscos.

Não criar projeto pago, comprar domínio, alterar nameservers ou substituir produção sem autorização específica.

## 4. Publicar

Usar a integração ou CLI oficial já configurada. Não incluir tokens em comandos, logs ou arquivos versionados.

Quando houver banco de dados:

- revisar migrações;
- obter backup ou plano de reversão proporcional ao risco;
- aplicar mudanças compatíveis antes de remover estruturas antigas;
- separar deploy da aplicação de migrações destrutivas.

Registrar URL, ambiente, commit e horário da publicação.

## 5. Verificar depois do deploy

Abrir a URL publicada e conferir:

- status e conteúdo correto;
- navegação e assets;
- formulário ou fluxo principal em modo seguro;
- HTTPS, domínio e redirects;
- console e erros do provedor;
- analytics, indexação e integrações sem gerar efeitos reais indevidos.

Se a publicação falhar, preservar evidências e usar o rollback suportado pelo provedor quando isso for claramente seguro e estiver no escopo autorizado.

## 6. Entregar

Informar:

- URL e ambiente;
- commit publicado;
- verificações realizadas;
- variáveis ou etapas ainda pendentes;
- forma de rollback;
- recomendações de monitoramento.

## Regras

- Nunca revelar credenciais.
- Nunca publicar em produção por inferência.
- Nunca alterar DNS amplo sem confirmar domínio e registros exatos.
- Não declarar sucesso apenas porque o comando terminou; verificar a URL.
