import { Outlet } from 'react-router'
import Navbar from '../../components/navbar/Navbar'
import LayoutCSS from './Layout.module.css'
import Footer from '../../components/footer/Footer'
const Layout = () => {
    return (
        <div className={LayoutCSS.page}>
            <div className={LayoutCSS.navbar}>
                <Navbar />
            </div>
            <div className={LayoutCSS.outlet}>
                <Outlet />
            </div>
            <div className={LayoutCSS.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout