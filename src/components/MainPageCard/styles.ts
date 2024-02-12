import { theme } from '@styles/default.theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Assunto = styled(View)`
  width: 176px;
  height: 130px;
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
  font-size: 16px;
  font-weight: 400;
`;


