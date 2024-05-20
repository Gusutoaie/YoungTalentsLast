import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090/user'; // Replace with your actual API base URL
export const registerUser = async (userData:any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('There was an error registering the user:', error);
    throw error;
  }
};
