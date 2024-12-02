import { theme } from '@styles/default.theme';
import { View, Image, TouchableOpacity, TextInput, ScrollView, Animated, ImageBackground, FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${ theme.colors.primary.BgTela };
`
export const Background = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;
`
export const TurtleIcon = styled(Image)`
  width: 160px;
  height: 160px;
  border-end-end-radius:50%;
  border-top-right-radius:20%;
`
export const SlidesContainer = styled(View)`
  width: 100%;
  height: 350px;
  justify-content: center;
  align-items: center;
`

export const Slides = styled(FlatList).attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
  }
})``;
