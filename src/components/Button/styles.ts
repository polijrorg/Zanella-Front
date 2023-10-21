import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(TouchableOpacity)<{ style: string, size: string }>`
  width: ${(props) => props.size === 'small' ? '128px' : props.size === 'big' ? '100%' : '80%' };
  height: 48px;
  border-radius: 24px;
  color: ${(props) => props.style === 'solido' ? theme.colors.primary.White : theme.colors.primary.BgSólidoHover };
  background: ${(props) => props.style === 'solido' ? theme.colors.primary.BgSólidoHover : theme.colors.primary.BgSutil };
  border: ${(props) => props.style === 'solido' ? 'none' : `1px solid ${ theme.colors.primary.BgSólidoHover }` };
  align-items: center;
  justify-content: center;
`;

export const Login_Button = styled(Text)`
  font-size: 14px;
  color: white;
`; 
