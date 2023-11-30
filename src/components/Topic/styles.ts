import { theme } from '@styles/default.theme';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)<{ selected: boolean }>`
  width: 144px;
  height: 160px;
  padding: 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 21px;  
  background-color: ${theme.colors.primary.BgElemento};
  border-radius: 16px;
  border: ${(props) => props.selected ? '2px solid #46A758' : 'none'};
`
export const Thumbnail = styled(Image)`
  width: 56px;
  height: 56px;
`
export const Title = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.primary.TextoHigh};
`;
