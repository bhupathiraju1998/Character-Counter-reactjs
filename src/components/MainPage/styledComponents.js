import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 30px;
  height: 100vh;
  display: flex;
  flex-direction: row;
`
export const YellowContainer = styled.div`
  background-color: #ffbf1f;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 50%;
`

export const BlackContainer = styled.div`
  background-color: #0f172a;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 5px;
  width: 50%;
`

export const CountDiv = styled.div`
  margin: 10px;
  border-radius: 5px;
  background-color: #ffc533;
  color: #0f172a;
  padding: 15px;
  height: 150px;
`
export const CharDiv = styled.div`
  background-color: #0f172a;
  color: #ffc533;
  padding: 15px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 25px;
`
export const InputField = styled.input`
  width: 80%;
  border-radius: 4px;
  border: none;
  margin-right: 10px;
  padding: 10px;
`
export const ButtonAdd = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #ffc533;
  color: #272c47;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  width: 15%;
`
export const DynamicContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 70%;
`

export const BackGroundImage = styled.img`
  height: 100%;
  width: 100%;
`
export const UnOrdered = styled.ul`
  list-style-type: none;
`
