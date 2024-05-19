import { Outlet } from 'react-router'
import LayoutCSS from './Layout.module.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

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