import React, { FC } from "react";
import { Container, Text, ContainerInformation, Image } from './style';
import {useNavigation} from '@react-navigation/native';
import Button from "../../Components/Button";
import AuthContext from "../../context/auth";


const Start: FC = () => {
    const navivgation = useNavigation();
    return (
        <Container>
            <ContainerInformation>
                <Image source={require('../../assets/circleLoop.png')} width={2} />
                <Text title>Zuka</Text>
                <Text>Fazendo a sua vida mais fácil</Text>
            </ContainerInformation>
            <Button text="Continuar" onPress={() => navivgation.navigate('Authentication') }/>
        </Container>
    )
}

export default Start;