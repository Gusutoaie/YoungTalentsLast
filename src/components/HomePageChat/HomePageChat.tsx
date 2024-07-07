import React, { useEffect, useState } from 'react';
import { getChatRoomForUser, joinChatRoom, sendMessage, getMessages } from '../../services/ChatRoomService';
import { useAppSelector } from '../../hookt';
import { selectUser } from '../../slices/userSlice';
import  ChatRoom  from '../../Interfaces/ChatRoom';
import  Message  from '../../Interfaces/Message';
import classes from './HomePageChat.module.css';
import chatIcon from '../../assets/images/chatIcon.svg';


const HomePageChat: React.FC = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const user = useAppSelector(selectUser);
    const userId = user?.id;

    const toggleChat = () => {
        setChatOpen(!chatOpen);
    };

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

    const handleSendMessage = async () => {
        if (chatRoom && userId && newMessage.trim()) {
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
        <div className={classes.chatContainer}>
            <div className={classes.chatButton} onClick={toggleChat}>
                <img src={chatIcon} alt="Chat" />
            </div>
            {chatOpen && (
                <div className={classes.chatRoomContainer}>
                    <div className={classes.chatHeader}>
                        <button className={classes.closeButton} onClick={toggleChat}>X</button>
                    </div>
                    <div className={classes.chatHistory}>
                        <ul className={classes.ulMessage}>
                            {messages.map((message) => (
                                <li key={message.id} className={`${classes.clearfix} ${message.user.id === userId ? classes.alignRight : classes.alignLeft}`}>
                                    <div className={`${classes.messageData} ${message.user.id === userId ? classes.alignRight : classes.alignLeft}`}>
                                        <span className={classes.messageDataTime}>{new Date(message.timestamp).toLocaleTimeString()}</span> &nbsp; &nbsp;
                                        <span className={classes.messageDataName}>{message.user.username}</span> <i className={`fa fa-circle ${message.user.id === userId ? classes.me : classes.online}`}></i>
                                    </div>
                                    <div className={`${classes.message} ${message.user.id === userId ? classes.myMessage : classes.otherMessage}`}>
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

                        <button className={classes.sendButton} onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePageChat;