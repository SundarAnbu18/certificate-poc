import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const A4_LANDSCAPE = { width: 297, height: 210 };
// Certificate natural dimensions (matches .v116_8 in CSS)
const CERT_W = 1400;
const CERT_H = 1004;

async function captureCertificate(elementRef) {
  const el = elementRef.current;
  if (!el) return null;

  // el is the scale-wrapper div (has transform: scale(x) on mobile).
  // certEl is the actual 1400×1004 certificate inside it.
  const certEl = el.querySelector('.v116_8') || el;

  // ── Save current styles ──────────────────────────────────────────────────
  const prevWrapperTransform       = el.style.transform;
  const prevWrapperTransformOrigin = el.style.transformOrigin;
  const prevWrapperWidth           = el.style.width;
  const prevWrapperHeight          = el.style.height;
  const prevCertWidth              = certEl.style.width;
  const prevCertHeight             = certEl.style.height;

  // ── Strip mobile scale so html2canvas sees full-size element ─────────────
  // If the parent has transform: scale(0.28), html2canvas captures a tiny
  // image even when width/height are set to 1400×1004.
  el.style.transform       = 'none';
  el.style.transformOrigin = 'top left';
  el.style.width           = `${CERT_W}px`;
  el.style.height          = `${CERT_H}px`;
  certEl.style.width       = `${CERT_W}px`;
  certEl.style.height      = `${CERT_H}px`;

  // Force a reflow so the browser applies the new styles before capture
  el.getBoundingClientRect();

  const canvas = await html2canvas(certEl, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#BE2328',
    logging: false,
    width: CERT_W,
    height: CERT_H,
    windowWidth: CERT_W,
    windowHeight: CERT_H,
    scrollX: 0,
    scrollY: 0,
  });

  // ── Restore original styles ──────────────────────────────────────────────
  el.style.transform       = prevWrapperTransform;
  el.style.transformOrigin = prevWrapperTransformOrigin;
  el.style.width           = prevWrapperWidth;
  el.style.height          = prevWrapperHeight;
  certEl.style.width       = prevCertWidth;
  certEl.style.height      = prevCertHeight;

  return canvas;
}

export async function downloadCertificateAsPDF(elementRef, filename = 'certificate.pdf') {
  const canvas = await captureCertificate(elementRef);
  if (!canvas) return;

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const pageW = A4_LANDSCAPE.width;
  const pageH = A4_LANDSCAPE.height;
  const imgAspect = canvas.width / canvas.height;
  const pageAspect = pageW / pageH;

  let renderW, renderH, offsetX, offsetY;
  if (imgAspect > pageAspect) {
    renderW = pageW;
    renderH = pageW / imgAspect;
    offsetX = 0;
    offsetY = (pageH - renderH) / 2;
  } else {
    renderH = pageH;
    renderW = pageH * imgAspect;
    offsetX = (pageW - renderW) / 2;
    offsetY = 0;
  }

  pdf.addImage(imgData, 'PNG', offsetX, offsetY, renderW, renderH);
  pdf.save(filename);
}

export async function downloadCertificateAsImage(elementRef, filename = 'certificate.png') {
  const canvas = await captureCertificate(elementRef);
  if (!canvas) return;

  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
