import * as S from './styles';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import NavBar from '@components/NavBar_Diario';
import HeadBar from '@components/Nelson_Question';


const Diario = ({navigation}) => (
  
  <S.Wrapper>
    <HeadBar Profilename={'Zanella'} />
    <NavBar />
  </S.Wrapper>
);

export default Diario;
