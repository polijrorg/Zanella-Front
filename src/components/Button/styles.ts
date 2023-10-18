import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(TouchableOpacity)`
  width: 80%;
  height: 48px;
  border-radius: 24px;
  background: ${ theme.colors.primary.BgSólidoHover };
  align-items: center;
  justify-content: center;
`;

export const Login_Button = styled(Text)`
  font-size: 14px;
  color: white;
  font-family: PoppinsSemiBold;
`; 
