import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const A4_LANDSCAPE = { width: 297, height: 210 };
export const CERT_W = 1400;
export const CERT_H = 1004;

const CAPTURE_SELECTOR = '[data-certificate-capture]';

export async function waitForCertificateAssets(rootEl) {
  if (!rootEl) return;

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  const images = Array.from(rootEl.querySelectorAll('img'));
  await Promise.all(
    images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
        })
    )
  );
}

export async function captureCertificate(elementRef) {
  const el = elementRef?.current;
  if (!el) return null;

  const certEl = el.querySelector(CAPTURE_SELECTOR) || el;

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

  return canvas;
}

export async function downloadCertificateAsPDF(
  elementRef,
  filename = 'certificate.pdf',
  existingCanvas = null
) {
  const canvas = existingCanvas || (await captureCertificate(elementRef));
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

export async function downloadCertificateAsImage(
  elementRef,
  filename = 'certificate.png',
  existingCanvas = null
) {
  const canvas = existingCanvas || (await captureCertificate(elementRef));
  if (!canvas) return;

  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
