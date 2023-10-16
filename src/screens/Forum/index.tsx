import * as S from './styles';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import NavBar from '@components/NavBar_Forum';
import HeadBar from '@components/Nelson_Question';
import Cards_Forum from '@components/Cards_Forum';
import axios from 'axios';
import { Keyboard } from 'react-native';

const Forum = () => {
  
  const [searchtext, setSearchtext] = useState("");

  const [data, setData] = useState([]);

  const request = async () => {
    Keyboard.dismiss()

    try {
      const product = axios.get("")
    } catch (e) {

    }
  };

  return(
  <S.Wrapper>
    <StatusBar style="dark" />
    <S.Container>
      <S.Search_Wrapper>
        <S.Search><S.Search_Icon source={require('../../../public/assets/SearchIcon.png')}/></S.Search>
        <S.Search_Input 
        placeholder='O que você quer descobrir?' 
        placeholderTextColor="#FFB381" 
        value={searchtext}
        onChangeText={(value) => setSearchtext(value)}
        />
      </S.Search_Wrapper>
      <Cards_Forum title={'Título do Fórum'} subtitle='Descrição do Fórum' />
      <Cards_Forum title={'Título do Fórum'} subtitle='Descrição do Fórum' />
      <Cards_Forum title={'Título do Fórum'} subtitle='Descrição do Fórum' />
      <Cards_Forum title={'Título do Fórum'} subtitle='Descrição do Fórum' />
      <Cards_Forum title={'Título do Fórum'} subtitle='Descrição do Fórum' />
    </S.Container>
    <HeadBar Profilename='Zanella'/>
    <NavBar />
  </S.Wrapper>
)
};

export default Forum;
