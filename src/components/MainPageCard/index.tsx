import React from 'react';
import * as S from './styles';
import { useWindowDimensions } from 'react-native';

interface MainPageCardProps {
  title: string;
  image: string;
}

const cleanUrl = (url: string) =>
  url.trim().replace(/^"|"$/g, "");

const MainPageCard = ({ title, image }: MainPageCardProps) => {
  const { width } = useWindowDimensions();
  
  return (
    <S.Assunto cwidth={width}>
      <S.CardImage 
        source={{ uri: cleanUrl(image) }} 
        contentFit="cover" 
      />
      <S.CardTitle cwidth={width}>{title}</S.CardTitle>
    </S.Assunto>
  );
};

export default MainPageCard;