import { theme } from '@styles/default.theme';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  background: ${ theme.colors.primary.BgTela };
`;
