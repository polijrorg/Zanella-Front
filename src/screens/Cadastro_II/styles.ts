import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, View, Image, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native';
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
  gap: 24px;
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
  font-size: 40px;
  letter-spacing: 2px;
  font-family: PoppinsMedium;
`;

export const StyledText = styled(Text)`
  color: ${ theme.colors.primary.TextoHigh };
  font-size: 32px;
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

export const Input_Description = styled(TextInput)`
  justify-content: flex-start;
  width: 80%;
  height: 100px;
  font-size: 16px;
  padding-left: 12px;
  border: 1px ${ theme.colors.primary.Borda };
  border-radius: 24px;
  font-family: Poppins;
  color: ${ theme.colors.primary.BordaElemento };
`;

export const Input_Cadastro = styled(TextInput)`
  width: 80%;
  height: 42px;
  font-size: 16px;
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
  height: 42px;
  font-size: 16px;
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