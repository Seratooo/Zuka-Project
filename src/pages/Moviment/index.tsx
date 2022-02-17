import React from 'react'
import {ScrollView } from 'react-native'
import { TextTitle} from './style';
import CardFunctional from '../../Components/cardFunctional/indext';
import { useNavigation } from '@react-navigation/native';

const Transactions = () =>{
  const navigation = useNavigation();
  return(
      <ScrollView>
        <TextTitle>Transações</TextTitle>      
        
        <CardFunctional img={require('../../assets/Vector.png')} Title="NFC" press={()=>navigation.navigate('submitPayment')}/>
        <CardFunctional img={require('../../assets/Vector.png')} Title="Partilhado" press={()=>navigation.navigate('submitPayment')}/>
        <CardFunctional img={require('../../assets/Vector.png')} Title="QR" press={()=>navigation.navigate('submitPayment')}/>
        <CardFunctional img={require('../../assets/Vector.png')} Title="QR" press={()=>navigation.navigate('submitPayment')}/>
        <CardFunctional img={require('../../assets/Vector.png')} Title="QR" press={()=>navigation.navigate('submitPayment')}/>

        </ScrollView>
  );
};

export default Transactions