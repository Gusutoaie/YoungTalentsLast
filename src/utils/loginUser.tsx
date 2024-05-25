import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090/user'; // Replace with your actual API base URL

export const loginUser = async (userData:any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    const UserDetails = await axios.get(`${API_BASE_URL}/get/` + response.data);
    return UserDetails.data;
  } catch (error) {
    console.error('There was an error logging in:', error);
    throw error;
  }
};