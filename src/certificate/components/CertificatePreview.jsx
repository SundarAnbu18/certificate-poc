import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import CertificateTemplate from './CertificateTemplate';
import {
  captureCertificate,
  waitForCertificateAssets,
  CERT_W,
  CERT_H,
  downloadCertificateAsPDF,
  downloadCertificateAsImage,
} from '../utils/downloadCertificate';
import './CertificatePreview.css';

export default function CertificatePreview({ data, isLoading = false }) {
  const captureRef = useRef(null);
  const canvasRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [rendering, setRendering] = useState(false);
  const [needsCapture, setNeedsCapture] = useState(false);

  useEffect(() => {
    if (!data) {
      setPreviewSrc(null);
      setNeedsCapture(false);
      canvasRef.current = null;
      return;
    }

    setPreviewSrc(null);
    canvasRef.current = null;
    setNeedsCapture(true);
    setRendering(true);
  }, [data]);

  useLayoutEffect(() => {
    if (!needsCapture || !data) return;

    let cancelled = false;

    async function buildPreview() {
      const root = captureRef.current;
      if (!root) {
        setRendering(false);
        return;
      }

      await waitForCertificateAssets(root);
      await new Promise((resolve) => requestAnimationFrame(resolve));

      if (cancelled) return;

      const canvas = await captureCertificate(captureRef);
      if (cancelled || !canvas) return;

      canvasRef.current = canvas;
      setPreviewSrc(canvas.toDataURL('image/png'));
      setNeedsCapture(false);
      setRendering(false);
    }

    buildPreview().catch(() => {
      if (!cancelled) {
        setNeedsCapture(false);
        setRendering(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [needsCapture, data]);

  async function handleDownloadPDF() {
    setDownloading(true);
    try {
      const name = 'kiran_shankar';
      await downloadCertificateAsPDF(
        captureRef,
        `${name}_certificate.pdf`,
        canvasRef.current
      );
    } finally {
      setDownloading(false);
    }
  }

  async function handleDownloadImage() {
    setDownloading(true);
    try {
      const name = 'kiran_shankar';
      await downloadCertificateAsImage(
        captureRef,
        `${name}_certificate.png`,
        canvasRef.current
      );
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

  return (
    <div className="preview-wrapper">
      {/* Template mounts only while rasterizing, then is removed from the DOM */}
      {needsCapture && (
        <div
          ref={captureRef}
          className="certificate-capture-host"
          aria-hidden="true"
        >
          <div style={{ width: CERT_W, height: CERT_H }}>
            <CertificateTemplate data={data} />
          </div>
        </div>
      )}

      <div className="preview-toolbar">
        <span className="preview-label">Certificate Preview</span>
        <div className="preview-actions">
          <button
            className="btn-download btn-pdf"
            onClick={handleDownloadPDF}
            disabled={downloading || rendering || !previewSrc}
          >
            {downloading ? 'Preparing…' : '↓ Download PDF'}
          </button>
          <button
            className="btn-download btn-img"
            onClick={handleDownloadImage}
            disabled={downloading || rendering || !previewSrc}
          >
            {downloading ? 'Preparing…' : '↓ Download PNG'}
          </button>
        </div>
      </div>

      <div className="preview-cert-container">
        {previewSrc ? (
          <img
            src={previewSrc}
            alt="Certificate of completion"
            className="preview-cert-image"
            width={CERT_W}
            height={CERT_H}
            draggable={false}
          />
        ) : (
          <div className="cert-loading preview-cert-loading">
            <div className="cert-spinner" />
            <span>Rendering certificate…</span>
          </div>
        )}
      </div>

      <p className="preview-hint">
        Click <strong>Download PDF</strong> to save an A4 landscape PDF, or <strong>Download PNG</strong> for a high-resolution image.
      </p>
    </div>
  );
}
