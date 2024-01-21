import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, Image, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    paddingTop: 16,
  }
})`
  flex: 1;
  background-color: ${ theme.colors.primary.BgTela };
  padding: 16px;
`;

export const Header = styled(View)`
  width: 100%;
  align-items: flex-start;
`
export const GoBackButton = styled(TouchableOpacity)``

export const GoBackIcon = styled(Image)`
  width: 24px;
  height: 24px;
`
export const Title = styled(Text)`
  font-size: 16px;
  font-weight: 700;
  color: ${ theme.colors.primary.Texto };
`
export const Thumbnail = styled(Image)`
  width: 100%;
  height: 160px;
  border-radius: 32px;
`
export const Description = styled(Text)`
  font-size: 14px;
  padding: 0px 8px;
  line-height: 24px;
  font-weight: 400;
  text-align: justify;
  color: ${ theme.colors.primary.TextoHigh };
`
export const HintContainer = styled(View)`
  width: 100%;
  align-items: flex-start;
  `
export const HintWrapper = styled(View)`
  gap: 16px;
  padding: 0px 8px;
  align-items: flex-start;
`
export const HintTitle = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: ${ theme.colors.primary.Texto };
`
export const Hint = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  color: ${ theme.colors.primary.TextoHigh };
`
export const ContentWrapper = styled(View)`
  width: 100%;
  margin: 16px 0px;
  align-items: flex-start;
  gap: 16px;
`

export const Content = styled(Text)`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: ${ theme.colors.primary.TextoHigh };
`

export const KeyWordsWrapper = styled(View)`
  width: 100%;
  padding: 16px 8px;
  align-items: flex-start;
  gap: 16px;
`

export const KeyWords = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  color: ${ theme.colors.primary.TextoHigh };
`

export const Footer = styled(View)`
  width: 100%;
  height: 32px;
`