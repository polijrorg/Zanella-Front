import { theme } from '@styles/default.theme';
import { View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  background: ${ theme.colors.primary.BgTela };
`;

export const CardButton = styled(TouchableOpacity)`
`
export const HeaderGap = styled(View)`
  width: 100%;
`
export const Container = styled(ScrollView).attrs({
  contentContainerStyle: {
    alignItems: 'center',
    gap: 24,
  }
})`
  width: 90%;
  height: 100%;
`;

export const Search_Wrapper = styled(View)`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 36px;
  border-radius: 24px;
  border: 1px ${ theme.colors.primary.Borda };
  color: ${ theme.colors.primary.BordaElemento };
`;

export const Search = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 8%;
  height: 36px;
  margin-left: 12px;
  margin-right: 8px;
`;

export const Search_Icon = styled(Image)`
  align-items: center;
  width: 24px;
  height: 24px;
`;

export const Search_Input = styled(TextInput)`
  align-items: center;
  width: 70%;
  height: 36px;
  font-size: 18px;
  font-family:Poppins;
`;