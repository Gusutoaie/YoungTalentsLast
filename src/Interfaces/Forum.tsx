import { Post } from './Post';
export interface Forum {
    id: number;
    name: string;
    posts: Post[];
}
