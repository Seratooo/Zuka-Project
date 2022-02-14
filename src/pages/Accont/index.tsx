import React, { useContext } from 'react'
import { Text, Image, View } from 'react-native';
import { TopBar } from '../../Elements/Elements';
import { Container, TextTitlePage, FlexContent, FlexRow, TextName, TextSimple, ContainerDeposit, TextMoney } from './style';
import CreditCard from '../../Components/creditCard';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/auth';

const Accont = () => {
  const navigation = useNavigation();
  const context = useContext(AuthContext);
  return (
    <Container>
      <TopBar>
        <TextTitlePage>Cartões</TextTitlePage>
      </TopBar>

      <FlexContent>
        <FlexRow>
          <Image source={require('../../assets/Ellipse1.png')} />
          <View>
            <TextName>{context.user.name}</TextName>
            <TextSimple>Saldo disponível</TextSimple>
          </View>
        </FlexRow>
        <TextName>{context.account[0].balance}KZ</TextName>
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