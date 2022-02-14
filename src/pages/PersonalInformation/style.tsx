import styled from 'styled-components/native';

interface IText {
  title?: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0px 10px;
`;
export const Text = styled.Text<IText>`
  font-size: ${props => (props.title ? '20px' : '16px')};
  /* font-weight: ${props => (props.title ? 'bold' : 'regular')}; */
  color: ${props => (props.title ? '#293345' : '#717E95')};
  text-align: center;
`;

export const ContainerInformation = styled.View`
  margin: 50px 0px;
  width: 100%;
  padding: 10px 20px;
`;
