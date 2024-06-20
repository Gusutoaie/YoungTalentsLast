import React from 'react';
import classes from './Admin.module.css';
import { NavbarSimple } from './navbar/AdminNavbar';
import CsvUpload from './csv/CsvUpload';

const Admin: React.FC = () => {
    return (
        <div className={classes.container}>
            <div className={classes.subContainer}> 
                <div className={classes.navBar}>
                    <NavbarSimple />
                </div>
                <div className={classes.content}>
                    <h2>Admin Panel</h2>
                    <CsvUpload />
                </div>
            </div>
        </div>
    );
};

export default Admin;
