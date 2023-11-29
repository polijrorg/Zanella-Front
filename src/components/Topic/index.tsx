import React, { useState } from 'react';
import * as S from './styles';

interface TopicProps {
  title: string;
  userSelectedTopics: string[];
  setUserSelectedTopics: React.Dispatch<React.SetStateAction<string[]>>;
}

const Topic: React.FC<TopicProps> = ({ title, userSelectedTopics, setUserSelectedTopics }) => {
  const [isSelected, setSelectedState] = useState(false);

  return (
    <S.Container selected={isSelected} onPress={() => {
      setUserSelectedTopics(
        userSelectedTopics.includes(title) 
        ? userSelectedTopics.filter(topic => topic !== title)
        : [...userSelectedTopics, title]
      );
      setSelectedState(!isSelected);
    }}>
      <S.Thumbnail source={require('@assets/JabutiNelson_Dir.png')}/>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export default Topic;