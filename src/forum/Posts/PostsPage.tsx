import React, { useState } from 'react';
import classes from './PostsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faFire, faSearch, faFrown, faBook, faRocket, faLock, faShareSquare } from '@fortawesome/free-solid-svg-icons';

const PostsPage: React.FC = () => {
    const [navVisible, setNavVisible] = useState(false);

    const showIconBar = () => setNavVisible(false);
    const hideIconBar = () => setNavVisible(true);

    return (
        <div className={classes.mainBox}>
            <header>
                {/* NavBar Section */}
                <div className={classes.navbar}>
                    <nav className={`${classes.navigation} ${navVisible ? '' : classes.hide}`} id="navigation">
                        <span className={classes['close-icon']} id="close-icon" onClick={showIconBar}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                        <ul className={classes['nav-list']}>
                            <li className={classes['nav-item']}><a href="forums.html">Forums</a></li>
                            <li className={classes['nav-item']}><a href="posts.html">Posts</a></li>
                            <li className={classes['nav-item']}><a href="detail.html">Detail</a></li>
                        </ul>
                    </nav>
                    <a className={classes['bar-icon']} id="iconBar" onClick={hideIconBar}>
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                    <div className={classes.brand}>My Forum</div>
                </div>
                {/* SearchBox Section */}
                <div className={classes['search-box']}>
                    <div>
                        <select name="" id="">
                            <option value="Everything">Everything</option>
                            <option value="Titles">Titles</option>
                            <option value="Descriptions">Descriptions</option>
                        </select>
                        <input type="text" name="q" placeholder="search ..." />
                        <button><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>
            </header>
            <div className={classes.container}>
                {/* Navigation */}
                <div className={classes.navigate}>
                    <span><a href="">MyForum - Forums</a> &gt;&gt; <a href="">random subforum</a></span>
                </div>
                {/* Display posts table */}
                <div className={classes['posts-table']}>
                    <div className={classes['table-head']}>
                        <div className={classes.status}>Status</div>
                        <div className={classes.subjects}>Subjects</div>
                        <div className={classes.replies}>Replies/Views</div>
                        <div className={classes['last-reply']}>Last Reply</div>
                    </div>
                    {/* Sample table rows */}
                    {[...Array(10)].map((_, index) => (
                        <div className={classes['table-row']} key={index}>
                            <div className={classes.status}><FontAwesomeIcon icon={faFire} /></div>
                            <div className={classes.subjects}>
                                <a href="">Is learning Python on 2021 worth it?</a>
                                <br />
                                <span>Started by <b><a href="">User</a></b>.</span>
                            </div>
                            <div className={classes.replies}>
                                2 replies <br /> 125 views
                            </div>
                            <div className={classes['last-reply']}>
                                Oct 12 2021
                                <br />By <b><a href="">User</a></b>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination starts */}
                <div className={classes.pagination}>
                    pages: <a href="">1</a><a href="">2</a><a href="">3</a>
                </div>
                {/* Pagination ends */}
            </div>

            <div className={classes.note}>
                <span><FontAwesomeIcon icon={faFrown} />&nbsp; 0 Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><FontAwesomeIcon icon={faShareSquare} /></a><br />
                <span><FontAwesomeIcon icon={faBook} />&nbsp; Low Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><FontAwesomeIcon icon={faShareSquare} /></a><br />
                <span><FontAwesomeIcon icon={faFire} />&nbsp; Popular Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><FontAwesomeIcon icon={faShareSquare} /></a><br />
                <span><FontAwesomeIcon icon={faRocket} />&nbsp; High Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><FontAwesomeIcon icon={faShareSquare} /></a><br />
                <span><FontAwesomeIcon icon={faLock} />&nbsp; Closed Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><FontAwesomeIcon icon={faShareSquare} /></a><br />
            </div>

            <footer>
                <span>&copy; </span>
            </footer>
        </div>
    );
};

export default PostsPage;
