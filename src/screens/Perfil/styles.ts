import { theme } from '@styles/default.theme';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  padding-top: 20px; 
  background-color: ${theme.colors.primary.White};
`;

export const ImageGroup = styled(View)`
  justify-content: space-between;
  align-items: center; 
  height: ${props => props.cwidth > 400 ? 128 : 100}px;
`

export const NelsonImage = styled(Image)`
  width: ${props => props.cwidth > 400 ? 88 : 70}px;
  height: ${props => props.cwidth > 400 ? 88 : 70}px;
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
export const LogoutButtonWrapper = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 16px;
  width: 100%;
`
export const LogoutButton = styled(TouchableOpacity)`
`
export const LogoutIcon= styled(Image)`
  width: 32px;
  height: 32px;
`
export const TitleWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  `
export const InfoText = styled(Text)`
  font-size: ${theme.fontSizes.body};
  color: ${theme.colors.primary.TextoHigh};
  font-weight: ${theme.fontWeights.body};
`
export const ButtonGroup = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`

export const EditIcon = styled(Image)`
  width: 20px;
  height: 20px;
`
export const EditText = styled(Text)`
  color: ${theme.colors.primary.TextoHigh};
  font-size: ${props => props.cwidth > 400 ? theme.fontSizes.body : '14px'};
  font-weight: ${theme.fontWeights.body};
`