import axios from 'axios';
import ChatRoom from '../Interfaces/ChatRoom';
import Message from '../Interfaces/Message';

const API_URL = 'http://localhost:8090/api/chats';

export const getChatRoomForUser = async (userId: number): Promise<ChatRoom> => {
    const response = await axios.get<ChatRoom>(`${API_URL}/${userId}`);
    return response.data;
};

export const joinChatRoom = async (userId: number, chatRoomId: number): Promise<ChatRoom> => {
    const response = await axios.post<ChatRoom>(`${API_URL}/${chatRoomId}/join`, { userId });
    return response.data;
};

export const sendMessage = async (userId: number, chatRoomId: number, content: string): Promise<Message> => {
    const response = await axios.post<Message>(`${API_URL}/${chatRoomId}/messages`, { userId, content });
    return response.data;
};

export const getMessages = async (chatRoomId: number): Promise<Message[]> => {
    const response = await axios.get<Message[]>(`${API_URL}/${chatRoomId}/messages`);
    return response.data;
};
