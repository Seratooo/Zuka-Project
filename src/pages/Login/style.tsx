import styled from "styled-components/native";
import { StyleSheet } from 'react-native';


export const style = StyleSheet.create({
    container: {
        padding:25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
        height:100,
        


    },
    errorContent:{
        backgroundColor: 'red',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        width:100,
        height:100,

    },
    buttonClose: {

    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },


});
interface IText {
    title?: boolean
}
export const Container = styled.View`
     flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 50px 16px;
`;

export const ContainerInformation = styled.View`
    width: 100%;
  padding: 10px 20px;
`

export const Image = styled.Image`
    /* margin-top: -350px; */
`

export const Text = styled.Text<IText>`
    color: ${props => props.title ? '#E1B860' : '#717E95'};
    font-size: ${props => props.title ? '50px' : '20px'};
`
