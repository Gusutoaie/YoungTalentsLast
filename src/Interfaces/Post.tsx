import { Forum } from './Forum';
import { Topic } from './Topic';
export interface Post {
    id: number;
    title: string;
    forum: Forum;
    topics: Topic[];
}
