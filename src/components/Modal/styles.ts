import styled from 'styled-components';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import { theme } from '@styles/default.theme';

export const ModalWrapper = styled(Modal)``

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF50};
`

export const ModalContent = styled(View)`
  width: 320px;
  height: 152px;
  align-items: center;
  justify-content: space-around;
  padding: 0px 16px;
  background-color: ${ theme.colors.primary.BgSutil };
  border-radius: ${ theme.borderRadius.rounded };
  elevation: ${ theme.shadow.threeDP };
`

export const ButtonsWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`
export const textContent = styled(Text)`
  font-size: ${ theme.fontSizes.body };
  font-weight: ${ theme.fontWeights.body };
`
export const CloseButtonWrapper = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`
export const CloseButton = styled(TouchableOpacity)`

`
export const CloseIcon = styled(Image)`
  width: 24px;
  height: 24px;
`
