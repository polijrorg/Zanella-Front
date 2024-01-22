import React from 'react';
import * as S from './styles';

interface SlideItemProps {
  title: string;
  icon: string;
  content: string;
  width: number;
};

const SlideItem: React.FC<SlideItemProps> = ({
  title,
  icon,
  content,
  width,
}) => {
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'main': return <S.Icon source={require('@assets/iconMain.png')} />;
      case 'help': return <S.Icon source={require('@assets/iconHelp.png')} />;
      case 'assuntos': return <S.Icon source={require('@assets/iconSubject.png')} />;
      case 'diary': return <S.Icon source={require('@assets/iconDiary.png')} />;
      case 'profile': return <S.Icon source={require('@assets/iconProfile.png')} />;
      case 'none': return null;
    }
  }

  return (
    <S.Container width={width.toFixed().toString()}>
      <S.Title>{title}</S.Title>
        {iconSwitch(icon)}
      <S.Content>{content}</S.Content>
    </S.Container>
  );
}

export default SlideItem;