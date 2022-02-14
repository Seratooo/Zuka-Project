import React, { createContext, useState, useEffect, useCallback } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { login, getAddress, getAccount } from '../services/auth';
import axios from 'axios';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    address: object | null;
    account: Array<object>;
    setAccount: Function;
    signIn(newUser: object | null, newAddress: object | null): Promise<void>;
    logar(email: string, password: string): Promise<object>;
    singOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null)
    const [address, setAddress] = useState<object | null>(null)
    const [account, setAccount] = useState<object>({})

    useEffect(() => {

        async function loadStorage() {

            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedAddress = await AsyncStorage.getItem('@RNAuth:address');

            if (storagedUser && storagedAddress) {
                setUser(JSON.parse(storagedUser));
                setAddress(JSON.parse(storagedAddress));
            }
        }
        
        loadStorage()

    }, [(user!==null)]);


    async function signIn(newUser: object | null, newAddress: object | null) {
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(newUser));
        await AsyncStorage.setItem('@RNAuth:address', JSON.stringify(newAddress));

        setUser(newUser);
        setAddress(newAddress);


    }

    async function singOut() {
        await AsyncStorage.clear().then(() => {
            setUser(null);
            setAddress(null);
            setAccount({});
        })
    }

    const logar = async (email: string, password: string) => {
        const response = await login(email, password);
        const { id_user } = response;
        setUser(response);
        if (response) {
            const addressResponse = await getAddress(id_user);
            setAddress(addressResponse);
            const responseAccount = await getAccount(id_user);
            setAccount(responseAccount);
            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response));
            await AsyncStorage.setItem('@RNAuth:address', JSON.stringify(addressResponse));

        }

        return response;
    }

    return (
        <AuthContext.Provider value={{
            signed: (!!user), user, address, account, setAccount,signIn, singOut, logar
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;
