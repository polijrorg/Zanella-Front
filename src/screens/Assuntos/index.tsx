import * as S from './styles';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Cards_Assunto from '@components/Cards_Assunto';

const Assunto = () => {
  
  const [searchtext, setSearchtext] = useState("");

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
      <Cards_Assunto title={'Título do Assunto'} subtitle='Descrição do Assunto' />
      <Cards_Assunto title={'Título do Assunto'} subtitle='Descrição do Assunto' />
      <Cards_Assunto title={'Título do Assunto'} subtitle='Descrição do Assunto' />
      <Cards_Assunto title={'Título do Assunto'} subtitle='Descrição do Assunto' />
      <Cards_Assunto title={'Título do Assunto'} subtitle='Descrição do Assunto' />
    </S.Container>
  </S.Wrapper>
)
};

export default Assunto;