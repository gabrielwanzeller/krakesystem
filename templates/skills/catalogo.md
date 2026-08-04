# Catalogo de Skills

Skills externas prontas pra instalar. Use como referencia ao criar skills novas com `$mapear-rotinas` ou instale diretamente as que fizerem sentido pro seu negocio.

> Skills globais ficam em `~/.agents/skills/` e funcionam em qualquer projeto.
> Skills locais ficam em `.agents/skills/` e so funcionam nesse projeto.

---

## Vender e entregar sites e sistemas

### Briefing de Cliente
**O que faz:** Transforma a descoberta comercial em objetivo, escopo, requisitos, riscos e próximos passos.
**Bom pra:** Clientes novos e pedidos de orçamento ainda vagos
**Como instalar:** Skill local. Chamar com `$briefing-cliente`
**Fonte:** Skill do MazyOS para Codex

### Gerar Proposta
**O que faz:** Converte o briefing validado em proposta comercial clara, com opções, limites e condições.
**Bom pra:** Sites, landing pages, sistemas e contratos recorrentes
**Como instalar:** Skill local. Chamar com `$gerar-proposta`
**Fonte:** Skill do MazyOS para Codex

### Criar Site
**O que faz:** Planeja, implementa e verifica sites profissionais multipágina.
**Bom pra:** Sites institucionais, portfólios, blogs e catálogos
**Como instalar:** Skill local. Chamar com `$criar-site`
**Fonte:** Skill do MazyOS para Codex

### Criar Landing Page
**O que faz:** Cria páginas de campanha focadas em uma oferta e uma conversão.
**Bom pra:** Captação, lançamentos, anúncios, eventos e venda de serviços
**Como instalar:** Skill local. Chamar com `$criar-landing-page`
**Fonte:** Skill do MazyOS para Codex

### Criar Sistema
**O que faz:** Descobre requisitos e desenvolve pequenos sistemas com dados, usuários e regras de negócio.
**Bom pra:** CRM, agenda, estoque, portal, orçamento, chamados e dashboards
**Como instalar:** Skill local. Chamar com `$criar-sistema`
**Fonte:** Skill do MazyOS para Codex

### Publicar Site
**O que faz:** Prepara, publica e verifica sites e sistemas com segurança.
**Bom pra:** Preview, produção, domínio, HTTPS e verificações pós-deploy
**Como instalar:** Skill local. Chamar com `$publicar-site`
**Fonte:** Skill do MazyOS para Codex

### Manutenção Mensal
**O que faz:** Audita, corrige o que estiver autorizado e gera relatório periódico priorizado.
**Bom pra:** Receita recorrente, suporte pós-lançamento e evolução contínua
**Como instalar:** Skill local. Chamar com `$manutencao-mensal`
**Fonte:** Skill do MazyOS para Codex

---

## Escrever copy e textos de venda

### Schwartz Copy (resposta direta)
**O que faz:** Escreve copy de vendas usando a metodologia de Eugene Schwartz (Breakthrough Advertising). Diagnostica o nivel de consciencia e sofisticacao do mercado antes de gerar qualquer texto.
**Bom pra:** Landing pages, emails de venda, VSLs, cartas de venda, paginas de captura
**Como instalar:** Se estiver instalada como skill global, chamar com `$schwartz-copy`
**Fonte:** Skill validada pelo MazyOS

### Ogilvy Copy (marca e posicionamento)
**O que faz:** Gera copy institucional usando a metodologia de David Ogilvy. Pesquisa profunda, big idea, headlines informativas.
**Bom pra:** Manifestos de marca, campanhas institucionais, taglines, brand voice, posicionamento
**Como instalar:** Se estiver instalada como skill global, chamar com `$ogilvy-copy`
**Fonte:** Skill validada pelo MazyOS

---

## Criar interfaces e paginas web

### Frontend Design
**O que faz:** Cria interfaces web completas com design de alta qualidade. Gera codigo HTML/CSS/React pronto pra usar, com visual profissional que foge da estetica generica de IA.
**Bom pra:** Landing pages, dashboards, componentes web, paginas de produto
**Como instalar:** Instalar uma skill ou plugin compatível e chamar pelo nome exibido no Codex.
**Fonte:** Skill nativa do Codex

---

## Criar visuais e arte

### Canvas Design
**O que faz:** Cria arte visual em PNG e PDF usando principios de design. Posters, capas, pecas graficas.
**Bom pra:** Capas de ebook, banners, pecas visuais, thumbnails
**Como instalar:** Usar a skill `$imagegen` ou outra skill visual disponível no Codex.
**Fonte:** Skill nativa do Codex

---

## Trabalhar com documentos

### PDF
**O que faz:** Manipula PDFs: extrai texto e tabelas, cria novos, junta/separa documentos, preenche formularios.
**Bom pra:** Extrair dados de contratos, criar relatorios em PDF, preencher formularios
**Como instalar:** Usar a skill de PDF disponível no Codex.
**Fonte:** Skill nativa do Codex

### DOCX
**O que faz:** Cria e edita documentos Word com formatacao, tracked changes e comentarios.
**Bom pra:** Propostas formais, contratos, documentos pra clientes que pedem Word
**Como instalar:** Usar a skill de documentos disponível no Codex.
**Fonte:** Skill nativa do Codex

### PPTX
**O que faz:** Cria e edita apresentacoes PowerPoint com layouts, speaker notes e formatacao.
**Bom pra:** Apresentacoes pra clientes, decks de vendas, materiais de treinamento
**Como instalar:** Usar a skill de apresentações disponível no Codex.
**Fonte:** Skill nativa do Codex

### XLSX
**O que faz:** Cria e edita planilhas com formulas, formatacao e graficos.
**Bom pra:** Relatorios financeiros, dashboards em planilha, analise de dados
**Como instalar:** Usar a skill de planilhas disponível no Codex.
**Fonte:** Skill nativa do Codex

---

## Escrever documentos e specs

### Doc Co-Authoring
**O que faz:** Fluxo guiado pra coescrever documentos. Te entrevista, itera rascunhos, e valida que o documento funciona pro leitor.
**Bom pra:** Propostas tecnicas, specs, documentos de decisao, SOPs
**Como instalar:** Usar a skill de documentos disponível no Codex.
**Fonte:** Skill nativa do Codex

---

## Extrair transcricao de video

### YT Transcript
**O que faz:** Extrai transcricoes de videos do YouTube usando yt-dlp. Suporta multiplos idiomas.
**Bom pra:** Criar conteudo a partir de videos (carrosseis, newsletters, posts)
**Precisa de:** yt-dlp instalado (`brew install yt-dlp`)
**Como instalar:** Se estiver instalada como skill global, chamar com `$yt-transcript`
**Fonte:** Skill validada pelo MazyOS

---

## Testar sites e apps

### Webapp Testing
**O que faz:** Testa aplicacoes web locais usando Playwright. Captura screenshots, verifica funcionalidade, le logs do browser.
**Bom pra:** Testar landing pages antes de publicar, verificar se tudo funciona em diferentes tamanhos
**Como instalar:** Usar a skill de navegador disponível no Codex.
**Fonte:** Skill nativa do Codex

---

## Criar skills novas

### Skill Creator
**O que faz:** Guia pra criar skills novas do zero. Ajuda a estruturar, definir triggers, e testar.
**Bom pra:** Quando o `$mapear-rotinas` nao cobre o que voce precisa e quer criar algo mais complexo
**Como instalar:** Usar `$skill-creator` no Codex.
**Fonte:** Skill nativa do Codex

---

## Como adicionar skills novas a este catalogo

Se voce testou uma skill e quer adicionar aqui pra referencia futura:

```markdown
### Nome da Skill
**O que faz:** [descricao em uma frase]
**Bom pra:** [casos de uso praticos]
**Como instalar:** [comando ou instrucao]
**Fonte:** [de onde veio — skill nativa, criada por voce, ou de terceiros]
```
