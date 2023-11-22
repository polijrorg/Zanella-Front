import { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '@interfaces/User';


import { api } from './api';
import { AppError } from '@utils/AppError';

export interface ILoginRequest {
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
  user: User;
}

export interface IUpdateRequest {
  name?: string;
  age?: string;
  parental_role?: string;
  description?: string;
  phone?: string;
  email?: string;
  password?: string;
  topics?: string;
}

export interface IEntryResponse {
  title: string;
  content: string;
}

export interface IEntryRequest extends IEntryResponse {
  date: string;
}

export default class UserService {
  static async login(data: ILoginRequest): Promise<ILoginResponse> {
    try {
      const response: AxiosResponse<ILoginResponse> = await api.post(
        '/users/authenticate',
        data
      );
               
      return response.data;
    } catch (error) {
      throw new AppError(error);
    }
  }

  static async update(data: IUpdateRequest): Promise<User> {
    const token = await AsyncStorage.getItem('@app:token');
    try {
      const response: AxiosResponse<User> = await api.patch(
        '/users/update', 
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      throw new AppError(error);
    }
  }

  static async getDateEntry(date: string): Promise<any> {
    const token = await AsyncStorage.getItem('@app:token');
    try {
      const response: AxiosResponse<IEntryResponse> = await api.get(
        `/diary/list/${date}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      throw new AppError(error);
    }
  }

  static async postEntry(data: IEntryRequest): Promise<IEntryResponse> {
    try {
      const response: AxiosResponse<IEntryResponse> = await api.post(
        '/diary',
        data
      );

      return response.data;
    } catch (error) {
      throw new AppError(error);
    }
  }
}
