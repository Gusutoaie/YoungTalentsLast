import Faculty from './Faculty';
interface User {
    id: number;
    username: string;
    faculty: Faculty;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    actualJob: string;
    birthDate: string;
    phoneNumber: string;
    profilePicturePath: string;
    token: string;
    isConfirmed: boolean;
    createdAt: string;
    yearOfStudy : string;
}

export default User;