import Input from '@components/Input';
import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, View, Image, TextInput, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${ theme.colors.primary.White };
`;

export const Background = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: ${props => props.cwidth > 400 ? 24 : 12}px;
`
export const Header = styled(View)`
  width: 100%;
  gap: 16px;
  justify-content: center;
  align-items: center;
`
export const Ballon = styled(View)`
  width: 80px;
  height: 80px;
  border-bottom-right-radius: 40px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  background: ${ theme.colors.primary.BgHover };
  align-items: center;
  justify-content: center;
`
export const BallonImage = styled(Image)`
  width: 56px;
  height: 56px;
`

export const Title = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  font-size: ${props => props.cwidth > 400 ? 40 : 24}px;
  letter-spacing: 2px;
  text-align: center;
  font-family: PoppinsMedium;
`;

export const StyledText = styled(Text)`
  color: ${ theme.colors.primary.TextoHigh };
  width: 70%;
  font-size: ${props => props.cwidth > 400 ? 24 : 16}px;
  text-align: center;
  letter-spacing: 0.4px;
  font-family: Poppins;
`;

export const KeyboardWrapper = styled(KeyboardAvoidingView)`
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const Wrapper_Input = styled(View)`
  align-items: center;
  width: ${Platform.OS === 'ios' ? 100 : 80}%;
  gap: 16px;
  background-color: ${ theme.colors.primary.BgTela };
`;

export const Input_Cadastro = styled(TextInput)`
  min-width: 100%;
  height: ${props => props.cwidth > 400 ? 48 : 32}px;
  font-size: ${props => props.cwidth > 400 ? 16 : 14}px;
  padding-left: 12px;
  border: 1px ${ theme.colors.primary.Borda };
  border-radius: 24px;
  color: ${ theme.colors.primary.BordaElemento };
`;

export const Wrapper_Info = styled(View)`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 24px;
  gap: 32px;
`;

export const Text_HaveAccount = styled(Text)`
  color: ${ theme.colors.primary.TextoHigh };
  font-size: ${props => props.cwidth > 400 ? 16 : 14}px;
  font-family: Poppins;
`;

export const Wrapper_DoLogin = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: auto;
`;

export const DoLogin = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  font-size: ${props => props.cwidth > 400 ? 16 : 14}px;
  font-family: Poppins;
`; 

export const Button_continuar = styled(TouchableOpacity)`
  width: 80%;
  height: 48px;
  border-radius: 24px;
  background: ${ theme.colors.primary.BgSólidoHover };
  opacity: ${ props => props.disabled ? 0.5 : 1 };
  align-items: center;
  justify-content: center;
`;

export const Login_Button = styled(Text)`
  font-size: 14px;
  color: white;
  font-family: PoppinsSemiBold;
`; 

export const Lines_Inf_Esq = styled(Image)`
  bottom: -14%;
  left: -95%;
  position: absolute;
  width: 740px;
  height: 532px;
`;

export const Lines_Inf_Dir = styled(Image)`
  bottom: -16%;
  right: -90%;
  position: absolute;
  width: 800px;
  height: 540px;
`;
