import React, { useEffect } from 'react';
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
};


const Pagination: React.FC<PaginationProps> = ({slides, scrollX, width}) => {
  const [paginationIndex, setPaginationIndex] = React.useState(0);

  useEffect(() => {
    const scrollXValue = JSON.stringify(scrollX);
    const formattedValue = parseFloat(scrollXValue)/width;
    setPaginationIndex(parseInt(formattedValue.toFixed()));
  }, [scrollX])

  return (
    <S.Container>
      {slides.map((item, index) => <PaginationIcon active={index === paginationIndex} key={index}/>)}
    </S.Container>
  );
}

export default Pagination;