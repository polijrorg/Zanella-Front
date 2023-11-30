import { theme } from '@styles/default.theme';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import styled from 'styled-components';

export const View_Back = styled(SafeAreaView)<{ OS: string }>`
  flex: 1;
  background: ${ theme.colors.primary.BgHover };
`;

export const Status = styled(StatusBar).attrs({ 
  translucent: true,
})``;

export const BackgroundContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${ theme.colors.primary.White };
  padding: 0 32px;
`

export const Background = styled(ImageBackground)`
  flex: 1;
`


