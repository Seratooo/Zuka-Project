import React, { FC } from 'react';
import { Container, Label, TextInput } from './style';

interface IInput {
  label: string;
  placeholder: string;
  number?: boolean;
  value: string;
  onChangeText: Function;
}

const Input: FC<IInput> = ({ label, placeholder, number, value, onChangeText }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput placeholder={placeholder}
        keyboardType={number ? 'number-pad' : 'default'}
        value={value}
        onChangeText={(text) => onChangeText(text as string)}

      />
    </Container>
  );
};

export default Input;
