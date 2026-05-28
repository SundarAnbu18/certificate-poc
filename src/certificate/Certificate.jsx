import React, { useState, useEffect } from 'react';
import CertificatePreview from './components/CertificatePreview';
import defaultData from './data/certificateData.json';

/**
 * Certificate entry point.
 * Pass `data` prop to override the default static data.
 * When `apiUrl` prop is provided, data will be fetched from that endpoint instead.
 */
export default function Certificate({ data: propData = null, apiUrl = null }) {
  const [certData, setCertData] = useState(propData || defaultData);
  const [isLoading, setIsLoading] = useState(!!apiUrl);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!apiUrl) return;
    setIsLoading(true);
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setCertData(json);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [apiUrl]);

  if (error) {
    return (
      <div style={{ padding: 32, textAlign: 'center', color: '#c0392b', fontFamily: 'sans-serif' }}>
        Failed to load certificate: {error}
      </div>
    );
  }

  return <CertificatePreview data={certData} isLoading={isLoading} />;
}
