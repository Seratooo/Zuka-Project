import React from 'react'
import { Container, TextName, FlexRowElemts } from './style'
import {Switch} from 'react-native'

const CreditCard = () =>{

  return(
      <>
      <Container>
      
      <FlexRowElemts>
        <Switch/>
        <TextName>Banco da Lua</TextName>
      </FlexRowElemts>
      
      </Container>
      </>
  )
}

export default CreditCard