import * as S from './styles';
import React, { useEffect, useState } from 'react';
import useAuth from '@hooks/useAuth';
import { useWindowDimensions } from 'react-native';

const Header: React.FC = () => {
  const { user, onMain } = useAuth();
  const [isVisible, setVisibility] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setVisibility(!onMain);
  }, [onMain])

  return (
    <S.Container isVisible={isVisible}>
      <S.Wrapper>
        <S.Nelson source={require('../../../public/assets/JabutiNelson_Dir.png')}/>
        <S.Wrapper_Name cwidth={width}>Como você está hoje, <S.Wrapper_Name cwidth={width}>{user?.name.split(' ')[0] || ''}</S.Wrapper_Name>?<S.Wrapper_Name></S.Wrapper_Name>
        </S.Wrapper_Name>
      </S.Wrapper>
    </S.Container>
  )
};

export default Header;
