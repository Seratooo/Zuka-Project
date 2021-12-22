import React from 'react'
import {Image, FlatList, TouchableOpacity, Text, ScrollView} from 'react-native'
import { FlexRow, ContentView, TextName, FlexContent, TextSection, TextSimple, FlexColum} from './style'
import Icon from 'react-native-vector-icons/FontAwesome'
import CardMov from '../../Components/cardMov'
import IgmKFC from '../../assets/Ellipse6.png'

const Menu = () => {

  return(
    <>
    <FlexContent>
      <FlexRow>
        <Image source={require('../../assets/Ellipse1.png')}/>
        <TextName>Olá, Mateus</TextName>
      </FlexRow>
      <Icon name='qrcode' size={30} color={'#b57d03'} ></Icon>
    </FlexContent>
    
    <ContentView>
    <TextSection>Recentes</TextSection>
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
    
    <ScrollView>
      <TextSection>Movimentos</TextSection>
      <FlatList 
      
      data={[1,2,3,4,5,6,8,9,10]}
      renderItem={({item, index})=>(
        <CardMov
        key={index}
        img={IgmKFC}
        Title="KFC"
        Description="13 de Novembro"
        price="2.000 KZ"
        />
      )}
      />
    </ScrollView>
    
    </>
  )
}

export default Menu;