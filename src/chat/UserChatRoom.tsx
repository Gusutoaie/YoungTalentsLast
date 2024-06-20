import React, { useEffect, useState } from 'react';
import ChatRoom from '../Interfaces/ChatRoom';
import Message from '../Interfaces/Message';
import { getChatRoomForUser, joinChatRoom, sendMessage, getMessages } from '../services/ChatRoomService';
import { useAppSelector } from '../hookt';
import { selectUser } from '../slices/userSlice';
import classes from './UserChatRoom.module.css';

const UserChatRoom: React.FC = () => {
    const user = useAppSelector(selectUser);
    const userId = user.id;

    const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const baseURL = 'http://localhost:8090/'; // Replace with your backend base URL

    useEffect(() => {
        const fetchChatRoom = async () => {
            try {
                const room = await getChatRoomForUser(userId);
                setChatRoom(room);
                const msgs = await getMessages(room.id);
                setMessages(msgs);
            } catch (err) {
                setError('Failed to fetch chat room');
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchChatRoom();
        }
    }, [userId]);

    const handleJoinChatRoom = async () => {
        if (chatRoom) {
            try {
                const updatedRoom = await joinChatRoom(userId, chatRoom.id);
                setChatRoom(updatedRoom);
            } catch (err) {
                setError('Failed to join chat room');
            }
        }
    };

    const handleSendMessage = async () => {
        if (chatRoom && newMessage.trim()) {
            try {
                const message = await sendMessage(userId, chatRoom.id, newMessage);
                setMessages([...messages, message]);
                setNewMessage('');
            } catch (err) {
                setError('Failed to send message');
            }
        }
    };

    if (!userId) {
        return <div>Please log in to join a chat room</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <div className={classes.peopleList}>
                    <div className={classes.search}>
                        <input type="text" placeholder="search" className={classes.searchInput} />
                        <i className={`fa fa-search ${classes.searchIcon}`}></i>
                    </div>
                    <ul className={classes.list}>
                        {chatRoom?.members.map((member) => (
                            <li key={member.id} className={classes.listItem}>
                                <img src={`${baseURL}${member.profilePicturePath}` || 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg'} alt="avatar" className={classes.avatar} />
                                <div className={classes.about}>
                                    <div className={classes.name}>{member.firstName} {member.lastName}</div>
                                    <div className={classes.status}>
                                        {/* <i className={`fa fa-circle ${member.isOnline ? classes.online : classes.offline}`}></i> {member.isOnline ? 'online' : 'offline'} */}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={classes.chat}>
                    <div className={classes.chatHeader}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" className={classes.chatHeaderAvatar} />

                        <div className={classes.chatAbout}>
                            <div className={classes.chatWith}> {chatRoom?.name}</div>
                            <div className={classes.chatNumMessages}>{messages.length} Mesaje</div>
                        </div>
                        <i className={`fa fa-star ${classes.starIcon}`}></i>
                    </div>

                    <div className={classes.chatHistory}>
                        <ul className={classes.ulMessage}>
                            {messages.map((message) => (
                                <li key={message.id} className={`${classes.clearfix} ${message.user.id === userId ? classes.alignRight : ''}`}>
                                    <div className={`${classes.messageData} ${message.user.id === userId ? classes.alignRight : ''}`}>
                                        <span className={classes.messageDataTime}>{new Date(message.timestamp).toLocaleTimeString()}</span> &nbsp; &nbsp;
                                        <span className={classes.messageDataName}>{message.user.username}</span> <i className={`fa fa-circle ${message.user.id === userId ? classes.me : classes.online}`}></i>
                                    </div>
                                    <div className={`${classes.message} ${message.user.id === userId ? `${classes.otherMessage} ${classes.floatRight}` : classes.myMessage}`}>
                                        {message.content}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={classes.chatMessage}>
                        <textarea
                            name="message-to-send"
                            id="message-to-send"
                            placeholder="Type your message"
                            rows={3}
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className={classes.textarea}
                        ></textarea>

                        <i className={`fa fa-file-o ${classes.fileIcon}`}></i> &nbsp;&nbsp;&nbsp;
                        <i className={`fa fa-file-image-o ${classes.fileIcon}`}></i>

                        <button className={classes.chatButton} onClick={handleSendMessage}>Send</button>
                    </div>

                    {/* Button to join chat room */}
                    <button className={classes.chatButton} onClick={handleJoinChatRoom}>Join Chat Room</button>
                </div>
            </div>
        </div>
    );
};

export default UserChatRoom;
