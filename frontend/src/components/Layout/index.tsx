import React, { PropsWithChildren } from 'react'
import Navbar from '../NavBar'

type LayoutProps = PropsWithChildren<object>

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
export default Layout
