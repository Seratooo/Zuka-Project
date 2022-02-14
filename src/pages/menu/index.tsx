import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, FlatList, View } from 'react-native';
import { FlexRow, ContentView, TextName, FlexContent, TextSection } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardMov from '../../Components/cardMov';
import Saldo from './Components/Saldo';
import AuthContext from '../../context/auth';
import axios from 'axios';
import { getAccount } from '../../services/auth';




const Menu = () => {

  const navigate = useNavigation();
  const context = useContext(AuthContext);
  const [transations, setTransations] = useState(Array<Object>())
  // const [accounts, setAccounts] = useState(Array<Object>())
  const { id_user } = context.user;
  let { account } = context;
  let accounts: Array<object>;

  useEffect(() => {

    async function init() {
      let url = 'https://zuka-app.herokuapp.com/account/' + id_user;
      console.log(url);
      const response = await axios.get(url);
      console.log(response.data)
    }
    init()
  }, [account.length == 0]);

  // useEffect(() => {
  //   async function init() {
  //     const responseAccount = await getAccount(id_user);
  //     setAccounts(responseAccount);
  //     console.warn(responseAccount)
  //   }

  //   init();
  // }, [accounts])
  // console.warn(accounts)
  return (
    <>
      <FlexContent>
        <FlexRow onPress={() => navigate.navigate('Settings')}>
          <Image source={require('../../assets/Ellipse1.png')} />
          <TextName>Olá, {context.user.name}</TextName>
        </FlexRow>
        <Icon name='qrcode' size={30} color={'#b57d03'} ></Icon>
      </FlexContent>

      <TextSection>Saldo</TextSection>
      <ContentView>
        <FlatList
          data={[{}]}
          horizontal
          renderItem={({ index, item }) => <Saldo key={1} amount={item.balance} coin={item.coin} />}
        />
      </ContentView>

      <TextSection>Movimentos</TextSection>
      <View>
        <FlatList
          data={transations}
          renderItem={({ item, index }) => (
            <CardMov
              key={index}
              img={require('../../assets/Ellipse1.png')}
              Title="KFC"
              Description="13 de Novembro"
              price="2.000 KZ"
            />
          )}
        />
      </View>

    </>
  )
}

export default Menu;