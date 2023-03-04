import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '~/components/Header/Header';
import useResponse from '~/utils/hooks/useResponse';
import HeaderMobile from '../Header/HeaderMobile';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const diviceDetecter = useResponse();

  return (
    <div>
      {diviceDetecter.isMobile ? <HeaderMobile /> : <Header />}
      {children}
    </div>
  );
};

export default DefaultLayout;
