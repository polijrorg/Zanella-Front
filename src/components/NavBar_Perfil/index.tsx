import * as S from './styles';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


export function NavBar(){

  const navigation = useNavigation();

  function handleMainscreen() {
      navigation.navigate('main');
  };

  function handleDiarioscreen() {
      navigation.navigate('diario');
  };

  function handleAssuntocreen() {
      navigation.navigate('assuntos');
  };

  function handleForumscreen() {
      navigation.navigate('forum');
  };

  function handlePerfilscreen() {
      navigation.navigate('perfil');
  };

  return(
    <S.Wrapper >
    <S.Wrapper_Icon onPress={handleMainscreen}><S.Icon_Home source={require('../../../public/assets/Home_noFill.png')}/></S.Wrapper_Icon>
    <S.Wrapper_Icon onPress={handleDiarioscreen}><S.Icon_Home source={require('../../../public/assets/Diario_noFill.png')}/></S.Wrapper_Icon>
    <S.Wrapper_Icon onPress={handleAssuntocreen}><S.Icon_Home source={require('../../../public/assets/Assunto_noFill.png')}/></S.Wrapper_Icon>
    <S.Wrapper_Icon onPress={handleForumscreen}><S.Icon_Home source={require('../../../public/assets/Forum_noFill.png')}/></S.Wrapper_Icon>
    <S.Wrapper_Icon onPress={handlePerfilscreen}><S.Icon_Home source={require('../../../public/assets/Perfil_Fill.png')}/></S.Wrapper_Icon>
  </S.Wrapper>
);
}

export default NavBar;
