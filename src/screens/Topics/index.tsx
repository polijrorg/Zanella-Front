import React, { useEffect, useState } from 'react';
import * as S from './styles';
import useAuth from '@hooks/useAuth';
import UserService from '@services/UserService';
import Topic from '@components/Topic';
import Button from '@components/Button';

const Topics = ({ navigation }) => {
  const { user, handleMainPage } = useAuth();
  const [topics, setTopics] = useState<string[]>([]);
  const [userSelectedTopics, setUserSelectedTopics] = useState<string[]>([]); 
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (navigation.isFocused()) {
      handleMainPage(true);
    }
  }, [navigation])

  const handleTopics = async () => {
    const response = await UserService.listTopics();

    setTopics(JSON.parse(response));
  }

  useEffect(() => {
    handleTopics();
  }, [user])

  useEffect(() => {
    userSelectedTopics.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
  }, [userSelectedTopics])

  const handleUpdateTopics = async () => {
    await UserService.updateUserTopics({id: user.id, topics: userSelectedTopics});

    navigation.navigate('main');
  }

  const handleSkipTopics = () => {
    navigation.navigate('main');
  }

  return (
    <S.Container>
      <S.Background source={require('@assets/topicsBackground.png')}>
        <S.Title>Quais tópicos te interessam mais?</S.Title>
        <S.TopicsContainer>
          {topics.map((topic: string, index: number) => 
            <Topic key={index} title={topic} userSelectedTopics={userSelectedTopics} setUserSelectedTopics={setUserSelectedTopics} />
          )}
        </S.TopicsContainer>
        <S.buttonsContainer>
          <Button style={'vazado'} size={'small'} onPress={handleSkipTopics} text='PULAR'/>
          <Button style={'solido'} size={'small'} onPress={handleUpdateTopics} text='CONTINUAR' disabled={isDisabled} />
        </S.buttonsContainer>
      </S.Background>
    </S.Container>
  );
}

export default Topics;