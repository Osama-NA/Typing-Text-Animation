import React, {useEffect, useState} from 'react';
import './App.css';

const TEXT = "Hello there, I'm Osama and I develop web apps!";
const TEXT_SIZE = TEXT.length;

function App() {

  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => setTimeout(typeText, 100))
  
  //Called onChange event of the text div, types text until text index matches text size
  function typeText(){
    if (textIndex === TEXT_SIZE + 1) return;
    else {
      setText(TEXT.substring(0, textIndex));
      setTextIndex(textIndex + 1);
    }
  }

  //Checks if index of text is equal to text size, used to apply toggleCursor animation when typing animation is done
  const typingCompleted = () => textIndex === TEXT_SIZE + 1;

  return (
    <div className="App">
      <div onChange={typeText}>{text}<span style={{ animationName: typingCompleted() ? "toggleCursor" : "" }}>_</span></div>
    </div>
  );
}

export default App;