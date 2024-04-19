import React from 'react';
import * as S from './styles';
import { useWindowDimensions } from 'react-native';

interface MainPageCardProps {
  title: string;
  image: string;
}

const MainPageCard = ({ title, image }: MainPageCardProps) => {
  const { width } = useWindowDimensions();
  return (
    <S.Assunto cwidth={width} image={image}>
      <S.CardImage source={{ uri: image }} />
      <S.CardTitle cwidth={width}>{title}</S.CardTitle>
    </S.Assunto>
  )
}

export default MainPageCard;