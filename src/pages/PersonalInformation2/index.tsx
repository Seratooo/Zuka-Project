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

type dataAccount = {
  balance: number;
}

const PersonalInformation2 = ({route}:Props) => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [country, setCountry]=useState()
  const [city, setCity]=useState();
  const [street, setStreet]=useState();
  const [myBalance,SetMyBalance]=useState(-1)

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
    
    if(myBalance==-1){
      Axios.post('user/address', Data).then(()=>{
        //Cria user
        const DataAcoount = {
          id_user,
          coin: 'AOA'
        }

        Axios.post('/account', DataAcoount).then((Response:any)=>{
          //cria conta
          //console.warn(Response.data.balance);

          SetMyBalance(parseInt(Response.data.balance) ? parseInt(Response.data.balance) : 0);
            
          navigation.navigate('auth',{
              id_user,
              name,
              email,
              dataBirthday,
              password,
              confirmPassword,
              country,
              city,
              street,
              balance: Response.data.balance ? Response.data.balance: 0 
            })
        })

      })
      


    }else{
      
      navigation.navigate('auth',{
        id_user,
        name,
        email,
        dataBirthday,
        password,
        confirmPassword,
        country,
        city,
        street,
        balance: myBalance
      })

      console.warn(myBalance)

     
    }
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
