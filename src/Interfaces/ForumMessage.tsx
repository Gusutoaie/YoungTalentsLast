import { Topic } from './Topic';
import User from './User';
export interface ForumMessage {
    id: number;
    content: string;
    topic: Topic;
    user: User;
    timestamp: string; // ISO date string
}
