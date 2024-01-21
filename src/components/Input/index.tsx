import * as S from './styles';
import React from 'react';

export type TestProps = {
    placeholder: string;
    stateFunction(value: string): any;
    type?: string;
};

const Input: React.FC<TestProps> = ({ placeholder, stateFunction, type }) => (
    <S.Input 
      inputMode={type === 'email-address' ? 'email' : 'text'}
      keyboardType={type}
      placeholder={placeholder} 
      placeholderTextColor="#FFB381"  
      onChangeText={(value) => stateFunction(value.toLowerCase())}
    />
);

export default Input;
