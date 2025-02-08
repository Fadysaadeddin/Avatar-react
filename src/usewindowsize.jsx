import { useState, useEffect, useDebugValue } from "react";

function useWindowSize(minWidth, maxWidth) {
  const [isMatching, setIsMatching] = useState(
    window.innerWidth >= minWidth && window.innerWidth <= maxWidth
  );

  useDebugValue(`Window: ${window.innerWidth}px (Min: ${minWidth}, Max: ${maxWidth})`);

  useEffect(() => {
    const updateSize = () => {
      setIsMatching(window.innerWidth >= minWidth && window.innerWidth <= maxWidth);
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // Check initial size

    return () => window.removeEventListener("resize", updateSize);
  }, [minWidth, maxWidth]);

  return isMatching;
}

export default useWindowSize;
