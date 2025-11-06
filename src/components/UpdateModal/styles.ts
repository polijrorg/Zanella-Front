import styled from "styled-components";
import { View, Modal, TouchableOpacity, Image, Text, TextInput } from "react-native";
import { theme } from '@styles/default.theme'; 

export const ModalWrapper = styled(Modal)``

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  blur-radius: 10px;
  background-color: rgba(0,0,0,0.5);
`

export const ModalContent = styled(View)`
  width: 340px;
  height: auto;
  justify-content: space-around;
  gap: 16px;
  padding: 16px 16px;
  align-items: center; 
  background-color: ${ theme.colors.primary.BgSutil };
  border-radius: ${ theme.borderRadius.rounded };
  elevation: ${ theme.shadow.threeDP };
`
export const AtributtesWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  gap: 8px;
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
export const ContentTitle = styled(Text)`
  font-size: ${ theme.fontSizes.body };
  font-weight: ${ theme.fontWeights.body };
`
export const AtributteContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 4px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${ theme.colors.primary.Borda };
`
export const Title = styled(Text)`
  font-size: ${ theme.fontSizes.body };
  font-weight: ${ theme.fontWeights.body };
  color: ${ theme.colors.primary.TextoHigh };
`
export const Input = styled(TextInput)` 
  flex: 1;
  color: ${ theme.colors.primary.TextoHigh };
`

interface Props {
  selected?: boolean;
}

export const OptionButton = styled(TouchableOpacity)<Props>`
  padding: 10px 20px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${theme.colors.primary.Borda};
  background-color: ${({ selected }) => selected ? theme.colors.primary.BgSólidoHover : theme.colors.primary.White};
`;

export const OptionText = styled(Text)<Props>`
  font-family: Poppins;
  font-size: 12px;
  color: ${({ selected }) => selected ? "#FFF" : theme.colors.primary.Texto};
`;

export const Wrapper_Parental = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: 16px
`;