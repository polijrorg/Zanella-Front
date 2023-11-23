import * as S from './styles';
import React from 'react';

export type TProps = {
  title: string;
  description: string;
}; 
const Cards_Topico: React.FC<TProps> = ({ title, description }) => {

  return (
    <S.Wrapper>
      <S.Container_Forum>
        <S.Forum></S.Forum>    
        <S.Wrapper_Forum>   
          <S.Title_Forum>{title}</S.Title_Forum>
          <S.SubTitle_Forum>{description}</S.SubTitle_Forum>
        </S.Wrapper_Forum> 
      </S.Container_Forum>
    </S.Wrapper>
  )
};

export default Cards_Topico;

 
