import * as S from './styles';
import React, { useEffect, useState, useReducer } from 'react';
import Modal from '@components/Modal'
import UpdateModal from '@components/UpdateModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuth from '@hooks/useAuth';


const Perfil = () => {

  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const { signOut, user } = useAuth();

  useEffect(() => {
    const synchronizeUser = async () => {
      const responseUser = JSON.parse(await AsyncStorage.getItem('@app:user'));

      updateUser(responseUser);
    }
    synchronizeUser();
  }, [user])
  

  const [synchronizedUser, updateUser] = useReducer((prev, next) => {
    return { ...prev, ...next };
  }, {});

  return (
      <S.Wrapper>       
        <S.LogoutButtonWrapper>
          <S.LogoutButton onPress={() => setModal(true)}>
            <S.LogoutIcon source={require('@assets/LogoutIcon.png')}/>
          </S.LogoutButton>
        </S.LogoutButtonWrapper>

        <Modal visible={modal} onRequestClose={() => setModal(false)} onConfirm={signOut} />
        <UpdateModal visible={updateModal} onRequestClose={() => setUpdateModal(false)} />

        <S.ImageGroup>
          <S.NelsonImage source={require('@assets/JabutiNelson_Esq.png')} />
          <S.UserName>{synchronizedUser.name}</S.UserName>
        </S.ImageGroup>

        <S.AttributesWrapper>
        
          <S.TitleWrapper>
            <S.InfoText>{'Informações'}</S.InfoText>
            <S.ButtonGroup onPress={() => setUpdateModal(true)}>
              <S.EditIcon source={require("@assets/EditIcon.png")}/>
              <S.EditText>{'EDITAR'}</S.EditText>
            </S.ButtonGroup>
          </S.TitleWrapper>
        
          <S.Attribute>{`Idade: ${synchronizedUser.age}`}</S.Attribute>
          <S.Attribute>{`Grau de parentesco: ${synchronizedUser.parental_role}`}</S.Attribute>
          <S.Attribute>{`Breve descrição: ${synchronizedUser.description}`}</S.Attribute>
          <S.Attribute>{`E-mail: ${synchronizedUser.email}`}</S.Attribute>
          <S.Attribute>{`Telefone: ${synchronizedUser.phone}`}</S.Attribute>
        </S.AttributesWrapper>
      </S.Wrapper>
    )
  }
;

export default Perfil;
