import { theme } from '@styles/default.theme';
import { Text, View, Image, ImageBackground, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${theme.colors.primary.BgTela};
  `
export const Background = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20% 0px;
`
export const Header = styled(View)`
  width: 100%;
  padding: 0px 8px;
  flex-direction: row;
  justify-content: flex-start;  
  align-items: center;
`
export const ReturnButton = styled(TouchableOpacity)`
`
export const ReturnIcon = styled(Image)`
  width: 36px;
  height: 36px;
`
export const QuestionWrapper = styled(View)`
  flex-direction: row;
  padding: 0px 16px;
  justify-content: center;
  width: 100%;
  height: 136px;
`
export const LeftSection = styled(View)`
  flex-direction: row;
  justify-content: center;
  flex: 0.2;
  align-items: flex-end;
  height: 100%;
`
export const RightSection = styled(View)` 
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  flex: 1;
`
export const QuestionBalloon = styled(View)`
  width: 100%;
  height: 70%;
  align-items: center;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  border: 1px ${ theme.colors.primary.BgSólido };
  background: ${ theme.colors.primary.BgTela };
  padding: 18px 16px;
  z-index: 100;
`;

export const Question = styled(Text)`
  font-family: PoppinsSemiBold;
  color: ${ theme.colors.primary.TextoHigh };
  align-items: center;
  font-size: 16px;
  letter-spacing: 0.5px;
`;

export const TurtleIcon = styled(Image)`
  width: 64px;
  height: 64px;
`
export const ButtonsWrapper = styled(View)`
  width: 100%;
  align-items: center;
  gap: 16px;
`

