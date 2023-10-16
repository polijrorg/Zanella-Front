import { theme } from '@styles/default.theme';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(TouchableOpacity)`
  width: 100%;
  height: 104px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
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
  margin-top: 12px;
  padding-left: 16px;
`;

export const Forum = styled(View)`
  width: 56px;
  height: 56px;
  background-color: black;
  border-radius: 28px;
`;

export const Wrapper_Forum = styled(TouchableOpacity)`
  width: 80%;
  height: 56px;
  display: flex;
  flex-direction: column;
  padding-left: 8px;
`;

export const Title_Forum = styled(Text)`
  font-size: 18px;
  color: ${ theme.colors.primary.Texto };
  margin-bottom: 8px;
`; 

export const SubTitle_Forum = styled(Text)`
  font-size: 12px;
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

