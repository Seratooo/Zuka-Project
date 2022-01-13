import React, { FC, useState } from 'react';
import { Container, ContainerInformation } from './style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button';
import { TextDescription, Title, TopBar, ContainerContent } from '../../Elements/Elements';
import Input from '../../Components/Input';
const PersonalInformation2: FC = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  return (
    <Container>
      <TopBar
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={30} color="#000" />
      </TopBar>
      <Title>Informações Pessoais</Title>
      <TextDescription>
        As informações pessoais são usadas para validação na aplicação
      </TextDescription>
      <ContainerInformation>
        <Input label="País" placeholder="Angola" />
        <Input label="Cidade" placeholder="Luanda" />
        <Input label="Bairro" placeholder="Viana KM9B" />
      </ContainerInformation>
      <Button text="Criar Conta" onPress={() => {
        navigation.navigate('auth');
      }} />
    </Container>
  );
};

export default PersonalInformation2;
