import React,{useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Components/Button';
import { Container} from './style'
import AuthContext from '../../context/auth';
import { Image, Text } from 'react-native';

const PageQR = () => {
    const navigation = useNavigation();
    const context = useContext(AuthContext);
    const id = context.account.id_account;
    console.warn(context.payment);
    return (
        <Container>
        <Text
            style={{
                marginVertical: 20,
                color: '#444',
                fontWeight: 'bold',
                fontSize: 18
            }}
        >Ler o código para efectuar pagamento</Text>
            <Image source={{uri: `https://api.qrserver.com/v1/create-qr-code/?data=${JSON.stringify(context.payment)}&amp;size=250x250`}}
            style={{
                width:250,
                height: 250,
                marginVertical: 20,
            }}
            
            />
            <Button text="Confirmar" onPress={() => navigation.navigate('menu')} />
        </Container>
    )
}

export default PageQR;