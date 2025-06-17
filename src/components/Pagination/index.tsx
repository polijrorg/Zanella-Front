import React from 'react';
import * as S from './styles';
import PaginationIcon from '@components/PaginationIcon';

interface PaginationProps {
  slides: {
    title: string;
    icon: string;
    content: string;
  }[];
  scrollX: any;
  width: number;
  currentIndex: number;
}

const Pagination: React.FC<PaginationProps> = ({slides, currentIndex}) => {
  return (
    <S.Container>
      {slides.map((item, index) => <PaginationIcon active={index === currentIndex} key={index}/>)}
    </S.Container>
  );
}

export default Pagination;