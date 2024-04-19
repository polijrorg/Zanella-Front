import { theme } from '@styles/default.theme';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  background: ${ theme.colors.primary.BgHover };
`;

export const Wrapper_TalkButton = styled(TouchableOpacity)`
  width: 80%;
  height: ${ props => props.cwidth > 400 ? 10 : 15 }%;
  margin-top: 48px;
`

export const Wrapper_Talk = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  border: 1px ${ theme.colors.primary.BgSólido };
  background: ${ theme.colors.primary.BgTela };
  padding: 18px 16px;
  z-index: 100;
`;

export const Talk = styled(Text)`
  font-family: PoppinsSemiBold;
  color: ${ theme.colors.primary.TextoHigh };
  align-items: center;
  font-size: ${ props => props.cwidth > 400 ? 16 : 14 }px;
  letter-spacing: 0.5px;
`;

export const Nelson = styled(Image)`
  width: ${ props => props.cwidth > 400 ? 137 : 80 }px;
  height: ${ props => props.cwidth > 400 ? 137 : 80 }px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8%;
`;

export const Container = styled(ScrollView).attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 12px 0px;
  gap: ${ props => props.cwidth > 400 ? 8 : 4 }px;
  background: ${ theme.colors.primary.BgTela };
`;

export const StyledText = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  font-family: PoppinsSemiBold;
  font-size: ${ props => props.cwidth > 400 ? 16 : 12 }px;
  padding: 0px 16px;
  letter-spacing: 0.5px;
`;

export const SliderContainer = styled(View)`
  width: 100%;
  height: 150px;
  background-color: ${ theme.colors.primary.BgTela };
`;

export const Wrapper_Assunto = styled(ScrollView).attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    gap: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  width: 100%;
  flex-direction: row;
  shadow-opacity: 1;
  shadow-offset: 1px 3px;
  shadow-color: grey;
  elevation: 10;
`;

export const Button = styled(TouchableOpacity)``;
