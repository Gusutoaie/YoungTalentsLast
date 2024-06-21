import React, { useState } from 'react';
import classes from './Admin.module.css';
import { NavbarSimple } from './navbar/AdminNavbar';
import CsvUpload from './csv/CsvUpload';
import StatsPage from './pages/stats';
const Admin: React.FC = () => {
    const [currentView, setCurrentView] = useState('billing');

    const renderContent = () => {
        switch (currentView) {
            case 'stats':
                return (
                    <div>
                        <StatsPage />
                    </div>
                );
                
            case 'notifications':
                return <div>Notifications Content</div>;
            case 'members':
                return (
                    <div>
                        <h3>Members Management</h3>
                        <CsvUpload />
                    </div>
                );
            case 'events':
                return <div>Events & Articles Content</div>;
            case 'chats':
                return <div>Chats Content</div>;
            case 'jobs':
                return <div>Jobs Content</div>;
            case 'otherSettings':
                return <div>Other Settings Content</div>;
            default:
                return <div>Select an option from the navbar</div>;
        }
    };

    return (
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <div className={classes.navBar}>
                    <NavbarSimple onLinkClick={setCurrentView} />
                </div>
                <div className={classes.content}>
                    <h2>Admin Panel</h2>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Admin;
