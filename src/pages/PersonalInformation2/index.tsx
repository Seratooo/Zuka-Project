import React, { FC, useContext, useState } from 'react';
import { Container, ContainerInformation } from './style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button';
import { TextDescription, Title, TopBar } from '../../Elements/Elements';
import Input from '../../Components/Input';
import AuthContext from '../../context/auth';
import axios from 'axios';


const PersonalInformation2: FC<{}> = (props) => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const navigation = useNavigation();
  const context = useContext(AuthContext);

  const {id_user} = context.user;

  async function press() {
    try{
      const response = await axios.post('https://zuka-app.herokuapp.com/user/address',{
        id_user,
        country,
        city,
        street,
       });    

      await axios.post('https://zuka-app.herokuapp.com/account',{
        id_user,
        coin:'AOA'
       }); 
       
       context.address = response.data;
  }catch(error){
      console.log(error);
  }

    navigation.navigate('auth');
  }

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
        <Input label="País" placeholder="Angola"
          value={country}
          onChangeText={(text: React.SetStateAction<string>) => setCountry(text)}
        />
        <Input label="Cidade" placeholder="Luanda"
          value={city}
          onChangeText={(text: React.SetStateAction<string>) => setCity(text)}
        />
        <Input label="Bairro" placeholder="Viana KM9B"
          value={street}
          onChangeText={(text: React.SetStateAction<string>) => setStreet(text)}
        />
      </ContainerInformation>
      <Button text="Criar Conta" onPress={press} />
    </Container>
  );
};

export default PersonalInformation2;
