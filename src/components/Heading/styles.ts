import { View, Image } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  width: 80px;
  height: 80px;
  margin-top: 48px;
  border-bottom-right-radius: 40px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  align-items: center;
  justify-content: center;
`;

export const Lines_Esq = styled(Image)`
  position: absolute; 
`;
