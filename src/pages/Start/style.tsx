import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10,
        paddingRight: 10,
    },
    containerInformation: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 150,
    },
    img: {
        marginTop: -350,

    },
    title: {
        color: '#E1B860',
        fontSize: 50,
    },
    bodyText: {
        color: '#717E95',
        fontSize: 20,
    }
});

import styled from "styled-components/native";

interface IText {
    title?: boolean
}
export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 0px 10px;
`;

export const ContainerInformation = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
`

export const Image = styled.Image`
    /* margin-top: -350px; */
`

export const Text = styled.Text<IText>`
    color: ${props => props.title ? '#E1B860' : '#717E95'};
    font-size: ${props => props.title ? '50px' : '20px'};
`