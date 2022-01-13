import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { TextDescription, Title, TopBar } from '../../Elements/Elements';
import { Container, ContainerInformation, Content } from './style'

const Deposit = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <TopBar>
                <Icon name="arrow-left"
                    size={30}
                    color="#000"
                    onPress={() => navigation.goBack()}
                />
            </TopBar>
            <Title>Informações Pagamento</Title>
            <TextDescription>
                As informações de pagamento são usadas para validação na aplicação
            </TextDescription>
            <ContainerInformation>
                <Input placeholder='Valor do Deposito' label='Digite o Valor' number />
                <Input placeholder='Moeda para o deposito' label='Moeda' />
                <Input placeholder='Digite o nome' label='Nome Completo' />
                <Input placeholder='Digite número do cartão' label='Número do Cartão' number />
                <Content>
                    <Input placeholder='Digite data de expitação' label='Data' number />
                    <Input placeholder='CCV' label='CCV' number />
                </Content>
            </ContainerInformation>
            <Button text="Avançar" onPress={() => null} />
        </Container>
    )
}

export default Deposit;