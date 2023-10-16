import * as S from './styles';
import React from 'react';

export type TestProps = {
  title: string;
  subtitle: string;
}; 
const Cards_Topico: React.FC<TestProps> = ({ title, subtitle }) => (
  <S.Wrapper >
    <S.Container_Forum>
      <S.Forum></S.Forum>    
      <S.Wrapper_Forum>   
        <S.Title_Forum>{title}</S.Title_Forum>
        <S.SubTitle_Forum>{subtitle}</S.SubTitle_Forum>
      </S.Wrapper_Forum> 
    </S.Container_Forum>
  </S.Wrapper>
);

export default Cards_Topico;

 
