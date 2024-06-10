import React from 'react';
import classes from './Noutati.module.css';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

const Noutati: React.FC = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>NOUTĂȚI & EVENIMENTE</h2>
            </div>
            <div className={classes.noutatiContainer}>
                <div className={classes.leftSide}>
                    {/* Left side content can go here */}
                </div>

                <div className={classes.middleSide}>
                    <div className={classes.articleCard}>
                        <ArticleCard />
                    </div>
                    <div className={classes.articleCard}>
                        <ArticleCard />
                    </div>
                    <div className={classes.articleCard}>
                        <ArticleCard />
                    </div>
                </div>

                <div className={classes.rightSide}>
                    <div className={classes.rightSideEvents}>
                    <div className={classes.CalendarEvenimenteTitle}>
                        <h2>Calendar evenimente</h2>
                    </div>
                    <div className={classes.CalendarEvenimente}>
                        <div className={classes.calendarItem}>
                            <div className={classes.calendarItemDate}>
                                <p>12.06</p>
                               
                            </div>
                            <div className={classes.calendarItemContent}>
                                <p>Conferința Națională de Informatică Aplicată</p>
                            </div>
                        </div>
                        <div className={classes.calendarItem}>
                            <div className={classes.calendarItemDate}>
                            <p>12.06</p>
                            </div>
                            <div className={classes.calendarItemContent}>
                                <p>Conferința Națională de Informatică Aplicată</p>
                            </div>
                        </div>
                        <div className={classes.calendarItem}>
                            <div className={classes.calendarItemDate}>
                            <p>12.06</p>
                            </div>
                            <div className={classes.calendarItemContent}>
                                <p>Conferința Națională de Informatică Aplicată</p>
                            </div>
                        </div>
                        <div className={classes.calendarItem}>
                            <div className={classes.calendarItemDate}>
                            <p>12.06</p>
                            </div>
                            <div className={classes.calendarItemContent}>
                                <p>Conferința Națională de Informatică Aplicată</p>
                            </div>
                        </div>
                        <div className={classes.calendarItem}>
                            <div className={classes.calendarItemDate}>
                            <p>12.06</p>
                            </div>
                            <div className={classes.calendarItemContent}>
                                <p>Conferința Națională de Informatică Aplicată</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* <iframe className={classes.video} src="https://www.uvt.ro/blog-pentru-uvterra/">
                </iframe> */}
            </div>
        </div>
    );
};

export default Noutati;
