import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, View, Image, TextInput, ImageBackground, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${ theme.colors.primary.Background };
`;

export const background = styled(ImageBackground)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20% 0;
  gap: ${props => props.cwidth > 400 ? 32 : 24}px;
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
  font-family: PoppinsMedium;
`;

export const StyledText = styled(Text)`
  color: ${ theme.colors.primary.TextoHigh };
  font-size: ${props => props.cwidth > 400 ? 32 : 20}px;
  letter-spacing: 0.5px;
  font-family: Poppins;
`;

export const KeyboardWrapper = styled(KeyboardAvoidingView)`
  width: 100%;
`;

export const Wrapper_Input = styled(View)`
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  background-color: ${ theme.colors.primary.BgTela };
`;

export const Input_Cadastro = styled(TextInput)`
  width: 80%;
  height: ${props => props.cwidth > 400 ? 48 : 32}px;
  font-size: ${props => props.cwidth > 400 ? 16 : 14}px;
  padding: 0px 12px;
  border: 1px ${ theme.colors.primary.Borda };
  border-radius: 24px;
  font-family: Poppins;
  color: ${ theme.colors.primary.BordaElemento };
`;

export const Input_Password_Wrapper = styled(View)`
  position: relative;
  width: 80%;
`

export const Input_Password = styled(TextInput)`
  position: relative;
  width: 100%;
  height: ${props => props.cwidth > 400 ? 42 : 32}px;
  font-size: ${props => props.cwidth > 400 ? 16 : 14}px;
  padding: 0px 12px;
  border: 1px ${ theme.colors.primary.Borda };
  border-radius: 24px;
  font-family: Poppins;
  color: ${ theme.colors.primary.BordaElemento };
`;

export const Input_Password_Icon_Button = styled(TouchableOpacity)`
  position: absolute;
  right: 12px;
  width: 24px;
  height: 42px;
  justify-content: center;
`

export const Input_Password_Icon = styled(Image)`
  width: 24px;
  height: 24px;
`;