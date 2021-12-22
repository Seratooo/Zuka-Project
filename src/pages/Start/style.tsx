import styled from "styled-components/native";

interface IText{
    title?: boolean
}
export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;

export const ContainerInformation = styled.View`
    align-items: center;
    justify-content: center;
`

export const Image = styled.Image`
    margin-top: -350px;
`

export const Text = styled.Text<IText>`
    color: ${props => props.title ? '#E1B860' : '#717E95' };
    font-size: ${props => props.title ? '50px' : '20px' };
`