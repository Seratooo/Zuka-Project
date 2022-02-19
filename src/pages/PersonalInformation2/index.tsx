import React, { FC, useState } from 'react';
import { Container, ContainerInformation } from './style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button';
import { TextDescription, Title, TopBar, ContainerContent } from '../../Elements/Elements';
import Input from '../../Components/Input';
import Axios from '../../services/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/auth.routes';

type Props = NativeStackScreenProps<RootStackParamList, 'PersonalInformation2'>;

const PersonalInformation2 = ({route}:Props) => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [country, setCountry]=useState()
  const [city, setCity]=useState();
  const [street, setStreet]=useState();

  const {
    id_user,
    name,
    email,
    dataBirthday,
    password,
    confirmPassword,
  } = route.params

  function handleRegistarLocalizacao(){

    const Data = {
      id_user,
      country,
      city,
      street
    }
    Axios.post('user/address', Data).then(()=>{
      //console.warn(Data)
      navigation.navigate('auth',{
        id_user,
        name,
        email,
        dataBirthday,
        password,
        confirmPassword,
        country,
        city,
        street
      })
    })
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
        <Input label="País" placeholder="Angola" setText={setCountry} />
        <Input label="Cidade" placeholder="Luanda" setText={setCity}/>
        <Input label="Bairro" placeholder="Viana KM9B" setText={setStreet} />
      </ContainerInformation>
      <Button text="Criar Conta" onPress={handleRegistarLocalizacao} />
    </Container>
  );
};

export default PersonalInformation2;
