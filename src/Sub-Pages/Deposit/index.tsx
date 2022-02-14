import React,{useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { TextDescription, Title, TopBar } from '../../Elements/Elements';
import { Container, ContainerInformation, Content } from './style'
import axios from 'axios';
import AuthContext from '../../context/auth';

const Deposit = () => {
    const navigation = useNavigation();
    const context = useContext(AuthContext);
    const [coin, setCoin] = useState('');
    const [amount, setAmount] = useState('');
    const id = context.account[0].id_account;
    async function press(){

       const response = await axios.post('https://zuka-app.herokuapp.com/account/deposit',{
        id_account: id,
        amount: Number.parseFloat(amount),
        coin
       });

       if(response.data)
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
                {/* <Input placeholder='Digite o nome' label='Nome Completo' />
                <Input placeholder='Digite número do cartão' label='Número do Cartão' number />
                <Content>
                    <Input placeholder='Digite data de expitação' label='Data' number />
                    <Input placeholder='CCV' label='CCV' number />
                </Content> */}
            </ContainerInformation>
            <Button text="Avançar" onPress={press} />
        </Container>
    )
}

export default Deposit;