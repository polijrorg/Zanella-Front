import React from 'react';
import * as S from './styles';

interface UpdateAttributeProps {
  title: string;
  textValue?: string;
  onChangeText: () => void;
}

const UpdateAttribute: React.FC<UpdateAttributeProps> = ({ title, onChangeText, textValue }) => {
  return (
    <S.Container>
      <S.Title>{title + ':'}</S.Title>
      <S.Input placeholder='' onChangeText={onChangeText} />
    </S.Container>
  );
}

export default UpdateAttribute;