import React, { useState } from "react";
import { NavigationParams, NavigationScreenProp, NavigationState,} from '@react-navigation';
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Text, ContainerInformation, ContainerFooter } from "./style";
import Axios from "../../services/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


type RootStackParamList = {
    Objecto: object;
};

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

       const id_user = Axios.post('user',UserData).then(()=>{
       
        const Data ={
            id_user,
            name,
            email,
            dataBirthday,
            password,
            confirmPassword,
        }
        
           console.warn(Data);
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
                <Input label="E-mail" placeholder="sample@email.com" setText={setName} />
                <Input label="Nome" placeholder="Angleu Sample" setText={setEmail} />
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