import * as S from './styles';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import useAuth from '@hooks/useAuth';

export function NavBar() {
  const { onMain, handleMainPage } = useAuth();
  const [isVisible, setVisibility] = useState(true);
  const navigation = useNavigation();


  // retirado a tela de forum
  // const screens = [
  //   'main', 'diario', 'assuntos', 'forum', 'perfil'
  // ]

  const screens = [
    'main', 'diario', 'assuntos', 'perfil'
  ]

  useEffect(() => {
    setVisibility(!onMain);
  }, [onMain])

  return(
  <S.Wrapper isVisible={isVisible} >
    {screens.map((screen: string, index) => {
      return(
        <S.Wrapper_Icon key={index} onPress={() => {
        switch (screen) {
            case 'main': navigation.navigate('main'); handleMainPage(true); break;
            case 'diario': navigation.navigate('diario'); handleMainPage(false); break;
            case 'assuntos': navigation.navigate('assuntos'); handleMainPage(false); break;
            case 'forum': navigation.navigate('forum'); handleMainPage(false); break;
            case 'perfil': navigation.navigate('perfil'); handleMainPage(false); break;
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