import React, { useState } from 'react';
import classes from './PostDetailed.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

const PostDetailed: React.FC = () => {
    const [navVisible, setNavVisible] = useState(false);
    const [commentVisible, setCommentVisible] = useState(false);
    const [replyVisible, setReplyVisible] = useState(false);

    const showIconBar = () => setNavVisible(false);
    const hideIconBar = () => setNavVisible(true);
    const showComment = () => setCommentVisible(true);
    const hideComment = () => setCommentVisible(false);
    const showReply = () => setReplyVisible(true);
    const hideReply = () => setReplyVisible(false);

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
                    <span><a href="">MyForum - Forums</a> &gt;&gt; <a href="">random subforum</a> &gt;&gt; <a href="">random topic</a></span>
                </div>

                {/* Topic Section */}
                <div className={classes['topic-container']}>
                    {/* Original thread */}
                    <div className={classes.head}>
                        <div className={classes.authors}>Author</div>
                        <div className={classes.content}>Topic: random topic (Read 1325 Times)</div>
                    </div>

                    <div className={classes.body}>
                        <div className={classes.authors}>
                            <div className={classes.username}><a href="">Username</a></div>
                            <div>Role</div>
                            <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="" />
                            <div>Posts: <u>45</u></div>
                            <div>Points: <u>4586</u></div>
                        </div>
                        <div className={classes.content}>
                            Just a random content of a random topic.
                            <br />To see how it looks like.
                            <br /><br />
                            Nothing more and nothing less.
                            <br />
                            <hr />
                            Regards username
                            <br />
                            <div className={classes.comment}>
                                <button onClick={showComment}>Comment</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comment Area */}
                <div className={`${classes['comment-area']} ${commentVisible ? '' : classes.hide}`} id="comment-area">
                    <textarea name="comment" placeholder="comment here ... "></textarea>
                    <input type="submit" value="submit" />
                </div>

                {/* Comments Section */}
                <div className={classes['comments-container']}>
                    <div className={classes.body}>
                        <div className={classes.authors}>
                            <div className={classes.username}><a href="">AnotherUser</a></div>
                            <div>Role</div>
                            <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="" />
                            <div>Posts: <u>455</u></div>
                            <div>Points: <u>4586</u></div>
                        </div>
                        <div className={classes.content}>
                            Just a comment of the above random topic.
                            <br />To see how it looks like.
                            <br /><br />
                            Nothing more and nothing less.
                            <br />
                            <br />
                            <div className={classes.comment}>
                                <button onClick={showReply}>Reply</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reply Area */}
                <div className={`${classes['comment-area']} ${replyVisible ? '' : classes.hide}`} id="reply-area">
                    <textarea name="reply" placeholder="reply here ... "></textarea>
                    <input type="submit" value="submit" />
                </div>

                {/* Another Comment With replies */}
                <div className={classes['comments-container']}>
                    <div className={classes.body}>
                        <div className={classes.authors}>
                            <div className={classes.username}><a href="">AnotherUser</a></div>
                            <div>Role</div>
                            <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="" />
                            <div>Posts: <u>455</u></div>
                            <div>Points: <u>4586</u></div>
                        </div>
                        <div className={classes.content}>
                            Just a comment of the above random topic.
                            <br />To see how it looks like.
                            <br /><br />
                            Nothing more and nothing less.
                            <br />
                            <br />
                            <div className={classes.comment}>
                                <button onClick={showReply}>Reply</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reply Area */}
                <div className={`${classes['comment-area']} ${replyVisible ? '' : classes.hide}`} id="reply-area">
                    <textarea name="reply" placeholder="reply here ... "></textarea>
                    <input type="submit" value="submit" />
                </div>
            </div>
            <footer>
                <span>&copy; Selmi Abderrahim | All Rights Reserved</span>
            </footer>
        </div>
    );
};

export default PostDetailed;
