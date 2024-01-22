import { theme } from '@styles/default.theme';
import { View, Image, TouchableOpacity, TextInput, ScrollView, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
`
export const Dot = styled(Animated.View)`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: ${ theme.colors.primary.Lime };
`
export const Icon = styled(Image)`
  width: 24px;
  height: 24px;
`