import React, { ReactNode } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import SimpleLayoutCSS from './SimpleLayout.module.css';

interface SimpleLayoutProps {
    children: ReactNode;
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children }) => {
    return (
        <div className={SimpleLayoutCSS.page}>
            <div className={SimpleLayoutCSS.navbar}>
                <Navbar />
            </div>
            <div className={SimpleLayoutCSS.content}>
                {children}
            </div>
            <div className={SimpleLayoutCSS.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default SimpleLayout;
