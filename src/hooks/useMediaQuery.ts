import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  function getMatches(query: string) {
    return window.matchMedia(query).matches;
  }

  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    const media = window.matchMedia(query);

    function handleMediaChange() {
      setMatches(getMatches(query));
    }

    media.addEventListener('change', handleMediaChange);

    return () => {
      media.removeEventListener('change', handleMediaChange);
    };
  }, [query]);

  return matches;
}
