import { theme } from '@styles/default.theme';
import { Text, View, SafeAreaView, Image } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  padding-top: 120px; 
  background-color: ${theme.colors.primary.White};
`;

export const ImageGroup = styled(View)`
  justify-content: space-between;
  align-items: center; 
  height: 128px;
`

export const NelsonImage = styled(Image)`
  width: 88px;
  height: 88px;
`
export const UserName = styled(Text)`
  color: ${theme.colors.primary.Texto};
  font-size: ${theme.fontSizes.subtitle};
  font-weight: ${theme.fontWeights.subtitle};
`
export const Attribute = styled(Text)`
  color: ${theme.colors.primary.TextoHigh};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.body};
`
export const AttributesWrapper = styled(View)`
  justify-content: center;
  align-items: flex-start;
  width: 100%;  
  padding: 0 16px;
  gap: 4px;
`

