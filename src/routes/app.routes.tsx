import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Menu from "../pages/menu";
// import Transfers from "../pages/Transfers";
// import Payment from '../pages/Payments'
import Accont from "../pages/Accont";
import Moviment from "../Sub-Pages/Moviment";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./auth.routes";

type Props = NativeStackScreenProps<RootStackParamList, 'auth'>;

const Tap = createBottomTabNavigator<RootStackParamListBottomTab>();

export type RootStackParamListBottomTab = {
    menu: {
        id_user: string;
        name: string;
        email: string;
        dataBirthday: string;
        password: string;
        confirmPassword: string; 
        country: string;
        city: string;
        street: string;
        balance: number;
    };
    Moviment:{
        id_user: string;
        name: string;
        email: string;
        dataBirthday: string;
        password: string;
        confirmPassword: string; 
        country: string;
        city: string;
        street: string;
        balance: number;
    };
    account:{
        id_user: string;
        name: string;
        email: string;
        dataBirthday: string;
        password: string;
        confirmPassword: string; 
        country: string;
        city: string;
        street: string;
        balance: number;
    };

  };
const AppRoute = ({route}:Props) => {
    
    const {
        id_user,
        name,
        email,
        dataBirthday,
        password,
        confirmPassword,
        country,
        city,
        street,
        balance
    } = route.params

    return (
        <Tap.Navigator screenOptions={{
            tabBarActiveTintColor: '#E1B860',
        }}>
            <Tap.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Feather name="grid" size={24} color='#E1B860' />,
                }}
                name="menu"
                component={Menu}
                initialParams={{
                    id_user,
                    name,
                    email,
                    dataBirthday,
                    password,
                    confirmPassword,
                    country,
                    city,
                    street,
                    balance
                }} 
                
                />
            <Tap.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Feather name="repeat" size={24} color='#1C1C1E' />,
                    unmountOnBlur: true
                }}
                name="Moviment"
                component={Moviment} 
                initialParams={{
                    id_user,
                    name,
                    email,
                    dataBirthday,
                    password,
                    confirmPassword,
                    country,
                    city,
                    street,
                    balance
                }} 
                />

            <Tap.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: () => <AntDesign name="creditcard" size={24} color='#1C1C1E' />
                }}
                name="account"
                component={Accont} 
                initialParams={{
                    id_user,
                    name,
                    email,
                    dataBirthday,
                    password,
                    confirmPassword,
                    country,
                    city,
                    street,
                    balance
                }} 
                />
        </Tap.Navigator>
    )
}

export default AppRoute;