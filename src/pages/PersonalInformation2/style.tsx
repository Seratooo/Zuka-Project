import styled from 'styled-components/native';

interface IText {
  title?: boolean;
}

export const Container = styled.View`
  flex:1;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  background-color: #fff;
`;

export const ContainerInformation = styled.View`
  margin-top: 50px;
  width: 100%;
  padding: 10px 20px;
  flex-direction: column;
`;
