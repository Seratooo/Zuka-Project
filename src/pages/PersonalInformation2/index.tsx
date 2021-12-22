import React, {FC, useState} from 'react';
import {Container, ContainerInformation} from './style';
//import Input from '../../Components/Input';
import Icon from 'react-native-vector-icons/Feather';
//import Button from '../../Components/Button';
import {Button, TextInput} from 'react-native-paper';
import {TextDescription, Title, TopBar} from '../../Elements/Elements';
const PersonalInformation2: FC = () => {
  const [text, setText] = useState('');
  return (
    <Container>
      <TopBar>
        <Icon name="arrow-left" size={30} color="#000" />
        <Icon name="help-circle" size={30} color="#000" />
      </TopBar>
      <Title>Informações Pessoais</Title>
      <TextDescription>
        As informações pessoais são usadas para validação na aplicação
      </TextDescription>
      <ContainerInformation>
        <TextInput
          mode="outlined"
          label="Número de conta"
          value={text}
          onChangeText={Thetext => setText(Thetext)}
          style={{marginBottom: 15}}
          outlineColor='#fff'
        />
        <TextInput label="IBAN" mode="outlined"  outlineColor='#fff' style={{marginBottom: 15}} />
        <TextInput label="NIB" mode="outlined"  outlineColor='#fff' style={{marginBottom: 15}} />
        <TextInput label="Originário" mode="outlined"  outlineColor='#fff' />

        <Button
          //icon="camera"
          mode="contained"
          color='#b57d03'
          onPress={() => console.log('Pressed')}
          style={{marginTop: 120, padding: 10, borderRadius: 5}}
          //theme={{colors: {background: '#fff'}}}
          >
          Confirmar
        </Button>
      </ContainerInformation>
    </Container>
  );
};

export default PersonalInformation2;
