import * as S from './styles';
import React from 'react';

export type TestProps = {
  text: string;
  onPress(): any
}; 
const Button: React.FC<TestProps> = ({ text, onPress }) => (
  <S.Wrapper onPress={onPress}>
      <S.Login_Button>{text}</S.Login_Button>
  </S.Wrapper>
);

export default Button;
