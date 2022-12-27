import './App.css'
import UserCard from './components/UserCard'
import users from "./data/users.json"
import { useState, useEffect } from 'react'

function App() {

  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]

  const randomIndexUsers = Math.floor( Math.random() * users.length )
  const randomIndexColors = Math.floor( Math.random() * colors.length )

  const [ indexUser, setIndexUser ] = useState(randomIndexUsers)
  const [ color, setColor ] = useState(colors[randomIndexColors])

  document.body.style.backgroundColor = color

  const changeIndex = () => {
    const newIndexUsers = Math.floor( Math.random() * users.length )
    setIndexUser(newIndexUsers)
  }

  useEffect( () => {
    const newIndexColors = Math.floor( Math.random() * colors.length )
    const newColor = colors[newIndexColors]
    setColor(newColor)
  }, [ indexUser ] )
  
  return (
    <div className="App">
      <UserCard 
        userData = { users[indexUser] }
        randomColor = { color }
      />
      <button onClick={ () => changeIndex() }><i className="fa-solid fa-shuffle"></i></button>
    </div>
  )
}

export default App
