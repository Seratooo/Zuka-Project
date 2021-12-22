import React from 'react'
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './src/pages/Start';
import Authentication from './src/pages/Authentications';
import VerificationCode from './src/pages/VerificationCode';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './src/pages/menu';
import Accont from './src/pages/Accont';
import Icon from 'react-native-vector-icons/FontAwesome'
import PersonalInformation2 from './src/pages/PersonalInformation2';
import PersonalInformation from './src/pages/PersonalInformation';


// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


// const MyTabs = () =>{
//   return (
//     <Tab.Navigator
//     initialRouteName='Menu'
//     >
//       <Tab.Screen 
//       name="Menu" 
//       component={Menu} 
//       options={{
//         tabBarLabel: 'Menu',
//         tabBarIcon: () => <Icon name='qrcode' size={30} color={'#b57d03'} ></Icon>
//       }}
//       />
//       <Tab.Screen name="Account" component={Accont} />
//     </Tab.Navigator>
//   );
// }

const Routes = () =>{

  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Start'>
    
    <Stack.Screen  options={{headerShown: false}} name="Start" component={Start} />

   {/* <Stack.Screen 
      options={{headerShown: false}} 
      name="Authentication" 
      component={Authentication} />

    <Stack.Screen 
      options={{headerShown: false}} 
      name="Verification" 
      component={VerificationCode} />

    <Stack.Screen 
      options={{headerShown: false}} 
      name="PersonalInformation" 
      component={PersonalInformation} />

    <Stack.Screen 
      options={{headerShown: false}} 
      name="PersonalInformation2" 
      component={PersonalInformation2} /> 

    <Stack.Screen 
      options={{headerShown: false}} 
      name="MeuMenu" 
      component={Menu} />  */}

    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default Routes;