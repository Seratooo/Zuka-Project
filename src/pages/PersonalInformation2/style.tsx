import styled from 'styled-components/native';

interface IText {
  title?: boolean;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const ContainerInformation = styled.View`
  margin-top: 50px;
  width: 100%;
  padding: 10px 20px;
  flex-direction: column;
`;
