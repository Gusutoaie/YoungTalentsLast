import React, { useState } from 'react';
import classes from './ForumPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCar, faSearch, faFrown, faBook, faRocket, faLock, faShareSquare, faChartBar, faFire } from '@fortawesome/free-solid-svg-icons';
import InputWithButton from './components/search';
import Navbar from '../components/navbar/Navbar';

const ForumPage: React.FC = () => {
    const [navVisible, setNavVisible] = useState(false);

    const showIconBar = () => setNavVisible(false);
    const hideIconBar = () => setNavVisible(true);

    return (
        <div className={classes.mainBox}>
            <div className={classes.mainContent}>

                <header>
                    {/* NavBar Section */}
                    <div className={classes.navbar}>
                            <Navbar />
                    </div>
                    {/* SearchBox Section */}
                    <div className={classes['search-box']}>
                        <InputWithButton />
                    </div>
                </header>
                <div className={classes.container}>
                    <div className={classes.subforum}>
                        <div className={classes['subforum-title']}>
                            <h1 className={classes.title}>General Information</h1>
                        </div>
                        <div className={classes['subforum-row']}>
                            <div className={`${classes['subforum-icon']} ${classes['subforum-column']} ${classes.center}`}>
                                <FontAwesomeIcon icon={faCar} />
                            </div>
                            <div className={`${classes['subforum-description']} ${classes['subforum-column']}`}>
                                <h4><a className={classes.titleLink} href="#">Description Title</a></h4>
                                <p className={classes.paragraph}>Description Content: let's try to be cool, otherwise, what's the point in living together with people you don't live.</p>
                            </div>
                            <div className={`${classes['subforum-stats']} ${classes['subforum-column']} ${classes.center}`}>
                                <span className={classes.posts}>24 Posts</span> | <span className={classes.topics}>12 Topics</span>
                            </div>
                            <div className={`${classes['subforum-info']} ${classes['subforum-column']}`}>
                                <span className={classes.byText}>by</span> <a className={classes.userLink} href="">JustAUser</a>
                                <br /><small className={classes.smallText}>on 12 Dec 2020</small>
                            </div>
                        </div>
                        <hr className={classes['subforum-devider']} />
                        <div className={classes['subforum-row']}>
                            <div className={`${classes['subforum-icon']} ${classes['subforum-column']} ${classes.center}`}>
                                <FontAwesomeIcon icon={faCar} />
                            </div>
                            <div className={`${classes['subforum-description']} ${classes['subforum-column']}`}>
                                <h4><a className={classes.titleLink} href="#">Description Title</a></h4>
                                <p className={classes.paragraph}>Description Content: let's try to be cool, otherwise, what's the point in living together with people you don't live.</p>
                            </div>
                            <div className={`${classes['subforum-stats']} ${classes['subforum-column']} ${classes.center}`}>
                                <span className={classes.posts}>24 Posts</span> | <span className={classes.topics}>12 Topics</span>
                            </div>
                            <div className={`${classes['subforum-info']} ${classes['subforum-column']}`}>
                                <span className={classes.byText}>by</span> <a className={classes.userLink} href="">JustAUser</a>
                                <br /><small className={classes.smallText}>on 12 Dec 2020</small>
                            </div>
                        </div>
                        <hr className={classes['subforum-devider']} />
                        <div className={classes['subforum-row']}>
                            <div className={`${classes['subforum-icon']} ${classes['subforum-column']} ${classes.center}`}>
                                <FontAwesomeIcon icon={faCar} />
                            </div>
                            <div className={`${classes['subforum-description']} ${classes['subforum-column']}`}>
                                <h4><a className={classes.titleLink} href="#">Description Title</a></h4>
                                <p className={classes.paragraph}>Description Content: let's try to be cool, otherwise, what's the point in living together with people you don't live.</p>
                            </div>
                            <div className={`${classes['subforum-stats']} ${classes['subforum-column']} ${classes.center}`}>
                                <span className={classes.posts}>24 Posts</span> | <span className={classes.topics}>12 Topics</span>
                            </div>
                            <div className={`${classes['subforum-info']} ${classes['subforum-column']}`}>
                                <span className={classes.byText}>by</span> <a className={classes.userLink} href="">JustAUser</a>
                                <br /><small className={classes.smallText}>on 12 Dec 2020</small>
                            </div>
                        </div>
                        <hr className={classes['subforum-devider']} />
                        <div className={classes['subforum-row']}>
                            <div className={`${classes['subforum-icon']} ${classes['subforum-column']} ${classes.center}`}>
                                <FontAwesomeIcon icon={faCar} />
                            </div>
                            <div className={`${classes['subforum-description']} ${classes['subforum-column']}`}>
                                <h4><a className={classes.titleLink} href="#">Description Title</a></h4>
                                <p className={classes.paragraph}>Description Content: let's try to be cool, otherwise, what's the point in living together with people you don't live.</p>
                            </div>
                            <div className={`${classes['subforum-stats']} ${classes['subforum-column']} ${classes.center}`}>
                                <span className={classes.posts}>24 Posts</span> | <span className={classes.topics}>12 Topics</span>
                            </div>
                            <div className={`${classes['subforum-info']} ${classes['subforum-column']}`}>
                                <span className={classes.byText}>by</span> <a className={classes.userLink} href="">JustAUser</a>
                                <br /><small className={classes.smallText}>on 12 Dec 2020</small>
                            </div>
                        </div>
                    </div>
                    <div className={classes.subforum}>
                        <div className={classes['subforum-title']}>
                            <h1 className={classes.title}>General Information</h1>
                        </div>
                        <div className={classes['subforum-row']}>
                            <div className={`${classes['subforum-icon']} ${classes['subforum-column']} ${classes.center}`}>
                                <FontAwesomeIcon icon={faCar} />
                            </div>
                            <div className={`${classes['subforum-description']} ${classes['subforum-column']}`}>
                                <h4><a className={classes.titleLink} href="#">Description Title</a></h4>
                                <p className={classes.paragraph}>Description Content: let's try to be cool, otherwise, what's the point in living together with people you don't live.</p>
                            </div>
                            <div className={`${classes['subforum-stats']} ${classes['subforum-column']} ${classes.center}`}>
                                <span className={classes.posts}>24 Posts</span> | <span className={classes.topics}>12 Topics</span>
                            </div>
                            <div className={`${classes['subforum-info']} ${classes['subforum-column']}`}>
                                <span className={classes.byText}>by</span> <a className={classes.userLink} href="">JustAUser</a>
                                <br /><small className={classes.smallText}>on 12 Dec 2020</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Forum Info */}
                <div className={classes['forum-info']}>
                    <div className={classes.chart}>
                        MyForum - Stats &nbsp;<FontAwesomeIcon icon={faChartBar} />
                    </div>
                    <span><u>5,369</u> Posts in <u>48</u> Topics by <u>8,124</u> Members.</span><br />
                    <span>Latest post: <b><a href="">Random post</a></b> on Dec 15 2021 By <a href="">RandomUser</a></span>.<br />
                    <span>Check <a href="">the latest posts</a>.</span><br />
                </div>
                <footer>
                    <span>&copy; Ovidiu Gusutoaie | All Rights Reserved</span>
                </footer>
            </div>
        </div>
    );
};

export default ForumPage;
