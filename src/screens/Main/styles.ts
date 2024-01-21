import { theme } from '@styles/default.theme';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  background: ${ theme.colors.primary.BgHover };
`;

export const Wrapper_TalkButton = styled(TouchableOpacity)`
  width: 70%;
  height: 11%;
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
  font-size: 16px;
  letter-spacing: 0.5px;
`;

export const Nelson = styled(Image)`
  width: 137px;
  height: 136px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8%;
`;

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background: ${ theme.colors.primary.BgTela };
`;

export const StyledText = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  font-family: PoppinsSemiBold;
  margin-top: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  letter-spacing: 0.5px;
  padding-left: 16px;
  padding-top: 20px;
`;

export const Wrapper_Assunto = styled(View)`
  width: 100%;
  height: 120px;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  gap: 16px;
  shadow-opacity: 1;
  shadow-offset: 1px 3px;
  shadow-color: grey;
  elevation: 10;
`;

export const Assunto = styled(View)`
  width: 45%;
  height: 100%;
  align-items: center;
  border-radius: 16px;
  background: ${ theme.colors.primary.BgSutil };
`;
