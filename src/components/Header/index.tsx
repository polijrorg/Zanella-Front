import * as S from './styles';
import React, { useEffect, useState } from 'react';
import useAuth from '@hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

const Header: React.FC = () => {
  const { user, onMain } = useAuth();
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(!onMain);
  }, [onMain])

  return (
    <S.Container isVisible={isVisible}>
      <S.Wrapper>
        <S.Nelson source={require('../../../public/assets/JabutiNelson_Dir.png')}/>
        <S.Wrapper_Name>Como você está hoje, <S.Wrapper_Name>{user.name || ''}</S.Wrapper_Name>?<S.Wrapper_Name></S.Wrapper_Name>
        </S.Wrapper_Name>
      </S.Wrapper>
    </S.Container>
  )
};

export default Header;
