import Faculty from './Faculty';
interface User {
    id: number;
    faculty: Faculty;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
    profilePicturePath: string;
    token: string;
    isConfirmed: boolean;
    createdAt: string;
    yearOfStudy : string;
}

export default User;