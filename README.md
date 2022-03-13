# ASLRacer
A game where you use American Sign Language to challenge yourself to learn sign language.

## Inspiration
We were inspired by the Inclusitivty and Machine Leaning tracks. One of our members came across LinkedIn post about using Machine Learning to detect sign language. Language barriers are real, and it is especially prominent when it comes to sign language, as it is not that common in our society. This creates a gap between people who can't speak or hear and the rest of our society. We aim to use technology to help close that. We hope that ASL Racer will encourage people to learn American Sign Language (ASL) by treating learning as a game. 

## What it does
You may be familiar with Type Racer, an online game around typing. ASL Racer is a similar concept. A word is displayed on the screen and your job is to sign the word. You have 60 seconds to sign as many words as you can. You can track your own high score and compete with others on a global leaderboard.

## How we built it
The sign language portion of the project utilizes Tensorflow Object Detection and Python. We credit much of this part to Nicholas Renotte, a guy that we found on YouTube.
The web portion utilizes HTML, JavaScript, CSS, React, NodeJS, Express, MySql, RTMP (Real Time Messaging Protocol), PM2, and Google Cloud Platform.

## Challenges we ran into
Amongst our many challenges, two of our greatest challenges were working with Tensorflow and setting up our server. With Tensorflow, we had many problems. One of the problems we had was installing Tensorflow on a Mac with the M1 processor. Another problem we had was getting the Tensorflow to work with the webcam. And regarding the server, we had some problems getting the server to work on different operating systems. We also learned that Domain.com is not listed in Googles verification list.

## Accomplishments that we're proud of
We are extremely proud of the concept of our project and that we truly believe this is an idea that can help bridge the gap between people who rely on sign language to communicate and the rest of society. We are also proud of our ability to implement sign language detection onto our web application, as well as the visual design of the project.

## What we learned
We learned a lot! Amongst everything that we learned, one common challenge taught us about packages, especially what it takes to install certain packages onto certain operating systems. Additionally, we were introduced to machine learning. 

## What's next for ASL Racer
We plan for ASL Racer to have real time competition, where individuals can compete with others in real time, like Type Racer. We thought about needing to use web sockets. Another task for ASL Racer is continue to train the model and have more words. 