import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, Image } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(TouchableOpacity)`
  width: 40%;
  height: 144px;
  border-radius: 24px;
  background: ${ theme.colors.primary.BgElemento };
  align-items: center;
  gap: 20px;
`;

export const Nelson = styled(Image)`
  width: 56px;
  height: 56px;
  margin-top: 16px;
`;

export const Topico = styled(Text)`
  font-size: 18px;
  color: ${ theme.colors.primary.TextoHigh };;
`; 

