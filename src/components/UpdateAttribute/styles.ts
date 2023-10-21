import { theme } from '@styles/default.theme';
import styled from "styled-components";
import { View, TextInput, Text } from "react-native";

export const Container = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  padding: 4px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${ theme.colors.primary.Borda };
`
export const Title = styled(Text)`
  font-size: ${ theme.fontSizes.body };
  font-weight: ${ theme.fontWeights.body };
  color: ${ theme.colors.primary.TextoHigh };
`
export const Input = styled(TextInput)` 
  flex: 1;
  color: ${ theme.colors.primary.TextoHigh };
`
