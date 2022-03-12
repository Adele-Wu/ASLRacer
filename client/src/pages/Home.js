import React from 'react'
import { useHistory } from 'react-router-dom'
import Game from './Game'

function Home() {
  let history = useHistory() 
  return (
    <div>
        <h1>Home Page</h1> 
        <button onClick={() => history.push("/login")}>Login In</button>
        <button onClick={() => history.push("/signup")}>Sign Up</button>
        <button onClick={() => history.push("/game")}>Play</button> 

    </div>
  )
}

export default Home