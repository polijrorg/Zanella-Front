import * as S from './styles';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import NavBar from '@components/NavBar_Home';

const Main = () => (
  
  <S.Wrapper>
    <StatusBar style="dark" />
    <S.Wrapper_Talk>
      <S.Talk>Oi Zanella! Estou aqui se quiser ajuda!</S.Talk>
    </S.Wrapper_Talk>
    <S.Nelson source={require('../../../public/assets/JabutiNelson_Esq.png')}/>
    <S.Container>
      <S.StyledText>Para você...</S.StyledText>
      <S.Wrapper_Assunto>
        <S.Assunto></S.Assunto>
        <S.Assunto></S.Assunto>
      </S.Wrapper_Assunto>
      <S.StyledText>Assuntos recomendados</S.StyledText>
      <S.Wrapper_Assunto>
      <S.Assunto></S.Assunto>
      <S.Assunto></S.Assunto>
      </S.Wrapper_Assunto>
    </S.Container>
    <NavBar />
  </S.Wrapper>
);

export default Main;