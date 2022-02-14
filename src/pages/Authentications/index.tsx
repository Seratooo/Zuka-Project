import React, { useState, useContext } from "react";
import { useNavigation, RouteProp } from '@react-navigation/native';
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Text, ContainerInformation, ContainerFooter } from "./style";
import AuthContext from "../../context/auth";
import axios from "axios";


const Authentication = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [dataBirthday, setDatebithday] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const context = useContext(AuthContext);

    // const auth = 

    async function press(){

        try{
            const response = await axios.post('https://zuka-app.herokuapp.com/user',{
                 email,
                 name,
                 dataBirthday,
                 password,
                 confirmPassword: password
             });    

             if(!response.data)
                console.log("Erro")
            else
            context.user = response.data;
            
        }catch(error){
            console.log(error);
        }
        navigation.navigate('PersonalInformation2')
    }

    return (
        <Container>
            <ContainerInformation>
                <Input label="E-mail" placeholder="sample@email.com" 
                        value={email} 
                        onChangeText={(text: React.SetStateAction<string>) => setEmail(text) }
                />

                <Input label="Nome" placeholder="Angleu Sample" 
                 value={name} 
                 onChangeText={(text: React.SetStateAction<string>) => setName(text)}
                />
                <Input label="Data Nascimento" placeholder="1998/02/27" 
                    value={dataBirthday} 
                    onChangeText={(text: React.SetStateAction<string>) => setDatebithday(text)}
                />
                <Input label="Password" placeholder="*********" 
                    value={password} 
                    onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
                />
                {/* <Input label="Telefone" placeholder="" /> */}
                {/* <PhoneInput /> */}
            </ContainerInformation>
            <ContainerFooter>
                <Text>Submetendo nesta aplicação você autoriza e confirma partilhar informações seguindo os nossos <Text term>Termos e Condições</Text></Text>
                <Button text="Enviar a verificação do código" onPress={press} />
            </ContainerFooter>
        </Container>
    )
}

export default Authentication;