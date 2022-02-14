import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    padding: 0px 20px;
    /* justify-content: space-between; */
`;

export const TextTitlePage = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: black;
`

export const FlexContent = styled.View `
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  /* padding: 0 10px; */
  margin: 40px 0;
`
export const FlexRow = styled.View `
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
export const TextName = styled.Text `
  font-size: 18px;
  font-weight: bold;
  padding: 0 10px;
  color:#b57d03;
`

export const TextSimple = styled.Text`
  font-size:13px;
  color: #000;
  padding: 0 10px;
`
export const TextMoney = styled.Text`
  font-size:18px;
  color: #000;
  font-weight: bold;
`
export const ContainerDeposit = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding: 25px;
  border: 1px solid black;
  border-radius: 20px;
`