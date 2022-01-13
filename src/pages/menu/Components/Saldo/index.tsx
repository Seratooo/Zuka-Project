import React from 'react';
import { Container, ContainerLogo, ContainerDescription, Text } from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ISaldo {
    amount?: string;
    coin?: string;
}

const Saldo = ({ amount, coin }: ISaldo) => {
    return (
        <Container>
            <ContainerLogo>
                {!amount || amount === '' && !coin || coin === '' ? <Ionicons name="add-circle-outline" size={32} color="#000" /> : <MaterialCommunityIcons name='currency-usd-circle-outline' size={32} color='#000' />}

            </ContainerLogo>
            <ContainerDescription>
                {!amount || amount === '' && !coin || coin === '' ? <Text>OPEN</Text> : <>
                    <Text>{amount}</Text>
                    <Text>{coin}</Text>
                </>}

            </ContainerDescription>
        </Container>
    )
}

export default Saldo;