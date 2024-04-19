import * as S from './styles';
import React from 'react';
import { ActivityIndicator } from 'react-native';

export type ButtonProps = {
  text: string;
  style: string;
  onPress(): any;
  size: string;
  animating?: boolean;
  disabled?: boolean;
  isSelected?: boolean;
  setIsSelected?: React.Dispatch<React.SetStateAction<boolean>>;
}; 
const Button: React.FC<ButtonProps> = ({ text, style, onPress, size, disabled, isSelected, setIsSelected, animating }) => (
  <S.Wrapper onPress={onPress} style={style} size={size} disabled={disabled}>
      {animating ? <ActivityIndicator animating={animating} size='small' color='#FFFFFF'/> : <S.Login_Button style={style}>{text}</S.Login_Button>}
  </S.Wrapper>
);

export default Button;
