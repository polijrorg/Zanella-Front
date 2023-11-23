import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  width: 100%;
  height: 88px;
  display: flex;
  flex-direction: column;
  padding: 7px 16px;
  border-radius: 24px;
  justify-content: center;
  background: ${ theme.colors.primary.BgSutil };
  shadow-opacity: 1;
  shadow-offset: 1px 3px;
  shadow-color: grey;
  elevation: 10;
`;

export const Container_Forum = styled(View)`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Forum = styled(View)`
  width: 56px;
  height: 56px;
  background-color: blue;
  border-radius: 28px;
`;

export const Wrapper_Forum = styled(View)`
  max-width: 70%;
  height: 74px;
  display: flex;
  justify-content: space-between;
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
  height: 48px;
  color: ${ theme.colors.primary.TextoHigh };;
`; 

export const Wrapper_Coment = styled(View)`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-left: 55%;
`;

export const Coment_Imag = styled(Image)`
  width: 12px;
  height: 10px;
`;

export const Num_Coment = styled(Text)`
  font-size: 14px;
  color: ${ theme.colors.primary.TextoHigh };;
`; 