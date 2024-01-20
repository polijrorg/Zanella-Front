import * as S from './styles';
import React from 'react';

export type ButtonProps = {
  text: string;
  style: string;
  onPress(): any;
  size: string;
  disabled?: boolean;
}; 
const Button: React.FC<ButtonProps> = ({ text, style, onPress, size, disabled }) => (
  <S.Wrapper onPress={onPress} style={style} size={size} disabled={disabled}>
      <S.Login_Button>{text}</S.Login_Button>
  </S.Wrapper>
);

export default Button;
