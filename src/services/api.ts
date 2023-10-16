import { AppError } from '@utils/AppError';
import axios from 'axios';

const api = axios.create({ baseURL: 'https://Zanella.polijrinternal.com/' });

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(error);
    }
  }
);

export { api };