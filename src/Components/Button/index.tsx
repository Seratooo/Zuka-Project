import React from 'react';
import {ContainerButton, Text} from './style';

const Button = (props: {text: string; onPress: Function}) => {
  return (
    <ContainerButton text={props.text} onPress={() => props.onPress()}>
      <Text text={props.text}>{props.text}</Text>
    </ContainerButton>
  );
};

export default Button;
