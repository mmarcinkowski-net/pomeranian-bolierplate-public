import { useState } from 'react';
import './styles.css';

export const MoreOrLessGameAdmin = () => {
  const [randomNumber, setRandomNumber] = useState();
  const [answer, setAnswer] = useState('');
  const [reset, setReset] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function startHandler() {
    setRandomNumber(generateRandomNumber());
  }

  function getUserAnswer(ev) {
    let userAnswer = ev.target.value;

    if (parseFloat(userAnswer) === parseFloat(randomNumber)) {
      setAnswer('Brawo, zgadłeś!');
      setReset(true);
    } else {
      setAnswer('Próbuj dalej!');
    }
  }

  function resetHandler() {
    setRandomNumber();
    setAnswer('');
    setReset(false);
  }

  return (
    <div>
      <h1>Jaką jestem liczbą?</h1>
      <button className="btn09" onClick={startHandler}>
        {'START (generuj liczbę)'}
      </button>
      <br />
      {randomNumber && (
        <input
          placeholder="Wprowadź liczbę od 0 do 100"
          type="number"
          onChange={getUserAnswer}
        ></input>
      )}
      <h2>
        {randomNumber && <span style={{ color: 'green' }}>{answer}</span>}
      </h2>
      <h3>My random number: {randomNumber}</h3>
      {reset && <button onClick={resetHandler}>{'RESET'}</button>}
    </div>
  );
};
