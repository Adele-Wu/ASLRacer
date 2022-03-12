import React, { useState, useEffect }from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

function Home() {
  let history = useHistory() 

  const [loginStatus, setLoginStatus] = useState(false)


  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response.data) 
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.loggedIn);
      }
    });
  }, []);

  return (
    <div>
        <h1>Home Page</h1> 
        {
            loginStatus === false? (
                <>
                    <button onClick={() => history.push("/login")}>Login In</button>
                    <button onClick={() => history.push("/signup")}>Sign Up</button>
                    <button onClick={() => history.push("/game")}>Play</button>
                </> 
            ): (
                <>
                </> 
            )
        }

        <div className='section1'>
          <h1>
            Want to learn American Sign Language in a fun and engaging way?
          </h1>
          <h4>
            ASL Racer is a game where you use American Sign Language to challenge yourself to learn sign language.
          </h4>
          <button onClick={() => history.push("/game")}>Play</button>
          <img width="550" height="250" 
            src="https://cdn.discordapp.com/attachments/754451242784129215/952290511933309000/ASL.PNG" />
        </div>

        <img width="300" height="250" 
          src="https://cdn.discordapp.com/attachments/751224555267162193/952110054381875250/advantage-trophy-logo.png" />
        <h1>High Scroes</h1>

    </div>
  )
}

export default Home