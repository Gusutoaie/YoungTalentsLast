import classes from './HomePage.module.css';
import graduate from '../../assets/images/graduate.png';
import bookImg from '../../assets/images/bookImg.png';
import graduate2 from '../../assets/images/graduate2.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleJoinCommunityClick = () => {
        navigate('/register');
    };
    return (
        <div className={classes.container}>
     
            <div></div>
            <div className={classes.middleInfo}>
                <div className={classes.infoMessage}>
                    <p>Descopera excelenta! Cariera ta este visul tau implinit!</p>
                    <h1>UVTerra</h1>
                </div>
                <div className={classes.infoButtons}>
                <button className={classes.loginButton} onClick={handleLoginClick}>Login</button>
                    <button className={classes.joinCommunityButton} onClick={handleJoinCommunityClick}>Alătură-te comunității Alumni</button>
                </div>

            </div>
            <div className={classes.bottomInfo}>
                <div className={classes.panel1}>
                    <div className={classes.panelImage}>
                        <img src={graduate} alt="test" />
                    </div>
                    <div className={classes.panelHead}>
                        <h3 className={classes.panelTitle}>CARIERE</h3>
                        <a className={classes.panelLinks} href="/about">VEZI MAI MULTE INFORMAȚII</a>
                    </div>

                </div>
                <div className={classes.panel2}>
                    <div className={classes.panelImage}>
                        <img src={graduate2} alt="test" />
                    </div>
                    <div className={classes.panelHead}>
                        <h3 className={classes.panelTitle}>BENEFICII ALUMNUS</h3>
                        <a className={classes.panelLinks} href="/about">VEZI MAI MULTE INFORMAȚII</a>
                    </div>

                </div>
                <div className={classes.panel3}>
                    <div className={classes.panelImage}>
                        <img src={bookImg} alt="test" />
                    </div>
                    <div className={classes.panelHead}>
                        <h3 className={classes.panelTitle}>NOUTĂȚI</h3>
                        <a className={classes.panelLinks} href="/about">VEZI MAI MULTE INFORMAȚII</a>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HomePage;