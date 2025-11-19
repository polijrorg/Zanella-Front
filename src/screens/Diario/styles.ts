import { theme } from '@styles/default.theme';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  padding: 16px;
  background: ${theme.colors.primary.BgTela};
  align-items: center;
`;

export const Header = styled(View)`
  flex-direction: row;
  width: 100%;
  max-width: 600px;
  height: auto;
  padding: 8px 16px;
  background: ${theme.colors.primary.BgSutil};
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
`;

export const CurrentDate = styled(Text)`
  color: ${theme.colors.primary.Texto};
  font-size: 18px;
  font-weight: 700;
`;

export const ButtonsContainer = styled(View)`
  flex-direction: row;
  gap: 12px;
`;

export const CalendarButton = styled(TouchableOpacity)`
  padding: 6px;
`;

export const EditButton = styled(TouchableOpacity)`
  padding: 6px;
`;

export const DeleteButton = styled(TouchableOpacity)`
  padding: 6px;
`;

export const CalendarIcon = styled(Image)`
  width: 26px;
  height: 26px;
`;

export const EditIcon = styled(Image)`
  width: 28px;
  height: 28px;
  padding: 4px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.mode === 'editing'
      ? theme.colors.primary.Grass.escura
      : theme.colors.primary.BgTela};
`;

export const DeleteIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const Body = styled(View)`
  flex: 1;
  width: 100%;
  max-width: 600px;
  padding: 16px;
  border: 1px solid ${theme.colors.primary.Grass.escura};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background: ${theme.colors.primary.BgTela};
  gap: 20px;
`;

/* ====== Conteúdo de leitura ====== */

export const EntryTitle = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.primary.Texto};
  flex-shrink: 1;
`;

export const EntryContent = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.primary.Texto};
  flex-shrink: 1;
`;

/* ====== Inputs ====== */

export const EntryTitleInput = styled(TextInput).attrs({
  placeholderTextColor: theme.colors.primary.Texto,
})`
  width: 100%;
  min-height: 40px;
  padding: 6px 4px;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.primary.Texto};
  border-radius: 8px;
`;

export const EntryContentInput = styled(TextInput).attrs({
  placeholderTextColor: theme.colors.primary.TextoHigh,
})`
  width: 100%;
  min-height: 120px;
  max-height: 300px;
  padding: 10px 6px;
  font-size: 16px;
  color: ${theme.colors.primary.TextoHigh};
  border-radius: 8px;
  text-align-vertical: top;
`;

/* Criar botão */
export const CreateButton = styled(TouchableOpacity)`
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${theme.colors.primary.Grass.escura};
`;

export const ButtonIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.primary.TextoHigh};
  margin-bottom: 12px;
  text-align: center;
`;
