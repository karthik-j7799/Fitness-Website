import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://43.204.92.123:4002/health_empire_api', 
  baseURL: 'http://localhost:4002/health_empire_api', 

  headers: {
    'Content-Type': 'application/json', 
  },
});

export default axiosInstance
