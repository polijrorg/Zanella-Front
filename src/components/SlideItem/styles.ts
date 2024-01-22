import { theme } from '@styles/default.theme';
import { View, Image, TouchableOpacity, Text, ScrollView, Animated, ImageBackground } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  width: 100%;
  align-items: center;
  width: ${ props => props.width + 'px' };
  gap: 8px;
`
export const Title = styled(Text)`
  font-size: 32px;
  font-family: Poppins;
  font-weight: 400;
  color: ${ theme.colors.primary.Texto };
`
export const Icon = styled(Image)`
  width: 64px;
  height: 64px;
`
export const Content = styled(Text)`
  font-size: 16px;
  font-family: Poppins;
  font-weight: 400;
  width: 90%;
  text-align: center;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${ theme.colors.primary.TextoHigh };
`