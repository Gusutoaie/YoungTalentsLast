import React from 'react';
import classes from './Events.module.css';
import ArticleCard from '../card/ArticleCard';


interface Props {
    title: string;
}

const Events: React.FC<Props> = ({ title }) => {
    return (
        <div className={classes.ArticleHeader}>
            <h3 className={classes.newestEvents}>{title}</h3>
        
            <div className={classes.Articles}>
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    );
};

export default Events;