import React from 'react';
import * as S from './styles';

interface PaginationIconProps {
  active: boolean;
}

const PaginationIcon: React.FC<PaginationIconProps> = ({ active }) => {
  return (
    <S.Container>
      {active ? <S.Icon source={require('@assets/JabutiNelson_Dir.png')} /> : <S.Dot />}
    </S.Container>
  )
}

export default PaginationIcon;