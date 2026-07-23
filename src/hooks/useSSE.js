import { useEffect, useRef } from 'react';

const useSSE = (url, onMessage) => {
  const sourceRef = useRef(null);

  useEffect(() => {
    if (!url) return;
    const source = new EventSource(url);
    sourceRef.current = source;

    source.onmessage = (event) => {
      onMessage?.(event.data);
    };

    source.onerror = (err) => {
      console.error('SSE error:', err);
    };

    return () => {
      source.close();
    };
  }, [url]);

  return sourceRef;
};

export default useSSE;
