import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, FlatList, View,RefreshControl } from 'react-native';
import { FlexRow, ContentView, TextName, FlexContent, TextSection } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardMov from '../../Components/cardMov';
import Saldo from './Components/Saldo';
import AuthContext from '../../context/auth';
//import axios from 'axios';


const Menu = () => {


  const transations = [{
    id: '1',
    type: 'Rra',
    amount: '1000',
  }, {
    id: '2',
    type: 'dwe',
    amount: '1000',
  }, {
    id: '3',
    type: 'dsa',
    amount: '1000',
  }, {
    id: '4',
    type: 'sda',
    amount: '1000',
  }, {
    id: '5',
    type: 'dasd',
    amount: '1000',
  }, {
    id: '6',
    type: 'dasd',
    amount: '1000',
  }, {
    id: '7',
    type: 'dasd',
    amount: '1000',
  }, {
    id: '8',
    type: 'dasd',
    amount: '1000',
  }]

  const navigate = useNavigation();
  const context = useContext(AuthContext);
  //const [transations, setTransations] = useState(Array<Object>())
  const [accounts, setAccounts] = useState({})
  const { id_user } = context.user;
  let { setAccount } = context;

  // useEffect(() => {

  //   async function init() {
  //     const response = await axios.get(`https://zuka-app.herokuapp.com/account/${id_user}`);
  //     setAccounts(response.data);
  //     if(accounts.id_account){
  //       const responseTransation = await axios.get(`https://zuka-app.herokuapp.com/account/transation/${accounts.id_account}`);
  //       setTransations(responseTransation.data);

  //     }

  //     // console.warn(account)
  //     setAccount(accounts);
  //   }
  //   init()
  // }, [accounts]);


  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
//        Code to Peak Information    //
//                                    //
//                                    //
//                                    //
//                                    //
//                                    //
//                                    //
//                                    //
//                                    //

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
      <FlexContent>
        <FlexRow onPress={() => navigate.navigate('Settings')}>
          <Image source={require('../../assets/Ellipse1.png')} />
          <TextName>Olá, {context.user.name}</TextName>
        </FlexRow>
        <Icon name='qrcode' size={30} color={'#b57d03'} onPress={() => navigate.navigate('qr')}></Icon>
      </FlexContent>

      <TextSection>Saldo</TextSection>
      <ContentView>
        <FlatList
          data={[accounts]}
          horizontal
          renderItem={({ index, item }) => (<Saldo key={index} amount={item.balance} coin={item.coin} />)}
        />
      </ContentView>

      <TextSection>Movimentos</TextSection>
      <View>
        <FlatList
          data={transations}

          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }

          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <CardMov
              key={index}
              img={require('../../assets/Ellipse1.png')}
              Title={item.type}
             // Description={item.created_at}
              price={item.amount}
            />
          )}
        />
      </View>

    </>
  )
}

export default Menu;