---
name: manutencao-mensal
description: >
  Executa uma revisão periódica de sites e pequenos sistemas, avaliando disponibilidade,
  funcionalidades, formulários, links, desempenho, segurança básica, dependências, SEO, backups
  e métricas, e gera relatório com prioridades. Use em contrato de manutenção, revisão mensal,
  auditoria recorrente, acompanhamento pós-lançamento ou ao invocar $manutencao-mensal.
---

# $manutencao-mensal — Revisão e evolução recorrente

Separar diagnóstico, correções autorizadas e oportunidades comerciais com transparência.

## 1. Definir o período e o escopo

Ler contrato, briefing, histórico e relatório anterior. Confirmar:

- projeto, URL e ambiente;
- período analisado;
- itens incluídos no plano;
- acessos disponíveis;
- limite de horas ou mudanças;
- quem aprova correções fora do escopo.

Sem contrato formal, tratar a primeira execução como auditoria e não presumir autorização para alterar produção.

## 2. Fazer diagnóstico primeiro

Verificar conforme o tipo de projeto:

### Operação

- disponibilidade, HTTPS e domínio;
- páginas e fluxos principais;
- formulários, emails, pagamentos e integrações em modo seguro;
- erros visíveis, logs e falhas recorrentes;
- backups e possibilidade de restauração.

### Qualidade

- links quebrados e conteúdo desatualizado;
- uso em celular e navegadores relevantes;
- acessibilidade básica;
- desempenho e tamanho de assets;
- metadados, sitemap, robots e indexação.

### Tecnologia e segurança básica

- conformidade com `templates/sites/stack-padrao.md` nos projetos padronizados;
- `strict: true`, App Router e limites corretos entre Server e Client Components;
- dependências desatualizadas e avisos conhecidos;
- segredos expostos ou configuração insegura aparente;
- autenticação, permissões e spam, quando aplicáveis;
- uso de armazenamento, cotas e custos anormais.

### Resultado

- tráfego, conversões e origem de leads, se houver acesso;
- páginas mais importantes e pontos de abandono;
- comparação com o período anterior sem atribuir causalidade sem evidência.

## 3. Classificar

Organizar cada achado por prioridade:

- **Crítico:** indisponibilidade, perda de dados, vulnerabilidade evidente ou conversão quebrada.
- **Alto:** impacto relevante em receita, segurança ou experiência.
- **Médio:** degradação que deve entrar no próximo ciclo.
- **Baixo:** melhoria ou oportunidade sem urgência.

Informar evidência, impacto, recomendação e esforço aproximado, deixando claro quando for estimativa.

## 4. Corrigir somente o autorizado

Executar correções cobertas pelo plano e aprovadas. Antes de mudanças de dependência, banco, DNS, autenticação ou produção, criar ponto de recuperação proporcional ao risco e obter confirmação quando necessário.

Rodar testes relevantes depois de cada grupo de alterações. Não fazer atualização ampla de dependências sem necessidade e revisão.

## 5. Relatório

Salvar em `clientes/<cliente>/<projeto>/manutencao/<AAAA-MM>.md`:

```markdown
# Manutenção — [mês/ano]
## Resumo executivo
## Verificações realizadas
## Correções concluídas
## Pendências por prioridade
## Métricas e comparação
## Recomendações para o próximo ciclo
## Horas ou escopo utilizado
```

Apresentar ao cliente em linguagem simples. Separar manutenção necessária de melhoria opcional e de novo projeto comercial.

## Regras

- Não fabricar métricas ou afirmar que uma mudança causou resultado sem evidência.
- Não usar testes que gerem cobrança, pedido ou lead real sem autorização.
- Não ocultar falhas que ficaram sem correção.
- Não vender medo; explicar risco e benefício com objetividade.
