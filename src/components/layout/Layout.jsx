import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import ScrollToTop from '../scrollfixed/ScrollFixed'

function Layout() {
  return (
    <>
    <Header />
      <ScrollToTop />
      <Outlet />
    <Footer />
    </>
  )
}

export default Layout