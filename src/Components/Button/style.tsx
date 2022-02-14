import styled from "styled-components/native";

export const ContainerButton = styled.Pressable`
    width: 100%;
    background-color: ${(props: { text: string; }) => props.text === 'Login' ? '#fff':'#E1B860' };
    border-radius: 10px;
    padding: 20px 50px;
    margin-bottom: 20px;
    border: 2px solid ${(props: { text: string; }) => props.text === 'Login' ? '#E1B860':'#fff' };

`;
export const Text = styled.Text`
    color: ${(props: { text: string; }) => props.text === 'Login' ? '#E1B860':'#fff' };
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    

`;
