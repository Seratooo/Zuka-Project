import React, { FC, useContext, useEffect, useState } from "react";
import { Container, Text, ContainerInformation, Image } from './style';
import { useNavigation } from '@react-navigation/native';
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import AuthContext from "../../context/auth";
import { Dimensions, Modal } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated"; { }

const BACKGROUND_COLOR = '#44486F';
const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#A6E1FA'

const { width, height } = Dimensions.get('window');
const CIRCLE_LENGTH = 1000;
const R = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);



const Login: FC = () => {
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
            console.warn('missing data');
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


    const progress = useSharedValue(0);
    useEffect(() => {
        progress.value = withTiming(1, { duration: 5000 });
    }, []);

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
    }));

    return (

        <Container>
            <Modal
                transparent={true}
                visible={stateLoad}
            >



            </Modal>



            <Modal
                animationType="fade"
                transparent={true}
                visible={stateLoad}

            >
                <Svg style={{ backgroundColor: '#000000aa', flex: 1 }}>
                    <Circle
                        cx={width / 2}
                        cy={height / 2}
                        r={R}
                        stroke={BACKGROUND_STROKE_COLOR}
                        strokeWidth={30}
                    />
                    <AnimatedCircle
                        cx={width / 2}
                        cy={height / 2}
                        r={R}
                        stroke={STROKE_COLOR}
                        strokeWidth={15}
                        strokeDasharray={CIRCLE_LENGTH}
                        animatedProps={animatedProps}
                        strokeLinecap={'round'}
                    />
                </Svg>


            </Modal>
            <Text title>Zuka</Text>
            <ContainerInformation>
                {/* <Image source={require('../../assets/circleLoop.png')} width={2} /> */}
                <Input label="E-mail" placeholder="sample@email.com"
                    value={email}
                    onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
                />
                <Input label="Password" placeholder="*********"
                    value={password}
                    onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
                />
            </ContainerInformation>
            <Button text="Login" onPress={() => { signIn(email, password); setStateLoad(true) }} />
        </Container>


    )
}

export default Login;