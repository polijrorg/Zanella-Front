import * as S from './styles';
import React, { useEffect, useState, useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import NavBar from '@components/NavBar_Perfil';
import HeadBar from '@components/Nelson_Question';
import Modal from '@components/Modal'
import UpdateModal from '@components/UpdateModal';
import { api } from '@services/api';
import User from '@interfaces/User';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Perfil = ({navigation}) => {

  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

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

  useEffect(() => {
    const synchronizeUser = async () => {
      const responseUser = await getUser();

      updateUser(responseUser);
    }
    synchronizeUser();
  }, [AsyncStorage, []])
  

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
        <UpdateModal visible={updateModal} onRequestClose={() => setUpdateModal(false)} />

        <S.ImageGroup>
          <S.NelsonImage source={require('@assets/JabutiNelson_Esq.png')} />
          <S.UserName>{SynchronizedUser.name}</S.UserName>
        </S.ImageGroup>

        <S.AttributesWrapper>
        
          <S.TitleWrapper>
            <S.InfoText>{'Informações'}</S.InfoText>
            <S.ButtonGroup onPress={() => setUpdateModal(true)}>
              <S.EditIcon source={require("@assets/EditIcon.png")}/>
              <S.EditText>{'EDITAR'}</S.EditText>
            </S.ButtonGroup>
          </S.TitleWrapper>
        
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
