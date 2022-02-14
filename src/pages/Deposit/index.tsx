import React from 'react'
import { TextDescription, Title, TopBar } from '../../Elements/Elements';
import Icon from 'react-native-vector-icons/Feather'
import { TextInput, Button } from 'react-native-paper'
import { TextFildInfo, ContainerTextFileds, Container } from './style';

const Deposit = () => {

  return (
    <>
      <TopBar>
        <Icon name="arrow-left" size={30} color="#000" />
        <Icon name="help-circle" size={30} color="#000" />
      </TopBar>

      <Title>Depósito</Title>

      <TextDescription>
        Insira os seus dados para efetuar o depósito
      </TextDescription>

      <Container>
        <TextFildInfo>
          Montante
        </TextFildInfo>

        <ContainerTextFileds />
        <TextInput label="Quantidade" mode="flat" outlineColor='#fff' underlineColor='#717e951e' activeUnderlineColor='#b57d03' style={{ marginBottom: 15, backgroundColor: '#717e951e' }} />

        <TextFildInfo>
          Dados do Cartão
        </TextFildInfo>
        <ContainerTextFileds />

        <TextInput label="Numero do Cartão" mode="flat" outlineColor='#fff' underlineColor='#717e951e' activeUnderlineColor='#b57d03' style={{ marginBottom: 15, backgroundColor: '#717e951e' }} />
        <TextInput label="Data de Expiração" mode="flat" outlineColor='#fff' underlineColor='#717e951e' activeUnderlineColor='#b57d03' style={{ marginBottom: 15, backgroundColor: '#717e951e' }} />

        <Button
          //icon="camera"
          mode="contained"
          color='#b57d03'
          onPress={() => console.log('Pressed')}
          style={{ marginTop: 120, padding: 10, borderRadius: 5 }}
        //theme={{colors: {background: '#fff'}}}
        >
          Confirmar
        </Button>
      </Container>
    </>
  )

}
export default Deposit;