import axios from 'axios';
import {API_BASE} from "@env";
import AsyncStorage from '@react-native-async-storage/async-storage';

let headers = {}

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
      config.headers.Authoriazation = `Bearer ${token}`;
    }

    return config;
  }, 
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
