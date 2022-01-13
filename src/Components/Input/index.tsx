import React, {FC} from 'react';
import {Container, Label, TextInput} from './style';

interface IInput {
  label: string;
  placeholder: string;
  number?: boolean;
}

const Input: FC<IInput> = ({label, placeholder, number}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput placeholder={placeholder} 
      keyboardType={number ? 'number-pad' : 'default'}
      />
    </Container>
  );
};

export default Input;
