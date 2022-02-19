import React, { useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Text, ContainerInformation, ContainerFooter } from "./style";
import Axios from "../../services/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";


type RootStackParamList = {
    Objecto: object;
};
type userDados = {
    id_user: string;
    name: string;
    email: string;
    dataBirthday: string;
    password: string;
    confirmPassword: string;
}
const RootStack = createNativeStackNavigator<RootStackParamList>();

const Authentication = () => {
    const [number, setNumber] = useState(0)
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [dataBirthday, setDataBirthDay]= useState('');
    const [password, setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');

    const UserData ={
        name,
        email,
        dataBirthday,
        password,
        confirmPassword,
    }

    function registarUser(){

       Axios.post('user',UserData).then((Response)=>{
       const id_user=Response.data.id_user;
        
           //console.warn(Response.data.id_user);
           navigation.navigate('Verification',{
            id_user,
            name,
            email,
            dataBirthday,
            password,
            confirmPassword,
        }); 
       })
    }

    return (
        <Container>
            <ContainerInformation>
                <Input label="E-mail" placeholder="sample@email.com" setText={setEmail} />
                <Input label="Nome" placeholder="Angleu Sample" setText={setName} />
                <Input label="Data Nascimento" placeholder="29/02/2000" setText={setDataBirthDay} />
                <Input label="Password" placeholder="*********" setText={setPassword} />
                <Input label="Confirme a Password" placeholder="*********" setText={setConfirmPassword} />
                {/* <Input label="Telefone" placeholder="" /> */}
                {/* <PhoneInput /> */}
            </ContainerInformation>
            <ContainerFooter>
                <Text>Submetendo nesta aplicação você autoriza e confirma partilhar informações seguindo os nossos <Text term>Termos e Condições</Text></Text>
                <Button text="Enviar a verificação do código" onPress={()=>
                     registarUser()                     
                     } />
            </ContainerFooter>
        </Container>
    )
}

export default Authentication;