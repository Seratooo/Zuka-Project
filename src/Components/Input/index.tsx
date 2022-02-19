import React, {FC, useState} from 'react';
import {Container, Label, TextInput} from './style';

interface IInput {
  label: string;
  placeholder: string;
  number?: boolean;
  setText: Function;
}
const Input: FC<IInput> = ({label, placeholder, number, setText}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput placeholder={placeholder} 
      keyboardType={number ? 'number-pad' : 'default'}
      onChangeText={(Text)=>{setText(Text)}}
      />
    </Container>
  );
};

export default Input;
