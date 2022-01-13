import React, { FC, useContext } from 'react';
import { Container, ContainerInformation } from './style';
import Input from '../../Components/Input';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button';
import { TextDescription, Title, TopBar } from '../../Elements/Elements';
import AuthContext from '../../context/auth';


const PersonalInformation: FC = () => {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);
  return (
    <Container>
        <TopBar>
          <Icon name="arrow-left" 
                size={30} 
                color="#000" 
                onPress={() => navigation.goBack()}
          />
        </TopBar>
      <ContainerInformation>
        <Title>Informações Pessoais</Title>
        <TextDescription>
          As informações pessoais são usadas para validação na aplicação
        </TextDescription>
        <Input label="Nome Completo" placeholder="" />
        <Input label="Natural" placeholder="" />
        <Input label="Data de aniversario" placeholder="" />
      </ContainerInformation>
      <Button
        text="Continuar"
        onPress={() => navigation.navigate('PersonalInformation2')}
      />
    </Container>
  );
};

export default PersonalInformation;
