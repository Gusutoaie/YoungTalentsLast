import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    IconCalendar,
    IconClock,
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandLinkedin,
    IconMail,
    IconPrinter,
    IconBrandPinterest
} from '@tabler/icons-react';
import classes from './EventDetails.module.css';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'; // Adjust the import path as needed

const EventDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        image: '',
    });

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://localhost:8090/articles/${id}`);
                const data = await response.json();
                setArticle(data);
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();
    }, [id]);

    const breadcrumbItems = [
        { title: 'Acasa', href: '/' },
        { title: 'Noutăți și Evenimente', href: '/noutati-evenimente' },
        { title: article.title.length > 30 ? `${article.title.substring(0, 27)}...` : article.title, href: `/event/${id}` }
    ];

    return (
        <div className={classes.container}>
            <div className={classes.pathFile}>
                <BreadCrumbs items={breadcrumbItems} />
            </div>
            <div className={classes.ArticleDetailContainer}>
                <div className={classes.header}>
                    <div className={classes.title}>
                        <h2>{article.title}</h2>
                    </div>
                    <div className={classes.border} />
                    <div className={classes.dateTime}>
                        <span><IconCalendar size={16} /> {article.date}</span>
                        <span><IconClock size={16} /> 8:28 am</span>
                    </div>
                </div>
                <div className={classes.ArticleHeader}>
                    <div className={classes.socialNetwork}>
                        <div className={classes.socialButtons}>
                            <div className={`${classes.socialButton} ${classes.facebook}`}><IconBrandFacebook size={24} /></div>
                            <div className={`${classes.socialButton} ${classes.twitter}`}><IconBrandTwitter size={24} /></div>
                            <div className={`${classes.socialButton} ${classes.linkedin}`}><IconBrandLinkedin size={24} /></div>
                            <div className={`${classes.socialButton} ${classes.pinterest}`}><IconBrandPinterest size={24} /></div>
                            <div className={`${classes.socialButton} ${classes.mail}`}><IconMail size={24} /></div>
                            <div className={`${classes.socialButton} ${classes.print}`}><IconPrinter size={24} /></div>
                        </div>
                    </div>
                    <div className={classes.ArticleImage}>
                        {article.image && <img src={`http://localhost:8090/${article.image}`} alt="Event" />}
                    </div>
                </div>

                <div className={classes.content}>
                    <p>{article.description}</p>
                </div>
            </div>

            <div className={classes.suggestedArticle}>
                <div className={classes.suggestedArticleHeader}>
                    {/* <div className={classes.articleCard}>
                        <ArticleCard />
                    </div>
                    <div className={classes.articleCard}>
                        <ArticleCard />
                    </div>
                    <div className={classes.articleCard}>
                        <ArticleCard />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
