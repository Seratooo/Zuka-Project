import React from 'react'
import {Text, Image, View} from 'react-native'
import { TopBar } from '../../Elements/Elements';
import Icon from 'react-native-vector-icons/Feather'
import { TextTitlePage, FlexContent, FlexRow, TextName, TextSimple, ContainerDeposit, TextMoney } from './style';
import CreditCard from '../../Components/creditCard';

const Accont = () =>{

  return(
    <>
     <TopBar>
        <TextTitlePage>Cartões</TextTitlePage>
        <Icon name="settings" size={30} color="#000" />
      </TopBar>

      <FlexContent>
      <FlexRow>
        <Image source={require('../../assets/Ellipse1.png')}/>
        <View>
        <TextName>Mateus</TextName>
        <TextSimple>Saldo disponível</TextSimple>
        </View>
      </FlexRow>
      <TextName>320.000KZ</TextName>
    </FlexContent>
    
    <ContainerDeposit>
      <Image source={require('../../assets/money.png')} />
      <TextMoney>Depositar</TextMoney>
    </ContainerDeposit>

    <CreditCard />
    </>
  )
}

export default Accont;