import styled from 'styled-components/native';
import { View, Modal, TouchableOpacity, Image } from 'react-native';
import { theme } from '@styles/default.theme';

export const ModalWrapper = styled(Modal)`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  `

export const ModalContainer = styled(View)`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF30;
`;

export const CalendarContainer = styled(View)`
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 16px 0px;
  width: 321px;
  height: 296px;
  background-color: ${theme.colors.primary.BgSutil};
`
export const CloseIconWrapper = styled(View)`
  width: 100%;
  padding: 0px 16px;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
`
export const CloseIconButton = styled(TouchableOpacity)``

export const CloseIcon = styled(Image)`
  width: 24px;
  height: 24px;
`