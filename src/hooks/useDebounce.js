import { useCallback, useRef } from 'react';

export const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);

  const debouncedCallback = useCallback(
    (value) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};