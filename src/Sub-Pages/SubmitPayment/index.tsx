import React,{useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { TextDescription, Title, TopBar } from '../../Elements/Elements';
import { Container, ContainerInformation, Content } from './style'
// import axios from 'axios';
import AuthContext from '../../context/auth';

const SubmitPayment = () => {
    const navigation = useNavigation();
    const context = useContext(AuthContext);
    const [coin, setCoin] = useState('');
    const [amount, setAmount] = useState('');
    const id = context.account.id_account;
    async function press(){
        context.setPayment({
            email: context.user.email,
            coin,
            amount
        })
        navigation.navigate('pageQR');
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
            <Title>Informações Pagamento</Title>
            <TextDescription>
                As informações de pagamento são usadas para validação na aplicação
            </TextDescription>
            <ContainerInformation>
                <Input placeholder='Valor do Deposito' label='Digite o Valor' number value={amount} 
                     onChangeText={(text: React.SetStateAction<string>) => setAmount(text)}
                />
                <Input placeholder='Moeda para o deposito' label='Moeda' value={coin} 
                     onChangeText={(text: React.SetStateAction<string>) => setCoin(text)}
                />
            </ContainerInformation>
            <Button text="Avançar" onPress={press} />
        </Container>
    )
}

export default SubmitPayment;