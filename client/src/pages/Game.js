import React from 'react'
import { useHistory } from 'react-router-dom'

function Game() {
  let history = useHistory() 

  return (
    <div>
        <h5>Sign this word: </h5>
        <h5>Time Left:</h5>
        <h5>Current Count: </h5>
        <h5>High Score: </h5>
        <button onClick={() => history.push("/")}>Home</button> 
    </div>
  )
}

export default Game