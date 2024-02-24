import React, { useState, useEffect } from 'react';
import WordPreview from './Check';
import './App.css';

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'mango', 'orange', 'peach', 'pineapple', 'raspberry', 'strawberry', 'watermelon'];

const Game = () => {
  const [word, setWord] = useState('');
  // const [displayedWord, setDisplayedWord] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(false);
  const [typedWord, setTypedWord] = useState();

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setWinner(false);
  }, [isGameOver, winner]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsGameOver(true);
    }
    
  }, [timeLeft]);

  useEffect(() => {
    if (!isGameOver) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [isGameOver, timeLeft]); 
  

  const handleRestart = () => {
    setScore(0);
    setTimeLeft(60);
    setIsGameOver(false);
  };

  const handleInputChange = (e) => {
    setTypedWord(e.target.value)
    console.log(word, "", typedWord)
    if (typedWord === word) {
      setWinner(true)
      setScore(score => score + 1);
    }
  } 

  return (
    <div className="App">
      <h1>Typing Speed Game</h1>
      <div className="game-container">
    
        <WordPreview
          word={word}
          typedWord = {typedWord}
        />
       </div>
      <input
        type="text"
        onKeyUp={handleInputChange}
        
      />
      <div className="score-container">
        <p>Score: {score}</p>
        <p>Time Left: {timeLeft}s</p>
      </div>
      {isGameOver && <button onClick={handleRestart}>Restart</button>}
    </div>
  );
}

export default Game;
