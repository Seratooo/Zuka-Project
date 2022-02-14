import React from 'react'

import {Text,Image} from 'react-native'
import { Content, ContentElemnt,TextTitle } from './style'

interface dados{
  img: any;
  Title: String;
}

const CardFunctional = (props: dados) => {
  return(

    <Content>
       <ContentElemnt>
       <Image source={props.img}/>
       <TextTitle>{props.Title}</TextTitle>
       </ContentElemnt>
    </Content>
  )
}

export default CardFunctional;