import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Menu from "../pages/menu";
// import Transfers from "../pages/Transfers";
// import Payment from '../pages/Payments'
import Accont from "../pages/Accont";
import Moviment from "../Sub-Pages/Moviment";

const Tap = createBottomTabNavigator();

const AppRoute: React.FC = () => {
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
                component={Menu} />
            <Tap.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Feather name="repeat" size={24} color='#1C1C1E' />,
                    unmountOnBlur: true
                }}
                name="Moviment"
                component={Moviment} />

            <Tap.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: () => <AntDesign name="creditcard" size={24} color='#1C1C1E' />
                }}
                name="account"
                component={Accont} />
        </Tap.Navigator>
    )
}

export default AppRoute;