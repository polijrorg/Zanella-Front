import * as S from './styles';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import NavBar from '@components/NavBar_Perfil';
import HeadBar from '@components/Nelson_Question';


const Perfil = ({navigation}) => (
  
  <S.Wrapper>
    <StatusBar style="dark" />
    <HeadBar Profilename={'Zanella'}/>
    <NavBar />
  </S.Wrapper>
);

export default Perfil;
