import React, { useState } from 'react';
import './App.css';

const CheckWord = ({ word, displayedWord, setDisplayedWord, score, setScore, isGameOver, setIsGameOver, setWinner }) => {
  const [input, setInput] = useState('');

  const checkLetter = (typedWord) => {
    let checkLetters = '';
    let remainingWord = '';

    for (let i = 0; i < word.length; i++) {
      if (i < typedWord.length) {
        if (typedWord[i] === word[i]) {
          checkLetters += `<span style="color: green;">${typedWord[i]}</span>`;
        } else {
          checkLetters += `<span style="color: red;">${word[i]}</span>`;
        }
      } else {
        remainingWord += word[i];
      }
    }
    setDisplayedWord(checkLetters + `<span style="color: black;">${remainingWord}</span>`);
  };

  const handleInputChange = (e) => {
    const typedWord = e.target.value;
    setInput(typedWord);
    checkLetter(typedWord);

    if (typedWord === word) {
      setScore((score) => score + 1);
      setInput('');
      setWinner(true);
    }
  };

  return (
    <div>
      <div
        className="displayed-word"
        dangerouslySetInnerHTML={{ __html: displayedWord }}
      ></div>

      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        disabled={isGameOver}
      />
    </div>
    
  );
}

export default CheckWord;
