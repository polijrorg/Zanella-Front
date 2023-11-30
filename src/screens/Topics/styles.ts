import { theme } from '@styles/default.theme';
import { Text, View, TouchableOpacity, ImageBackground, FlatList, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${theme.colors.primary.BgTela};
  `;

export const Background = styled(ImageBackground)`
  flex: 1;
  justify-content: flex-start;
  gap: 32px;
  padding: 32px 0px;
  border: 1px solid red;
  width: 100%;
  align-items: center;
`

export const Title = styled(Text)`
  font-size: 24px;
  max-width: 220px;
  font-weight: 400;
  color: ${theme.colors.primary.Grass.escura};
`;

export const TopicsContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 32,
    paddingHorizontal: 20,
    flexWrap: 'wrap'
  }
})`
  width: 100%;
  border: 1px solid red;
`;

export const buttonsContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 32px;
  padding: 0px 32px;
`;
