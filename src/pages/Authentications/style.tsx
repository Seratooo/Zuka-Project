import styled from 'styled-components/native';

interface IText {
  term?: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 50px 16px;
`;

export const ContainerInformation = styled.View`
  /* margin-top: 100px; */
  width: 100%;
  padding: 10px 20px;
`;

export const ContainerFooter = styled.View`
  /* flex: 1; */
  align-items: center;

`

export const Text = styled.Text<IText>`
  font-size: 14px;
  text-align: center;
  /* margin-bottom: 30px; */
  color: ${props => (props.term ? '#E1B860' : '#717E95')};
`;
