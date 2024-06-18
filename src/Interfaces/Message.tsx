import  User  from './User';

export default interface Message {
    id: number;
    content: string;
    timestamp: Date;
    user: User;
}