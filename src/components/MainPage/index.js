import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  MainContainer,
  YellowContainer,
  BlackContainer,
  CountDiv,
  CharDiv,
  InputDiv,
  InputField,
  ButtonAdd,
  DynamicContainer,
  BackGroundImage,
  UnOrdered,
} from './styledComponents'

const MainPage = () => {
  const [list, setList] = useState([])
  const [text, setText] = useState('')
  const setCharacter = e => {
    setText(e.target.value)
  }

  const setObject = event => {
    event.preventDefault()
    const createdObject = {
      word: text,
      id: uuidv4(),
      wordLength: text.length,
    }
    setList(prevState => [...prevState, createdObject])
    setText('')
  }
  return (
    <MainContainer>
      <YellowContainer>
        <CountDiv>
          <h1>Count the characters like a Boss</h1>
        </CountDiv>
        <DynamicContainer>
          {list.length ? (
            <UnOrdered>
              {list.map(eachWord => (
                <li key={eachWord.id}>
                  <p>
                    {eachWord.word} :- {eachWord.wordLength}
                  </p>
                </li>
              ))}
            </UnOrdered>
          ) : (
            <BackGroundImage
              alt="no user inputs"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            />
          )}
        </DynamicContainer>
      </YellowContainer>
      <BlackContainer>
        <CharDiv>
          <h1>rCharacter Counter</h1>
          <InputDiv>
            <form onSubmit={setObject}>
              <InputField
                placeholder="Enter the Characters here"
                onChange={setCharacter}
                value={text}
              />
              <ButtonAdd type="submit">Add</ButtonAdd>
            </form>
          </InputDiv>
        </CharDiv>
      </BlackContainer>
    </MainContainer>
  )
}

export default MainPage
