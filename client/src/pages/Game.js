import React, { useRef, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { drawRect } from "../assets/labels"; 
import  Axios  from 'axios'




function Game() {
  let history = useHistory() 

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);


  const [loginStatus, setLoginStatus] = useState(false)
  const [playerName, setPlayerName] = useState("")
  
  
  const [startGame, setstartGame] = useState(false) 
  const [counter_timer, setCounter_timer] = useState(10);
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)  
  const [score_label, setScore_label] = useState(0) 
  const [text_label, setText_label] = useState("") 
  const [store_scores, setStore_score] = useState([]) 



  var arr = ["No" , "Yes", "Thank You", "I Love You"];


  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response.data) 
      if (response.data.loggedIn === true) {
        Axios.defaults.withCredentials = true;
        setLoginStatus(response.data.loggedIn);
        setPlayerName(response.data.user[0].username) 
        counter_timer > 0 && setTimeout(() => setCounter_timer(counter_timer - 1), 1000);
      }
    });
  }, [counter_timer]);



  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }





  let shuffling_word = shuffle(arr)[0]




  const runCoco = async () => {
    
    const net = await tf.loadGraphModel('https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json')
    
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      console.log(obj)

      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()

      
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)});
      
      setScore_label(drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)[0])
      setText_label(drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)[1])
      
      console.log("score: ", drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)[0]) 
      console.log("text: ", drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)[1])

      setStore_score([...drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)[1]])

      //console.log("word shuffle: ", shuffling_word) 
      if (drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)[1] === arr[0]) {
        console.log("called check word")
        if (drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)[0] >= 0.90) {
          console.log("score increases: ", count)
            setCount(count + 1)
        }
      }



      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);

  console.log(store_scores) 

  return (
    <div>
        <h5>Sign this word: {shuffling_word} </h5>
        <h5>Time Left: { counter_timer } sec. </h5>
        <h5>Current Count: {count} </h5>
        <h5>High Score: {score}</h5>
          {
            loginStatus === true? (
              counter_timer === 0? (
                <div>
                  <h1>Game ends!</h1> 
                  <h5>You Score is {score} </h5> 
                  <h1>Hi {playerName}</h1> 
                </div> 
              ) : (
                <div>
                <div className="webcam">
                  <Webcam
                      ref={webcamRef}
                      muted={true} 
                      style={{
                                position: "absolute",
                                marginLeft: "auto",
                                marginRight: "auto",
                                left: 0,
                                right: 0,
                                textAlign: "center",
                                zindex: 9,
                                width: 640,
                                height: 480,
                    }}
                  />

                  <canvas
                    ref={canvasRef}
                    style={{
                              position: "absolute",
                              marginLeft: "auto",
                              marginRight: "auto",
                              left: 0,
                              right: 0,
                              textAlign: "center",
                              zindex: 8,
                              width: 640,
                              height: 480,
                            }}
                    />
                  </div>
                  <h1>Hi {playerName}</h1> 
                </div> 
              )
            ) : (
              <div> 
                <h1>Login or Register to play</h1>
                <button onClick={() => history.push("/login")}>Login In</button>
                <button onClick={() => history.push("/signup")}>Sign Up</button>
              </div> 
            )
          }
         
        <button onClick={() => history.push("/")}>Home</button> 
    </div>
  )
}

export default Game