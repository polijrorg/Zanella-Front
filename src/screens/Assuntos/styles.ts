import { theme } from '@styles/default.theme';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  background: ${ theme.colors.primary.BgTela };
`;

export const Container = styled(View)`
  align-items: center;
  margin-top: 80px;
  width: 90%;
  height: 100%;
  gap: 24px;
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