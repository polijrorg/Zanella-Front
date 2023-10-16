import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Cards_Topico from '@components/Cards_Topico';


const Interesses = ({navigation}) => (
    
  <S.Wrapper>
    <S.Lines_Sup_Esq source={require('../../../public/assets/Lines_Sup_Es.png')}/>
    <StatusBar style="dark" />
    <S.StyledText>Quais tópicos te interessam mais?</S.StyledText>
    <S.Lines_Inf_Dir source={require('../../../public/assets/Lines_Inf_Dir.png')}/>

    <S.Container>
      <S.Wrapper_Topicos>
        <Cards_Topico text={'Tópico A'} />
        <Cards_Topico text={'Tópico B'} />
      </S.Wrapper_Topicos>
      <S.Wrapper_Topicos>
        <Cards_Topico text={'Tópico C'} />
        <Cards_Topico text={'Tópico D'} />
      </S.Wrapper_Topicos>
      <S.Wrapper_Topicos>
        <Cards_Topico text={'Tópico E'} />
        <Cards_Topico text={'Tópico F'} />
      </S.Wrapper_Topicos>
    </S.Container>

    <S.Wrapper_Bottom>
      <S.Wrapper_Pular>
        <S.Pular_Text>PULAR</S.Pular_Text>
      </S.Wrapper_Pular>
      <S.Wrapper_Continuar>
        <S.Continuar_Text>CONTINUAR</S.Continuar_Text>
      </S.Wrapper_Continuar>
    </S.Wrapper_Bottom>
  </S.Wrapper>
);

export default Interesses;
