import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const testConnection = () => {
  return axios.get(`${apiUrl}/api/test`)
    .then(response => response.data)
    .catch(error => {
      console.error("Error connecting to backend:", error);
    });
};
