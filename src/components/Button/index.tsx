import * as S from './styles';
import React from 'react';

export type ButtonProps = {
  text: string;
  style: string;
  onPress(): any;
  size: string;
}; 
const Button: React.FC<ButtonProps> = ({ text, style, onPress, size }) => (
  <S.Wrapper onPress={onPress} style={style} size={size}>
      <S.Login_Button>{text}</S.Login_Button>
  </S.Wrapper>
);

export default Button;
