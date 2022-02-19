import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button';
import { TopBar, Title, TextDescription, View, Container } from '../../Elements/Elements';
import { Input, TextDetached } from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/auth.routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Verification'>;


const VerificationCode = ({route}:Props) => {

  const navigation = useNavigation();

  const {
            id_user,
            name,
            email,
            dataBirthday,
            password,
            confirmPassword,
  } = route.params
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
         Olá {name}, verifique o código de confirmação no seu dispositivo.
        </TextDescription>
        <Input
          keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
          maxLength={4}
        />
        <TextDescription>Não recebeu o código?</TextDescription>
        <TextDetached>Reenviar o código</TextDetached>

      </Container>
      <Button text="Validar Código" onPress={() => {
        navigation.navigate('PersonalInformation2',{
          id_user,
          name,
          email,
          dataBirthday,
          password,
          confirmPassword,
        });
        
        }} />
    </View>
  );
};

export default VerificationCode;
