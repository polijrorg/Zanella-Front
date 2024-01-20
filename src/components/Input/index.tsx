import * as S from './styles';
import React from 'react';

export type TestProps = {
    placeholder: string;
    stateFunction(value: string): any;
};

const Input: React.FC<TestProps> = ({ placeholder, stateFunction }) => (
    <S.Input 
      placeholder={placeholder} 
      placeholderTextColor="#FFB381"  
      onChangeText={(value) => stateFunction(value)}
    />
);

export default Input;
