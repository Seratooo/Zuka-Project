import React, { FC, useContext, useEffect, useState } from "react";
import { Container, Text, ContainerInformation, Image } from './style';
import {useNavigation} from '@react-navigation/native';
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import AuthContext from "../../context/auth";


const Login: FC = () => {
    const navigation = useNavigation();
    const context = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(()=> {
        if(context.signed)
            navigation.navigate('auth');
    },[])

    async function signIn(){
        if(email === '' || password === ''){
            console.warn('missing data');
            return
        }
        const response = await context.logar(email, password);
        console.log(response);
        // if(response)
        //     navigation.navigate('auth')
        
    }

    return (
        <Container>
                <Text title>Zuka</Text>
            <ContainerInformation>
                {/* <Image source={require('../../assets/circleLoop.png')} width={2} /> */}
                <Input label="E-mail" placeholder="sample@email.com" 
                        value={email} 
                        onChangeText={(text: React.SetStateAction<string>) => setEmail(text) }
                />
                <Input label="Password" placeholder="*********" 
                        value={password} 
                        onChangeText={(text: React.SetStateAction<string>) => setPassword(text) }
                />
            </ContainerInformation>
            <Button text="Login" onPress={()=> signIn(email, password)}/>
        </Container>
    )
}

export default Login;