import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Noutati.module.css';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Article from '../../Interfaces/Article';
import { Pagination } from '@mantine/core';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import NewsCarousel from '../../components/ArticleNewsCarousel/NewsCarousel';

interface Event {
    id: number;
    date: string;
    title: string;
}
const breadcrumbItems = [
    { title: 'Acasa', href: '/' },
    { title: 'Noutăți și Evenimente', href: '/noutati-evenimente' },
    { title: 'Adauga Noutăți și Evenimente', href: '/addArticle' }
];
const Noutati: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();


    

    const fetchArticles = (page: number) => {
        setLoading(true);
        fetch(`http://localhost:8090/articles/paged?page=${page - 1}&size=12`) // Adjust the size to 12
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setArticles(data.content);
                setTotalPages(data.totalPages);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setError('Failed to fetch articles');
                setLoading(false);
            });
    };

    const fetchEvents = () => {
        fetch('http://localhost:8090/articles?limit=5') // Replace with your actual endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched events:', data); // Log fetched events
                setEvents(data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
                setError('Failed to fetch events');
            });
    };

    useEffect(() => {
        fetchArticles(page);
        fetchEvents();
    }, [page]);

    const handleEventClick = (id: number) => {
        navigate(`/event/${id}`);
    };

   
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
        return `${day}.${month}`;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={classes.container}>
                        

            <div className={classes.title}>
                <h2>NOUTĂȚI & EVENIMENTE</h2>
            </div>
            <div className={classes.NewsCarousel}>

                <NewsCarousel />

             
            </div>
            <div className={classes.noutatiContainer}>

                <div className={classes.leftSide}>
                    {/* Left side content can go here */}
                </div>

                <div className={classes.middleSide}>
                    
                    {articles.map(article => (
                        <div className={classes.articleCard} key={article.id}>
                            <ArticleCard {...article} />
                        </div>
                    ))}
                </div>

                <div className={classes.rightSide}>
                    <div className={classes.rightSideEvents}>
                        <div className={classes.CalendarEvenimenteTitle}>
                            <h2>Calendar evenimente</h2>
                        </div>
                        <div className={classes.CalendarEvenimente}>
                            {events.map(event => (
                                <div
                                    className={classes.calendarItem}
                                    key={event.id}
                                    onClick={() => handleEventClick(event.id)}
                                >
                                    <div className={classes.calendarItemDate}>
                                        <p>{event.date}</p>
                                    </div>
                                    <div className={classes.calendarItemContent}>
                                        <p>{event.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.pagination}>
                <Pagination 
                    value={page} 
                    onChange={setPage} 
                    total={totalPages} 
                    className={classes.pagination} 
                />
            </div>
        </div>
    );
};

export default Noutati;
