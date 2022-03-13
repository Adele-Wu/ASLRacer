import React, { useState, useEffect }from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import './Home.css';

function Home() {
  let history = useHistory() 

  const [loginStatus, setLoginStatus] = useState(false)
  const [getPlayers, setgetPlayers] = useState([]) 
  const [getScores, setScores] = useState([]) 

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response.data) 
      if (response.data.loggedIn === true) {
        Axios.defaults.withCredentials = true;
        setLoginStatus(response.data.loggedIn);
      }
    });
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      console.log(response) 
      setgetPlayers(response.data.map((x) => x.username )) 
      setScores(response.data.map((x) => x.scores )) 

    })
  }, []);

  return (
    <div>
        {/* <h1>Home Page</h1>  */}
          <div className='section1'>
          <div className='accountHeader'>
            {
              loginStatus === false? (
                  <>
                      <button onClick={() => history.push("/login")}>Log In</button>
                      <button onClick={() => history.push("/signup")}>Sign Up</button>
                  </> 
              ): (
                <>
                  // TODO: display user
                 </> 
              )
            }
          </div>

            <h1>
              Want to learn American Sign Language in a fun and engaging way?
            </h1>
            <div className='flexbox'>
              <div>
                <h4>
                  ASL Racer is a game where you use American Sign Language to challenge yourself to learn sign language.
                </h4>
                <button className='playButton' onClick={() => history.push("/game")}>Play</button>
              </div>

              <img className='asl_pic' 
                src="https://cdn.discordapp.com/attachments/754451242784129215/952290511933309000/ASL.PNG" />
            </div>
          </div>

        <div className='section2 center'>
          <h1 className='centerHS hsText'>High Scores</h1>
          {
            getPlayers.map((name) => {
              return (
                <>
                  <h5>{name}</h5> 
                </>
              )
            })
          }
          {
             getScores.map((scores) => {
              return (
                <>
                  <h5>{scores}</h5> 
                </>
              )
            })
          }
          <img className='centerTrophy' width="300" height="250" 
            src="https://cdn.discordapp.com/attachments/751224555267162193/952110054381875250/advantage-trophy-logo.png" />
        </div>
    </div>
  )
}

export default Home