import React, { useState } from 'react'
import { Text, Image, View } from 'react-native';
import { TopBar } from '../../Elements/Elements';
import { Container, TextTitlePage, FlexContent, FlexRow, TextName, TextSimple, ContainerDeposit, TextMoney } from './style';
import CreditCard from '../../Components/creditCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamListBottomTab } from '../../routes/app.routes';

type Props = NativeStackScreenProps<RootStackParamListBottomTab, 'account'>;

const Accont = ({route}:Props) => {
  const navigation = useNavigation();
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

  const [myBalance, setMyBalance]=useState(balance ? balance: 0)
  return (
    <Container>
      <TopBar>
        <TextTitlePage>Cartões</TextTitlePage>
      </TopBar>

      <FlexContent>
        <FlexRow>
          <Image source={require('../../assets/Ellipse1.png')} />
          <View>
            <TextName>{name}</TextName>
            <TextSimple>Saldo disponível</TextSimple>
          </View>
        </FlexRow>
        <TextName>{myBalance}KZ</TextName>
      </FlexContent>

      <ContainerDeposit onPress={() => navigation.navigate('Deposit')}>
        <Image source={require('../../assets/money.png')} />
        <TextMoney>Depositar</TextMoney>
      </ContainerDeposit>

      {/* <CreditCard /> */}
    </Container>
  )
}

export default Accont;