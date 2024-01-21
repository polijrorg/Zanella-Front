import React, {useState} from 'react';
import * as S from './styles';

interface SelectionButtonProps {
  text: string;
  userSelectedTopics: string[];
  setUserSelectedTopics: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectionButton: React.FC<SelectionButtonProps> = ({
  text,
  userSelectedTopics,
  setUserSelectedTopics,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <S.Button
      isSelected={isSelected}
      onPress={() => {
        setUserSelectedTopics(
          userSelectedTopics.includes(text) 
          ? userSelectedTopics.filter(topic => topic !== text)
          : [...userSelectedTopics, text]
        );
        setIsSelected(!isSelected);
        }}
    >
      <S.ButtonText>{text}</S.ButtonText>
    </S.Button>
  );
};

export default SelectionButton;