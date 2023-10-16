import { theme } from '@styles/default.theme';
import { TouchableOpacity, Image, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  width: 100%;
  height: 8%;
  position: absolute;
  bottom: 0%;
  display: flex;
  flex-direction: row;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background: ${ theme.colors.primary.BgHover };
  align-items: center;
  justify-content: space-evenly;
`;

export const Wrapper_Icon = styled(TouchableOpacity)`
width: 24px;
height: 24px;
align-items: center;
justify-content: center;
`;

export const Icon_Home = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const Icon_Diario = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const Icon_Assuntos = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const Icon_forum = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const Icon_Perfil = styled(Image)`
  width: 24px;
  height: 24px;
`;