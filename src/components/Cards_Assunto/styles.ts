import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  min-width: 90%;
  max-width: 90%;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  padding: 0px 16px;
  background: ${ theme.colors.primary.BgSutil };
  elevation: 8;
`;

export const Container_Forum = styled(View)`
  min-width: 100%;
  flex-direction: row; 
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
`;

export const Thumb = styled(Image)`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const Wrapper_Forum = styled(View)`
  justify-content: space-between;
  flex: 1;
  flex-direction: column;
`;

export const Title_Forum = styled(Text)`
  font-size: 18px;
  color: ${ theme.colors.primary.Texto };
`; 

export const SubTitle_Forum = styled(Text).attrs({
  numberOfLines: 2,
})`
  font-size: 12px;
  line-height: 22px;
  color: ${ theme.colors.primary.TextoHigh };;
`;