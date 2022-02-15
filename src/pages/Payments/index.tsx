import React,{useContext} from 'react'
import {Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { TextTitle, TextTitleThin, FlexContentRow, TextAction, SearchBarView, ContentView, TextSection, FlexColum, TextSimple} from './style';
import {TextInput} from 'react-native-paper'
import CardFunctional from '../../Components/cardFunctional/indext';
import AuthContext from '../../context/auth';
import { useNavigation } from '@react-navigation/native';
// import NfcManager,{NfcTech} from 'react-native-nfc-manager';

const Payments = () =>{
  const context = useContext(AuthContext);
  const navigation = useNavigation();
  // 
  return(
      <>
        <TextTitle>Pagamento</TextTitle>     
        <SearchBarView>
          <TextInput
          label='Nome, número ou email'
          mode="flat"
          theme={{colors: {background: '#F2F2F7'}}}
          underlineColor='#fff'
          dense
          />
        </SearchBarView> 

        {/* <ContentView>
          <FlexContentRow>
            <TextSection>Contactos</TextSection>
            <TextAction>Ver todos</TextAction>
          </FlexContentRow>

          <FlatList
          data={[1,2,3,4,5]}
          horizontal
          renderItem={({item,index})=>(
            <>
            <FlexColum>
            <TouchableOpacity key={index}>
              <Image 
              style={{marginLeft: index ==0 ? 10 : 0, marginRight: 10}}
              source={require('../../assets/Ellipse2.png')}
              width={80}
              height={80}
              />
            </TouchableOpacity>
            <TextSimple>{context.user.name}</TextSimple>
            
            </FlexColum>
            </>
          )}
          />
        </ContentView> */}

        <TextTitleThin>Pagamento</TextTitleThin>
        
        {/* <CardFunctional img={require('../../assets/Vector.png')} Title="NFC" />
        <CardFunctional img={require('../../assets/Vector.png')} Title="Partilhado" /> */}
        <CardFunctional img={require('../../assets/Vector.png')} Title="QR" press={()=>navigation.navigate('submitPayment')}/>

      </>
  );
};

export default Payments