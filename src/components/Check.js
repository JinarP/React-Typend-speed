import React, { useState } from 'react';
import './App.css';

const WordPreview = ({ word, typedWord }) => {

 const [displayedWord, setDisplayedWord] = useState();
 
  const checkLetter = (typed) => {
    let checkLetters = '';
    let remainingWord = '';

    for (let i = 0; i < word.length; i++) {
      if (i < typed.length) {
        if (typed[i] === word[i]) {
          checkLetters += `<span style="color: green;">${typed[i]}</span>`;
        } else {
          checkLetters += `<span style="color: red;">${word[i]}</span>`;
        }
      } else {
        remainingWord += word[i];
      }
    }
    setDisplayedWord(checkLetters + `<span style="color: black;">${remainingWord}</span>`);
  };

  if (typedWord) {
    checkLetter(typedWord);
  }
  
  return (
    <div>
      <div
        className="displayed-word"
        dangerouslySetInnerHTML={{ __html: displayedWord }}
      >

      </div>
    </div>
  );
}

export default WordPreview;
