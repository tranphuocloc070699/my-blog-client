import React from 'react';
import { useMediaQuery } from 'react-responsive';

const useResponse = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  return { isDesktop, isTabletOrDesktop, isMobile };
};

export default useResponse;
