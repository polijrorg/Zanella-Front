import * as S from './styles';
import React from 'react';

export type TestProps = {
    placeholder: string;
};

const Input: React.FC<TestProps> = ({ placeholder}) => (
    <S.Input placeholder={placeholder} placeholderTextColor="#FFB381"  
    />
);

export default Input;
