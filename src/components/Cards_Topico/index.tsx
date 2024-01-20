import * as S from './styles';
import React from 'react';

export type TestProps = {
  text: string;
}; 
const Cards_Topico: React.FC<TestProps> = ({ text }) => (
  <S.Wrapper >
    <S.Nelson source={require('../../../public/assets/JabutiNelson_Dir.png')}/>    
    <S.Topico>{text}</S.Topico>
  </S.Wrapper>
);

export default Cards_Topico;
