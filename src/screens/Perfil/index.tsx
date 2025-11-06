/* eslint-disable @typescript-eslint/no-require-imports */
import * as S from './styles';
import React, { useEffect, useState, useReducer } from 'react';
import LogoutModal from '@components/LogoutModal';
import UpdateModal from '@components/UpdateModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuth from '@hooks/useAuth';
import { useWindowDimensions } from 'react-native';
import Nelson from '@assets/JabutiNelson_GramaFundo.jpg';

const Perfil = () => {
  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const { signOut, user } = useAuth();
  const { width } = useWindowDimensions();

  const [synchronizedUser, updateUser] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    {}
  );

  useEffect(() => {
    const synchronizeUser = async () => {
      const responseUser = await AsyncStorage.getItem('@app:user');
      if (responseUser) updateUser(JSON.parse(responseUser));
    };
    synchronizeUser();
  }, [user]);

  return (
    <S.Wrapper>
      <S.LogoutButtonWrapper>
        <S.LogoutButton onPress={() => setModal(true)}>
          <S.LogoutIcon source={require('@assets/LogoutIcon.png')} />
        </S.LogoutButton>
      </S.LogoutButtonWrapper>

      <LogoutModal
        visible={modal}
        onRequestClose={() => setModal(false)}
        onConfirm={signOut}
      />

      <UpdateModal
        visible={updateModal}
        onRequestClose={() => setUpdateModal(false)}
      />

      <S.ImageGroup>
        <S.NelsonImage source={Nelson} />
        <S.UserName>{synchronizedUser.name}</S.UserName>
      </S.ImageGroup>

      <S.AttributesWrapper>
        <S.TitleWrapper>
          <S.InfoText>Informações</S.InfoText>
          <S.ButtonGroup onPress={() => setUpdateModal(true)}>
            <S.EditIcon source={require('@assets/EditIcon.png')} />
            <S.EditText cwidth={width}>EDITAR</S.EditText>
          </S.ButtonGroup>
        </S.TitleWrapper>

        <S.Attribute>{`Idade: ${synchronizedUser.age || 'Não informada'}`}</S.Attribute>
        <S.Attribute>{`Grau de parentesco: ${synchronizedUser.parental_role || 'Não informado'}`}</S.Attribute>
        <S.Attribute>{`E-mail: ${synchronizedUser.email || 'Não informado'}`}</S.Attribute>
        <S.Attribute>{`Telefone: ${synchronizedUser.phone || 'Não informado'}`}</S.Attribute>
      </S.AttributesWrapper>
    </S.Wrapper>
  );
};

export default Perfil;
