import React from 'react';
import * as S from './styles';

interface MainPageCardProps {
  title: string;
  image: string;
}

const MainPageCard = ({ title, image }: MainPageCardProps) => {
  return (
    <S.Assunto image={image}>
      <S.CardImage source={{ uri: image }} />
      <S.CardTitle>{title}</S.CardTitle>
    </S.Assunto>
  )
}

export default MainPageCard;