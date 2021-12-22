import React from 'react'
import CardFunctional from '../../Components/cardFunctional/indext';
import LogoNFC from '../../assets/Vector.png'
import { Container } from './style';


const moves = () =>{

  return(
       <Container>
        <CardFunctional img={LogoNFC} Title="Transferência" />
        <CardFunctional img={LogoNFC} Title="Pagamento" />
       </Container>
  )
};
export default moves;