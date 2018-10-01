import axios from 'axios';
// Base URL
const API = "";
// Axios Config
const config = {
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
};
// Create new Axios Instance
const HTTP = axios.create(config);
export default HTTP;