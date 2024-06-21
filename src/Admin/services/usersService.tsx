import axios from 'axios';
import User from '../../Interfaces/User';
// Define the User interface


interface RoleCountsByDate {
  date: string;
  'Total Users': number;
  'Simple Users': number;
  'UVT Admins': number;
  Partners: number;
  Decans: number;
  'Pro Decans': number;
}

export const fetchUserData = async (): Promise<User[]> => {
  try {
    const response = await axios.get('http://localhost:8090/api/admin/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const processUserData = (users: User[]): RoleCountsByDate[] => {
  const roleCountsByDate: { [date: string]: RoleCountsByDate } = {};

  users.forEach((user) => {
    const date = new Date(); // Replace with user-specific date if available
    const formattedDate = date.toISOString().split('T')[0];

    if (!roleCountsByDate[formattedDate]) {
      roleCountsByDate[formattedDate] = {
        date: formattedDate,
        'Total Users': 0,
        'Simple Users': 0,
        'UVT Admins': 0,
        Partners: 0,
        Decans: 0,
        'Pro Decans': 0,
      };
    }

    roleCountsByDate[formattedDate]['Total Users']++;
    roleCountsByDate[formattedDate][user.role.name as keyof RoleCountsByDate]++;
  });

  return Object.values(roleCountsByDate);
};
