import { theme } from '@styles/default.theme';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components';

export const View_Back = styled(SafeAreaView)<{ OS: string }>`
  flex: 1;
  background: ${ theme.colors.primary.BgHover };
`;

export const Status = styled(StatusBar)``;



