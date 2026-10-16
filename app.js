'use strict';
const catalog = JSON.parse(document.getElementById('catalog-data').textContent);
const cards = [...document.querySelectorAll('.asset-card')];
const filters = { format: 'all', finish: 'all' };
const dialog = document.getElementById('preview');
const previewImage = document.getElementById('preview-image');
const previewCanvas = document.getElementById('preview-canvas');
const previewDownloads = document.getElementById('preview-downloads');
let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = setTimeout(() => { toast.hidden = true; }, 4200);
}
function applyFilters() {
  let count = 0;
  for (const card of cards) {
    const visible = (filters.format === 'all' || card.dataset.format === filters.format) &&
      (filters.finish === 'all' || card.dataset.finish === filters.finish);
    card.hidden = !visible;
    if (visible) count++;
  }
  document.getElementById('result-count').textContent = `${count} ${count === 1 ? 'versão disponível' : 'versões disponíveis'}`;
}
document.getElementById('filters').hidden = false;
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    filters.format = button.dataset.value;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    applyFilters();
  });
});
document.getElementById('finish').addEventListener('change', event => {
  filters.finish = event.target.value;
  applyFilters();
});
function setBackground(value) {
  previewCanvas.dataset.background = value;
  document.querySelectorAll('[data-background]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.background === value)));
}
document.querySelectorAll('[data-background]').forEach(button => {
  button.addEventListener('click', () => setBackground(button.dataset.background));
});
document.querySelectorAll('[data-preview]').forEach(button => {
  button.addEventListener('click', () => {
    const asset = catalog.assets.find(item => item.id === button.dataset.preview);
    document.getElementById('preview-title').textContent = `${asset.name} · ${asset.finishName}`;
    document.getElementById('preview-meta').textContent = `${asset.files.map(file => file.type).join(" / ")} · ${asset.width} × ${asset.height} px${asset.hasAlpha ? ' · PNG com transparência' : ' · Arte com fundo'}`;
    // Full-resolution download asset is loaded only on demand.
    previewImage.src = `assets/downloads/${asset.files[0].file}`;
    previewImage.alt = `Logo Forja Studio 3D, formato ${asset.name.toLowerCase()}, acabamento ${asset.finishName.toLowerCase()}`;
    previewImage.width = asset.width;
    previewImage.height = asset.height;
    previewDownloads.replaceChildren();
    for (const file of asset.files) {
      const link = document.createElement('a');
      link.className = 'file-link';
      link.href = `assets/downloads/${file.file}`;
      link.download = file.file;
      link.textContent = `Baixar ${file.type}`;
      link.setAttribute('aria-label', `Baixar ${asset.name} ${asset.finishName} em ${file.type}`);
      previewDownloads.append(link);
    }
    setBackground('checker');
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else window.location.href = `assets/downloads/${asset.files[0].file}`;
  });
});
document.getElementById('close-preview').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
previewImage.addEventListener('error', () => showToast('Não foi possível carregar a prévia. Use o botão de download ou tente novamente.'));
document.getElementById('share').addEventListener('click', async () => {
  const url = new URL(window.location.href);
  url.hash = '';
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url.href);
      showToast('Link copiado. Pronto para compartilhar.');
    } else throw new Error('Clipboard unavailable');
  } catch {
    if (navigator.share) {
      try { await navigator.share({ title: 'Forja Studio 3D — Arquivos da marca', url: url.href }); }
      catch (error) { if (error.name !== 'AbortError') showToast('Copie o endereço da página na barra do navegador.'); }
    } else showToast('Copie o endereço da página na barra do navegador.');
  }
});
