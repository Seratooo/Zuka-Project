import React from 'react'
import {Text, Image} from 'react-native'
import { ViewDefault, FlexColumn, TextName, TextDescription, FlexRow, TextPrice, Content } from './style'

interface data {
  img: any;
  Title: String;
  Description: String;
  price: String;
}

const cardMov = (props: data) =>{
  return (
     <Content>
      <ViewDefault>  
        
        <FlexRow>
        <Image 
         source={props.img}
         width={80}
         height={80}
         /> 
         <FlexColumn>
            <TextName>{props.Title}</TextName>
            <TextDescription>{props.Description}</TextDescription>
         </FlexColumn>
         </FlexRow>
         
         <TextPrice>{props.price} </TextPrice>
      </ViewDefault>
      </Content>
  )
}

export default cardMov;