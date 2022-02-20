import React, { FC, useContext, useEffect } from "react";
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import Button from "../../Components/Button";
import AuthContext from "../../context/auth";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, interpolate, Extrapolate } from 'react-native-reanimated';
import { Text, View, Image} from 'react-native';



const Start: FC = () => {
    const navivgation = useNavigation();
    const { signed } = useContext(AuthContext);

    const titlePosition = useSharedValue(80);
    const titleOpacity = useSharedValue(0);


    useEffect(() => {
        if (signed)
            navivgation.navigate('auth');

       
        titlePosition.value = withTiming(0, {
            duration: 1000,
            easing: Easing.bounce,
        });
        titleOpacity.value = withTiming(1, {
            duration: 1000,
            easing: Easing.bounce,
        });

    }, [signed],
    );


    
    const titleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: titlePosition.value }],
            opacity: interpolate(titlePosition.value,
                [80, 0],
                [0, 1],
                Extrapolate.CLAMP),
        }
    });


    return (
        <View style={style.container} >
            <View style={style.containerInformation}>
                <View>
                    <Image source={require('../../assets/circleLoop.png')} width={2} />
                </View>
                <Animated.Text style={[style.title, titleStyle]}>Zuka</Animated.Text>
                <Animated.Text style={[style.bodyText, titleStyle]} >Fazendo a sua vida mais fácil</Animated.Text>
            </View>
            <Button text="Login" onPress={() => navivgation.navigate('login')} />
            <Button text="Cadastrar" onPress={() => navivgation.navigate('Authentication')} />
        </View >
    )
}

export default Start;