import { theme } from '@styles/default.theme';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper_Nelson = styled(View)`
  width: 80px;
  height: 80px;
  margin-top: 5%;
  border-bottom-right-radius: 40px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  background: ${ theme.colors.primary.BgHover };
  align-items: center;
  justify-content: center;
`;

export const Nelson = styled(Image)`
  width: 56px;
  height: 56px;
`;
