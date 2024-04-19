import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, TextInput, View, Image, ImageBackground, KeyboardAvoidingView } from 'react-native';
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
`

export const Title = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  font-size: ${props => props.width > 400 ? 48 : 32}px;
  text-align: center;
`;

export const StyledText = styled(Text)`
  color: ${ theme.colors.primary.TextoHigh };
  margin-top: 8px;
  font-size: ${props => props.width > 400 ? 32 : 20}px;
  letter-spacing: 0.5px;
  font-family: Poppins;
`;

export const Text_Login = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  margin-top: 5%;
  font-size: ${props => props.width > 400 ? 24 : 16}px;
  letter-spacing: 0.5px;
  font-family: Poppins;
  text-align: center;
`;

export const KeyboardWrapper = styled(KeyboardAvoidingView)`
  width: 100%;
`;

export const Wrapper_Input = styled(View)`
  align-items: center;
  width: 100%;
  height: 104px;
  margin-top: 5%;
  flex-direction: column;
  gap: 16px;
  justify-content: space-around;
  background-color: #FEFCFBEE;
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

export const Nelson = styled(Image)`
  width: 56px;
  height: 56px;
`;

export const Wrapper_Info = styled(View)`
  width: 80%;
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: 10%;
`;

export const Text_DontHaveAccount = styled(Text)`
  flex: 1;
  color: ${ theme.colors.primary.TextoHigh };
  font-size: ${props => props.width > 400 ? 16 : 12}px;
  font-family: Poppins;
`;

export const Wrapper_Cadastro = styled(TouchableOpacity)`
  flex: 0.45;
`;

export const Cadastrar = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  font-size:  ${props => props.width > 400 ? 16 : 12}px;
  font-family: Poppins;
`; 

