import React from 'react';
import classes from './Articles.module.css';
import ArticleCard from '../card/ArticleCard';


interface Props {
    title: string;
}

const Articles: React.FC<Props> = ({ title }) => {
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

export default Articles;