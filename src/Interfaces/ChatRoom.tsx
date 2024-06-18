import  User  from './User';
import Message  from './Message';
import Faculty  from './Faculty';
export default interface ChatRoom {
    id: number;
    yearOfStudy: string;
    faculty: Faculty;
    name: string;
    members: User[];
    messages: Message[];
}