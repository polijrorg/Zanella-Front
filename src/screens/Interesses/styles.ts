import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';


export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${ theme.colors.primary.BgTela };
`;

export const Container = styled(View)`
  align-items: center;
  justify-content: center;
  height: 71%;
`;

export const Wrapper_Topicos = styled(View)`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 144px;
  gap: 32px;
  margin-bottom: 24px;
`;

export const Lines_Sup_Esq = styled(Image)`
  top: -32%;
  left: -95%;
  position: absolute;
  width: 740px;
  height: 532px;
`;

export const StyledText = styled(Text)`
  width: 61%;
  color: ${ theme.colors.primary.Grass};
  font-size: 32px;
  letter-spacing: 0.5px;
  margin-top: 30px;
  margin-bottom: 16px;
`;

export const Lines_Inf_Dir = styled(Image)`
  bottom: -23%;
  right: -90%;
  position: absolute;
  width: 800px;
  height: 540px;
`;

export const Wrapper_Bottom = styled(View)`
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
`;

export const Wrapper_Pular = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 48px;
  background: ${ theme.colors.primary.White };
  border: 1px ${ theme.colors.primary.BgSólido };
  border-radius: 24px;
`;

export const Pular_Text = styled(Text)`
  font-size: 14px;
  color: ${ theme.colors.primary.BgSólidoHover };
  font-family: Poppins;
`; 

export const Wrapper_Continuar = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 48px;
  background: ${ theme.colors.primary.BgSólidoHover };
  border-radius: 24px;
`;

export const Continuar_Text = styled(Text)`
  font-size: 14px;
  color: ${ theme.colors.primary.White };
  font-family: Poppins;
`; 
