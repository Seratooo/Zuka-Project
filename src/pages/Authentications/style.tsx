import styled from 'styled-components/native';

interface IText {
  term?: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0px 16px;
`;

export const ContainerInformation = styled.View`
  margin-top: 50px;
  width: 100%;
  padding: 10px 20px;
`;

export const Text = styled.Text<IText>`
  position: absolute;
  bottom: 120px;
  width: 100%;
  font-size: 14px;
  text-align: center;
  color: ${props => (props.term ? '#E1B860' : '#717E95')};
`;
