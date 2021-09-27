import React, {useEffect, useState} from 'react';
import './App.css';

const TEXT = "Hello, I'm Osama and I develop web applications!";
const TEXT_SIZE = TEXT.length;

function App() {

  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    setTimeout(typeText, 100);
  })
  
  function typeText(){
    if (textIndex === TEXT_SIZE + 1) return;
    else {
      if (textIndex === TEXT_SIZE) 
        setText(TEXT.substring(0, textIndex));
      else 
        setText(TEXT.substring(0, textIndex) + "_");

      setTextIndex(textIndex + 1);
    }
  }

  return (
    <div className="App">
      <div onChange={typeText}>{text}{(textIndex === TEXT_SIZE + 1)?<span>_</span>:''}</div>
    </div>
  );
}

export default App;
