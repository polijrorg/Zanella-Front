import * as S from './styles';
import React, { useEffect, useState, useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import NavBar from '@components/NavBar_Perfil';
import HeadBar from '@components/Nelson_Question';
import Modal from '@components/Modal'
import { api } from '@services/api';
import User from '@interfaces/User';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Perfil = ({navigation}) => {

  const [modal, setModal] = useState(false);

  const getUser = async(): Promise<User> => {
    const user: User = {
      id: await AsyncStorage.getItem('@app:userId'),
      name: await AsyncStorage.getItem('@app:userName'),
      age: await AsyncStorage.getItem('@app:userAge'),
      parental_role: await AsyncStorage.getItem('@app:userRole'),
      description: await AsyncStorage.getItem('@app:userDescription'),
      phone: await AsyncStorage.getItem('@app:userPhone'),
      email: await AsyncStorage.getItem('@app:userEmail'),
      topics: await AsyncStorage.getItem('@app:topics'),
    }

    return user;
  }

  const update = async (user: User): Promise<User> => {
    try {
      const response = await api.patch('/users/', user);
      
      await AsyncStorage.setItem('@app:userName', response.data.name);
      await AsyncStorage.setItem('@app:userAge', response.data.age);
      await AsyncStorage.setItem('@app:userRole', response.data.parental_role);
      await AsyncStorage.setItem('@app:userDescription', response.data.description || "null");
      await AsyncStorage.setItem('@app:userPhone', response.data.phone || "null");
      await AsyncStorage.setItem('@app:userEmail', response.data.email);

      const updatedUser: User = {
        name: response.data.name,
        age: response.data.age,
        parental_role: response.data.parental_role,
        description: response.data.description,
        phone: response.data.phone,
        email: response.data.email,
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
  
  const Logout = async () => {
    try {
      await AsyncStorage.removeItem('@app:token');
      await AsyncStorage.removeItem('@app:userId');
      navigation.navigate('login')
    } catch (error) {
      console.log(error);
    }
  }

  return (
      <S.Wrapper>
        <HeadBar Profilename={SynchronizedUser.name}/>
        
        <S.LogoutButtonWrapper>
          <S.LogoutButton onPress={() => setModal(true)}>
            <S.LogoutIcon source={require('@assets/LogoutIcon.png')}/>
          </S.LogoutButton>
        </S.LogoutButtonWrapper>

        <Modal visible={modal} onRequestClose={() => setModal(false)} onConfirm={Logout} />

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
