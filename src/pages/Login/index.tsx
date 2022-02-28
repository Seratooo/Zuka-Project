import React, { FC, useContext, useEffect, useState } from "react";
import { Container, Text, ContainerInformation, Image, style } from './style';
import { useNavigation } from '@react-navigation/native';
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import AuthContext from "../../context/auth";
import { ActivityIndicator, Modal } from "react-native";
import { useBottomModal, BottomModal, BottomModalRef } from 'react-native-lightning-modal';



import { View } from "../../Elements/Elements";
//import Icon from 'react-native-vector-icons/Entypo';






const Login: FC = () => {

    const { dismiss, show, modalProps } = useBottomModal();

    const navigation = useNavigation();
    const context = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        if (context.signed) {
            setStateLoad(false);
            navigation.navigate('auth');
        }
        else {
            setStateLoad(false);
        }
    }, [])

    async function signIn() {
        if (email === '' || password === '') {
            setStateLoad(false);
            setInf('Missing Data');
            show();
            console.warn('Missing data');
            return
        } else if ((email !== '') && (password !== '')) {
            try {
                const response = await context.logar(email, password);
                console.log(response);
            } catch (error) {
                console.log(error);
            }


        }

        // if(response)
        //     navigation.navigate('auth')

    }

    const [stateLoad, setStateLoad] = useState(false);
    const [stateSign, setStateSign] = useState(false);
    const [stateError, setStateError] = useState(false);
    const bottomModalRef = React.useRef < BottomModalRef > null;
    const [inf, setInf] = useState('');

    const callSpinLoad = () => {
        setStateLoad(true);
        signIn(email, password);

    };

    return (


        <Container>

            <Modal
                transparent={true}
                visible={stateLoad}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={100} color={'#E1B860'} />
                </View>
            </Modal>
            <Text title>Zuka</Text>
            <ContainerInformation>
                {/* <Image source={require('../../assets/circleLoop.png')} width={2} /> */}
                <Input label="E-mail" placeholder="sample@email.com"
                    value={email}
                    onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
                />
                <Input

                    label="Password" placeholder="*********"
                    value={password}
                    onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
                />
            </ContainerInformation>
            <Button text="Login" onPress={callSpinLoad} />
            <Button text="modal" onPress={show} />


            <BottomModal animation='spring' backdropStyle='black' height={350} {...modalProps}>
                <View style={style.containerModal} >

                    <View style={style.containerImg} >
                        <Image style={style.imgError} source={require('../../assets/erro.png')} />
                    </View>
                    <View style={style.context}>
                        <Text >
                            Campos vazios para o login
                        </Text>
                    </View>
                    <View style={style.buttonClose}>
                        <Button text="" onPress={dismiss} />

                    </View>

                </View>


            </BottomModal>
        </Container>


    )
}

export default Login;