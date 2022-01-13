import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../pages/Start';
import Authentication from '../pages/Authentications';
import VerificationCode from '../pages/VerificationCode';
import PersonalInformation2 from '../pages/PersonalInformation2';
import Transfers from "../pages/Transfers";
import AppRoute from "./app.routes";
import Payments from "../pages/Payments";
import Settings from "../Sub-Pages/Settings";
import Deposit from "../Sub-Pages/Deposit";

const AuthStack = createNativeStackNavigator();


const AuthRoute: React.FC = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="start"
                component={Start}
            />
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="Authentication"
                component={Authentication} />

            <AuthStack.Screen
                options={{ headerShown: false }}
                name="Verification"
                component={VerificationCode} />

            <AuthStack.Screen
                options={{ headerShown: false }}
                name="PersonalInformation2"
                component={PersonalInformation2} />

            <AuthStack.Screen
                options={{ headerShown: false }}
                name="auth"
                component={AppRoute} />
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="transfer"
                component={Transfers} />
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="payment"
                component={Payments} />
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="Settings"
                component={Settings} />
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="Deposit"
                component={Deposit} />
        </AuthStack.Navigator>
    )
}

export default AuthRoute;