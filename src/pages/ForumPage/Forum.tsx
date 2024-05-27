import React, { useState } from 'react';
import classes from './Forum.module.css';

interface Reply {
    id: number;
    text: string;
    user: string;
    date: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    user: string;
    date: string;
    replies: Reply[];
}

const ForumPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPost, setNewPost] = useState({ title: '', content: '', user: '' });
    const [newReply, setNewReply] = useState({ text: '', user: '', postId: 0 });

    const handlePostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
    };

    const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewReply({ ...newReply, [e.target.name]: e.target.value });
    };

    const handleAddPost = () => {
        const postId = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const newPostWithDate = { ...newPost, id: postId, date: new Date().toLocaleString(), replies: [] };
        setPosts([...posts, newPostWithDate]);
        setNewPost({ title: '', content: '', user: '' });
    };

    const handleAddReply = (postId: number) => {
        const replyId = posts.reduce((acc, post) => acc + post.replies.length, 0) + 1;
        const newReplyWithDate = { ...newReply, id: replyId, date: new Date().toLocaleString() };
        setPosts(posts.map(post => post.id === postId ? { ...post, replies: [...post.replies, newReplyWithDate] } : post));
        setNewReply({ text: '', user: '', postId: 0 });
    };

    return (
        <div className={classes.container}>
            <h1>Forum Page</h1>
            <div className={classes.newPost}>
                <h2>Add New Post</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={handlePostChange}
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    value={newPost.content}
                    onChange={handlePostChange}
                ></textarea>
                <input
                    type="text"
                    name="user"
                    placeholder="Your Name"
                    value={newPost.user}
                    onChange={handlePostChange}
                />
                <button onClick={handleAddPost}>Add Post</button>
            </div>

            <div className={classes.posts}>
                {posts.map(post => (
                    <div key={post.id} className={classes.post}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <p><strong>{post.user}</strong> <em>{post.date}</em></p>
                        <div className={classes.newReply}>
                            <h4>Reply</h4>
                            <textarea
                                name="text"
                                placeholder="Reply content"
                                value={newReply.postId === post.id ? newReply.text : ''}
                                onChange={handleReplyChange}
                                onFocus={() => setNewReply({ ...newReply, postId: post.id })}
                            ></textarea>
                            <input
                                type="text"
                                name="user"
                                placeholder="Your Name"
                                value={newReply.postId === post.id ? newReply.user : ''}
                                onChange={handleReplyChange}
                                onFocus={() => setNewReply({ ...newReply, postId: post.id })}
                            />
                            <button onClick={() => handleAddReply(post.id)}>Add Reply</button>
                        </div>
                        <div className={classes.replies}>
                            {post.replies.map(reply => (
                                <div key={reply.id} className={classes.reply}>
                                    <p>{reply.text}</p>
                                    <p><strong>{reply.user}</strong> <em>{reply.date}</em></p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForumPage;
