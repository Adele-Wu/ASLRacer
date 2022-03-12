import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
  let history = useHistory() 
  return (
    <div>
        <h1>Home Page</h1> 
        <button onClick={() => history.push("/login")}>Login In</button>
        <button onClick={() => history.push("/signup")}>Sign Up</button>
        <button onClick={() => history.push("/game")}>Play</button>
        <img src="https://cdn.discordapp.com/attachments/751224555267162193/952110054381875250/advantage-trophy-logo.png" />
        <h1>High Scroes</h1>

    </div>
  )
}

export default Home