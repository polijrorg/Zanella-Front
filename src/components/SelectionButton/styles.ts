import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled(TouchableOpacity)`
  width: 80%;
  height: 36px;
  border-radius: 24px;
  background: ${ theme.colors.primary.BgSutil };
  align-items: flex-start;
  justify-content: center;
  padding: 0 12px;
  border: ${(props) => props.isSelected ? '1px solid #46A758' : `1px solid ${ theme.colors.primary.Borda }`};
`

export const ButtonText = styled(Text)`
  font-size: 14px;
  color: ${ theme.colors.primary.Texto };
`