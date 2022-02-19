import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button';
import { TopBar, Title, TextDescription, View, Container } from '../../Elements/Elements';
import { Input, TextDetached } from './style';

const VerificationCode = (route:{params: any}) => {
  
  const {
            id_user,
            name,
            email,
            dataBirthday,
            password,
            confirmPassword,

  } = route.params;

  const navigation = useNavigation();
  return (
    <View>
      <Container>
        <TopBar
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={30} color="#000" />
        </TopBar>
        <Title>Verificação</Title>
        <TextDescription>
          Verifica no seu telefone o código de confirmação
        </TextDescription>
        <Input
          keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
          maxLength={4}
        />
        <TextDescription>Não recebeu o código?</TextDescription>
        <TextDetached>Reenviar o código</TextDetached>

      </Container>
      <Button text="Validar Código" onPress={() => {
        navigation.navigate('PersonalInformation2');
        
        }} />
    </View>
  );
};

export default VerificationCode;
