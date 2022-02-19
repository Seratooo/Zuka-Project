import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, FlatList, View } from 'react-native';
import { FlexRow, ContentView, TextName, FlexContent, TextSection } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardMov from '../../Components/cardMov';
import Saldo from './Components/Saldo';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamListBottomTab } from '../../routes/app.routes';


type Props = NativeStackScreenProps<RootStackParamListBottomTab, 'menu'>;

const Menu = ({route}:Props) => {

  const {
    id_user,
    name,
    email,
    dataBirthday,
    password,
    confirmPassword,
    country,
    city,
    street
  } = route.params

  const navigate = useNavigation();

  return (
    <>
      <FlexContent>
        <FlexRow onPress={() => navigate.navigate('Settings')}>
          <Image source={require('../../assets/Ellipse1.png')} />
          <TextName>Olá, {name}</TextName>
        </FlexRow>
        <Icon name='qrcode' size={30} color={'#b57d03'} ></Icon>
      </FlexContent>

      <TextSection>Saldo</TextSection>
      <ContentView>
        <FlatList
          data={[{
            amount: '1000',
            coin: 'usd'
          }, {
            amount: '100',
            coin: 'usd'
          },
          {
            amount: '',
            coin: ''
          }
          ]}
          horizontal
          renderItem={({ index, item }) => <Saldo key={1} amount={item.amount} coin={item.coin} />}
        />
      </ContentView>

      <TextSection>Movimentos</TextSection>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 8, 9, 10]}
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