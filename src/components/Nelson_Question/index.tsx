import * as S from './styles';
import React from 'react';

export type TestProps = {
  Profilename: string;
}; 

const Nelson_Question: React.FC<TestProps> = ({Profilename}) => (
  <S.Wrapper>
    <S.Nelson source={require('../../../public/assets/JabutiNelson_Dir.png')}/>
    <S.Wrapper_Name>Como você está hoje, <S.Wrapper_Name>{Profilename}</S.Wrapper_Name>?<S.Wrapper_Name></S.Wrapper_Name>
    </S.Wrapper_Name>
  </S.Wrapper>
);

export default Nelson_Question;
