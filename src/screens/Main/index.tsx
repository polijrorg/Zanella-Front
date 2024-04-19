import * as S from './styles';
import React, { useEffect, useState } from 'react';
import useAuth from '@hooks/useAuth';
import MainPageCard from '@components/MainPageCard';
import UserService from '@services/UserService';
import { useWindowDimensions } from 'react-native';

const Main = ({ navigation }) => {
  const { user, handleMainPage } = useAuth();
  const [userSubjects, setUserSubjects] = useState([] as any);
  const [subjects, setSubjects] = useState([] as any);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (navigation.isFocused()) {
      handleMainPage(true);
    }
  }, [navigation])

  const getUserSubjects = async () => {
    try {
      const response = await UserService.getSubjects(user);

      setUserSubjects(response);
    } catch (error) {
      console.log(error);
    }
  }

  const listSubjects = async () => {
    try {
      const response = await UserService.listSubjects();

      setSubjects(response);
    } catch (error) {
      console.log(error);
    }
  
  }

  useEffect(() => {
    getUserSubjects();
    listSubjects();
  }, []);

  return (
    <S.Wrapper>
      <S.Wrapper_TalkButton cwidth={width} onPress={() => navigation.navigate('selection')}>
        <S.Wrapper_Talk cwidth={width}>
          <S.Talk cwidth={width}>{`Oi,${' ' + user?.name.split(' ')[0] + '!' || ','} Estou aqui se quiser ajuda!`}</S.Talk>
        </S.Wrapper_Talk>
      </S.Wrapper_TalkButton>
      <S.Nelson cwidth={width} source={require('@assets/JabutiNelson_Esq.png')}/>
      <S.Container>
        <S.StyledText cwidth={width}>Para você...</S.StyledText>
        <S.SliderContainer>
          <S.Wrapper_Assunto>
            {userSubjects.map((subject: any, index: number) => (
              <S.Button activeOpacity={0.8} key={index} onPress={() => navigation.navigate('assunto', {
                title: subject.title,
                description: subject.description,
                thumbnail: subject.thumbnail,
                hints: subject.hints,
                contents: subject.contents,
                subjectTopics: subject.subjectTopics
              })}>
                <MainPageCard 
                  key={index}
                  title={subject.title} 
                  image={subject.thumbnail} 
                  />
              </S.Button>
            ))}
          </S.Wrapper_Assunto>
        </S.SliderContainer>
        <S.StyledText cwidth={width}>Novidades</S.StyledText>
        <S.Wrapper_Assunto>
          {subjects.map((subject: any, index: number) => (
            <S.Button activeOpacity={0.8} key={index} onPress={() => navigation.navigate('assunto', {
              title: subject.title,
              description: subject.description,
              thumbnail: subject.thumbnail,
              hints: subject.hints,
              contents: subject.contents,
              subjectTopics: subject.subjectTopics
            })}>
              <MainPageCard 
                key={index}
                title={subject.title} 
                image={subject.thumbnail} 
                />
            </S.Button>
          ))}
        </S.Wrapper_Assunto>
      </S.Container>
    </S.Wrapper>
)};

export default Main;
