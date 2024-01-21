import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import useAuth from '@hooks/useAuth';
import UserService from '@services/UserService';
import Topic from '@components/Topic';
import Button from '@components/Button';
import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Topics = () => {
  const { user, handleMainPage } = useAuth();
  const [topics, setTopics] = useState<string[]>([]);
  const [userSelectedTopics, setUserSelectedTopics] = useState<string[]>([]); 
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.isFocused()) {
      handleMainPage(true);
    }
  }, [navigation])

  const handleTopics = async () => {
    const response = await UserService.listTopics();
    setTopics(response);
  }

  useEffect(() => {
    handleTopics();
  }, [user])

  useEffect(() => {
    userSelectedTopics.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
  }, [userSelectedTopics])

  const handleUpdateTopics = async () => {
    const response = await UserService.updateUserTopics({id: user.id, topics: userSelectedTopics});
    console.log(response);

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
            <Topic key={index} title={topic} userSelectedTopics={userSelectedTopics} setUserSelectedTopics={setUserSelectedTopics} />)
          }
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