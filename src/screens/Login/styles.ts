import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, View, Image, ImageBackground } from 'react-native';
import styled from 'styled-components/native';


export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center; 
`;

export const Title = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  font-size: 40px;
  letter-spacing: 2px;
  font-family: PoppinsMedium;
`;

export const StyledText = styled(Text)`
  color: ${ theme.colors.primary.TextoHigh };
  margin-top: 8px;
  font-size: 32px;
  letter-spacing: 0.5px;
  font-family: Poppins;
`;

export const Text_Login = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  margin-top: 64px;
  font-size: 24px;
  letter-spacing: 0.5px;
  font-family: Poppins;
`;

export const Wrapper_Input = styled(View)`
  align-items: center;
  width: 100%;
  height: 112px;
  margin-top: 24px;
  flex-direction: column;
  gap: 16px;
  justify-content: space-around;
`;

export const Nelson = styled(Image)`
  width: 56px;
  height: 56px;
`;

export const Wrapper_Info = styled(View)`
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: 24px;
  margin-top: 32px;
  margin-bottom: 20%;
  gap: 24px;
  flex-direction: row;
`;

export const Text_DontHaveAccount = styled(Text)`
  color: ${ theme.colors.primary.TextoHigh };
  font-size: 16px;
  font-family: Poppins;
`;

export const Wrapper_Cadastro = styled(TouchableOpacity)`
  width: 104px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
`;

export const Cadastrar = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  font-size: 16px;
  font-family: Poppins;
`; 

export const Lines_Inf_Esq = styled(Image)`
  bottom: -12%;
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
