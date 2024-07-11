import { ForumMessage } from "./ForumMessage.tsx";
import { Post } from "./Post";
export interface Topic {
    id: number;
    title: string;
    post: Post;
    messages: ForumMessage[];
}
