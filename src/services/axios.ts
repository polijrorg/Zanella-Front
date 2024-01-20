import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const getApi = async () => {
  const token = await AsyncStorage.getItem('@app:token');

  const api = axios.create({
    baseURL: 'https://zanella.polijrinternal.com/',
  });

  if (token) {
    api.defaults.headers.common.Authorization = token;
  }

  return api;
};

export default getApi;