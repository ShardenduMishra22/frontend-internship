import Cookies from 'js-cookie';
import axios from 'axios';

export const isAuthenticated = async () => {
  const token = Cookies.get('jwt');
  if (!token) return false;

  try {
    const response = await axios.post(
      'https://backend-internship-14wz.onrender.com/api/valid',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    

    const data = response.data;
    return data.valid;
  } catch (error) {
    console.error('Error validating token:', error);
    return false;
  }
};
