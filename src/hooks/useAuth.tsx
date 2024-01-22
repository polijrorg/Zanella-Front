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
      await AsyncStorage.setItem('@app:token', response.token).then(async() => {
        await AsyncStorage.getItem('@app:isFirstAccess').then((firstAccess) => {
          setFirstAccess(firstAccess === 'true');
          setUser(response.user)
      })});

      setToken(response.token);

      response.user.topics ? setTopics(true) : setTopics(false);
         
    } catch (error) {
      throw new AppError(error);
    }
  }

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
    const getUser = async () => {
      await AsyncStorage.getItem('@app:user').then((user) => {
        setUser(JSON.parse(user));
      })
    };

    if (!user) getUser();
    else setLoading(false);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, update, handleMainPage, onMain, token, topics, isFirstAccess }}>
      {children}
    </AuthContext.Provider>
  );
};

export default () => useContext(AuthContext);
