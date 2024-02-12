import * as S from './styles';
import React, { useEffect, useState } from 'react';
import Cards_Assunto from '@components/Cards_Assunto';
import useAuth from '@hooks/useAuth';
import UserService from '@services/UserService';

interface ISubject {
  title: string;
  description: string;
  thumbnail?: string;
  hints: string[];
  contents: string[];
  subjectTopics: string;
}

const Assuntos = (props) => {
  const { user } = useAuth();
  const [searchtext, setSearchtext] = useState("");
  const [subjects, setSubjects] = useState([] as any);

  const getUserSubjects = async () => {
    const response = await UserService.getSubjects(user);
    setSubjects(response);
  }

  useEffect(() => {
    getUserSubjects();
  }, [user])

  return(
    <S.Wrapper>
      <S.HeaderGap />
      <S.Search_Wrapper>
        <S.Search><S.Search_Icon source={require('../../../public/assets/SearchIcon.png')}/></S.Search>
        <S.Search_Input 
          placeholder='O que você quer descobrir?' 
          placeholderTextColor="#FFB381" 
          value={searchtext}
          onChangeText={(value) => setSearchtext(value)}
        />
      </S.Search_Wrapper>
      <S.CardContainer>
        {subjects.filter((subject) => 
          subject.title.includes(searchtext) || 
          subject.description.includes(searchtext) ||
          subject.subjectTopics.includes(searchtext)).map((subject: ISubject, index: number) => (
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
              uri={subject.thumbnail}
              title={subject.title} 
              description={subject.description} 
              />
          </S.CardButton>
        ))}
      </S.CardContainer>
    </S.Wrapper>
  )
};

export default Assuntos;