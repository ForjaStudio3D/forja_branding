# Forja Studio 3D · Arquivos da marca

Catálogo estático com nove composições da marca oficial — quadrado, redondo e banner, em carvão, marfim e transparente — e uma opção monocromática para carimbo e gráfica. Prévia ampliada, teste de fundo, filtros e downloads em PNG/JPG, SVG vetorial ou pacote ZIP.

## Conteúdo

- `index.html`, `styles.css`, `app.js`: página responsiva, sem build ou dependências de execução.
- `assets/downloads/`: artes finais e PNG original.
- `assets/previews/`: imagens leves para o catálogo.
- `assets/catalog.json`: dimensões, formatos, tamanhos e SHA-256 da origem.
- `assets/forja-branding-completo.zip`: 15 imagens, o SVG do carimbo e guia de uso.
- `assets/fonts/`: Manrope e sua licença OFL.

Quadrados e redondos: 1800 × 1800 px. Banners: 2400 × 800 px. As artes redondas mantêm os cantos transparentes; JPG é oferecido somente nas composições retangulares com fundo.

## Marca e resolução

As nove composições coloridas incorporam o PNG oficial fornecido, sem redesenhar a marca ou acrescentar a bigorna da referência. O original tem 1139 × 380 px. Exportações maiores são rasterizadas e não criam detalhe vetorial. O original disponível para download é idêntico ao fornecido; seu hash está no catálogo.

Os masters editáveis são composições SVG com a marca raster incorporada, entregues localmente fora deste repositório. Geradores, servidores de teste e capturas de QA também ficam fora do repositório.

## Carimbo para gráfica

A décima opção, `carimbo-grafica`, é uma arte preta sobre fundo transparente, com moldura e Instagram abaixo. O SVG tem letras em contornos: não depende de fontes nem contém imagens raster incorporadas. Mede 56,8 × 33,9131 mm e pode ser redimensionado proporcionalmente. O PNG complementar é transparente, em 2684 × 1603 px e 1200 dpi.

Os dois downloads são cópias integrais dos arquivos aprovados em `/Users/moraesdev/Documents/FORJA_STUDIO/Carimbos/forja-completo-instagram-grafica.{svg,png}`. O SVG tem SHA-256 `134685052212f4dcb803de444449fcd9bbfc8c2e5ab40847e0cfd28164c6cf16`. Esta opção preserva a leitura normal para a gráfica preparar a produção e está incluída no ZIP.

## Publicação

GitHub Pages, branch `release`, pasta `/`. A branch `main` mantém o código; `release` contém a versão publicada no mesmo repositório.

Página: https://forjastudio3d.github.io/forja_branding/ Todos os caminhos de arquivos são relativos para funcionar em `/forja_branding/`.

## Validação

Filtros nas 16 combinações, prévias e retorno de foco com Escape, troca de fundo, download com igualdade de bytes ao original, dimensões e alpha das nove artes, integridade do ZIP, cópia do link e ausência de overflow em 320, 390, 768 e 1400 px. Capturas inspecionadas em desktop e celular. Funcionalidade principal e downloads permanecem disponíveis sem JavaScript.
