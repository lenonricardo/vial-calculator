import React, { PropsWithChildren } from 'react';
import Navbar from '../NavBar'

interface LayoutProps extends PropsWithChildren<{}> {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;
