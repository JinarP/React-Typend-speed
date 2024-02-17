import React, { useState, useEffect } from 'react';
import CheckWord from './checkWord';
import './App.css';

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'mango', 'orange', 'peach', 'pineapple', 'raspberry', 'strawberry', 'watermelon'];

const Game = () => {
  const [word, setWord] = useState('');
  const [displayedWord, setDisplayedWord] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setDisplayedWord(randomWord);
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
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isGameOver]);

  const handleRestart = () => {
    setScore(0);
    setTimeLeft(60);
    setIsGameOver(false);
  };

  return (
    <div className="App">
      <h1>Typing Speed Game</h1>
      <div className="game-container">
        <CheckWord
          word={word}
          displayedWord={displayedWord}
          setDisplayedWord={setDisplayedWord}
          score={score}
          setScore={setScore}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          setWinner={setWinner}
        />
      </div>
      <div className="score-container">
        <p>Score: {score}</p>
        <p>Time Left: {timeLeft}s</p>
      </div>
      {isGameOver && <button onClick={handleRestart}>Restart</button>}
    </div>
  );
}

export default Game;
