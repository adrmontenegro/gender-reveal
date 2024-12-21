import { useState } from 'react'
import './styles.css'
import StartInterface from './components/StartInterface';

function App() {
  const [result, setResult] = useState('');

  function revealGender() {
    console.log("Reveal clicked");
      const gender = Math.random() < 0.5 ? '¡Es un niño!' : '¡Es una niña!';
      setResult(gender);
  };

  return (
      <div className="container">
          <StartInterface onRevealClick={revealGender} />
          {result && <div className="result">{result}</div>}
      </div>
  );
}

export default App;
