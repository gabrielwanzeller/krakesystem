# Briefing — Radar Local

## Objetivo

Centralizar as empresas pesquisadas pela Krake Digital e transformar a pesquisa manual em um fluxo simples de prospecção e acompanhamento.

## Usuário

Gabriel, único operador da Krake Digital.

## Requisito de acesso

Área privada, protegida por autenticação. Nenhum dado comercial deve ficar disponível publicamente.

## Informações por empresa

- Nome
- Categoria ou nicho
- Cidade, estado e endereço
- Nota e quantidade de avaliações no Google
- Link do Google Maps
- Telefone e WhatsApp
- E-mail
- Existência e endereço do site
- Instagram
- Status, prioridade e observações
- Datas de cadastro, último contato e próximo acompanhamento

## Fluxos principais

1. Cadastrar empresa pesquisada.
2. Consultar, buscar e filtrar a base.
3. Editar qualquer empresa cadastrada.
4. Adicionar empresas à fila de hoje.
5. Abrir WhatsApp com mensagem preparada.
6. Alterar status e registrar acompanhamento.
7. Abrir Maps, site e Instagram rapidamente.

## Navegação inicial

- Visão geral
- Fila de hoje
- Empresas
- Aguardando
- Nichos
- Cobertura
- Configurações

## Direção visual

Interface escura, moderna e limpa, alinhada à Krake Digital. Fundo azul-marinho, cards escuros, bordas discretas, tipografia Poppins e amarelo-limão para ações principais.

## Critérios de aceite da primeira versão

- Funciona em celular e computador.
- Cadastro e edição completos.
- Busca e filtros úteis.
- Dados permanecem salvos após recarregar a página.
- Acesso a WhatsApp, Maps, site e Instagram.
- Rotas e operações protegidas no servidor.
- Build e lint sem erros.

## Decisões pendentes

- Modelos finais de mensagens por nicho.
- Necessidade de importação por planilha.

## Infraestrutura definida — 2026-08-05

- Banco: Supabase PostgreSQL, região de São Paulo.
- Autenticação: Supabase Auth com e-mail e senha.
- Segurança: RLS por proprietário em todas as tabelas públicas.
- Persistência: empresas, contatos, tarefas e pagamentos mensais.
- Projeto iniciado no plano gratuito, com custo informado de US$ 0/mês.

## Evolução comercial — 2026-08-05

- Marcadores independentes de contato por WhatsApp, ligação, Instagram e e-mail.
- Status de oferta recusada pelo cliente.
- Área específica para clientes fechados.
- Valor do projeto, situação e data do pagamento.
- Link do site entregue ao cliente.
- Valor mensal, mês de referência, situação e data do pagamento mensal.
- Tarefas por cliente com alerta persistente enquanto houver pendência.
- Alternância entre tema escuro e claro.
