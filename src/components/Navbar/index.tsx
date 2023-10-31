import * as S from './styles';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export function NavBar() {

  const navigation = useNavigation();

  const screens = [
    'main', 'diario', 'assuntos', 'forum', 'perfil'
  ]

  return(
  <S.Wrapper >
    {screens.map((screen: string, index) => {
      return(
        <S.Wrapper_Icon key={index} onPress={() => {
        switch (screen) {
            case 'main': navigation.navigate('main'); break;
            case 'diario': navigation.navigate('diario'); break;
            case 'assuntos': navigation.navigate('assuntos'); break;
            case 'forum': navigation.navigate('forum'); break;
            case 'perfil': navigation.navigate('perfil'); break;
          }
        }}>
        {screen === 'main' && (<S.NavbarIcon source={require(`../../../public/assets/main.png`)}/>)}
        {screen === 'diario' && (<S.NavbarIcon source={require(`../../../public/assets/diario.png`)}/>)}
        {screen === 'assuntos' && (<S.NavbarIcon source={require(`../../../public/assets/assuntos.png`)}/>)}
        {screen === 'forum' && (<S.NavbarIcon source={require(`../../../public/assets/forum.png`)}/>)}
        {screen === 'perfil' && (<S.NavbarIcon source={require(`../../../public/assets/perfil.png`)}/>)}
        </S.Wrapper_Icon>
      )
    })}
  </S.Wrapper>
)
};

export default NavBar;