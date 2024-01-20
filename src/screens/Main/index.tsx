import * as S from './styles';
import React, { useEffect } from 'react';
import useAuth from '@hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const { user, handleMainPage } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.isFocused()) {
      handleMainPage(true);
    }
  }, [navigation])

  return (
    <S.Wrapper>
      <S.Wrapper_Talk>
        <S.Talk>{`Oi${' ' + user?.name + '!' || ','} Estou aqui se quiser ajuda!`}</S.Talk>
      </S.Wrapper_Talk>
      <S.Nelson source={require('../../../public/assets/JabutiNelson_Esq.png')}/>
      <S.Container>
        <S.StyledText>Para você...</S.StyledText>
        <S.Wrapper_Assunto>
          <S.Assunto></S.Assunto>
          <S.Assunto></S.Assunto>
        </S.Wrapper_Assunto>
        <S.StyledText>Assuntos recomendados</S.StyledText>
        <S.Wrapper_Assunto>
        <S.Assunto></S.Assunto>
        <S.Assunto></S.Assunto>
        </S.Wrapper_Assunto>
      </S.Container>
    </S.Wrapper>
)};

export default Main;
