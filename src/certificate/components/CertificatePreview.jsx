import React, { useRef, useState, useEffect } from 'react';
import CertificateTemplate from './CertificateTemplate';
import { downloadCertificateAsPDF, downloadCertificateAsImage } from '../utils/downloadCertificate';
import './CertificatePreview.css';

const CERT_W = 1400;
const CERT_H = 1004;

export default function CertificatePreview({ data, isLoading = false }) {
  const certRef = useRef(null);
  const wrapperRef = useRef(null);
  const certContainerRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      // Measure the exact container that clips the scaled certificate.
      // Using wrapper width can overestimate on mobile because of padding.
      const availableWidth = certContainerRef.current
        ? certContainerRef.current.clientWidth
        : window.innerWidth;
      const newScale = Math.min(1, availableWidth / CERT_W);
      setScale(newScale);
    };

    updateScale();

    let observer;
    if (certContainerRef.current && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(updateScale);
      observer.observe(certContainerRef.current);
    }

    window.addEventListener('resize', updateScale);
    window.addEventListener('orientationchange', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
      window.removeEventListener('orientationchange', updateScale);
      if (observer) observer.disconnect();
    };
  }, []);

  async function handleDownloadPDF() {
    setDownloading(true);
    try {
      const name = 'kiran_shankar';
      await downloadCertificateAsPDF(certRef, `${name}_certificate.pdf`);
    } finally {
      setDownloading(false);
    }
  }

  async function handleDownloadImage() {
    setDownloading(true);
    try {
      const name = 'kiran_shankar';
      await downloadCertificateAsImage(certRef, `${name}_certificate.png`);
    } finally {
      setDownloading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="preview-wrapper">
        <div className="cert-loading">
          <div className="cert-spinner" />
          <span>Loading certificate…</span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="preview-wrapper">
        <div className="cert-empty">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect x="8" y="4" width="44" height="52" rx="3" stroke="#ccc" strokeWidth="2" fill="none" />
            <line x1="16" y1="18" x2="44" y2="18" stroke="#ccc" strokeWidth="2" />
            <line x1="16" y1="26" x2="44" y2="26" stroke="#ccc" strokeWidth="2" />
            <line x1="16" y1="34" x2="36" y2="34" stroke="#ccc" strokeWidth="2" />
          </svg>
          <span>No certificate data available.</span>
        </div>
      </div>
    );
  }

  const scaledHeight = Math.round(CERT_H * scale);

  return (
    <div className="preview-wrapper" ref={wrapperRef}>
      <div className="preview-toolbar">
        <span className="preview-label">Certificate Preview</span>
        <div className="preview-actions">
          <button
            className="btn-download btn-pdf"
            onClick={handleDownloadPDF}
            disabled={downloading}
          >
            {downloading ? 'Preparing…' : '↓ Download PDF'}
          </button>
          <button
            className="btn-download btn-img"
            onClick={handleDownloadImage}
            disabled={downloading}
          >
            {downloading ? 'Preparing…' : '↓ Download PNG'}
          </button>
        </div>
      </div>

      {/* Outer box: shrinks to scaled height so no empty space below */}
      <div
        className="preview-cert-container"
        ref={certContainerRef}
        style={{ height: scaledHeight }}
      >
        {/* Inner box: always 1400×1004, scaled via transform */}
        <div
          ref={certRef}
          style={{
            width: CERT_W,
            height: CERT_H,
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
          }}
        >
          <CertificateTemplate data={data} />
        </div>
      </div>

      <p className="preview-hint">
        Click <strong>Download PDF</strong> to save an A4 landscape PDF, or <strong>Download PNG</strong> for a high-resolution image.
      </p>
    </div>
  );
}
