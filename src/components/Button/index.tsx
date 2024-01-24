import * as S from './styles';
import React from 'react';

export type ButtonProps = {
  text: string;
  style: string;
  onPress(): any;
  size: string;
  disabled?: boolean;
  isSelected?: boolean;
  setIsSelected?: React.Dispatch<React.SetStateAction<boolean>>;
}; 
const Button: React.FC<ButtonProps> = ({ text, style, onPress, size, disabled }) => (
  <S.Wrapper onPress={onPress} style={style} size={size} disabled={disabled}>
      <S.Login_Button style={style}>{text}</S.Login_Button>
  </S.Wrapper>
);

export default Button;
