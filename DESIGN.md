---
name: Forja Studio 3D — Arquivos da marca
description: Galeria estática da identidade oficial para divulgação de eventos.
colors:
  ink: "#171916"
  paper: "#f7f5f0"
  muted: "#66665d"
  gold: "#d9b77c"
  line: "#d9d7cf"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(42px,4.5vw,65px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-.04em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    lineHeight: 1.65
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    padding: "15px 21px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "15px 21px"
---
# Design System: Forja Studio 3D

## Overview
Prateleira visual de arquivos: carvão, dourado/bronze e marfim, molduras retas, divisórias finas e espaço generoso. A marca raster é o conteúdo central; a interface organiza reconhecimento, formato, acabamento, prévia e download.
Base atual: `index.html`, `styles.css`, `app.js` e `PRODUCT.md`; HTML/CSS/JavaScript sem dependências de execução.

## Colors
Os cinco tokens no frontmatter correspondem às propriedades de `:root`: tinta/carvão, papel/marfim, texto secundário, destaque dourado e divisórias.
Hero, orientações e rodapé usam fundo carvão; coleção usa papel. O fechamento usa `#24291f`. Texto dourado destaca parte do título e ações principais.
Molduras de galeria: carvão `#deded6`, marfim `#e7e3d9`; transparente usa base `#f0efe9` e quadriculado `#e2e1d9`. Essas superfícies são da UI, não cores substitutas da arte.

## Typography
Manrope variável local (`assets/fonts/manrope-variable.ttf`), pesos 200–800, `font-display:swap`, fallback sans-serif.
H1: escala do frontmatter, 46px até 1023px e 43px/1.1 até 639px. H2 de coleção/orientações: `clamp(30px,3vw,42px)`, peso 600, entrelinha 1.15, tracking −.035em; 32px no mobile.
Títulos de arquivos: 18px/650, 20px no mobile; metadados e labels: 12px. Botões principais: 13px/750.
O fim do CSS fixa em 14px os textos de uso, orientações, original e fechamento, inclusive no mobile. A legenda do hero termina com tracking zero. Preserve essa precedência ao reorganizar o arquivo.

## Layout
`.wrap`: máximo 1240px e largura `calc(100% - 112px)`; gutters totais de 64px até 1023px e 40px até 639px.
Hero desktop: colunas `1.05fr 1fr`, gap 70px; arte quadrada inclinada 3° com companheira redonda sobreposta a −7°. Mobile: uma coluna, CTA de largura total e arte com 85% de largura.
Galeria: três colunas, gaps 26px × 42px; duas até 1023px e uma até 639px. Todo palco é quadrado, inclusive o de banners; imagens usam `object-fit:contain` e preservam proporção.
Até 639px, navegação do header fica oculta; filtros empilham, orientações viram uma coluna e ações finais ocupam toda a largura. A partir de 1600px o hero tem altura mínima de 700px.
Dialog: largura máxima 980px, margem de viewport 20px, rolagem interna; mobile reduz margem para 10px e canvas para 42dvh.

## Elevation & Depth
Galeria é plana, com contornos de 1px. Profundidade concentra-se nas composições do hero: sombra `0 24px 60px #080a075c` e drop-shadow circular `0 14px 14px #080a075c`.
Dialog usa backdrop `#080b06d9`; toast dourado usa sombra `0 6px 28px #080c0666`.

## Shapes
Frames, botões, selects e dialog mantêm cantos retos. Pontos de acabamento são circulares; o recorte redondo pertence à composição, sem arredondar os demais cards.
Palcos têm padding 36px (40px no mobile), borda `#e1dfd7`; a arte redonda ocupa 94% da largura interna.

## Components
**Filtros:** formato por botões com `aria-pressed`, acabamento por select; combinam critérios e atualizam contador `aria-live`. Sem JavaScript, filtros ficam ocultos e os nove cards/downloads continuam no HTML.
**Downloads:** links individuais PNG/JPG, PNG original e ZIP. Metadados do HTML, JSON `catalog-data`, nomes, tamanhos e payloads precisam permanecer sincronizados.
**Prévia:** botão de cada palco abre `<dialog>`, carrega o primeiro arquivo integral sob demanda, reconstrói downloads e inicia no quadriculado. Fundos claro/escuro alteram apenas visualização. Fecha pelo botão, comportamento nativo de Escape ou clique exterior; sem `showModal`, navega ao arquivo.
**Estados:** dourado hover `#e8c88d`, escuro hover `#363b2f`; filtros ativos usam carvão/papel. Ações pressionadas encolhem a .98 (.97 em copiar link). Ampliar aparece em hover/foco e permanece visível no mobile.
**Foco:** botões, links e select têm outline 3px `#a66b16`, offset 5px. Há skip-link, nomes acessíveis e alvos em geral de 44px ou mais; links de download desktop têm mínimo de 42px. Fundo ativo da prévia recebe outline 2px `#926d31`.
**Feedback:** toast por 4200ms para cópia e falhas; copiar link tenta Clipboard, depois compartilhamento nativo ou orientação manual. Falha de imagem orienta download ou nova tentativa.
**Motion:** easing `cubic-bezier(.23,1,.32,1)`; transições de 160–260ms, zoom hover 1.035 em dispositivos com hover, entrada do dialog 180ms e scroll suave. `prefers-reduced-motion:reduce` remove animações/transições e torna scroll automático; transforms de composição/hover continuam definidos.

## Do's and Don'ts
- Use somente `FORJA-TEXTO-OFICIAL-RECORTE-DOURADO-BRONZE-3D.png`, disponibilizado como `assets/downloads/forja-oficial-original.png`: PNG transparente de 1139 × 380px. Não acrescente a bigorna de `logo.jpg`.
- Preserve proporção, letras e acabamento. Exportações maiores não criam detalhe vetorial.
- Mantenha nove combinações: quadrado/redondo 1800 × 1800px e banner 2400 × 800px, cada um em carvão, marfim e transparente. Redondos com fundo mantêm cantos transparentes; JPG só existe para quadrado/banner com fundo.
- Preserve PNG original separado das composições e WebP de prévia separado dos arquivos de download. Quadriculado é indicação de transparência e nunca integra o download.
- Ao alterar a interface, confira gutters, legibilidade e dialog nos breakpoints descritos, foco por teclado e reduced motion. Este registro descreve o código lido; não substitui validação visual ou teste de downloads.
