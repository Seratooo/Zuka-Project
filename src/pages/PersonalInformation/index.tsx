import React, {FC} from 'react';
import {Container, ContainerInformation} from './style';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {TextDescription, Title} from '../../Elements/Elements';
const PersonalInformation: FC = () => {
  return (
    <Container>
      <Title>Informações Pessoais</Title>
      <TextDescription>
        As informações pessoais são usadas para validação na aplicação
      </TextDescription>
      <ContainerInformation>
        <Input label="Nome Completo" placeholder="" />
        <Input label="Natural" placeholder="" />
        <Input label="Data de aniversario" placeholder="" />
        <Input label="Genero" placeholder="" />
      </ContainerInformation>
      <Button
        text="Continuar"
        onPress={() => console.warn('Continuar a Candidatura')}
      />
    </Container>
  );
};

export default PersonalInformation;
