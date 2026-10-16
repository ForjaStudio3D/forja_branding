# Forja Studio 3D · Arquivos da marca

Catálogo estático com nove composições da marca oficial: quadrado, redondo e banner, em carvão, marfim e transparente. Prévia ampliada, teste de fundo, filtros e downloads em PNG/JPG ou pacote ZIP.

## Conteúdo

- `index.html`, `styles.css`, `app.js`: página responsiva, sem build ou dependências de execução.
- `assets/downloads/`: artes finais e PNG original.
- `assets/previews/`: imagens leves para o catálogo.
- `assets/catalog.json`: dimensões, formatos, tamanhos e SHA-256 da origem.
- `assets/forja-branding-completo.zip`: 14 imagens e guia de uso.
- `assets/fonts/`: Manrope e sua licença OFL.

Quadrados e redondos: 1800 × 1800 px. Banners: 2400 × 800 px. As artes redondas mantêm os cantos transparentes; JPG é oferecido somente nas composições retangulares com fundo.

## Marca e resolução

Todas as composições incorporam o PNG oficial fornecido, sem redesenhar a marca ou acrescentar a bigorna da referência. O original tem 1139 × 380 px. Exportações maiores são rasterizadas e não criam detalhe vetorial. O original disponível para download é idêntico ao fornecido; seu hash está no catálogo.

Os masters editáveis são composições SVG com a marca raster incorporada, entregues localmente fora deste repositório. Geradores, servidores de teste e capturas de QA também ficam fora do repositório.

## Publicação

GitHub Pages, branch `release`, pasta `/`. A branch `main` mantém o código; `release` contém a versão publicada no mesmo repositório.

Página: https://forjastudio3d.github.io/forja_branding/ Todos os caminhos de arquivos são relativos para funcionar em `/forja_branding/`.

## Validação

Filtros nas 16 combinações, prévias e retorno de foco com Escape, troca de fundo, download com igualdade de bytes ao original, dimensões e alpha das nove artes, integridade do ZIP, cópia do link e ausência de overflow em 320, 390, 768 e 1400 px. Capturas inspecionadas em desktop e celular. Funcionalidade principal e downloads permanecem disponíveis sem JavaScript.
