import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

interface IWrapperProps {
  style: string;
  size: string;
  disabled?: boolean;
}

export const Wrapper = styled(TouchableOpacity)<IWrapperProps>`
  width: ${(props) => props.size === 'small' ? '128px' : props.size === 'big' ? '100%' : '80%' };
  height: ${props => props.cwidth > 400 ? 48 : 40 }px;
  border-radius: 24px;
  background: ${(props) => props.style === 'solido' ? theme.colors.primary.BgSólidoHover : theme.colors.primary.BgSutil };
  border: ${(props) => props.style === 'solido' ? 'none' : `1px solid ${ theme.colors.primary.BgSólidoHover }` };
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.disabled ? 0.6 : 1 };
`;

export const Login_Button = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.style === 'solido' ? theme.colors.primary.White : theme.colors.primary.BgSólidoHover };
`; 

interface IAnimatingProps {
  animating: boolean;
}

export const ButtonActivityIndicator = styled(ActivityIndicator).attrs<IAnimatingProps>(
  ({ animating }) => (animating ? true  : false)
)`
  color: ${ theme.colors.primary.White };
`