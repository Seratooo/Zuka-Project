import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { TextDescription, Title, TopBar } from '../../Elements/Elements';
import { Container, ContainerInformation, Content } from './style'
import axios from 'axios';
import AuthContext from '../../context/auth';

const TransferBank = () => {
    const navigation = useNavigation();
    const context = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const id = context.account.id_account;
    async function press() {

        const response = await axios.post('https://zuka-app.herokuapp.com/account/transation/', {
            amount: Number.parseFloat(amount),
            description,
            type:"Transfer",
            to_user: id,
            email,
            coin:"AOA"
        });

        if (response.data)
            navigation.navigate('auth');
        else
            console.log("Erro na aplicação");
    }
    return (
        <Container>
            <TopBar>
                <Icon name="arrow-left"
                    size={30}
                    color="#000"
                    onPress={() => navigation.goBack()}
                />
            </TopBar>
            <Title>Informações de Transerência</Title>
            <TextDescription>
                Transfira dinheiro para qualquer pessoa
            </TextDescription>
            <ContainerInformation>
                <Input placeholder='Valor do Deposito' label='Digite o Valor' number value={amount}
                    onChangeText={(text: React.SetStateAction<string>) => setAmount(text)}
                />
                <Input placeholder='Email do destinatario' label='Digite o email' value={email}
                    onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
                />
                <Input placeholder='Descrição' label='Descrição' value={description}
                    onChangeText={(text: React.SetStateAction<string>) => setDescription(text)}
                />
            </ContainerInformation>
            <Button text="Avançar" onPress={press} />
        </Container>
    )
}

export default TransferBank;