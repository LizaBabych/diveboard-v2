import React, { FC, useContext } from 'react';
import { Footer } from '../components/Footer/DesktopFooter';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { MobileGuestHeader, MobileUserHeader } from '../components/Header/MobileHeader';
import { GuestHeader, UserHeader } from '../components/Header/DesktopHeader';
import { MobileNavBar } from '../components/MobileNavBar';
import { FooterMobile } from '../components/Footer/MobileFooter';
import { AuthStatusContext } from './AuthLayout';

export const MainLayout: FC = ({ children }) => {
  const isWidth = useWindowWidth(500, 769);
  const { userAuth } = useContext(AuthStatusContext);
  const guestHeader = !isWidth ? <GuestHeader /> : <MobileGuestHeader />;
  const userHeader = !isWidth ? <UserHeader /> : <MobileUserHeader />;
  const headerComponent = userAuth ? userHeader : guestHeader;
  return (
    <>
      {headerComponent}

      {children}
      {!isWidth ? <Footer /> : <FooterMobile />}

      {isWidth && <MobileNavBar loggedIn={!!userAuth} />}
    </>
  );
};
