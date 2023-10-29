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
    try {
      const response: AxiosResponse<User> = await api.patch(
        '/users/update', 
        data
      );

      return response.data;
    } catch (error) {
      throw new AppError(error);
    }
  }
}
