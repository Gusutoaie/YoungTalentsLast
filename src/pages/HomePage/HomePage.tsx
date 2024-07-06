import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArticleCardHomePage } from '../../components/ArticleCardHomePage/ArticleCardHomePage';
import { fetchArticles } from '../../services/ArticleService';
import Article from '../../Interfaces/Article';
import classes from './HomePage.module.css';
import graduate from '../../assets/images/graduate.png';
import bookImg from '../../assets/images/bookImg.png';
import graduate2 from '../../assets/images/graduate2.png';
import mesajAniversar from '../../assets/video/Mesaj-aniversare-UVT-80-alumni.mp4';

const HomePage = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const articlesData = await fetchArticles();
                setArticles(articlesData);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };
        getArticles();
    }, []);

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleJoinCommunityClick = () => {
        navigate('/register');
    };

    const handleViewAllNewsClick = () => {
        navigate('/noutati-evenimente');
    };

    const handleViewMembersClick = () => {
        navigate('/members');
    };

    const createAnimatedText = (text:any) => {
        return text.split('').map((char:any, index:any) => (
            <span key={index}>{char}</span>
        ));
    };

    return (
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <div></div>
                <div className={classes.middleInfo}>
                    <div className={classes.infoMessage}>
                        <p className="animatedText">{createAnimatedText('Descopera excelenta! Cariera ta este visul tau implinit!')}</p>
                        <h1 className="animatedText">{createAnimatedText('UVTerra')}</h1>
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
                            <a className={classes.panelLinks} href="/jobs">VEZI MAI MULTE INFORMAȚII</a>
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
                            <a className={classes.panelLinks} href="/noutati-evenimente">VEZI MAI MULTE INFORMAȚII</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.bottomInfoMobile}>
                <div className={classes.panel1}>
                    <div className={classes.panelImage}>
                        <img src={graduate} alt="test" />
                    </div>
                    <div className={classes.panelHead}>
                        <h3 className={classes.panelTitle}>CARIERE</h3>
                        <a className={classes.panelLinks} href="/jobs">VEZI MAI MULTE INFORMAȚII</a>
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
                        <a className={classes.panelLinks} href="/noutati-evenimente">VEZI MAI MULTE INFORMAȚII</a>
                    </div>
                </div>
            </div>

            <div className={classes.middleView}>
                <div className={classes.middleHeader}>
                    <h2 className={classes.middleTitle}> Noutăți & Evenimente</h2>
                    <h3 className={classes.middleTitle}>Vezi ultimele noutăți și evenimente din comunitatea UVT</h3> 
                </div>
                <div className={classes.middleContainer}>
                    {articles.map(article => (
                        <ArticleCardHomePage key={article.id} article={article} />
                    ))}
                </div>
                <div>
                    <button className={classes.viewAllButton} onClick={handleViewAllNewsClick}>Vezi toate noutățile</button>
                </div>
            </div>

            <div className={classes.bottomView}>
                <div className={classes.bottomTitle}>
                    <h3 className={classes.bottomH3}>Membrii Alumnus</h3>
                </div>
                <div className={classes.bottomButton}>
                    <button className={classes.bottomViewButton} onClick={handleViewMembersClick}> Vezi toți membri comunității noastre</button>
                </div>
               <div className={classes.bottomVideo}>
                    <video className={classes.videoPrezentare} controls>
                        <source src={mesajAniversar} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
