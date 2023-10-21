import * as S from './styles';
import React, { useEffect, ReducerState, ReducerAction, useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import NavBar from '@components/NavBar_Perfil';
import HeadBar from '@components/Nelson_Question';
import { api } from '@services/api';
import User from '@interfaces/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const Perfil = ({navigation}) => {

  const getUser = async(): Promise<User> => {
    try {
      const response = await api.get('/users/', {
        headers: { Authorization: `Bearer ${await AsyncStorage.getItem('@app:token')}` }
      });

      const user:User = { 
        id: response.data.id,
        name: response.data.name,
        age: response.data.age,
        parental_role: response.data.parental_role,
        description: response.data.description,
        phone: response.data.phone,
        email: response.data.email,
        password: response.data.password,
        topics: response.data.topics,
       }; 

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  const update = async (user: User): Promise<User> => {
    try {
      const response = await api.patch('/users/', user);

      const updatedUser: User = {
        name: response.data.name,
        age: response.data.age,
        parental_role: response.data.parental_role,
        description: response.data.description,
        phone: response.data.phone,
        email: response.data.email,
        password: response.data.password,
        topics: response.data.topics,
      };

      return updatedUser;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const synchronizeUser = async () => {
      const responseUser = await getUser();

      updateUser(responseUser);
    }
    synchronizeUser();
  }, [])
  

  const [SynchronizedUser, updateUser] = useReducer((prev, next) => {
    return { ...prev, ...next };

  }, {});
  

  return (
      <S.Wrapper>
        <HeadBar Profilename={SynchronizedUser.name}/>
        <S.ImageGroup>
          <S.NelsonImage source={require('@assets/JabutiNelson_Esq.png')} />
          <S.UserName>{SynchronizedUser.name}</S.UserName>
        </S.ImageGroup>
        <S.AttributesWrapper>
          <S.Attribute>{'Informações'}</S.Attribute>
          <S.Attribute>{`Idade: ${SynchronizedUser.age}`}</S.Attribute>
          <S.Attribute>{`Grau de parentesco: ${SynchronizedUser.parental_role}`}</S.Attribute>
          <S.Attribute>{`Breve descrição: ${SynchronizedUser.description}`}</S.Attribute>
          <S.Attribute>{`E-mail: ${SynchronizedUser.email}`}</S.Attribute>
          <S.Attribute>{`Telefone: ${SynchronizedUser.phone}`}</S.Attribute>
        </S.AttributesWrapper>
        <NavBar />
      </S.Wrapper>
    )
  }
;

export default Perfil;
