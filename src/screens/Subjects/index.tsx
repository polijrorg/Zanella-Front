import React, { useState, useEffect } from 'react';
import * as S from './styles';
import useAuth from '@hooks/useAuth';
import UserService from '@services/UserService';
import Cards_Assunto from '@components/Cards_Assunto';
import Button from '@components/Button';

interface ISubject {
  title: string;
  description: string;
  thumbnail?: string;
  hints: string[];
  contents: string[];
  subjectTopics: string;
}

const Subjects = (props) => {
  const [subjects, setSubjects] = useState([] as any);
  const { user } = useAuth();

  const getUserSubjects = async () => {
    const response = await UserService.getSubjects(user);
    setSubjects(response);
  }

  useEffect(() => {
    getUserSubjects();
  }, [user])

  return (
    <S.Container>
      <S.Background source={require('@assets/topicSelectionBackground.png')}>
      <S.QuestionWrapper>
          <S.LeftSection>
            <S.TurtleIcon source={require('@assets/JabutiNelson_Dir.png')}/>
          </S.LeftSection>
          <S.RightSection>
            <S.QuestionBalloon>
              <S.Question>{'Acredito que estes recursos podem te ajudar!'}</S.Question>
            </S.QuestionBalloon>
          </S.RightSection>
        </S.QuestionWrapper>
        <S.CardContainer>
          {subjects.map((subject: ISubject, index: number) => (
            <S.CardButton key={index + 1} onPress={() => props.navigation.navigate('assunto', {
              title: subject.title,
              description: subject.description,
              thumbnail: subject.thumbnail,
              hints: subject.hints,
              contents: subject.contents,
              subjectTopics: subject.subjectTopics
            })}>
              <Cards_Assunto 
                key={index}
                title={subject.title} 
                description={subject.description} 
              />
            </S.CardButton>
          ))}
        </S.CardContainer>
        <Button text="ME MOSTRE!" style='solido' size='medium' onPress={() => props.navigation.navigate('assuntos')}/>
        <Button text="QUERO VER DEPOIS" style='vazado' size='medium' onPress={() => props.navigation.navigate('main')}/>
      </S.Background>
    </S.Container>
  );
}

export default Subjects;