import * as S from './styles';
import React from 'react';

export type TestProps = {
  title: string;
  subtitle: string;
  commentCount?: number;
}; 
const Cards_Topico: React.FC<TestProps> = ({ title, subtitle, commentCount }) => (
  <S.Wrapper >
    <S.Container_Forum>
      <S.Forum></S.Forum>    
      <S.Wrapper_Forum>   
        <S.Title_Forum>{title}</S.Title_Forum>
        <S.SubTitle_Forum>{subtitle}</S.SubTitle_Forum>
      </S.Wrapper_Forum> 
    </S.Container_Forum>
    <S.Wrapper_Coment>
      <S.Coment_Imag source={require('../../../public/assets/Icom_Coment.png')}/>
      <S.Num_Coment>{commentCount !== undefined ? `${commentCount} comentários` : '0 comentários'}</S.Num_Coment>
    </S.Wrapper_Coment>
  </S.Wrapper>
);

export default Cards_Topico;
