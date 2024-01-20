import { theme } from '@styles/default.theme';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';


export const Input = styled(TextInput)`
  width: 80%;
  height: 40px;
  border-radius: 36px;
  border: 1px ${ theme.colors.primary.Borda } ;
  color: ${ theme.colors.primary.BordaElemento };
  padding-left: 12px;
`;
