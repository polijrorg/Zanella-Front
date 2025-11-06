import { theme } from '@styles/default.theme';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

export const View_Back = styled(SafeAreaView)<{ OS: string }>`
  flex: 1;
  background: ${ theme.colors.primary.BgHover };
`;

export const Status = styled(StatusBar)``;



