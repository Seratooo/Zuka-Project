import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Text, ContainerInformation, ContainerFooter } from "./style";



const Authentication = () => {
    const [number, setNumber] = useState(0)
    const navigation = useNavigation();

    return (
        <Container>
            <ContainerInformation>
                <Input label="E-mail" placeholder="sample@email.com" />
                <Input label="Nome" placeholder="Angleu Sample" />
                <Input label="Data Nascimento" placeholder="29/02/2000" />
                <Input label="Password" placeholder="*********" />
                {/* <Input label="Telefone" placeholder="" /> */}
                {/* <PhoneInput /> */}
            </ContainerInformation>
            <ContainerFooter>
                <Text>Submetendo nesta aplicação você autoriza e confirma partilhar informações seguindo os nossos <Text term>Termos e Condições</Text></Text>
                <Button text="Enviar a verificação do código" onPress={() => navigation.navigate('Verification')} />
            </ContainerFooter>
        </Container>
    )
}

export default Authentication;