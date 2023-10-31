import * as S from './styles';
import React from 'react';
import useAuth from '@hooks/useAuth';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <S.Wrapper>
      <S.Nelson source={require('../../../public/assets/JabutiNelson_Dir.png')}/>
      <S.Wrapper_Name>Como você está hoje, <S.Wrapper_Name>{user.name || ''}</S.Wrapper_Name>?<S.Wrapper_Name></S.Wrapper_Name>
      </S.Wrapper_Name>
    </S.Wrapper>
  )
};

export default Header;
