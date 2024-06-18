
import  User  from './User';
interface Faculty {
    id: number;
    name: string;
    description: string;
    dean: User;
    proDean: User;
} export default Faculty;