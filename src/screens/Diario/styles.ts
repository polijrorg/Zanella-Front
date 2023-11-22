import { theme } from '@styles/default.theme';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  padding: 16px;
  flex: 1;
  gap: 16px;
  align-items: center;
  background: ${ theme.colors.primary.BgTela };
`;

export const Header = styled(View)`
  flex-direction: row;
  width: 100%;
  height: 32px;
  background: ${ theme.colors.primary.BgSutil };
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
`
export const CurrentDate = styled(Text)`
  color: ${ theme.colors.primary.Texto };
  font-size: 16px;
  font-weight: 700;
`
export const CalendarButton = styled(TouchableOpacity)`
`

export const CalendarIcon = styled(Image)`
  width: 24px;
  height: 24px;
`
export const Body = styled(View)`
  border: 1px solid ${ theme.colors.primary.Grass.escura };
  flex: 1;
  justify-content: flex-start;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  width: 100%;
  padding: 16px;
  align-items: center;
  gap: 16px;
`
export const EntryTitle = styled(Text)`
  font-size: 16px; 
  font-weight: 700;
  color: ${ theme.colors.primary.Texto };
`
export const EntryContent = styled(Text)`
  font-size: 14px;
  color: ${ theme.colors.primary.TextoHigh };
`
export const EntryTitleInput = styled(TextInput).attrs({
  'placeholderTextColor': `${ theme.colors.primary.Texto }`
})`
  width: 100%;
  height: 32px;
  font-size: 16px; 
  font-weight: 700;
  color: ${ theme.colors.primary.Texto };
`
export const EntryContentInput = styled(TextInput).attrs({
  'placeholderTextColor': `${ theme.colors.primary.Texto }`
})`
  width: 100%;
  min-height: 32px;
  font-size: 14px;
  color: ${ theme.colors.primary.TextoHigh };
`
export const CreateButton = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${ theme.colors.primary.Grass.escura };
`
export const ButtonIcon = styled(Image)`
  width: 24px;
  height: 24px;
`