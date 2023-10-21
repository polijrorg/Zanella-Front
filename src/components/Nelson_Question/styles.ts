import { theme } from '@styles/default.theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Image, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  width: 100%;
  aspect-ratio: 6;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  border-bottom-right-radius: 32px;
  background: ${ theme.colors.primary.BgHover };
  align-items: center;
  padding: 16px 8px;
`;

export const Nelson = styled(Image)`
  width: 36px;
  height: 36px;
  margin-left: 12px;
  margin-right: 16px;
`;

export const Wrapper_Text = styled(Text)`
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;

export const Wrapper_Name = styled(Text)`
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;

