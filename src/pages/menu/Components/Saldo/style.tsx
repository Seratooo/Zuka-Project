import styled from 'styled-components/native';


export const Container = styled.Pressable`
    min-width: 112px;
    min-height: 100px;
    justify-content: space-between;
    padding: 5px;
    margin: 10px;
    background-color: #F2F2F7;
    border: 1px solid #525758;
    border-radius: 5px;
`;

export const ContainerLogo = styled.View`
    

`
export const ContainerDescription = styled.View`
    align-items: flex-end;
    margin-bottom: 10px;
    margin-right: 5px;
    
`

export const Text = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #000;
    align-self: flex-end;
`;