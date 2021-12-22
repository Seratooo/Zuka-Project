import React,{useState} from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Text, ContainerInformation } from "./style";



const Authentication = () => {
    const [number, setNumber] = useState(0)
    return (
        <Container>
            <ContainerInformation>
                <Input label="E-mail" placeholder="sample@email.com" />
                <Input label="Telefone" placeholder="" />
                {/* <PhoneInput /> */}
            </ContainerInformation>
            <Text>Submetendo nesta aplicação você autoriza e confirma partilhar informações seguindo os nossos <Text term>Termos e Condições</Text></Text>
            <Button text="Enviar a verificação do código" onPress={() => console.warn('Angleu')} />
        </Container>
    )
}

export default Authentication;