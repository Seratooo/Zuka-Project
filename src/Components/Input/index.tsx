import React, {FC} from 'react';
import {Container, Label, TextInput} from './style';

interface IInput {
  label: string;
  placeholder: string;
}

const Input: FC<IInput> = props => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <TextInput placeholder={props.placeholder} />
    </Container>
  );
};

export default Input;
