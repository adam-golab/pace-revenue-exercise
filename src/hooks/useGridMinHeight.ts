import { useEffect, useRef, useState } from 'react';

import { calculateMinHeight } from '../helpers';

export const useGridMinHeight = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState(0);

  const handleResize = () => {
    if (gridRef.current) {
      setMinHeight(calculateMinHeight(gridRef.current.offsetHeight));
    }
  };

  useEffect(() => {
    handleResize();
  }, [gridRef.current]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return { minHeight, gridRef };
};
