import { theme } from '@styles/default.theme';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import styled from 'styled-components';

export const View_Back = styled(SafeAreaView)`
  flex: 1;
  background: ${ theme.colors.primary.BgTela };
`;

export const Status = styled(StatusBar).attrs({
  barStyle: 'dark-content',
  backgroundColor: `${ theme.colors.primary.BgTela }`,
})``;

export const Background = styled(ImageBackground)`
  flex: 1;
`


