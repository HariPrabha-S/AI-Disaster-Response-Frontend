const SSE_URL = import.meta.env.VITE_SSE_URL || 'http://localhost:8000/sse';

export const connectSSE = (onMessage, onError) => {
  const source = new EventSource(SSE_URL);

  source.onmessage = (event) => {
    onMessage?.(event.data);
  };

  source.onerror = (err) => {
    onError?.(err);
  };

  return source;
};
