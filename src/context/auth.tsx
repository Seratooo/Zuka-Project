import React,{createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth'

interface AuthContextData{
    signed: boolean;
    user: object | null;
    signIn() : Promise<void>;
    singOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider : React.FC = ({children}) => {
    const [user, setUser] = useState<object|null>(null)

    useEffect(() => {
        async function loadStorage(){
           const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
           const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

           if(storagedUser && storagedToken){
               setUser(JSON.parse(storagedUser));
           }
        }
        loadStorage()
    },[])

   async function signIn(){
        const response = await auth.signIn()
        // await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        // await AsyncStorage.setItem('@RNAuth:token', response.token);
        // setUser(response.user);
    }
    function singOut(){
        AsyncStorage.clear().then(() => {
            setUser(null);
        })
    }
    return (
        <AuthContext.Provider value={{
            signed: !!user, user, signIn, singOut
        }}>
            {children}
            </AuthContext.Provider>
    )
}
export default AuthContext;
