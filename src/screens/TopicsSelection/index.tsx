import React, { useEffect, useState } from 'react';
import Button from '@components/Button';
import SelectionButton from '@components/SelectionButton';
import * as S from './styles';
import UserService from '@services/UserService';
import useAuth from '@hooks/useAuth';

const TopicsSelection = ({ navigation }) => {
  const [topics, setTopics] = useState<string[]>([]);
  const [userSelectedTopics, setUserSelectedTopics] = useState<string[]>([]);
  const { user } = useAuth();

  const handleTopics = async () => {
    const response = await UserService.listTopics();
    
    setTopics(JSON.parse(response));
  }

  useEffect(() => {
    handleTopics();
  }, [])

  const handleUpdateTopics = async () => {
    const response = await UserService.updateUserTopics({id: user.id, topics: userSelectedTopics});

    navigation.navigate('subjects');
  }

  return (
    <S.Container>
      <S.Background source={require('@assets/topicSelectionBackground.png')}>
        <S.Header>
          <S.ReturnButton onPress={() => navigation.navigate('main')}>
            <S.ReturnIcon source={require('@assets/returnIcon.png')}/>
          </S.ReturnButton>
        </S.Header>
        <S.QuestionWrapper>
          <S.LeftSection>
            <S.TurtleIcon source={require('@assets/JabutiNelson_Dir.png')}/>
          </S.LeftSection>
          <S.RightSection>
            <S.QuestionBalloon>
              <S.Question>{"Oi " + user.name.split(' ')[0] + "! O que você gostaria de discutir hoje?"}</S.Question>
            </S.QuestionBalloon>
          </S.RightSection>
        </S.QuestionWrapper>
        <S.CardContainer>
          {topics.map((topic, index) => {
            return (
              <SelectionButton 
              key={index} 
              text={topic} 
              userSelectedTopics={userSelectedTopics} 
              setUserSelectedTopics={setUserSelectedTopics}
              />
              )
          })}
        </S.CardContainer>
        <Button text='CONTINUAR' style='solido' onPress={handleUpdateTopics} size='medium' disabled={userSelectedTopics.length > 0 ? false : true} />
      </S.Background>
    </S.Container>
  )
}

export default TopicsSelection;