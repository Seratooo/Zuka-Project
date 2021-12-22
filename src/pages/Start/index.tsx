import React, { FC } from "react";
import { Container, Text, ContainerInformation, Image } from './style';
import Logo from '../../assets/circleLoop.png';
import Button from "../../Components/Button";


const Start: FC = () => {
    return (
        <Container>
            <ContainerInformation>
                <Image source={Logo} width={2} />
                <Text title>Zuka</Text>
                <Text>Fazendo a sua vida mais fácil</Text>
            </ContainerInformation>
            <Button text="Continuar" onPress={() => console.warn('') }/>
        </Container>
    )
}

export default Start;