// QR codes Into The Shift : même rendu que le Studio Me&YouToo.
// Seul l'habillage est défini ici : le lien encodé reste celui fourni par la page.
(function () {
  const QR_COLOR = '#273a64';
  const REFERENCE_SIZE = 1200;
  const FALLBACK_LOGO = '/into-the-shift-logo.png';
  const renderTokens = new WeakMap();

  function buildOptions(url, { size = REFERENCE_SIZE, type = 'canvas', logo = '' } = {}) {
    const scale = size / REFERENCE_SIZE;
    return {
      type,
      width: size,
      height: size,
      data: url,
      image: logo || undefined,
      margin: Math.round(48 * scale),
      qrOptions: { errorCorrectionLevel: 'H' },
      imageOptions: { crossOrigin: 'anonymous', imageSize: 0.34, margin: Math.round(14 * scale), hideBackgroundDots: true },
      dotsOptions: { type: 'dots', color: QR_COLOR },
      cornersSquareOptions: { type: 'extra-rounded', color: QR_COLOR },
      cornersDotOptions: { type: 'extra-rounded', color: QR_COLOR },
      backgroundOptions: { color: '#ffffff' }
    };
  }

  function canLoadLogo(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img.naturalWidth > 0);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  }

  // Un logo illisible ou bloqué ne doit jamais casser le QR code : on passe au suivant.
  async function resolveLogo(candidates = []) {
    for (const src of [...candidates, FALLBACK_LOGO]) {
      if (src && await canLoadLogo(src)) return src;
    }
    return '';
  }

  async function render(el, url, candidates = [], size = REFERENCE_SIZE) {
    const token = {};
    renderTokens.set(el, token);
    const logo = await resolveLogo(candidates);
    if (renderTokens.get(el) !== token) return;
    el.innerHTML = '';
    new QRCodeStyling(buildOptions(url, { size, logo })).append(el);
    const drawn = el.querySelector('canvas,svg');
    if (drawn) {
      drawn.style.width = '100%';
      drawn.style.height = '100%';
    }
  }

  async function download(url, candidates, name, extension) {
    const logo = await resolveLogo(candidates);
    const type = extension === 'svg' ? 'svg' : 'canvas';
    await new QRCodeStyling(buildOptions(url, { type, logo })).download({ name, extension });
  }

  window.ItsQr = { buildOptions, resolveLogo, render, download };
})();
