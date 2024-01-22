import Input from '@components/Input';
import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, View, Image, TextInput, ImageBackground } from 'react-native';
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
  width: 80%;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.4px;
  font-family: Poppins;
`;

export const Wrapper_Input = styled(View)`
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
  flex-direction: column;
  gap: 16px;
`;

export const Input_Cadastro = styled(TextInput)`
  width: 80%;
  height: 48px;
  font-size: 16px;
  padding-left: 12px;
  border: 1px ${ theme.colors.primary.Borda };
  border-radius: 24px;
  color: ${ theme.colors.primary.BordaElemento };
`;

export const Wrapper_Info = styled(View)`
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 24px;
  gap: 24px;
  flex-direction: row;
`;

export const Text_HaveAccount = styled(Text)`
  color: ${ theme.colors.primary.TextoHigh };
  font-size: 14px;
  font-family: Poppins;
`;

export const Wrapper_DoLogin = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: auto;
  height: 24px;
`;

export const DoLogin = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  font-size: 16px;
  font-family: Poppins;
`; 

export const Button_continuar = styled(TouchableOpacity)`
  width: 80%;
  height: 48px;
  border-radius: 24px;
  background: ${ theme.colors.primary.BgSólidoHover };
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
