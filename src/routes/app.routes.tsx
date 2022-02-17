import React, { useEffect, useContext} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Menu from "../pages/menu";
import Accont from "../pages/Accont";
import Transactions from "../pages/Moviment";
import AuthContext from '../context/auth';
import axios from "axios";

const Tap = createBottomTabNavigator();

const AppRoute: React.FC = () => {
    const auth = useContext(AuthContext);
    const accounts = Array<Object>()
    const { id_user } = auth.user;


    useEffect(() => {

        async function init() {
            if (!auth.signed) {
                try {
                    await auth.signIn(auth.user,auth.address);
                } catch (error) {
                    console.log(error);
                }
            }
            const response = await axios.get(`https://zuka-app.herokuapp.com/account/${id_user}`);
            auth.account = response.data
        }
        init();
    }, [])
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
                component={Transactions} />

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