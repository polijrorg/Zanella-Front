import React from 'react';
import * as S from './styles';

interface IProps {
  title: string;
  thumbnail?: string;
  description: string;
  hints: string[];
  contents: string[];
  subjectTopics: string;
}

const Assunto = ({ route, navigation }) => {
  const {
    title,
    thumbnail,
    description,
    hints,
    contents,
    subjectTopics
  } = route.params as IProps;

  return (
    <S.Wrapper>
      <S.Header>
        <S.GoBackButton onPress={() => navigation.goBack()}>
          <S.GoBackIcon source={require('../../../public/assets/Chevron_Left.png')} />
        </S.GoBackButton>
      </S.Header>
      <S.Title>{title}</S.Title>
      {thumbnail && <S.Thumbnail source={{ uri: thumbnail }} />}
      <S.Description>{description}</S.Description>
      <S.HintContainer>
        <S.HintWrapper>
          <S.HintTitle>Dicas</S.HintTitle>
          {hints.map((hint, index) => (
            <S.Hint key={index + 2}>{hint}</S.Hint>
          ))}
        </S.HintWrapper>
      </S.HintContainer>
      <S.HintWrapper>
        {contents.map((content, index) => (
          <S.ContentWrapper>
            <S.HintTitle key={index + 1}>{hints[index]}</S.HintTitle>
            <S.Content key={index}>{content}</S.Content>
          </S.ContentWrapper>
        ))}
      </S.HintWrapper>
      <S.KeyWordsWrapper>
        <S.KeyWords>Tema: {subjectTopics}</S.KeyWords>
      </S.KeyWordsWrapper>
      <S.Footer />
    </S.Wrapper>
  );
}

export default Assunto;