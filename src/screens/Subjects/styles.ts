import { theme } from '@styles/default.theme';
import { Text, View, TouchableOpacity, ImageBackground, FlatList, ScrollView, Image } from 'react-native';
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
  padding: 16% 0px;
  gap: 16px;
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

export const CardButton = styled(TouchableOpacity)`
`
export const CardContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  }
})`
  width: 100%;
  height: 100%;
  flex: 1;
`
