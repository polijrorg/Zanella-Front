import { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '@interfaces/User';
import useAuth from '@hooks/useAuth';

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

export interface IEntryPostRequest extends IEntryResponse {
  date: string;
}

export interface IEntryPatchRequest {
  title?: string;
  content?: string;
}

interface IUpdateTopicsRequest {
  id: string;
  topics: string[];
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
      console.log('login');
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
      console.log('update');
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
      console.log('getdateentry');
      throw new AppError(error);
    }
  }

  static async postEntry(data: IEntryPostRequest): Promise<IEntryResponse> {
    const token = await AsyncStorage.getItem('@app:token');
    try {
      const response: AxiosResponse<IEntryResponse> = await api.post(
        '/diary',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.log('postentry');
      throw new AppError(error);
    }
  }

  static async deleteEntry(id: string): Promise<void> {
    const token = await AsyncStorage.getItem('@app:token');
    try {
      await api.delete(
        `/diary/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      console.log('deleteentry');
      throw new AppError(error);
    }
  }

  static async updateEntry(data: IEntryPatchRequest, id: string): Promise<IEntryResponse> {
    try {
      const token = await AsyncStorage.getItem('@app:token');
      const response: AxiosResponse<IEntryResponse> = await api.patch(
        `/diary/${id}`,
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

  static async getSubjects(user: User): Promise<any> {
    const { id } = user;
    const token = await AsyncStorage.getItem('@app:token');
    try {
      const response: AxiosResponse<any> = await api.get(
        `/users/subjects/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.log('getsubjects');
      throw new AppError(error);
    }
  } 

  static async updateUserTopics(data: IUpdateTopicsRequest): Promise<any> {
    const token = await AsyncStorage.getItem('@app:token');
    try {
      const response: AxiosResponse<any> = await api.post(
        `/users/topics/${data.id}`,
        { topics: data.topics },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.log('updatetopics');
      throw new AppError(error);
    }
  }
}
