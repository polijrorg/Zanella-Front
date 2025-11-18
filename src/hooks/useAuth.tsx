import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState, createContext, useEffect } from 'react';
import UserService, { IUpdateRequest } from '@services/UserService';
import User from '../interfaces/User';
import { AppError } from '@utils/AppError';

interface ILoginRequest {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    loading: boolean;
    signIn(data: ILoginRequest): Promise<void>;
    signOut(): Promise<void>;
    update(data: IUpdateRequest): Promise<void>;
    handleMainPage(isFocused: boolean): void;
    onMain: boolean;    
    token: string;
    topics: boolean;
    isFirstAccess: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children?: React.ReactNode | undefined }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isFirstAccess, setFirstAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [onMain, setOnMain] = useState(false);
  const [token, setToken] = useState('')
  const [topics, setTopics] = useState<boolean>(false);

  const handleMainPage = (isFocused: boolean) => {
    setOnMain(isFocused);
  }

  const signIn = async (data: ILoginRequest) => {
    try {
      const response = await UserService.login(data);

      await AsyncStorage.setItem('@app:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@app:token', response.token);

      const firstAccess = await AsyncStorage.getItem('@app:isFirstAccess');
      setFirstAccess(firstAccess === 'true');

      setUser(response.user);
      setToken(response.token);
      setTopics(!!response.user.topics);

    } catch (error) {
      throw new AppError(error?.message || error);
    }
  };

  const update = async (data: IUpdateRequest) => {
    try { 
      const responseUser = await UserService.update(data);

      setUser(responseUser);
      await AsyncStorage.setItem('@app:user', JSON.stringify(responseUser));
    } catch (error) {
      throw new AppError(error);
    }
  }

  const signOut = async () => {
    setUser(null);
    setLoading(true);
    await AsyncStorage.clear();
  }

  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('@app:user');
        const storedToken = await AsyncStorage.getItem('@app:token');

        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        }
      } catch (error) {
        console.log("Erro ao carregar storage:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, update, handleMainPage, onMain, token, topics, isFirstAccess }}>
      {children}
    </AuthContext.Provider>
  );
};

export default () => useContext(AuthContext);
