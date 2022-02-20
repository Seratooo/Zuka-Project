import styled from "styled-components/native";

interface IText{
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
    color: ${props => props.title ? '#E1B860' : '#717E95' };
    font-size: ${props => props.title ? '50px' : '20px' };
`
