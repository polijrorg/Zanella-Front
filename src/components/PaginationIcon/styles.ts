import { theme } from '@styles/default.theme';
import { View, Image, TouchableOpacity, TextInput, ScrollView, Animated, ImageBackground, FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`
export const Dot = styled(View)`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: ${ theme.colors.primary.Lime };
`
export const Icon = styled(Image)`
  width: 24px;
  height: 24px;
`