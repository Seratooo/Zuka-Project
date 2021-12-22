import React from 'react'
import {Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { TextTitle, TextTitleThin, FlexContentRow, TextAction, SearchBarView, ContentView, TextSection, FlexColum, TextSimple} from './style';
import {TextInput} from 'react-native-paper'
import LogoNFC from '../../assets/Vector.png'
import CardFunctional from '../../Components/cardFunctional/indext';
const Payments = () =>{

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

        <ContentView>
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
            <TextSimple>Rafael</TextSimple>
            
            </FlexColum>
            </>
          )}
          />
        </ContentView>

        <TextTitleThin>Pagamento</TextTitleThin>
        
        <CardFunctional img={LogoNFC} Title="NFC" />
        <CardFunctional img={LogoNFC} Title="Partilhado" />
        <CardFunctional img={LogoNFC} Title="QR" />

      </>
  );
};

export default Payments