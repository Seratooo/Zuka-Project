import React from 'react';
import {Platform, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {TopBar, Title, TextDescription} from '../../Elements/Elements';
import {Input, TextDetached} from './style';

const VerificationCode = () => {
  return (
    <View>
      <TopBar>
        <Icon name="arrow-left" size={30} color="#000" />
        <Icon name="help-circle" size={30} color="#000" />
      </TopBar>
      <Title>Verificação</Title>
      <TextDescription>
        Verifica no seu telefone o código de confirmação
      </TextDescription>
      <Input
        keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
      />
      <TextDescription>Não recebeu o código?</TextDescription>
      <TextDetached>Reenviar o código</TextDetached>
    </View>
  );
};

export default VerificationCode;
