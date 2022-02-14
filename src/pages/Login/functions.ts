import {useContext,} from 'react';
import AuthContext from "../../context/auth";
import {useNavigation} from '@react-navigation/native';

export async function signIn(email: string, password: string){
    const context = useContext(AuthContext);
    const navigation = useNavigation();
    if(email === '' || password === ''){
        console.warn('missing data');
        return
    }

    const response = await context.logar(email, password);
    if(response)
        navigation.navigate('auth')
    
}