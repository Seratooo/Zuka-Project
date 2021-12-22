import React from 'react';
import {ContainerButton, Text} from './style';

const Button = (props: {text: string; onPress: Function}) => {
  return (
    <ContainerButton onPress={() => props.onPress()}>
      <Text>{props.text}</Text>
    </ContainerButton>
  );
};

export default Button;
