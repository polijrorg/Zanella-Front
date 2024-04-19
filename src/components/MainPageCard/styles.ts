import { theme } from '@styles/default.theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Assunto = styled(View)`
  width: ${ props => props.cwidth > 400 ? 176 : 140 }px;
  height: ${ props => props.cwidth > 400 ? 130 : 120 }px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 16px;
  background: ${ theme.colors.primary.BgSutil };
  elevation: 8;
`;

export const CardImage = styled(Image)`
  width: 64px;
  border-radius: 32px;
  height: 64px;
`;

export const CardTitle = styled(Text)`
  font-family: Poppins;
  color: ${ theme.colors.primary.Texto };
  font-size: ${ props => props.cwidth > 400 ? 16 : 12 }px;
  font-weight: 400;
`;


