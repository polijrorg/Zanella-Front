import Input from '@components/Input';
import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${ theme.colors.primary.BgTela };
`;

export const Lines_Sup_Esq = styled(Image)`
  top: -28%;
  left: -80%;
  position: absolute;
  width: 740px;
  height: 532px;
`;

export const Lines_Sup_Dir = styled(Image)`
  top: -29%;
  right: -60%;
  position: absolute;
  width: 728px;
  height: 532px;
`;

export const Title = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  font-size: 40px;
  position: absolute;
  top: 8%;
  letter-spacing: 2px;
  font-family: PoppinsMedium;
`;

export const Container = styled(View)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 0px;
  flex-direction: column;
  padding: 16px;
`;

export const StyledText = styled(Text)`
  color: ${ theme.colors.primary.TextoHigh };
  margin-top: 8px;
  font-size: 32px;
  letter-spacing: 0.5px;
  font-family: Poppins;
`;

export const Wrapper_Input = styled(View)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin-top: 30%;
  margin-bottom: 45%;
  flex-direction: column;
  gap: 16px;
`;

export const Input_Description = styled(TextInput)`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  height: 100px;
  font-size: 16px;
  padding-left: 12px;
  margin-top: 12%;
  border: 1px ${ theme.colors.primary.Borda };
  border-radius: 24px;
  font-family: Poppins;
  color: ${ theme.colors.primary.BordaElemento };
`;

export const Input_Cadastro = styled(TextInput)`
  width: 80%;
  height: 42px;
  font-size: 16px;
  padding-left: 12px;
  border: 1px ${ theme.colors.primary.Borda };
  border-radius: 24px;
  font-family: Poppins;
  color: ${ theme.colors.primary.BordaElemento };
`;

export const Lines_Inf_Esq = styled(Image)`
  bottom: -12%;
  left: -90%;
  position: absolute;
  width: 740px;
  height: 532px;
`;

export const Lines_Inf_Dir = styled(Image)`
  bottom: -17%;
  right: -95%;
  position: absolute;
  width: 900px;
  height: 540px;
`;
